import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';

export default function FutureSection() {
  const { navigate } = useNavigation();

  return (
    <section id="future" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EE] via-white to-[#FFF8EE] border-b border-[#073BB8]/10 relative overflow-hidden text-center">
      
      {/* Soft Blue Radial Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#175EFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
          <Sparkles size={14} className="text-[#8DBA38]" />
          <span>WHAT COMES NEXT</span>
        </div>

        {/* Headline */}
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          The Future Is<br />
          <span className="text-[#073BB8]">Sweeter ♡</span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-xl text-[#10204A]/80 font-medium max-w-xl mx-auto leading-relaxed">
          We’re always exploring new flavours, new ideas and new ways to bring people together. Every season brings an exciting new reason to celebrate.
        </p>

        {/* Center Visual: Mascot looking forward with dessert */}
        <div className="relative flex justify-center items-center py-4">
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-48 sm:w-56 filter drop-shadow-[0_20px_35px_rgba(7,59,184,0.2)]"
          >
            <img 
              src="/images/zip_boy_mascot.png" 
              alt="Zip looking toward the future" 
              className="w-full h-auto object-contain" 
            />
          </motion.div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => navigate('/new-arrivals')}
            className="px-8 py-4 rounded-full bg-[#073BB8] hover:bg-[#052E99] text-white font-black text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <span>See What’s New</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

    </section>
  );
}
