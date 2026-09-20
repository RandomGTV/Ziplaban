import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { PAGE_METADATA, metadataTags } from '../src/data/pageMetadata.js';

// Include metadata in HTML itself so sharing crawlers do not need JavaScript.
export function staticMetadata() {
  let outDir;
  return { name: 'zip-static-metadata', configResolved(config) { outDir = path.resolve(config.root, config.build.outDir); }, async writeBundle() {
    const origin = (process.env.VITE_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '')).replace(/\/$/, '');
    const template = (await readFile(path.join(outDir, 'index.html'), 'utf8')).replace(/<title>.*?<\/title>/s, '').replace(/<meta name="description"[^>]*>/, '');
    for (const route of Object.keys(PAGE_METADATA)) {
      const destination = path.join(outDir, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, template.replace('</head>', `${metadataTags(route, origin)}\n</head>`));
    }
  } };
}
