import React from 'react';
import ZipLogo from '../navigation/ZipLogo';
import { FOOTER_BRAND } from '../../data/footerData';
import SocialLinks from './SocialLinks';

export default function FooterBrandColumn() {
  return (
    <div className="space-y-4">
      {/* Official ZIP LABAN Logo Badge */}
      <div className="flex items-center">
        <ZipLogo scrolled={false} isMobile={false} />
      </div>

      {/* Short Text */}
      <p
        className="text-base sm:text-lg font-black text-white leading-snug tracking-tight whitespace-pre-line"
        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
      >
        {FOOTER_BRAND.tagline}
      </p>

      <p className="text-xs sm:text-sm text-blue-100/75 leading-relaxed max-w-sm">
        {FOOTER_BRAND.subtext}
      </p>

      {/* Social Icons (Instagram & WhatsApp) */}
      <div className="pt-2">
        <SocialLinks />
      </div>
    </div>
  );
}
