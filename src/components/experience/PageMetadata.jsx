import { useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { pageMetadata, shareImage } from '../../data/pageMetadata';

export default function PageMetadata() {
  const { currentPath } = useNavigation();
  useEffect(() => {
    const page = pageMetadata(currentPath);
    document.title = page.title;
    const origin = import.meta.env.VITE_SITE_URL || window.location.origin;
    const values = { description: page.description, 'og:title': page.title, 'og:description': page.description, 'og:type': 'website', 'og:image': origin + shareImage, 'og:url': origin + currentPath, 'twitter:card': 'summary_large_image', robots: page.noindex ? 'noindex, follow' : 'index, follow' };
    for (const [name, content] of Object.entries(values)) {
      const attribute = name.startsWith('og:') ? 'property' : 'name';
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element); }
      element.content = content;
    }
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = origin + currentPath;
  }, [currentPath]);
  return null;
}
