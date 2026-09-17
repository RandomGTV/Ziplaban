import React from 'react';
import { Sparkles, Lightbulb, Utensils, Store, Users, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StoryTimeline() {
  const points = [
    {
      step: '01',
      tag: 'THE IDEA',
      title: 'A Simple Dream',
      desc: 'To reinvent desserts into something generous, playful, and emotionally uplifting for everyone.',
      icon: Lightbulb,
      color: '#175EFF',
    },
    {
      step: '02',
      tag: 'FIRST DESSERT',
      title: 'A Bold Beginning',
      desc: 'Crafting the signature union of clotted Egyptian kashta, roasted Antep pistachios, and golden kunafa.',
      icon: Utensils,
      color: '#8DBA38',
    },
    {
      step: '03',
      tag: 'FIRST STORE',
      title: 'Bringing Smiles',
      desc: 'Opening our doors as a lively dessert destination filled with sweet aromas and midnight laughter.',
      icon: Store,
      color: '#073BB8',
    },
    {
      step: '04',
      tag: 'OUR COMMUNITY',
      title: 'Growing Together',
      desc: 'From viral stories to late-night road trips, our dessert lovers turned a brand into a joyful family.',
      icon: Users,
      color: '#F59E0B',
    },
    {
      step: '05',
      tag: 'THE FUTURE',
      title: 'More Happiness',
      desc: 'Dreaming up new flavour drops, exciting creations, and sweet moments in every community we touch.',
      icon: Compass,
      color: '#E11D48',
    },
  ];

  return (
    <section id="timeline" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8EE] border-b border-[#073BB8]/10 relative overflow-hidden text-center">
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>MILESTONES OF JOY</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            From One Idea<br />to Many Smiles
          </h2>
          <p className="text-base sm:text-lg text-[#10204A]/70 font-medium max-w-xl mx-auto">
            How a tiny spark of passion for delicious desserts became a beloved gathering place for thousands.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* DESKTOP: HORIZONTAL TIMELINE WITH CONNECTING ANIMATED BLUE LINE       */}
        {/* ===================================================================== */}
        <div className="hidden lg:block relative pt-12 pb-6">
          
          {/* Connecting Progress Line Behind Cards */}
          <div className="absolute top-[82px] left-8 right-8 h-1 bg-[#073BB8]/15 rounded-full z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#175EFF] via-[#073BB8] to-[#8DBA38] rounded-full shadow-[0_0_12px_rgba(7,59,184,0.5)]"
            />
          </div>

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={pt.step} className="flex flex-col items-center text-center group">
                  
                  {/* Step Node Icon on the line */}
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#073BB8] shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#073BB8] transition-all duration-300 relative">
                    <Icon size={24} className="text-[#073BB8] group-hover:text-white transition-colors" />
                    <span className="absolute -top-2.5 -right-2.5 bg-[#8DBA38] text-[#10204A] text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                      {pt.step}
                    </span>
                  </div>

                  {/* Milestone Card */}
                  <div className="w-full bg-white rounded-3xl p-5 shadow-sm border border-[#073BB8]/10 group-hover:shadow-xl group-hover:border-[#073BB8]/30 group-hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between min-h-[220px]">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#8DBA38] block mb-1">
                        {pt.tag}
                      </span>
                      <h4 
                        className="text-lg font-black text-[#10204A] leading-tight mb-2 uppercase"
                        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                      >
                        {pt.title}
                      </h4>
                      <p className="text-xs text-[#10204A]/70 leading-relaxed font-medium">
                        {pt.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#073BB8]">
                      <span>Phase {pt.step}</span>
                      <span>♡</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ===================================================================== */}
        {/* MOBILE & TABLET: CLEAN VERTICAL TIMELINE                             */}
        {/* ===================================================================== */}
        <div className="lg:hidden relative pl-6 sm:pl-10 space-y-8 text-left">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-2 bottom-2 left-3 sm:left-5 w-1 bg-gradient-to-b from-[#175EFF] via-[#073BB8] to-[#8DBA38] rounded-full" />

          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div key={pt.step} className="relative pl-6 sm:pl-8 group">
                
                {/* Node circle on line */}
                <div className="absolute -left-[19px] sm:-left-[27px] top-1.5 w-10 h-10 rounded-xl bg-white border-2 border-[#073BB8] shadow-md flex items-center justify-center">
                  <Icon size={18} className="text-[#073BB8]" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-[#073BB8]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#8DBA38]">
                      {pt.tag}
                    </span>
                    <span className="text-xs font-bold text-[#073BB8]">Step {pt.step}</span>
                  </div>
                  
                  <h4 
                    className="text-xl font-black text-[#10204A] leading-tight uppercase"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {pt.title}
                  </h4>
                  
                  <p className="text-sm text-[#10204A]/75 font-medium leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
