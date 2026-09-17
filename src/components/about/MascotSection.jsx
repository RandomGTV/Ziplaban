import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MascotSection() {
  return (
    <section id="mascot-story" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFF8EE] border-b border-[#073BB8]/10 relative overflow-hidden">
      
      {/* Dynamic Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#175EFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Grid Split: Mascot Left + Narrative Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Mascot with Speech Bubble & Floating Hearts */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Dynamic Speech Bubble */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-[#073BB8] text-white px-6 py-3 rounded-2xl shadow-xl border-2 border-white/20 mb-6 relative z-20 text-center"
              style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
            >
              <p className="text-lg sm:text-xl font-bold whitespace-nowrap">
                More Happiness Please! ♡
              </p>
              {/* Beak */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#073BB8] rotate-45 border-r border-b border-white/20" />
            </motion.div>

            {/* Mascot Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-72 sm:w-88 lg:w-[400px] max-w-full filter drop-shadow-[0_25px_45px_rgba(7,59,184,0.25)] relative z-10"
            >
              <img 
                src="/images/zip_boy_mascot.png" 
                alt="Zip Laban Mascot" 
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </motion.div>

            {/* Floating Hearts & Pistachios */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <motion.span 
                animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 left-4 text-3xl select-none"
              >
                💖
              </motion.span>
              <motion.div 
                animate={{ y: [0, 12, 0], rotate: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 right-4 w-10 h-10 rounded-full bg-white/80 border border-[#073BB8]/20 shadow-md flex items-center justify-center text-base font-bold text-[#073BB8]"
              >
                🥣
              </motion.div>
            </div>

          </div>

          {/* RIGHT: Mascot Narrative & Identity Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
              <Sparkles size={14} className="text-[#8DBA38]" />
              <span>THE BRAND AMBASSADOR</span>
            </div>

            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] tracking-tight uppercase leading-tight"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Meet the Face<br />of Happiness
            </h2>

            <p className="text-lg sm:text-xl text-[#073BB8] font-bold leading-snug">
              Friendly, cheerful, and always ready with a spoon.
            </p>

            <p className="text-base sm:text-lg text-[#10204A]/80 font-medium leading-relaxed">
              Our mascot represents everything ZIP LABAN stands for — friendly, playful, generous and always ready to share something delicious.
            </p>

            {/* Character Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#073BB8]/15 shadow-sm space-y-1">
                <span className="text-xs font-black uppercase text-[#8DBA38]">Baker’s Pride</span>
                <h4 className="text-sm font-black text-[#10204A] uppercase">The Blue Beret</h4>
                <p className="text-xs text-[#10204A]/70">Honoring the time-tested craft of Egyptian dairy artisans.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#073BB8]/15 shadow-sm space-y-1">
                <span className="text-xs font-black uppercase text-[#8DBA38]">Always Sharing</span>
                <h4 className="text-sm font-black text-[#10204A] uppercase">The Happiness Bowl</h4>
                <p className="text-xs text-[#10204A]/70">Never holding back on toppings, crunch, or smiles.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
