import React, { useEffect } from 'react';
import NotFoundHero from '../components/not-found/NotFoundHero';
import QuickSearchField from '../components/not-found/QuickSearchField';
import ProductQuickStrip from '../components/not-found/ProductQuickStrip';

export default function NotFoundPage({ onOpenSearch }) {
  // Manage SEO Metadata for 404
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Page Not Found | ZIP LABAN';

    // Inject noindex, follow meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    let created = false;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
      created = true;
    }
    const prevContent = metaRobots.getAttribute('content');
    metaRobots.setAttribute('content', 'noindex, follow');

    return () => {
      document.title = prevTitle;
      if (created && metaRobots.parentNode) {
        metaRobots.parentNode.removeChild(metaRobots);
      } else if (prevContent) {
        metaRobots.setAttribute('content', prevContent);
      } else {
        metaRobots.removeAttribute('content');
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#073BB8] via-[#032B82] to-[#011640] text-white selection:bg-[#8DBA38] selection:text-white pb-20 overflow-hidden">
      {/* 1. Main 404 Hero with Mascot Scene */}
      <NotFoundHero />

      {/* 2. Interactive Search Trigger */}
      <div className="py-6 px-4">
        <QuickSearchField onOpenSearch={onOpenSearch} />
      </div>

      {/* 3. "Since You're Here..." Mini Product Strip */}
      <ProductQuickStrip />
    </div>
  );
}
