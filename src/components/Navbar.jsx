import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenSearch }) {
  const { currentPath, navigate } = useNavigation();
  const { itemCount, openDrawer } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Build Bowl', path: '/build-your-bowl' },
    { name: 'About', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/85 backdrop-blur-xl shadow-md border-b border-[#063BB6]/10'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo & Mascot Badge */}
            <div
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#063BB6] to-[#145DFF] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center overflow-hidden p-1">
                  <img
                    src="/images/zip_boy_mascot.png"
                    alt="Zip Laban"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Ping dot */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DB936] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8DB936]"></span>
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#063BB6]"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    ZIP LABAN
                  </span>
                  <span className="hidden sm:inline-block text-[11px] font-bold text-[#8DB936] bg-[#8DB936]/10 px-2 py-0.5 rounded-full border border-[#8DB936]/30">
                    زيب لبن
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#10204A]/60">
                  Egyptian Desserts • Kerala
                </span>
              </div>
            </div>

            {/* Desktop Center Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#063BB6]/10 shadow-sm">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      active
                        ? 'text-white'
                        : 'text-[#10204A]/80 hover:text-[#063BB6] hover:bg-[#063BB6]/5'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-[#063BB6] rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Cart, Order CTA, Mobile Toggle) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Search */}
              <button
                onClick={onOpenSearch}
                aria-label="Search Menu"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 hover:bg-[#063BB6]/10 text-[#063BB6] border border-[#063BB6]/15 shadow-sm transition-all cursor-pointer"
                title="Search menu (Ctrl + K)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openDrawer}
                aria-label="View Cart"
                className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white/80 hover:bg-[#063BB6]/10 text-[#063BB6] border border-[#063BB6]/15 shadow-sm transition-all cursor-pointer group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>

                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[#063BB6] text-white text-[11px] font-extrabold rounded-full flex items-center justify-center border-2 border-white shadow-md"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </button>

              {/* Order Now CTA */}
              <button
                onClick={() => handleNavClick('/menu')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#063BB6] hover:bg-[#022B84] text-white text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#063BB6]/20 transition-all cursor-pointer"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                <span>Order Now</span>
                <span className="text-[#8DB936]">→</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/80 border border-[#063BB6]/15 text-[#063BB6] cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-white/95 backdrop-blur-2xl border-b border-[#063BB6]/15 p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-all text-left ${
                      active
                        ? 'bg-[#063BB6] text-white'
                        : 'text-[#10204A] hover:bg-[#063BB6]/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="text-[#8DB936]">●</span>}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('/build-your-bowl')}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#063BB6] to-[#145DFF] text-white font-bold text-center shadow-md flex items-center justify-center gap-2"
                >
                  <span>Build Happiness Bowl</span>
                  <span>🥣</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
