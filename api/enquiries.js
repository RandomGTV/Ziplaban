import { createHash } from 'node:crypto';

const attempts = new Map();
const WINDOW = 60_000;
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  const configured = !!(process.env.ENQUIRY_WEBHOOK_URL && process.env.ENQUIRY_WEBHOOK_TOKEN && process.env.ENQUIRY_ALLOWED_ORIGIN);
  if (req.method === 'GET') return res.status(200).json({ available: configured });
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return res.status(405).json({ error: 'Method not allowed.' }); }
  if (!configured) return res.status(503).json({ error: 'Online enquiries are not connected yet. Please use the email draft.' });
  if (req.headers.origin !== process.env.ENQUIRY_ALLOWED_ORIGIN) return res.status(403).json({ error: 'Request origin is not allowed.' });
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) return res.status(415).json({ error: 'Please send JSON.' });
  const now = Date.now();
  for (const [key, entry] of attempts) if (now - entry.start > WINDOW) attempts.delete(key);
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const entry = attempts.get(ip) || { start: now, count: 0 };
  if (entry.count >= 5 || attempts.size >= 5000 && !attempts.has(ip)) { res.setHeader('Retry-After', '60'); return res.status(429).json({ error: 'Please wait a minute before trying again.' }); }
  entry.count++; attempts.set(ip, entry);
  let body;
  try {
    const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    if (!raw || Buffer.byteLength(raw) > 12_000) return res.status(413).json({ error: 'Your enquiry is too long.' });
    body = JSON.parse(raw);
  } catch { return res.status(400).json({ error: 'Invalid enquiry.' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return res.status(400).json({ error: 'Invalid enquiry.' });
  if (body.website) return res.status(400).json({ error: 'Unable to submit this enquiry.' });
  const limits = { name: 120, email: 254, phone: 40, subject: 120, message: 3000, city: 120, format: 120 };
  const enquiry = { type: body.type };
  if (!['contact', 'franchise'].includes(body.type) || body.consent !== true) return res.status(400).json({ error: 'Please confirm consent and enquiry type.' });
  for (const [key, limit] of Object.entries(limits)) {
    if (body[key] !== undefined && typeof body[key] !== 'string') return res.status(400).json({ error: 'Invalid enquiry fields.' });
    enquiry[key] = (body[key] || '').trim();
    if (enquiry[key].length > limit || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(enquiry[key])) return res.status(400).json({ error: 'Please check the length and content of your enquiry.' });
  }
  if (!enquiry.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email) || /[\r\n]/.test(enquiry.email) || body.type === 'contact' && (!enquiry.subject || enquiry.message.length < 10) || body.type === 'franchise' && (!enquiry.city || !enquiry.phone)) return res.status(400).json({ error: 'Please complete all required details with a valid email address.' });
  // The same request retains its key on retries; the receiver must enforce deduplication.
  if (typeof body.requestId !== 'string' || !/^[a-zA-Z0-9-]{16,80}$/.test(body.requestId)) return res.status(400).json({ error: 'Invalid submission identifier.' });
  const id = createHash('sha256').update(body.requestId + JSON.stringify(enquiry)).digest('hex');
  try {
    const url = new URL(process.env.ENQUIRY_WEBHOOK_URL);
    if (url.protocol !== 'https:') throw new Error('HTTPS required');
    const upstream = await fetch(url, { method: 'POST', redirect: 'error', signal: AbortSignal.timeout(10_000), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}`, 'Idempotency-Key': id }, body: JSON.stringify({ id, enquiry, consent: true, receivedAt: new Date(now).toISOString() }) });
    if (!upstream.ok) throw new Error('Delivery rejected');
    return res.status(200).json({ accepted: true, reference: id.slice(0, 12) });
  } catch {
    return res.status(502).json({ error: 'We could not confirm receipt. Your details are still here; retry or use the email draft.' });
  }
}
