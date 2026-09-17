import React from 'react';
import { useNavigation } from '../../context/NavigationContext';

export default function ZipLogo({ scrolled = false, isMobile = false, onClick }) {
  const { navigate } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dimensions & sprite coordinates based on scrolled and mobile state
  // Using the high-density brand reference asset
  let width = 110;
  let height = 95;
  let bgSize = '1264px auto';
  let bgPos = '-67.5px -15.7px';

  if (isMobile) {
    if (scrolled) {
      width = 52;
      height = 45;
      bgSize = '598px auto';
      bgPos = '-32px -7.5px';
    } else {
      width = 78;
      height = 68;
      bgSize = '896px auto';
      bgPos = '-48px -11px';
    }
  } else if (scrolled) {
    width = 56;
    height = 48;
    bgSize = '644px auto';
    bgPos = '-34.5px -8px';
  }

  return (
    <a
      href="/"
      onClick={handleClick}
      aria-label="ZIP LABAN Home"
      className="inline-block flex-shrink-0 cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-2xl"
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: `url('/images/hero_reference_exact.jpg')`,
          backgroundSize: bgSize,
          backgroundPosition: bgPos,
          backgroundRepeat: 'no-repeat',
          borderRadius: '48% 48% 40% 40% / 22% 22% 18% 18%',
          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.18))',
          transition: 'width 0.35s ease-out, height 0.35s ease-out',
        }}
      />
    </a>
  );
}
