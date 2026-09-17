import React from 'react';
import { motion } from 'framer-motion';

export default function CreamSplash({ mousePosition = { x: 0, y: 0 } }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none select-none overflow-hidden">
      {/* Photorealistic 3D Cream Splash Wave with Lotus Biscuits, Pistachios, Chocolate */}
      <motion.div
        animate={{
          x: mousePosition.x * 4,
        }}
        transition={{ type: 'spring', stiffness: 90, damping: 25 }}
        className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px]"
      >
        <img
          src="/images/hero_cream_splash.png?v=2"
          alt="Luscious cream splash with lotus biscuits and pistachios"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
      </motion.div>

      {/* Cream-colored fill to cover the absolute bottom seamlessly */}
      <div className="absolute inset-x-0 bottom-0 h-[80px] sm:h-[100px] lg:h-[120px] bg-gradient-to-t from-[#FFF5E6] via-[#FFF9F1] to-[#FFFCF5]" />

      {/* Handwritten Annotation: Same Happiness Always ♡ */}
      <div
        className="absolute bottom-20 sm:bottom-24 lg:bottom-28 right-6 sm:right-12 lg:right-20 text-[#0E245A] text-xs sm:text-base lg:text-lg font-bold tracking-wide leading-tight drop-shadow-[0_1px_3px_rgba(255,255,255,0.5)] select-none pointer-events-none z-10"
        style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
      >
        <span className="block">Same</span>
        <span className="block">Happiness</span>
        <span className="block">Always ♡</span>
      </div>
    </div>
  );
}
