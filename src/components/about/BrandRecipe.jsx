import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BrandRecipe() {
  const cards = [
    {
      id: 'ingredients',
      title: 'Premium Ingredients',
      subtitle: '“Only the best goes into every bowl.”',
      desc: 'From farm-fresh slow-churned dairy to real stone-ground Antep pistachios and pure Belgian cocoa, we never compromise on what goes inside.',
      icon: '🟢',
      image: '/images/qashtuta.jpg',
      badge: 'Uncompromised Quality',
      color: '#8DBA38',
    },
    {
      id: 'portions',
      title: 'Generous Portions',
      subtitle: '“Because happiness should never feel small.”',
      desc: 'We pile every bowl high with layers of clotted cream, thick drizzles, and satisfying crunches so you can share or indulge with zero guilt.',
      icon: '🍨',
      image: '/images/salankatia.jpg',
      badge: 'Heaped With Joy',
      color: '#073BB8',
    },
    {
      id: 'combinations',
      title: 'Creative Combinations',
      subtitle: '“Creamy, crunchy, chocolatey, nutty — mix it your way.”',
      desc: 'Opposites attract in the sweetest way: crisp warm kunafa meeting cold kashta, or bitter dark ganache meeting velvety almond cream.',
      icon: '✨',
      image: '/images/arrivals/hazelnut-bar.png',
      badge: 'Flavour Architecture',
      color: '#175EFF',
    },
    {
      id: 'experiences',
      title: 'Fun Experiences',
      subtitle: '“More than dessert. It’s a moment.”',
      desc: 'Desserts crafted for road trips, celebratory milestones, late-night conversations with friends, and unforgettable smiles.',
      icon: '🎉',
      image: '/images/mascot_store.png',
      badge: 'Pure Celebration',
      color: '#E11D48',
    },
  ];

  return (
    <section id="recipe" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#073BB8]/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>THE FOUR PILLARS</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            The ZIP LABAN Recipe
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#073BB8]">
            What makes every bowl feel special?
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFF8EE] rounded-3xl p-6 sm:p-7 border border-[#073BB8]/15 shadow-sm hover:shadow-xl hover:border-[#073BB8]/30 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                {/* Visual Area */}
                <div className="w-full h-40 rounded-2xl bg-white p-3 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                  <span className="absolute top-3 left-3 text-2xl z-10 select-none">
                    {card.icon}
                  </span>
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-500" 
                  />
                  <span className="absolute bottom-2 right-2 text-[10px] font-black uppercase tracking-wider text-[#10204A] bg-[#FFF8EE] px-2.5 py-0.5 rounded-full border border-[#073BB8]/10">
                    {card.badge}
                  </span>
                </div>

                {/* Card Titles */}
                <div className="space-y-2">
                  <h3 
                    className="text-xl font-black text-[#10204A] uppercase leading-tight"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm font-bold text-[#073BB8] leading-snug">
                    {card.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#10204A]/70 font-medium leading-relaxed pt-1">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="pt-6 mt-4 border-t border-[#073BB8]/10 flex items-center justify-between text-xs font-bold text-[#073BB8]">
                <span>Pillar 0{idx + 1}</span>
                <Heart size={14} className="fill-[#073BB8]/20 text-[#073BB8]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
