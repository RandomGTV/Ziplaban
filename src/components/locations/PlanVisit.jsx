import React from 'react';
import { Compass, Navigation, UtensilsCrossed } from 'lucide-react';
import { motion } from '../../context/MotionPreference';

export default function PlanVisit({ onScrollToMap }) {
  const steps = [
    {
      num: '01',
      title: 'FIND A BRANCH',
      desc: 'Choose between Malappuram and Kottakkal depending on where your day or evening takes you.',
      icon: Compass,
      color: '#073BB8',
    },
    {
      num: '02',
      title: 'GET DIRECTIONS',
      desc: 'Open Google Maps in one tap for effortless driving or walking directions right to our door.',
      icon: Navigation,
      color: '#8DBA38',
    },
    {
      num: '03',
      title: 'GRAB HAPPINESS',
      desc: 'Pick your favourite dessert from fresh slow-churned kashta to warm molten kunafa bowls.',
      icon: UtensilsCrossed,
      color: '#175EFF',
    },
  ];

  return (
    <section id="plan-visit" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EE] border-b border-[#073BB8]/10 text-center relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#073BB8] bg-[#073BB8]/10 px-4 py-1.5 rounded-full">
            EASY 3 STEPS
          </span>
          <h2 
            className="text-3xl sm:text-5xl font-black text-[#10204A] uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Planning a Dessert Run?
          </h2>
          <p className="text-sm sm:text-base text-[#10204A]/70 font-medium">
            Whether it’s a late-night drive with friends or a family celebration, grabbing a bowl of ZIP LABAN is simple.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#073BB8]/15 shadow-lg space-y-4 relative group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between">
                  <span 
                    className="text-2xl font-black text-[#073BB8]/20 group-hover:text-[#073BB8] transition-colors"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    STEP {step.num}
                  </span>
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                <h3 
                  className="text-xl font-black text-[#10204A] uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {step.title}
                </h3>

                <p className="text-sm text-[#10204A]/75 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Peeking Mascot Cheerful Note */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-14 h-14 rounded-full bg-white border-2 border-[#073BB8] p-1 shadow-lg overflow-hidden flex-shrink-0"
          >
            <img 
              src="/images/zip_boy_mascot.png" 
              alt="Zip Mascot" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div 
            className="bg-white text-[#073BB8] border border-[#073BB8]/20 px-5 py-2.5 rounded-2xl shadow-md text-sm font-bold"
            style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
          >
            “See you at the counter with a spoon ready! ♡”
          </div>
        </div>

      </div>

    </section>
  );
}
