import React from 'react';
import { motion } from 'framer-motion';

export default function HeroContent({ onExploreMenu, onWatchStory }) {
  return (
    <div className="relative z-20 flex flex-col items-start text-left select-none max-w-xl xl:max-w-2xl">
      {/* 1. Small uppercase eyebrow text */}
      <div
        className="inline-block text-[11px] sm:text-xs lg:text-sm font-extrabold uppercase text-white tracking-[0.22em] mb-2 sm:mb-3 drop-shadow-sm"
        style={{ fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)' }}
      >
        PREMIUM DESSERTS. BOLD FLAVOURS.
      </div>

      {/* 2. Expressive display headline matching reference */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.6rem] font-black text-white leading-[1.02] tracking-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]"
        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
      >
        <span>Happiness</span>{' '}
        <span
          className="inline-block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-normal align-middle ml-1 -rotate-6"
          style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
        >
          ♡
        </span>
        <br />
        <span className="block mt-0.5 sm:mt-1 text-white">in Every Bite</span>
      </h1>

      {/* 3. Subtitle */}
      <div
        className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white font-medium leading-snug max-w-md drop-shadow-sm"
        style={{ fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)' }}
      >
        <p>Creamy. Crunchy. Dreamy.</p>
        <p className="text-white/90">Made for Everyone.</p>
      </div>

      {/* 4. CTA Row: Primary + Secondary Action */}
      <div
        className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6"
      >
        {/* Primary Button: Explore Menu → */}
        <button
          onClick={onExploreMenu}
          className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#FFF9F1] text-[#073BB8] font-black text-sm sm:text-base shadow-xl hover:shadow-[0_12px_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2.5 group"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          <span>Explore Menu</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1.5 font-bold text-base">
            →
          </span>
        </button>

        {/* Secondary Action: Circular Outlined Play Button + Watch Our Story */}
        <button
          onClick={onWatchStory}
          className="flex items-center gap-3 text-white cursor-pointer group py-1.5"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white group-hover:bg-white/20 flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-md">
            {/* Play Icon Triangle */}
            <svg
              className="w-3.5 h-3.5 fill-white ml-0.5"
              viewBox="0 0 24 24"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <div className="text-left text-xs sm:text-sm font-bold tracking-wide leading-tight text-white group-hover:text-white/90 transition-colors">
            <span className="block">Watch</span>
            <span className="block">Our Story</span>
          </div>
        </button>
      </div>

      {/* 5. Handwritten decorative phrase: SWEETER TOMORROW TOGETHER ♡ */}
      <div
        className="mt-6 sm:mt-8 text-white text-sm sm:text-base lg:text-lg font-bold tracking-wider leading-tight select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
        style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
      >
        <span className="block">SWEETER</span>
        <span className="block">TOMORROW</span>
        <span className="block">TOGETHER ♡</span>
      </div>
    </div>
  );
}
