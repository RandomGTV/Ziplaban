import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useCart } from '../../context/CartContext';

export default function MobileStickyOrderBar({ isMobileMenuOpen = false }) {
  const { currentPath, navigate } = useNavigation();
  const { itemCount, subtotal, openDrawer } = useCart();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Exclude routes where floating button shouldn't appear
  const isExcludedRoute =
    currentPath.startsWith('/cart') ||
    currentPath.startsWith('/checkout') ||
    isMobileMenuOpen;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          // Always show near top or bottom
          if (currentY < 120) {
            setIsVisible(true);
          } else if (currentY > lastScrollY + 8) {
            // Scrolling down
            setIsVisible(false);
          } else if (currentY < lastScrollY - 8) {
            // Scrolling up
            setIsVisible(true);
          }

          setLastScrollY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (isExcludedRoute) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 inset-x-4 z-30 lg:hidden select-none"
        >
          {itemCount > 0 ? (
            /* Button with Cart items */
            <button
              type="button"
              onClick={openDrawer}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#073BB8] text-white font-extrabold text-sm shadow-2xl shadow-[#073BB8]/40 border border-white/20 flex items-center justify-between cursor-pointer active:scale-98 transition-transform"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#8DBA38] text-white flex items-center justify-center text-xs font-black">
                  {itemCount}
                </div>
                <span>View Happiness Bag</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#FFF8EE]">
                <span className="text-base">₹{subtotal}</span>
                <ArrowRight size={16} />
              </div>
            </button>
          ) : (
            /* Default Order Now button */
            <button
              type="button"
              onClick={() => {
                navigate('/menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#073BB8] text-white font-extrabold text-sm shadow-2xl shadow-[#073BB8]/40 border border-white/20 flex items-center justify-between cursor-pointer active:scale-98 transition-transform"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span className="tracking-wide">Craving Dessert?</span>
              <div className="flex items-center gap-1.5 text-white">
                <span>Order Now</span>
                <ArrowRight size={16} className="text-[#8DBA38]" />
              </div>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
