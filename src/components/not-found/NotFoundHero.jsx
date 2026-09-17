import React from 'react';
import { ArrowRight, Compass, Home, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';
import EmptyBowlScene from './EmptyBowlScene';

export default function NotFoundHero() {
  const { navigate } = useNavigation();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Soft Depth & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#175EFF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#8DBA38]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: 404 DIGITS, HEADLINE, COPY & CTAS */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Handwritten Accent Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#FFF8EE] text-xl font-bold tracking-wide shadow-lg backdrop-blur-md rotate-[-2deg]"
                style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
              >
                <span>Wrong Turn, Still Sweet</span>
                <span className="text-[#E11D48] animate-pulse">♡</span>
              </span>
            </motion.div>

            {/* Oversized 404 Digits */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 select-none">
              {/* Digit 4 */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] font-black text-white tracking-tighter leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                4
              </motion.span>

              {/* Digit 0 — Visualized as an Empty Kashta Dessert Bowl Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-6 sm:border-8 border-white bg-gradient-to-br from-[#FFF8EE] via-[#FFE4B5] to-[#E5C38F] shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center justify-center p-2"
              >
                {/* Empty Bowl Inner Depth */}
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#073BB8]/40 bg-[#FFF8EE] flex items-center justify-center relative overflow-hidden">
                  {/* Kashta Rim Sheen */}
                  <div className="absolute top-1 left-2 w-8 h-4 rounded-full bg-white/80 blur-[1px]" />
                  {/* Crumb & Pistachio Detail */}
                  <span className="text-xl sm:text-2xl animate-bounce [animation-duration:2.5s]">
                    🥄
                  </span>
                  <div className="absolute bottom-2 right-3 w-2.5 h-2.5 rounded-full bg-[#8DBA38]" />
                </div>
              </motion.div>

              {/* Digit 4 */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[140px] font-black text-white tracking-tighter leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                4
              </motion.span>
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Oops...<br />
              <span className="text-[#FFF8EE]">
                This Scoop Is Missing!
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-blue-100/90 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We searched the bowl, the toppings and even the last pistachio... but this page isn’t here. Don’t worry, there’s plenty of freshly churned happiness waiting for you.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary CTA: Explore Menu */}
              <button
                onClick={() => handleNav('/menu')}
                className="group px-8 py-4 rounded-full bg-white text-[#032B82] hover:bg-[#FFF8EE] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                <Compass size={18} />
                <span>Explore Menu</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                />
              </button>

              {/* Secondary CTA: Back Home */}
              <button
                onClick={() => handleNav('/')}
                className="group px-7 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white font-black text-base backdrop-blur-sm hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                <Home size={18} />
                <span>Back to Home</span>
              </button>

              {/* Tertiary Link: Find a Store */}
              <button
                onClick={() => handleNav('/locations')}
                className="px-4 py-2 text-sm font-bold text-blue-200 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MapPin size={15} className="text-[#8DBA38]" />
                <span>Find a Store (Kerala) →</span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: MASCOT & EMPTY BOWL SCENE */}
          <div className="lg:col-span-5 flex justify-center">
            <EmptyBowlScene />
          </div>

        </div>
      </div>
    </section>
  );
}
