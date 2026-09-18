import React from 'react';
import { ArrowRight, MapPin, ShoppingBag } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function StoreExperience() {
  const { navigate } = useNavigation();

  return (
    <section id="store-experience" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8EE] border-b border-[#073BB8]/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Full-width Immersive Card */}
        <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-[#032B82] min-h-[460px] flex items-center">
          
          {/* Background Image with Gradient Overlay */}
          <img 
            src="/images/store_facade_2k.jpg" 
            alt="ZIP LABAN Store Environment" 
            className="absolute inset-0 w-full h-full object-cover opacity-35" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#032B82] via-[#032B82]/85 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-2xl space-y-6 text-left text-white">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#8DBA38] text-xs font-black uppercase tracking-widest backdrop-blur-md">
              <MapPin size={14} className="text-[#8DBA38]" />
              <span>STORE EXPERIENCE</span>
            </div>

            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              More Than a<br />Dessert Shop
            </h2>

            <p 
              className="text-2xl sm:text-3xl font-bold text-[#8DBA38] leading-snug"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              “Walk in for dessert.<br />Leave with a better mood.”
            </p>

            <p className="text-sm sm:text-base text-blue-100/90 font-medium leading-relaxed">
              Step into a warm, buzzing atmosphere filled with the sound of freshly baked kunafa, the aroma of clarified country butter, and welcoming smiles that make you feel right at home.
            </p>

            {/* Dual Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/locations')}
                className="px-7 py-3.5 rounded-full bg-[#8DBA38] hover:bg-[#7ca830] text-[#10204A] font-black text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                <span>Find a Store</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate('/menu')}
                className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 font-black text-sm sm:text-base backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                <ShoppingBag size={18} />
                <span>Explore Menu</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
