import React from 'react';
import { Sparkles, Heart, Zap, Award, Smile } from 'lucide-react';

export default function BrandValues() {
  const values = [
    {
      title: 'HAPPINESS FIRST',
      quote: '“Every product should make someone smile.”',
      desc: 'We judge our success not by how many desserts we churn, but by the smiles, giggles, and joyful sighs that follow every first spoon.',
      badge: 'Joy Centric',
      color: '#073BB8',
      icon: Smile,
      align: 'left',
      accentImg: '/images/salankatia.jpg',
    },
    {
      title: 'CREATIVITY ALWAYS',
      quote: '“We love unexpected combinations.”',
      desc: 'We are never afraid to pair clotted Egyptian cream with Italian hazelnuts, hot molten Belgian ganache with cold ice milk, or crispy kunafa with salted caramel.',
      badge: 'Infinite Innovation',
      color: '#8DBA38',
      icon: Zap,
      align: 'right',
      accentImg: '/images/arrivals/lawzi-creme.png',
    },
    {
      title: 'QUALITY MATTERS',
      quote: '“Great ingredients make great desserts.”',
      desc: 'No artificial shortcuts, no compromise on real milk fat, no artificial food dyes. We make food we are proud to serve our own families every single day.',
      badge: 'Purity Standard',
      color: '#175EFF',
      icon: Award,
      align: 'left',
      accentImg: '/images/qashtuta.jpg',
    },
    {
      title: 'TOGETHER IS SWEETER',
      quote: '“Desserts are better when shared.”',
      desc: 'The best desserts are the ones you pass around the table, dig into with friends after midnight, or bring home to surprise someone you love.',
      badge: 'Community Bond',
      color: '#E11D48',
      icon: Heart,
      align: 'right',
      accentImg: '/images/arrivals/fazea-chocola-cake.png',
    },
  ];

  return (
    <section id="values" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#073BB8]/10 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>OUR CORE BELIEFS</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            What We Believe In
          </h2>
          <p className="text-base sm:text-lg text-[#10204A]/70 font-medium max-w-xl mx-auto">
            The four founding values that guide every recipe, every store greeting, and every bite.
          </p>
        </div>

        {/* 4 Alternating Editorial Statement Cards */}
        <div className="space-y-8">
          {values.map((v, idx) => {
            const isReverse = v.align === 'right';
            const Icon = v.icon;

            return (
              <div 
                key={v.title}
                className={`rounded-3xl p-6 sm:p-10 border border-[#073BB8]/15 bg-[#FFF8EE] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-8 space-y-3 text-left ${isReverse ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-white border border-[#073BB8]/20 text-[#073BB8]">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-[#8DBA38]">
                      {v.badge} • 0{idx + 1}
                    </span>
                  </div>

                  <h3 
                    className="text-2xl sm:text-3xl font-black text-[#10204A] uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {v.title}
                  </h3>

                  <p 
                    className="text-xl sm:text-2xl font-bold text-[#073BB8] leading-snug"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {v.quote}
                  </p>

                  <p className="text-sm sm:text-base text-[#10204A]/80 font-medium leading-relaxed pt-1">
                    {v.desc}
                  </p>
                </div>

                {/* Visual Thumbnail */}
                <div className={`lg:col-span-4 flex items-center justify-center ${isReverse ? 'lg:order-1' : ''}`}>
                  <div className="w-full max-w-[280px] h-48 sm:h-56 rounded-2xl bg-white p-3 shadow-md border-2 border-white flex items-center justify-center overflow-hidden group">
                    <img 
                      src={v.accentImg} 
                      alt={v.title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
