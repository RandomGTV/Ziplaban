import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useCart } from '../../context/CartContext';
import ZipLabanLogo from '../ZipLabanLogo';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroNavbar({ onOpenSearch }) {
  const { currentPath, navigate } = useNavigation();
  const { itemCount, openDrawer } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'About', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <nav
        className={`w-full z-40 transition-all duration-300 select-none ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 py-3 bg-[#032B82]/85 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'absolute top-0 left-0 right-0 py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* LEFT: Official ZIP LABAN Logo Badge */}
          <div
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-14 sm:w-14 sm:h-16 transition-transform duration-300 group-hover:scale-105">
              <ZipLabanLogo className="w-full h-full drop-shadow-lg" />
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`relative py-1 text-sm xl:text-base font-semibold tracking-wide transition-all cursor-pointer ${
                    active ? 'text-white font-bold' : 'text-white/85 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)' }}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="heroNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: Actions (Search, Shopping Bag, Order Now Button, Mobile Toggle) */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="text-white/90 hover:text-white transition-colors cursor-pointer p-1.5"
              title="Search menu (Ctrl + K)"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Shopping Bag / Cart Icon */}
            <button
              onClick={openDrawer}
              aria-label="View Shopping Bag"
              className="relative text-white/90 hover:text-white transition-colors cursor-pointer p-1.5 group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8DBA38] text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-[#073BB8] shadow-md animate-bounce">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Large White Pill Button: Order Now → */}
            <button
              onClick={() => handleNav('/menu')}
              className="hidden sm:inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-[#FFF9F1] text-[#073BB8] font-black text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer group"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Order Now</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1.5 font-bold">
                →
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-1.5 cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 bg-[#032B82]/95 backdrop-blur-2xl border-b border-white/15 p-6 shadow-2xl lg:hidden text-white space-y-3"
          >
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className="w-full text-left py-2.5 px-4 rounded-xl text-base font-bold hover:bg-white/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {isActive(link.path) && <span className="text-[#8DBA38]">●</span>}
              </button>
            ))}
            <button
              onClick={() => handleNav('/menu')}
              className="w-full py-3 mt-4 rounded-full bg-white text-[#073BB8] font-black text-center shadow-lg"
            >
              Order Now →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
