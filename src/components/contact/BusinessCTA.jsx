import React from 'react';
import { motion } from '../../context/MotionPreference';
import { Briefcase, ArrowRight, Sparkles, Mail } from 'lucide-react';
import { CONTACT_CONFIG } from '../../data/contactData';

export default function BusinessCTA({ onSelectSubject }) {
  const handleClick = () => {
    if (onSelectSubject) {
      onSelectSubject('Business Collaboration');
    }
    const formEl = document.getElementById('contact-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="business-cta" className="py-20 md:py-24 bg-gradient-to-b from-[#032B82] via-[#02246D] to-[#011B54] text-white relative overflow-hidden select-none scroll-mt-24">
      {/* Background Decorative Blurs */}
      <div className="absolute -top-20 right-10 w-96 h-96 bg-[#175EFF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-[#8DBA38]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-16 border border-white/15 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Block (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#8DBA38]/20 border border-[#8DBA38]/40 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-[#8DBA38]">
              <Sparkles size={14} />
              <span>PARTNERSHIPS & COLLABORATIONS</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Let’s Create Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8EE] to-[#8DBA38]">
                Sweet Together.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium max-w-xl">
              For collaborations, food creators, campus events, wedding pop-ups, bulk dessert orders, or strategic retail opportunities — get in touch with the ZIP LABAN team.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleClick}
                className="px-7 py-3.5 bg-[#8DBA38] hover:bg-[#7ba62f] text-white font-extrabold text-sm rounded-2xl shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                <span>Business Enquiry</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={`mailto:${CONTACT_CONFIG.businessEmail}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-2xl transition-all flex items-center gap-2"
              >
                <Mail size={16} />
                <span>{CONTACT_CONFIG.businessEmail}</span>
              </a>
            </div>
          </div>

          {/* Right Mascot Visual (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
            <div className="relative w-48 sm:w-56">
              <motion.img
                src="/images/zip_boy_mascot.png"
                alt="Zip Laban Mascot"
                className="w-full h-auto object-contain drop-shadow-2xl"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating note */}
              <div className="absolute -bottom-2 -left-4 bg-[#FFF8EE] text-[#10204A] px-3.5 py-1.5 rounded-xl shadow-lg border border-[#073BB8]/15 transform -rotate-3">
                <span
                  className="text-sm sm:text-base font-bold text-[#073BB8] block"
                  style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
                >
                  Big ideas welcome! 💌
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
