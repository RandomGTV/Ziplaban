import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/enquiries.js';

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
let ip = 0;
const payload = () => ({ type: 'contact', name: 'Test Person', email: 'person@example.test', subject: 'Branch question', message: 'Please confirm opening hours.', consent: true, requestId: 'test-request-123456789' });
function configure() {
  process.env.ENQUIRY_ALLOWED_ORIGIN = 'https://zip.example';
  process.env.ENQUIRY_WEBHOOK_URL = 'https://receiver.example/enquiry';
  process.env.ENQUIRY_WEBHOOK_TOKEN = 'test-only-token';
}
async function call({ method = 'POST', body = payload(), headers = {} } = {}) {
  const response = { headers: {}, statusCode: 200, setHeader(key, value) { this.headers[key] = value; }, status(value) { this.statusCode = value; return this; }, json(value) { this.body = value; return this; } };
  await handler({ method, body, headers: { origin: 'https://zip.example', 'content-type': 'application/json', 'x-forwarded-for': `test-ip-${++ip}`, ...headers } }, response);
  return response;
}
test.after(() => { globalThis.fetch = originalFetch; for (const key of ['ENQUIRY_ALLOWED_ORIGIN', 'ENQUIRY_WEBHOOK_URL', 'ENQUIRY_WEBHOOK_TOKEN']) { if (originalEnv[key] === undefined) delete process.env[key]; else process.env[key] = originalEnv[key]; } });

test('unconfigured service offers no direct delivery and never calls receiver', async () => {
  delete process.env.ENQUIRY_WEBHOOK_URL;
  globalThis.fetch = () => { throw new Error('Receiver must not be called'); };
  assert.equal((await call({ method: 'GET' })).body.available, false);
  assert.equal((await call()).statusCode, 503);
});
test('valid contact is forwarded with authentication and stable retry identifier', async () => {
  configure(); const requests = [];
  globalThis.fetch = async (url, options) => { requests.push(options); return { ok: true }; };
  const first = await call(), second = await call();
  assert.equal(first.statusCode, 200); assert.equal(first.body.accepted, true);
  assert.equal(requests[0].headers['Idempotency-Key'], requests[1].headers['Idempotency-Key']);
  assert.equal(first.body.reference, second.body.reference);
  assert.equal(requests[0].headers.Authorization, 'Bearer test-only-token');
  assert.equal(JSON.parse(requests[0].body).enquiry.name, 'Test Person');
  assert.equal(requests[0].redirect, 'error');
});
test('rejects malformed fields, invalid email, missing consent, oversized input and honeypot', async () => {
  configure(); globalThis.fetch = () => { throw new Error('Invalid requests must not reach receiver'); };
  for (const body of [null, [], { ...payload(), email: 'wrong' }, { ...payload(), name: {} }, { ...payload(), consent: false }, { ...payload(), message: 'short' }, { ...payload(), website: 'spam' }, { ...payload(), requestId: '' }]) assert.equal((await call({ body })).statusCode, 400);
  assert.equal((await call({ body: 'not-json' })).statusCode, 400);
  assert.equal((await call({ body: { ...payload(), message: 'x'.repeat(15000) } })).statusCode, 413);
});
test('rejects wrong origins, content types and methods', async () => {
  configure();
  assert.equal((await call({ headers: { origin: 'https://other.example' } })).statusCode, 403);
  assert.equal((await call({ headers: { 'content-type': 'text/plain' } })).statusCode, 415);
  assert.equal((await call({ method: 'DELETE' })).statusCode, 405);
});
test('franchise needs city and phone; valid request may have an empty optional message', async () => {
  configure(); globalThis.fetch = async () => ({ ok: true });
  const body = { ...payload(), type: 'franchise', message: '' };
  assert.equal((await call({ body })).statusCode, 400);
  assert.equal((await call({ body: { ...body, city: 'Test City', phone: '1234567890' } })).statusCode, 200);
});
test('upstream errors and timeouts never produce a receipt confirmation', async () => {
  configure();
  globalThis.fetch = async () => ({ ok: false }); assert.equal((await call()).statusCode, 502);
  globalThis.fetch = async () => { throw new Error('timeout'); }; const result = await call(); assert.equal(result.statusCode, 502); assert.equal(result.body.accepted, undefined);
});
test('limits repeated attempts from one IP', async () => {
  configure(); globalThis.fetch = async () => ({ ok: true });
  const headers = { 'x-forwarded-for': 'rate-limit-test' };
  for (let count = 0; count < 5; count++) assert.equal((await call({ headers })).statusCode, 200);
  const result = await call({ headers }); assert.equal(result.statusCode, 429); assert.equal(result.headers['Retry-After'], '60');
});
