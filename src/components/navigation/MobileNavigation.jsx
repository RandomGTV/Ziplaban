import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import ZipLogo from './ZipLogo';
import { useCart } from '../../context/CartContext';

export default function MobileNavigation({
  isScrolled = false,
  isLight = false,
  onOpenSearch,
  onOpenMenu,
  isMenuOpen = false,
}) {
  const { itemCount, openDrawer } = useCart();

  const isLightMode = isLight && !isScrolled;
  const iconColor = isLightMode ? 'text-[#073BB8]' : 'text-white';

  return (
    <div
      className={`w-full lg:hidden transition-all duration-350 ease-out ${
        isScrolled
          ? 'py-2 px-3'
          : 'py-3.5 px-4 sm:px-6'
      }`}
    >
      <div
        className={`flex items-center justify-between h-14 sm:h-16 px-4 transition-all duration-350 ease-out ${
          isScrolled
            ? 'bg-[#032B82]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl'
            : 'bg-transparent'
        }`}
      >
        {/* LEFT: ZIP LABAN Logo */}
        <div className="flex items-center">
          <ZipLogo scrolled={isScrolled} isMobile={true} />
        </div>

        {/* RIGHT: Actions (Search, Cart, Hamburger) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search desserts"
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors active:scale-95 ${iconColor}`}
          >
            <Search size={21} />
          </button>

          {/* Cart Trigger with Quantity Badge */}
          

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors active:scale-95 ${iconColor}`}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
