import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PAGE_METADATA, escapeHtml, metadataTags } from '../src/data/pageMetadata.js';

test('every known route has crawler-readable metadata and a static hosting route', async () => {
  const config = JSON.parse(await readFile('vercel.json', 'utf8'));
  for (const [route, page] of Object.entries(PAGE_METADATA)) {
    const file = route === '/' ? '/index.html' : `${route}.html`;
    const html = await readFile(`dist${file}`, 'utf8');
    assert.ok(html.includes(`<title>${escapeHtml(page.title)}</title>`), route);
    assert.ok(html.includes('property="og:description"'), route);
    assert.equal((html.match(/<title>/g) || []).length, 1, route);
    if (route !== '/') assert.ok(config.routes.some(item => item.src === route + '/?' && item.dest === file), route);
  }
  assert.equal(config.routes[0].handle, 'filesystem');
  assert.ok(config.routes.findIndex(item => item.src === '/api/.*') < config.routes.findIndex(item => item.src === '/.*'));
});
test('metadata escapes HTML and creates absolute sharing URLs when origin is configured', () => {
  assert.equal(escapeHtml('<script>"&'), '&lt;script&gt;&quot;&amp;');
  assert.ok(metadataTags('/menu', 'https://zip.example').includes('href="https://zip.example/menu"'));
  assert.ok(metadataTags('/unknown').includes('noindex, follow'));
});
