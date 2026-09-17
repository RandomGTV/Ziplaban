import React from 'react';
import { motion } from 'framer-motion';

export default function EmptyBowlScene() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      
      {/* Speech Bubble from Mascot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
          y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative z-30 mb-2 sm:mb-4 bg-[#FFF8EE] text-[#032B82] border-2 border-[#073BB8] px-5 py-2.5 rounded-2xl shadow-xl backdrop-blur-md"
        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
      >
        <span className="text-sm sm:text-base font-black flex items-center gap-1.5 whitespace-nowrap">
          <span>Where did it go?</span>
          <span className="text-base">😮</span>
        </span>
        {/* Tail pointing towards mascot */}
        <div className="absolute -bottom-2 left-8 w-4 h-4 bg-[#FFF8EE] border-b-2 border-r-2 border-[#073BB8] rotate-45" />
      </motion.div>

      {/* Main Mascot & Bowl Composition */}
      <div className="relative flex items-end justify-center">
        
        {/* Ambient Soft Glow Behind Bowl & Mascot */}
        <div className="absolute -inset-8 bg-white/15 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Official ZIP LABAN Mascot (Untouched and unscaled beyond natural bounds) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 w-48 sm:w-60 md:w-72 lg:w-80 filter drop-shadow-[0_20px_35px_rgba(3,43,130,0.5)]"
        >
          <img
            src="/images/zip_boy_mascot.png"
            alt="Zip Laban Mascot waving with dessert bowl"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </motion.div>

        {/* 2. Stylized Empty Dessert Bowl Graphic */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="relative z-25 -ml-12 sm:-ml-16 mb-2 sm:mb-4 w-36 sm:w-44 lg:w-48 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
        >
          {/* Floating Confused Question Mark */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-6, 6, -6] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 w-10 h-10 rounded-full bg-white/90 border-2 border-[#8DBA38] text-[#8DBA38] font-black text-xl flex items-center justify-center shadow-lg"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            ?
          </motion.div>

          {/* SVG Empty Dessert Bowl */}
          <svg viewBox="0 0 200 130" className="w-full h-auto">
            <defs>
              {/* Bowl Outer Gradient */}
              <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0A47DC" />
                <stop offset="50%" stopColor="#073BB8" />
                <stop offset="100%" stopColor="#032675" />
              </linearGradient>
              {/* Inner Empty Cavity Gradient */}
              <linearGradient id="innerCavity" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF2DE" />
                <stop offset="50%" stopColor="#FFE8C7" />
                <stop offset="100%" stopColor="#E2C99D" />
              </linearGradient>
              {/* Gold Rim */}
              <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>

            {/* Bowl Shadow */}
            <ellipse cx="100" cy="120" rx="65" ry="8" fill="#011640" opacity="0.4" />

            {/* Bowl Body */}
            <path
              d="M 25 45 C 25 105, 175 105, 175 45 Z"
              fill="url(#bowlGrad)"
              stroke="#073BB8"
              strokeWidth="2"
            />

            {/* Bowl Base Pedestal */}
            <path
              d="M 70 102 C 70 114, 130 114, 130 102 Z"
              fill="#032675"
            />

            {/* Empty Bowl Inner Surface */}
            <ellipse cx="100" cy="45" rx="75" ry="24" fill="url(#innerCavity)" stroke="url(#goldRim)" strokeWidth="3" />

            {/* Clotted Kashta Remnant Ring */}
            <ellipse cx="100" cy="48" rx="65" ry="18" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" strokeDasharray="12 4" />

            {/* Few Remaining Pistachio Crumbs at the Bottom */}
            <circle cx="85" cy="48" r="3.5" fill="#8DBA38" />
            <circle cx="94" cy="52" r="2.5" fill="#6B9322" />
            <circle cx="112" cy="47" r="3" fill="#8DBA38" />
            <circle cx="120" cy="51" r="2" fill="#D97706" />
            {/* Lotus biscuit crumb */}
            <rect x="100" y="44" width="6" height="4" rx="1" fill="#C2410C" transform="rotate(15 100 44)" />

            {/* Bowl Front Logo Plaque */}
            <g transform="translate(68, 68)">
              <rect x="0" y="0" width="64" height="22" rx="6" fill="#FFFFFF" opacity="0.95" />
              <text
                x="32"
                y="15"
                textAnchor="middle"
                fontSize="11"
                fontWeight="900"
                fill="#073BB8"
                fontFamily="var(--font-comic, 'Fredoka', sans-serif)"
              >
                ZIP LABAN
              </text>
            </g>
          </svg>
        </motion.div>

      </div>

      {/* Floating Pistachio & Crumb Particles */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <motion.span
          animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[5%] text-lg opacity-80"
        >
          🥜
        </motion.span>
        <motion.span
          animate={{ y: [0, 8, 0], rotate: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-1/4 left-[5%] text-sm opacity-70"
        >
          ✨
        </motion.span>
      </div>

    </div>
  );
}
