import React from 'react';
import { motion } from 'framer-motion';

/**
 * Mascot Component
 * Uses the exact official transparent PNG: /images/zip_boy_mascot.png
 * Proportions and details are strictly preserved without alteration.
 */
export default function Mascot({
  variant = 'default', // 'default' | 'hero' | 'peeking' | 'sticker' | 'packing' | 'waving' | 'pin' | 'builder'
  className = '',
  speechText = '',
  speechPosition = 'top', // 'top' | 'right' | 'left'
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  animate = true,
  onClick,
}) {
  const sizeClasses = {
    xs: 'w-16 h-auto',
    sm: 'w-24 h-auto',
    md: 'w-36 md:w-44 h-auto',
    lg: 'w-48 md:w-60 h-auto',
    xl: 'w-64 md:w-80 h-auto',
    hero: 'w-72 sm:w-96 md:w-[440px] lg:w-[500px] h-auto',
  };

  const getAnimationProps = () => {
    if (!animate) return {};

    switch (variant) {
      case 'waving':
        return {
          animate: {
            rotate: [0, -4, 4, -4, 2, 0],
            y: [0, -6, 0],
          },
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        };
      case 'peeking':
        return {
          initial: { y: 40, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6, ease: 'backOut' },
        };
      case 'sticker':
        return {
          whileHover: { scale: 1.08, rotate: -4 },
          whileTap: { scale: 0.95 },
        };
      case 'hero':
      default:
        return {
          animate: {
            y: [0, -10, 0],
          },
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        };
    }
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      onClick={onClick}
    >
      {/* Optional Speech Bubble */}
      {speechText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`z-20 mb-2 px-4 py-2 bg-white text-[#063BB6] font-bold rounded-2xl shadow-xl border-2 border-[#145DFF]/20 text-xs sm:text-sm md:text-base flex items-center gap-1.5 whitespace-nowrap ${
            speechPosition === 'right'
              ? 'absolute -right-8 top-4'
              : speechPosition === 'left'
              ? 'absolute -left-8 top-4'
              : 'relative'
          }`}
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          <span>{speechText}</span>
          <span className="text-pink-500">♡</span>
          {/* Arrow */}
          <div
            className={`absolute w-3 h-3 bg-white border-b-2 border-r-2 border-[#145DFF]/20 transform rotate-45 ${
              speechPosition === 'top'
                ? '-bottom-1.5 left-1/2 -translate-x-1/2'
                : speechPosition === 'right'
                ? 'bottom-3 -left-1.5 rotate-[135deg]'
                : 'bottom-3 -right-1.5 -rotate-45'
            }`}
          />
        </motion.div>
      )}

      {/* Mascot Image with Animation */}
      <motion.div
        {...getAnimationProps()}
        className="relative flex items-center justify-center cursor-pointer"
      >
        {/* Ambient Glow for Hero & Sticker */}
        {variant === 'hero' && (
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-[#145DFF]/20 via-[#8DB936]/15 to-transparent blur-3xl scale-125" />
        )}

        {/* Sticker Outer White Border Effect */}
        {variant === 'sticker' && (
          <div className="absolute inset-0 -z-10 rounded-3xl bg-white shadow-2xl scale-105" />
        )}

        <img
          src="/images/zip_boy_mascot.png"
          alt="Official ZIP LABAN Mascot"
          className={`${currentSizeClass} object-contain filter drop-shadow-xl transition-transform duration-300`}
          loading="eager"
        />

        {/* Packing Bag Badge for Cart / Checkout */}
        {variant === 'packing' && (
          <div className="absolute -bottom-2 -right-2 bg-[#063BB6] text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg border-2 border-white flex items-center gap-1">
            <span>🛵</span>
            <span>Zip Courier</span>
          </div>
        )}

        {/* Pin Badge for Locations */}
        {variant === 'pin' && (
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-lg border-2 border-white flex items-center gap-1 animate-bounce">
            <span>📍</span>
            <span>Found Us!</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
