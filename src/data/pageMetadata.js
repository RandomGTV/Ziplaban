import { MENU_PRODUCTS } from './menuCatalog.js';
import { PRODUCTS } from './products.js';

export const PAGE_METADATA = {
  '/': { title: 'ZIP LABAN — Happiness in Every Bite', description: 'Discover creamy desserts, bold flavours, and ZIP LABAN branches in Malappuram and Kottakkal.' },
  '/menu': { title: 'Dessert Menu | ZIP LABAN', description: 'Explore ZIP LABAN desserts, compare flavours and prices, and save your favourites.' },
  '/new-arrivals': { title: 'New Arrivals | ZIP LABAN', description: 'Meet the latest ZIP LABAN desserts and discover your next favourite flavour.' },
  '/about': { title: 'Our Story | ZIP LABAN', description: 'Get to know ZIP LABAN and the happiness behind every spoonful.' },
  '/locations': { title: 'Malappuram & Kottakkal Branches | ZIP LABAN', description: 'Find your ZIP LABAN branch in Kerala, get directions, and plan your visit.' },
  '/contact': { title: 'Contact & Franchise Enquiries | ZIP LABAN', description: 'Contact the ZIP LABAN team about our desserts, branches, or franchise opportunities.' },
};
for (const product of [...PRODUCTS, ...MENU_PRODUCTS]) PAGE_METADATA[`/product/${product.id}`] = { title: `${product.name} | ZIP LABAN`, description: product.description || `Discover ${product.name} at ZIP LABAN.` };
export const pageMetadata = path => PAGE_METADATA[path] || { title: 'Page Not Found | ZIP LABAN', description: 'Find your way back to ZIP LABAN desserts and branches.', noindex: true };
export const shareImage = '/images/hero-mascot-background-1536.webp';
export const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
export function metadataTags(path, origin = '') {
  const page = pageMetadata(path);
  const url = origin ? origin.replace(/\/$/, '') + path : '';
  return `<title>${escapeHtml(page.title)}</title>\n<meta name="description" content="${escapeHtml(page.description)}">\n<meta property="og:title" content="${escapeHtml(page.title)}">\n<meta property="og:description" content="${escapeHtml(page.description)}">\n<meta property="og:type" content="website">\n<meta property="og:image" content="${escapeHtml(origin + shareImage)}">\n<meta name="twitter:card" content="summary_large_image">${url ? `\n<link rel="canonical" href="${escapeHtml(url)}">\n<meta property="og:url" content="${escapeHtml(url)}">` : ''}${page.noindex ? '\n<meta name="robots" content="noindex, follow">' : ''}`;
}
