import React from 'react';
import { ArrowDown, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from '../../context/MotionPreference';

export default function LocationsHero({ onFindBranchClick, activeStoreId, onSelectStore }) {
  const { navigate } = useNavigation();

  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[70vh] bg-gradient-to-b from-[#021B54] via-[#032B82] to-[#073BB8] text-white overflow-hidden flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      
      {/* Background Subtle Map Grid & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#175EFF]/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#073BB8]/40 rounded-full blur-[120px]" />
        
        <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="60" cy="60" r="1.5" fill="#8DBA38" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: HERO COPY & CALLS TO ACTION */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#8DBA38] text-xs font-black uppercase tracking-[0.25em] shadow-sm">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>FIND ZIP LABAN</span>
          </div>

          {/* Emotional Headline */}
          <div className="space-y-2">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Happiness Might Be<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8EE] to-[#8DBA38]">
                Closer Than You Think ♡
              </span>
            </h1>
            <p className="text-base sm:text-lg text-blue-100/90 font-medium max-w-xl leading-relaxed pt-2">
              Find your nearest ZIP LABAN branch in <span className="text-white font-bold underline decoration-[#8DBA38] decoration-2 underline-offset-4">Malappuram</span> or <span className="text-white font-bold underline decoration-[#8DBA38] decoration-2 underline-offset-4">Kottakkal</span> and come grab your favourite freshly churned dessert.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onFindBranchClick}
              className="px-7 py-4 rounded-full bg-[#8DBA38] hover:bg-[#7ba42f] text-white font-black text-sm sm:text-base shadow-xl hover:shadow-[#8DBA38]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Find a Branch</span>
              <ArrowDown size={18} />
            </button>

            <button
              onClick={() => navigate('/menu')}
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-black text-sm sm:text-base shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Explore Menu</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick Location Pills */}
          <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-bold">
            <button
              onClick={() => onSelectStore('malappuram')}
              className={'px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ' + (
                activeStoreId === 'malappuram' 
                  ? 'bg-white text-[#073BB8] border-white shadow-md' 
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              )}
            >
              <span className="w-2 h-2 rounded-full bg-[#8DBA38] animate-pulse" />
              <span>Malappuram Branch</span>
            </button>

            <button
              onClick={() => onSelectStore('kottakkal')}
              className={'px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ' + (
                activeStoreId === 'kottakkal' 
                  ? 'bg-white text-[#073BB8] border-white shadow-md' 
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              )}
            >
              <span className="w-2 h-2 rounded-full bg-[#175EFF] animate-pulse" />
              <span>Kottakkal Branch</span>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: MASCOT WITH PIN & HANDWRITTEN NOTE */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-6 lg:pt-0">
          
          <div className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full bg-[#175EFF]/20 blur-3xl pointer-events-none" />

          {/* Handwritten Sticky Note */}
          <motion.div
            initial={{ rotate: -6 }}
            animate={{ rotate: [-6, -3, -6], y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 sm:-top-8 right-4 sm:right-10 z-30 bg-[#FFF8EE] text-[#073BB8] border-2 border-[#073BB8] px-5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md"
            style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
          >
            <p className="text-base sm:text-lg font-bold whitespace-nowrap flex items-center gap-1">
              <span>Come Visit Us! ♡</span>
            </p>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#8DBA38]/30 border border-[#8DBA38]/50 rounded-sm -rotate-3" />
          </motion.div>

          {/* Floating Location Tag: MALAPPURAM */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => onSelectStore('malappuram')}
            className="absolute top-1/4 -left-4 sm:-left-8 z-30 bg-[#032B82]/90 border border-[#8DBA38]/50 text-white px-3.5 py-1.5 rounded-full shadow-xl backdrop-blur-md flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="w-2 h-2 rounded-full bg-[#8DBA38] animate-ping" />
            <span className="text-xs font-black tracking-wider">MALAPPURAM</span>
          </motion.div>

          {/* Floating Location Tag: KOTTAKKAL */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            onClick={() => onSelectStore('kottakkal')}
            className="absolute bottom-1/4 -right-2 sm:-right-6 z-30 bg-[#032B82]/90 border border-[#175EFF]/50 text-white px-3.5 py-1.5 rounded-full shadow-xl backdrop-blur-md flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="w-2 h-2 rounded-full bg-[#175EFF] animate-ping" />
            <span className="text-xs font-black tracking-wider">KOTTAKKAL</span>
          </motion.div>

          {/* Authentic ZIP LABAN Mascot */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
            className="relative z-20 w-68 sm:w-80 lg:w-[370px] max-w-full filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
          >
            <img 
              src="/images/zip_boy_mascot.png" 
              alt="Zip Laban Mascot ready with fresh desserts" 
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </motion.div>

          {/* Pin Badge Under Mascot */}
          <div className="mt-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2 shadow-lg z-20">
            <MapPin size={14} className="text-[#8DBA38]" />
            <span>2 Outlets Open Daily in Kerala</span>
          </div>

        </div>

      </div>

    </section>
  );
}
