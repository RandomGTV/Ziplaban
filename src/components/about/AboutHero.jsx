import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';

export default function AboutHero({ onDiscoverClick }) {
  const { navigate } = useNavigation();

  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[85vh] bg-[#FFF8EE] overflow-hidden flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#073BB8]/10">
      
      {/* Background Soft Depth & Ambient Wave */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Radial Cream Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/80 rounded-full blur-3xl" />
        {/* Deep Royal Blue Asymmetric Blob on the Right */}
        <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#073BB8] via-[#0537A8] to-[#032B82] rounded-[80px] rotate-12 opacity-95 shadow-[0_30px_90px_rgba(7,59,184,0.3)] hidden lg:block" />
        {/* Mobile Asymmetric Blue Aura */}
        <div className="absolute bottom-0 right-0 w-full h-[40%] bg-gradient-to-t from-[#073BB8]/15 to-transparent lg:hidden" />
      </div>

      {/* Floating Sparkles and Playful Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Floating Sparkle Left */}
        <motion.div 
          animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[22%] left-[4%] sm:left-[8%] w-9 h-9 rounded-full bg-white/70 border border-[#8DBA38]/30 shadow-md flex items-center justify-center text-sm"
        >
          ✨
        </motion.div>
        {/* Floating Heart Right */}
        <motion.div 
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-[24%] right-[3%] sm:right-[7%] w-10 h-10 rounded-full bg-white/80 border border-[#073BB8]/20 shadow-md flex items-center justify-center text-sm font-bold text-[#073BB8] z-20"
        >
          ♡
        </motion.div>
        {/* Golden Honey / Kashta Speck */}
        <span className="absolute top-[35%] left-[45%] w-3 h-3 rounded-full bg-[#EAB308] opacity-60 blur-[1px] animate-pulse" />
        {/* Cream Droplet Accent */}
        <span className="absolute bottom-[30%] left-[25%] w-3.5 h-3.5 rounded-full bg-white opacity-80 shadow-md" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: EDITORIAL STORY HEADLINE & COPY */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em] shadow-sm">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>OUR STORY</span>
          </div>

          {/* Huge Emotional Headline */}
          <div className="space-y-1">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-[#10204A] leading-[1.02] tracking-tight uppercase"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Born to Make<br />
              <span className="text-[#073BB8] relative inline-block">
                People Smile
                <span className="text-[#E11D48] ml-2 inline-block animate-bounce [animation-duration:3s]">♡</span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p 
            className="text-2xl sm:text-3xl font-bold text-[#073BB8] leading-snug tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            “We don’t just make desserts.<br className="hidden sm:inline" /> We make happy moments.”
          </p>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#10204A]/80 font-medium max-w-xl leading-relaxed">
            ZIP LABAN brings together creamy textures, bold flavours and playful combinations to turn every dessert into a little celebration.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={onDiscoverClick}
              className="px-7 py-4 rounded-full bg-[#073BB8] hover:bg-[#052E99] text-white font-black text-sm sm:text-base shadow-xl hover:shadow-[#073BB8]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Discover Our Story</span>
              <ArrowDown size={18} />
            </button>

            <button
              onClick={() => navigate('/menu')}
              className="px-7 py-4 rounded-full bg-white hover:bg-[#FFF8EE] text-[#073BB8] border-2 border-[#073BB8]/20 hover:border-[#073BB8] font-black text-sm sm:text-base shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Explore Menu</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick Pill Highlights */}
          <div className="pt-2 flex items-center gap-6 text-xs font-bold text-[#10204A]/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8DBA38]" />
              <span>100% Handcrafted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#175EFF]" />
              <span>Original Egyptian Kashta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span>Made For Sharing</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LARGE MASCOT WITH HANDWRITTEN NOTE & BOWL */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-8 lg:pt-0">
          
          {/* Behind Mascot Ambient Glow */}
          <div className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full bg-white/40 blur-3xl pointer-events-none" />

          {/* Handwritten Sticky Note */}
          <motion.div
            initial={{ rotate: -8 }}
            animate={{ rotate: [-8, -5, -8], y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 sm:-top-8 right-2 sm:right-6 z-30 bg-[#FFF8EE] text-[#073BB8] border-2 border-[#073BB8] px-5 py-2.5 rounded-2xl shadow-xl backdrop-blur-md"
            style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
          >
            <p className="text-base sm:text-lg font-bold whitespace-nowrap flex items-center gap-1">
              <span>Same Happiness, Always ♡</span>
            </p>
            {/* Cute tape effect */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#8DBA38]/30 border border-[#8DBA38]/50 rounded-sm -rotate-3" />
          </motion.div>

          {/* Mascot Container (40–45% composition) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="relative z-20 w-72 sm:w-88 lg:w-[420px] max-w-full filter drop-shadow-[0_25px_45px_rgba(7,59,184,0.3)]"
          >
            <img 
              src="/images/zip_boy_mascot.png" 
              alt="Zip Laban Mascot smiling and waving with a dessert bowl" 
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </motion.div>

          {/* Floating Fresh Badge */}
          <div className="mt-4 px-5 py-2 rounded-full bg-white/90 lg:bg-[#032B82] border border-[#073BB8]/20 lg:border-white/20 text-[#073BB8] lg:text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-2 z-20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8DBA38] animate-pulse" />
            <span>Serving Smiles Day & Night</span>
          </div>

        </div>

      </div>

    </section>
  );
}
