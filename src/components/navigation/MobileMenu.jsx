import { ORDERING_ENABLED } from '../../config/ordering';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShoppingBag, MapPin } from 'lucide-react';
import ZipLogo from './ZipLogo';
import { useNavigation } from '../../context/NavigationContext';
import { useCart } from '../../context/CartContext';
import { CONTACT_CONFIG } from '../../data/contactData';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'New Arrivals', path: '/new-arrivals', badge: 'DROP' },
  { name: 'About', path: '/about' },
  { name: 'Locations', path: '/locations' },
  { name: 'Contact', path: '/contact' },
];

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

export default function MobileMenu({ isOpen, onClose }) {
  const { currentPath, navigate } = useNavigation();
  const { itemCount, openDrawer } = useCart();

  // Prevent background body scroll while menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC key dismiss
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleLinkClick = (path) => {
    onClose();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCartClick = () => {
    onClose();
    openDrawer();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 flex justify-end select-none"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#061826]/70 backdrop-blur-md"
          />

          {/* Slide-in Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md h-full bg-gradient-to-b from-[#073BB8] via-[#0532A0] to-[#032B82] text-white flex flex-col justify-between overflow-y-auto shadow-2xl border-l border-white/15 z-10"
          >
            {/* Decorative Background Cream Wave & Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#175EFF]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-60 h-60 bg-[#8DBA38]/15 rounded-full blur-2xl pointer-events-none" />

            {/* TOP BAR: Logo & Close Button */}
            <div className="p-6 pb-2 flex items-center justify-between border-b border-white/10 relative z-10">
              <ZipLogo isMobile={true} onClick={onClose} />

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15"
              >
                <X size={22} />
              </button>
            </div>

            {/* MAIN NAVIGATION LINKS (Staggered Animation) */}
            <div className="px-6 py-6 space-y-1 relative z-10">
              {NAV_LINKS.map((link, idx) => {
                const isActive = link.path === '/' ? currentPath === '/' : currentPath.startsWith(link.path);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.04, duration: 0.3 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.path)}
                      className={`w-full text-left py-3 px-3 rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-white/15 text-white font-black'
                          : 'text-white/85 hover:text-white hover:bg-white/5 font-bold'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="text-2xl sm:text-3xl tracking-tight"
                          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                        >
                          {link.name}
                        </span>
                        {link.badge && (
                          <span className="text-[10px] bg-[#8DBA38] text-white px-2 py-0.5 rounded-full font-black">
                            {link.badge}
                          </span>
                        )}
                      </div>

                      {/* Active Indicator / Arrow */}
                      {isActive ? (
                        <div className="flex items-center gap-1.5 text-[#8DBA38]">
                          <span className="text-xs font-black uppercase tracking-wider">Active</span>
                          <span className="w-2 h-2 rounded-full bg-[#8DBA38]" />
                        </div>
                      ) : (
                        <ArrowRight size={18} className="text-white/40" />
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* MID DECORATIVE ACCENT: Mascot & Handwritten note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="mx-6 p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 relative z-10"
            >
              <div className="w-14 h-14 rounded-xl bg-white p-1 flex-shrink-0 shadow-md">
                <img
                  src="/images/zip_boy_mascot.png"
                  alt="Zip Mascot"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span
                  className="text-lg font-bold text-white block leading-tight"
                  style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
                >
                  Pick Your Happiness ♡
                </span>
                <span className="text-xs text-blue-200">
                  Made fresh with 100% buffalo milk kashta.
                </span>
              </div>
            </motion.div>

            {/* BOTTOM SECTION: CTAs, Cart, Outlets, Socials */}
            <div className="p-6 pt-4 border-t border-white/15 space-y-4 relative z-10 bg-[#02246D]/60 backdrop-blur-md">
              {/* Primary Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={!ORDERING_ENABLED}
                  onClick={() => handleLinkClick('/menu')}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-[#073BB8] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  <span>{ORDERING_ENABLED ? 'Order Now' : 'Ordering paused'}</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  type="button"
                  onClick={handleCartClick}
                  className="w-full py-3.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/20 transition-colors cursor-pointer"
                >
                  <ShoppingBag size={16} />
                  <span>Bag ({itemCount})</span>
                </button>
              </div>

              {/* Kerala Outlets Links */}
              <div className="flex items-center justify-between text-xs text-blue-100/90 pt-1 border-t border-white/10">
                <span className="font-bold text-white flex items-center gap-1">
                  <MapPin size={13} className="text-[#8DBA38]" />
                  <span>Outlets:</span>
                </span>
                <div className="flex items-center gap-3 font-semibold">
                  <button
                    onClick={() => handleLinkClick('/locations')}
                    className="hover:text-white underline cursor-pointer"
                  >
                    Malappuram
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleLinkClick('/locations')}
                    className="hover:text-white underline cursor-pointer"
                  >
                    Kottakkal
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-bold text-blue-200">Connect with Zip:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors shadow-xs"
                    title="Instagram @ziplaban"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8DBA38] text-white flex items-center justify-center transition-colors shadow-xs"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
