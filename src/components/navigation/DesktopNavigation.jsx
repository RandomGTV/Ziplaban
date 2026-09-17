import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';
import ZipLogo from './ZipLogo';
import NavLink from './NavLink';
import OrderButton from './OrderButton';
import { useCart } from '../../context/CartContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'New Arrivals', path: '/new-arrivals' },
  { name: 'About', path: '/about' },
  { name: 'Locations', path: '/locations' },
  { name: 'Contact', path: '/contact' },
];

export default function DesktopNavigation({ isScrolled = false, isLight = false, onOpenSearch }) {
  const { itemCount, openDrawer } = useCart();

  const isLightMode = isLight && !isScrolled;
  const iconColor = isLightMode ? 'text-[#073BB8] hover:bg-[#073BB8]/10' : 'text-white hover:bg-white/15';

  return (
    <div
      className={`w-full transition-all duration-350 ease-out hidden lg:block ${
        isScrolled
          ? 'py-2.5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'
          : 'py-5 px-6 sm:px-10 lg:px-14 max-w-[1440px] mx-auto'
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-350 ease-out ${
          isScrolled
            ? 'px-7 py-2 bg-[#032B82]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-[#011B54]/30'
            : 'bg-transparent'
        }`}
      >
        {/* LEFT: ZIP LABAN Official Logo Badge */}
        <div className="flex items-center">
          <ZipLogo scrolled={isScrolled} isMobile={false} />
        </div>

        {/* CENTER: Main Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className={`flex items-center gap-7 lg:gap-8 transition-all duration-300 ${
            isScrolled ? 'pt-0' : 'pt-2'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              name={link.name}
              path={link.path}
              isLight={isLight}
              isScrolled={isScrolled}
            />
          ))}
        </nav>

        {/* RIGHT: Actions (Search, Cart, Order Button) */}
        <div
          className={`flex items-center gap-3 transition-all duration-300 ${
            isScrolled ? 'pt-0' : 'pt-2'
          }`}
        >
          {/* Search Icon Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search desserts"
            title="Search menu (Ctrl + K)"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${iconColor}`}
          >
            <Search size={20} />
          </button>

          {/* Cart Icon with Quantity Badge */}
          <button
            type="button"
            onClick={openDrawer}
            aria-label={`View shopping bag, ${itemCount} items`}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${iconColor}`}
          >
            <ShoppingBag size={21} />
            {itemCount > 0 && (
              <motion.span
                key={itemCount}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#8DBA38] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#032B82] shadow-sm"
              >
                {itemCount}
              </motion.span>
            )}
          </button>

          {/* Primary CTA: Order Now */}
          <OrderButton isLight={isLight} isScrolled={isScrolled} />
        </div>
      </div>
    </div>
  );
}
