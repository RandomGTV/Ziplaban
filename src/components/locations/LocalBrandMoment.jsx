import React from 'react';
import { Heart, Moon } from 'lucide-react';

export default function LocalBrandMoment() {
  return (
    <section id="local-moment" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FFF8EE] to-white border-b border-[#073BB8]/10 text-center relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none opacity-10 flex justify-between items-center px-10">
        <span className="text-8xl select-none">🌴</span>
        <span className="text-8xl select-none">🌴</span>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
          <Moon size={14} className="text-[#8DBA38]" />
          <span>KERALA NIGHTS & MIDNIGHT CHURN</span>
        </div>

        <h2 
          className="text-3xl sm:text-5xl font-black text-[#10204A] tracking-tight uppercase"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          Dessert Time, Kerala Style ♡
        </h2>

        <p className="text-base sm:text-lg text-[#10204A]/80 leading-relaxed font-medium max-w-2xl mx-auto">
          In Malappuram and Kottakkal, late evenings are made for gathering. We churn our fresh kashta, toast golden kunafa, and keep our lights on late into the night so you always have a sweet destination.
        </p>

        <div className="pt-2 flex items-center justify-center gap-6 text-xs font-bold text-[#073BB8]">
          <span className="flex items-center gap-1.5">
            <Heart size={14} className="text-[#8DBA38] fill-[#8DBA38]" />
            <span>Community Warmth</span>
          </span>
          <span>•</span>
          <span>Authentic Recipes</span>
          <span>•</span>
          <span>Late-Night Craving Hub</span>
        </div>

      </div>

    </section>
  );
}
