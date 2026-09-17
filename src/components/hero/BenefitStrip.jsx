import React from 'react';
import { motion } from 'framer-motion';

export default function BenefitStrip() {
  const benefits = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#073BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
      // Clean Leaf SVG
      customSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#073BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
      title: 'Premium',
      subtitle: 'Ingredients',
    },
    {
      id: 2,
      customSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#073BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: 'Freshly',
      subtitle: 'Made',
    },
    {
      id: 3,
      customSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#073BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Desserts',
      subtitle: 'for Everyone',
    },
    {
      id: 4,
      customSvg: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#073BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'A Sweeter',
      subtitle: 'Tomorrow',
    },
  ];

  return (
    <div
      className="relative z-40 bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_rgba(2,27,82,0.35)] rounded-2xl sm:rounded-3xl px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between gap-3 sm:gap-5 md:gap-7 select-none max-w-2xl xl:max-w-3xl"
    >
      {benefits.map((item, idx) => (
        <React.Fragment key={item.id}>
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#073BB8]/5 flex items-center justify-center">
              {item.customSvg}
            </div>
            <div className="text-left whitespace-nowrap">
              <span className="block text-xs sm:text-sm font-extrabold text-[#0E245A] leading-tight" style={{ fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)' }}>
                {item.title}
              </span>
              <span className="block text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight">
                {item.subtitle}
              </span>
            </div>
          </div>

          {/* Divider between items */}
          {idx < benefits.length - 1 && (
            <div className="h-7 sm:h-9 w-px bg-gray-200/90 flex-shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
