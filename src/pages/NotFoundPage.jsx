import React from 'react';
import NotFoundHero from '../components/not-found/NotFoundHero';
import QuickSearchField from '../components/not-found/QuickSearchField';
import ProductQuickStrip from '../components/not-found/ProductQuickStrip';

export default function NotFoundPage({ onOpenSearch }) {
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
