import React, { useState } from 'react';
import FooterCTA from './FooterCTA';
import FooterBrandColumn from './FooterBrandColumn';
import FooterColumn from './FooterColumn';
import FooterAccordion from './FooterAccordion';
import NewsletterForm from './NewsletterForm';
import WatermarkText from './WatermarkText';
import LegalModal from './LegalModal';
import { FOOTER_SECTIONS, FOOTER_BRAND } from '../../data/footerData';

export default function GlobalFooter({ onOpenFranchise }) {
  const [activePolicy, setActivePolicy] = useState(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="relative w-full bg-gradient-to-b from-[#021B54] via-[#02226B] to-[#011640] text-[#FFF8EE] overflow-hidden pt-4 pb-12 sm:pb-8 border-t-2 border-white/10 select-none"
    >
      {/* 1. Large Top Branded CTA Area */}
      <FooterCTA />

      {/* 2. Main Footer Navigation Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 z-10">
        
        {/* Desktop Layout (1024px+): 5-column layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-10 xl:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <FooterBrandColumn />
          </div>

          {/* Column 2: Explore */}
          <FooterColumn
            title={FOOTER_SECTIONS.explore.title}
            links={FOOTER_SECTIONS.explore.links}
          />

          {/* Column 3: Order */}
          <FooterColumn
            title={FOOTER_SECTIONS.order.title}
            links={FOOTER_SECTIONS.order.links}
            onOpenFranchise={onOpenFranchise}
          />

          {/* Column 4: Locations */}
          <FooterColumn
            title={FOOTER_SECTIONS.locations.title}
            links={FOOTER_SECTIONS.locations.links}
          />

          {/* Column 5: Help & Policies */}
          <FooterColumn
            title={FOOTER_SECTIONS.help.title}
            links={FOOTER_SECTIONS.help.links}
            onOpenPolicy={(key) => setActivePolicy(key)}
          />
        </div>

        {/* Tablet Layout (768px - 1023px): 2–3 Columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2">
            <FooterBrandColumn />
          </div>
          <FooterColumn
            title={FOOTER_SECTIONS.explore.title}
            links={FOOTER_SECTIONS.explore.links}
          />
          <FooterColumn
            title={FOOTER_SECTIONS.order.title}
            links={FOOTER_SECTIONS.order.links}
            onOpenFranchise={onOpenFranchise}
          />
          <FooterColumn
            title={FOOTER_SECTIONS.locations.title}
            links={FOOTER_SECTIONS.locations.links}
          />
          <FooterColumn
            title={FOOTER_SECTIONS.help.title}
            links={FOOTER_SECTIONS.help.links}
            onOpenPolicy={(key) => setActivePolicy(key)}
          />
        </div>

        {/* Mobile Layout (<768px): Stacked Brand & Accordions */}
        <div className="block md:hidden space-y-8 pb-10">
          <FooterBrandColumn />
          <FooterAccordion
            sections={FOOTER_SECTIONS}
            onOpenFranchise={onOpenFranchise}
            onOpenPolicy={(key) => setActivePolicy(key)}
          />
        </div>

        {/* 3. Middle Section: Newsletter & Brand Handwritten Sign-off */}
        <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10">
          {/* Newsletter Section */}
          <div className="lg:col-span-7">
            <NewsletterForm />
          </div>

          {/* Handwritten Brand Message */}
          <div className="lg:col-span-5 text-center lg:text-right space-y-1">
            <p
              className="text-2xl sm:text-3xl font-bold text-[#FFF8EE] tracking-wide"
              style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
            >
              “See you for the next<br />
              <span className="text-[#8DBA38]">scoop of happiness ♡”</span>
            </p>
            <p className="text-xs text-blue-200/60 uppercase tracking-widest font-black">
              ZIP LABAN • KERALA
            </p>
          </div>
        </div>

        {/* 4. Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/70 font-medium">
          {/* LEFT: Programmatic Copyright */}
          <div>
            <p>© ZIP LABAN {currentYear}. All rights reserved.</p>
          </div>

          {/* CENTER: Privacy & Terms Triggers */}
          <div className="flex items-center gap-4 text-xs text-blue-200/80">
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>•</span>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>•</span>
            <button
              onClick={() => setActivePolicy('refund')}
              className="hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
          </div>

          {/* RIGHT: Crafted with happiness */}
          <div className="text-[#FFF8EE]/90 flex items-center gap-1.5 font-bold">
            <span>Made with happiness</span>
            <span className="text-[#E11D48] animate-pulse">♡</span>
          </div>
        </div>

      </div>

      {/* 5. Oversized Watermark Brand Typography */}
      <WatermarkText />

      {/* 6. Accessible Legal Modal */}
      <LegalModal
        policyKey={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </footer>
  );
}
