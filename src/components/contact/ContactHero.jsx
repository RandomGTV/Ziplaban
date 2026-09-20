import React from 'react';
import { motion } from '../../context/MotionPreference';
import { ArrowDown, ArrowRight, Sparkles, MessageCircleHeart } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function ContactHero() {
  const { navigate } = useNavigation();

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[55vh] md:min-h-[62vh] bg-gradient-to-b from-[#073BB8] via-[#0532A0] to-[#032B82] text-white pt-32 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient Radial Blue Glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#175EFF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[420px] h-[420px] bg-[#8DBA38]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle dessert elements */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[10%] hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-100 shadow-lg"
      >
        <Sparkles size={14} className="text-[#8DBA38]" />
        <span>Always Happy to Chat</span>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* LEFT: Text & CTAs (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-5 text-center lg:text-left"
        >
          {/* Label Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#8DBA38] animate-ping" />
            <span className="text-[11px] font-black tracking-widest uppercase text-white">
              GET IN TOUCH
            </span>
          </div>

          {/* Huge Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Say Hello <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8EE] to-[#8DBA38]">
              to Zip! ♡
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-blue-100/90 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            We’d love to hear from you. For questions, collaborations, event catering or just to say hi!
          </p>

          {/* Dual CTAs */}
          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToForm}
              className="px-7 py-3.5 bg-white hover:bg-[#FFF8EE] text-[#073BB8] font-black text-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Contact Us</span>
              <ArrowDown size={18} className="animate-bounce" />
            </button>

            <button
              onClick={() => navigate('/locations')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm rounded-2xl backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Find a Store</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick trust strip */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-blue-200/80 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="text-[#8DBA38]">●</span> Kerala Outlets: Malappuram & Kottakkal
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="text-[#175EFF]">●</span> Direct WhatsApp Concierge
            </span>
          </div>
        </motion.div>

        {/* RIGHT: Mascot & Floating Welcome Notes (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Subtle soft backdrop glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#175EFF]/30 to-[#8DBA38]/20 rounded-full blur-2xl transform scale-90 pointer-events-none" />

          {/* Mascot Container */}
          <div className="relative w-64 sm:w-80 md:w-88 flex items-center justify-center">
            <motion.img
              src="/images/zip_boy_mascot.png"
              alt="ZIP LABAN Official Mascot"
              className="w-full h-auto object-contain filter drop-shadow-2xl relative z-10"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Handwritten Tilted Note 1: Top Right */}
            <motion.div
              initial={{ rotate: -6, scale: 0.85, opacity: 0 }}
              animate={{ rotate: -6, scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-3 -right-4 sm:-right-8 z-20 bg-[#FFF8EE] text-[#10204A] px-4 py-2 rounded-2xl shadow-xl border border-[#073BB8]/15 transform -rotate-6"
            >
              <span
                className="text-lg sm:text-xl font-bold text-[#073BB8] block leading-tight"
                style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
              >
                Don’t Be Shy! ♡
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 block">
                WE’RE ALL EARS
              </span>
            </motion.div>

            {/* Handwritten Note 2: Bottom Left */}
            <motion.div
              initial={{ rotate: 8, scale: 0.85, opacity: 0 }}
              animate={{ rotate: 8, scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-2 -left-3 sm:-left-6 z-20 bg-gradient-to-r from-[#8DBA38] to-[#7DA632] text-white px-3.5 py-1.5 rounded-2xl shadow-lg border border-white/20 transform rotate-6"
            >
              <span
                className="text-base sm:text-lg font-bold block"
                style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
              >
                Let’s Talk! ✨
              </span>
            </motion.div>

            {/* Floating Heart */}
            <motion.div
              animate={{ y: [-8, 8, -8], scale: [1, 1.1, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 -left-4 z-20 w-9 h-9 rounded-full bg-white text-pink-500 flex items-center justify-center text-base shadow-lg border border-pink-100"
            >
              💖
            </motion.div>

            {/* Floating Pistachio Pill */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-16 -right-2 z-20 bg-white/95 text-[#10204A] px-3 py-1 rounded-full text-[11px] font-bold shadow-md border border-[#8DBA38]/30 flex items-center gap-1"
            >
              <span>🌱</span>
              <span>100% Fresh Cream</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
