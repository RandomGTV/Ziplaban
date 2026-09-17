import React from 'react';

/**
 * Oversized background typography ("ZIP LABAN")
 * Acts as subtle brand texture (8-15% opacity) without interfering with interactive links.
 */
export default function WatermarkText() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 w-full flex items-center justify-center pointer-events-none select-none overflow-hidden -z-0"
    >
      <span
        className="text-[15vw] sm:text-[14vw] font-black uppercase text-white/10 tracking-widest leading-none whitespace-nowrap blur-[0.5px] scale-105"
        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
      >
        ZIP LABAN
      </span>
    </div>
  );
}
