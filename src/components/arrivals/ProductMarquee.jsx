import React from 'react';

export default function ProductMarquee() {
  const items = [
    'NEW FLAVOURS',
    'BIGGER SMILES',
    'NEW CRAVINGS',
    'ZIP LABAN',
    'HAPPINESS IN EVERY BITE',
    'JUST DROPPED',
    'SEASON 2026',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#FFF8EE] border-y-2 border-[#073BB8]/15 py-4 sm:py-5 select-none z-20">
      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6">
            {items.map((text, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-8">
                <span 
                  className="text-lg sm:text-2xl font-black uppercase tracking-wider text-[#073BB8] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {text}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#175EFF] opacity-70" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
