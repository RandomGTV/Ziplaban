import React from 'react';
import { motion } from '../../context/MotionPreference';

export default function HeroMascot({ mousePosition = { x: 0, y: 0 } }) {
  return (
    <div className="relative flex items-end justify-center select-none pointer-events-none">
      {/* Ambient Lighting Behind Mascot */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-[#175EFF]/25 via-[#8DBA38]/15 to-transparent blur-3xl scale-125 pointer-events-none" />

      {/* Mascot Container with Parallax & Continuous Gentle Float */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          x: mousePosition.x * 10,
          rotate: [0, 0.4, -0.4, 0],
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          x: { type: 'spring', stiffness: 100, damping: 20 },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative flex items-end justify-center"
      >
        {/* The Official Transparent PNG Mascot */}
        <img
          src="/images/zip_boy_mascot.png"
          alt="Official Zip Laban Mascot holding dessert bowl"
          className="h-[52vh] sm:h-[60vh] md:h-[66vh] lg:h-[72vh] xl:h-[76vh] max-h-[660px] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(2,27,82,0.55)] pointer-events-auto cursor-pointer"
          loading="eager"
        />

        {/* Handwritten Annotation: More Happiness Please! ♡ */}
        {/* Positioned to the upper-left of the mascot to avoid storefront overlap */}
        <div
          className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 sm:-translate-x-[80%] text-white text-sm sm:text-lg lg:text-xl font-bold leading-tight tracking-wide text-center drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] select-none pointer-events-none"
          style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
        >
          <span className="block">More</span>
          <span className="block">Happiness</span>
          <span className="block">Please! ♡</span>
        </div>
      </motion.div>
    </div>
  );
}
