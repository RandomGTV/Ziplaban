import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, Star } from 'lucide-react';

export default function TrustStats() {
  const statements = [
    {
      id: 'fresh',
      title: 'Freshly Made',
      highlight: 'Every Single Day',
      desc: 'Small batches churned continuously from early morning until late night, ensuring every spoonful tastes peak-fresh.',
      icon: '🥛',
    },
    {
      id: 'flavours',
      title: 'Bold Flavours',
      highlight: 'Zero Compromises, Always',
      desc: 'Real roasted Antep pistachios, creamy Alexandria milk, and authentic cocoa — no artificial essences or dilutions.',
      icon: '🟢',
    },
    {
      id: 'everyone',
      title: 'Desserts for',
      highlight: 'Everyone, Every Age',
      desc: 'Crafted with genuine warmth for little kids, late-night friends, and large family celebrations alike.',
      icon: '💖',
    },
    {
      id: 'community',
      title: 'Growing',
      highlight: 'Sweet Community',
      desc: 'United by a shared love for great food, viral reels, and memorable late-night moments together.',
      icon: '✨',
    },
  ];

  return (
    <section id="why-love-us" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#032B82] via-[#0537A8] to-[#073BB8] text-white relative overflow-hidden text-center">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#175EFF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#001D6E]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#8DBA38] text-xs font-black uppercase tracking-[0.25em] backdrop-blur-md">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>OUR PROMISE TO YOU</span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Made for Happy People
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-100/90 font-medium max-w-xl mx-auto">
            Pure flavour. Honest ingredients. Smiles in every single serving.
          </p>
        </div>

        {/* 4 Qualitative Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statements.map((st) => (
            <div 
              key={st.id}
              className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-3xl p-7 text-left backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl mb-5 shadow-inner">
                  {st.icon}
                </div>

                <span className="text-xl sm:text-2xl font-black text-white block uppercase leading-tight" style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}>
                  {st.title}
                </span>
                
                <span className="text-base sm:text-lg font-bold text-[#8DBA38] block mt-1 leading-snug">
                  {st.highlight}
                </span>

                <p className="text-xs sm:text-sm text-blue-100/80 font-medium leading-relaxed mt-3">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                <span className="font-bold">100% Guaranteed</span>
                <span>★ ★ ★ ★ ★</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
