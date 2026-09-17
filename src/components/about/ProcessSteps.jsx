import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Start Creamy',
      subtitle: 'The Soul Foundation',
      desc: 'We start with our thick, slow-simmered clotted buffalo milk kashta base, slow-churned until ultra-velvety.',
      icon: '🥛',
      color: '#175EFF',
    },
    {
      num: '02',
      title: 'Add Flavour',
      subtitle: 'Bold Sensations',
      desc: 'Stone-ground Antep pistachio cream, rich Belgian cocoa ganache, or golden spiced Lotus Biscoff swirl.',
      icon: '🟢',
      color: '#8DBA38',
    },
    {
      num: '03',
      title: 'Add Crunch',
      subtitle: 'Textural Joy',
      desc: 'Clarified butter kunafa threads, toasted hazelnut wafer crisps, or crispy chocolate pearls for sound and bite.',
      icon: '✨',
      color: '#F59E0B',
    },
    {
      num: '04',
      title: 'Finish With Happiness',
      subtitle: 'Pure Celebration',
      desc: 'A warm molten lava cascade, delicate chocolate curls, and the signature ZIP LABAN sweet smile.',
      icon: '💖',
      color: '#073BB8',
    },
  ];

  return (
    <section id="process" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8EE] border-b border-[#073BB8]/10 relative overflow-hidden text-center">
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>HANDCRAFTED ARTISTRY</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            From Bowl to Smile
          </h2>
          <p className="text-base sm:text-lg text-[#10204A]/70 font-medium max-w-xl mx-auto">
            The four mindful steps behind every single handcrafted dessert order.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((st, idx) => (
            <motion.div
              key={st.num}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#073BB8]/15 shadow-sm hover:shadow-xl hover:border-[#073BB8]/30 transition-all text-left flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Pill Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#073BB8]/10 text-[#073BB8] font-black text-lg flex items-center justify-center shadow-inner">
                    {st.num}
                  </span>
                  <span className="text-3xl select-none">
                    {st.icon}
                  </span>
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-[#8DBA38] block mb-1">
                  {st.subtitle}
                </span>

                <h3 
                  className="text-xl sm:text-2xl font-black text-[#10204A] uppercase leading-tight mb-2"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#10204A]/75 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {/* Step indicator */}
              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#073BB8]">
                <span>Step {st.num} of 04</span>
                {idx < 3 ? (
                  <ArrowRight size={16} className="text-[#073BB8]/40 group-hover:text-[#073BB8] group-hover:translate-x-1 transition-all" />
                ) : (
                  <span className="text-sm">♡</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mascot Mini Accent Beside Final Step */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-[#073BB8]/20 shadow-md">
          <img 
            src="/images/zip_boy_mascot.png" 
            alt="Zip smiling" 
            className="w-10 h-10 object-contain" 
          />
          <span className="text-xs sm:text-sm font-bold text-[#10204A]">
            “Handcrafted fresh right in front of your eyes!”
          </span>
        </div>

      </div>

    </section>
  );
}
