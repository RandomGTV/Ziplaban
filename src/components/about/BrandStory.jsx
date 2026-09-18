import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section id="story" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#073BB8]/10 relative overflow-hidden">
      
      {/* Background Subtle Wave */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFF8EE] rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>ORIGIN & PURPOSE</span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            How ZIP LABAN Began
          </h2>
        </div>

        {/* Clean Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: High-End Brand & Store Atmosphere */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF8EE] group">
              <img 
                src="/images/store_facade_2k.jpg" 
                alt="ZIP LABAN Storefront atmosphere" 
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032B82]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8DBA38] block">Kottakkal Branch</span>
                  <h4 
                    className="text-xl sm:text-2xl font-black"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    Where Every Visit Is A Celebration
                  </h4>
                </div>
                <span className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-lg">
                  <Heart size={20} className="fill-[#E11D48] text-[#E11D48]" />
                </span>
              </div>
            </div>

            {/* Inset In-Motion Dessert Floating Card */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 bg-white p-3 rounded-2xl shadow-xl border-2 border-[#073BB8]/15 items-center gap-3 max-w-[260px] z-20">
              <img 
                src="/images/salankatia.jpg" 
                alt="Salankatia Dessert" 
                className="w-14 h-14 object-cover rounded-xl shadow-inner" 
              />
              <div className="text-left">
                <span className="text-[10px] font-black uppercase text-[#8DBA38]">Signature Creation</span>
                <p className="text-xs font-black text-[#10204A] leading-tight">Salankatiya Pistachio</p>
                <span className="text-[11px] font-bold text-[#073BB8]">Fresh Churned Daily</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Story Narrative & Oversized Pull Quote */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-4 text-base sm:text-lg text-[#10204A]/80 font-medium leading-relaxed">
              <p>
                <strong className="text-[#073BB8] font-black text-xl sm:text-2xl block mb-2" style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}>
                  ZIP LABAN started with a simple idea:
                </strong>
                make dessert more exciting, generous, and fun. We saw desserts becoming routine, predictable, and polite. We wanted ours to feel like an uncontainable burst of sweet happiness.
              </p>
              
              <p>
                From creamy slow-churned bases to rich emerald pistachio, authentic Belgian chocolate, Lotus Biscoff, and crispy kunafa toppings, every combination is made to create a moment worth remembering.
              </p>
            </div>

            {/* Oversized Pull Quote */}
            <div className="relative pt-6 pb-2 border-l-4 border-[#073BB8] pl-6 sm:pl-8 bg-[#FFF8EE]/50 rounded-r-2xl">
              <span className="absolute -top-3 left-4 text-6xl sm:text-7xl font-serif text-[#073BB8]/20 select-none leading-none">
                “
              </span>
              <p 
                className="text-2xl sm:text-3xl md:text-4xl font-black text-[#073BB8] leading-tight"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                Dessert should feel like a celebration.
              </p>
              <span className="block mt-2 text-xs font-black uppercase tracking-[0.2em] text-[#10204A]/60">
                — The ZIP LABAN Philosophy
              </span>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-[#073BB8]/10">
                <span className="text-2xl mb-1 block">🍨</span>
                <h4 className="text-sm font-black text-[#10204A] uppercase">Cream First</h4>
                <p className="text-xs text-[#10204A]/70 mt-0.5">Slow-simmered velvety kashta foundation</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-[#073BB8]/10">
                <span className="text-2xl mb-1 block">✨</span>
                <h4 className="text-sm font-black text-[#10204A] uppercase">Generous Crunch</h4>
                <p className="text-xs text-[#10204A]/70 mt-0.5">Freshly crisped kunafa & toasted nuts</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
