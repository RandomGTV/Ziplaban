import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LocationsCTA({ onSelectStore }) {
  return (
    <section id="locations-cta" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#032B82] via-[#073BB8] to-[#175EFF] text-white relative overflow-hidden text-center">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#8DBA38] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
          TASTE THE HAPPINESS
        </span>

        <h2 
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          Your Next Scoop Is<br />
          Closer Than You Think.
        </h2>

        <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-medium">
          Choose a branch below and get step-by-step directions directly in Google Maps.
        </p>

        {/* Dual Branch Action Buttons with Peeking Mascot */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onSelectStore('malappuram')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#073BB8] hover:bg-[#FFF8EE] font-black text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <MapPin size={18} className="text-[#8DBA38]" />
            <span>Malappuram Branch →</span>
          </button>

          <button
            onClick={() => onSelectStore('kottakkal')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#8DBA38] text-white hover:bg-[#7ba42f] font-black text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <MapPin size={18} className="text-white" />
            <span>Kottakkal Flagship →</span>
          </button>
        </div>

        {/* Standing Mascot Beside Buttons */}
        <div className="pt-6 flex justify-center">
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-24 sm:w-28 filter drop-shadow-xl"
          >
            <img 
              src="/images/zip_boy_mascot.png" 
              alt="Zip Mascot" 
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
