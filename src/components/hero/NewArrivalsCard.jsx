import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';

export default function NewArrivalsCard() {
  const { navigate } = useNavigation();

  return (
    <div
      onClick={() => navigate('/new-arrivals')}
      className="relative z-40 bg-gradient-to-r from-[#073BB8] to-[#032B82] border border-white/30 rounded-2xl sm:rounded-3xl px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-3 sm:gap-4 shadow-[0_15px_35px_rgba(3,43,130,0.5)] hover:shadow-[0_20px_45px_rgba(3,43,130,0.65)] hover:scale-105 transition-all duration-200 cursor-pointer select-none group"
    >
      {/* Product Bowl Thumbnail */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden bg-white/10 p-0.5 shadow-md flex-shrink-0">
        <img
          src="/images/salankatia.jpg"
          alt="New Arrivals Bowl"
          className="w-full h-full object-cover rounded-[10px] group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Text: Try Our New Arrivals! */}
      <div className="text-left text-white leading-tight pr-1">
        <span className="block text-[11px] sm:text-xs font-bold text-white/90">
          Try Our
        </span>
        <span
          className="block text-xs sm:text-sm lg:text-base font-black text-white tracking-wide"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          New Arrivals!
        </span>
      </div>

      {/* White Circular Arrow Button */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#073BB8] flex items-center justify-center font-black shadow-md group-hover:bg-[#FFF9F1] group-hover:translate-x-1 transition-all flex-shrink-0">
        <span className="text-xs sm:text-sm leading-none">→</span>
      </div>
    </div>
  );
}
