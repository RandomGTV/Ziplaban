import { ORDERING_ENABLED } from '../../config/ordering';
﻿import React from 'react';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

export default function NewArrivalsCTA({ onOrderClick }) {
  const { navigate } = useNavigation();
  const { openDrawer } = useCart();

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0537A8] to-[#032B82] text-white overflow-hidden text-center">
      {/* Glow depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#175EFF]/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Pistachio & Chocolate Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img src="/images/floating_pistachio_left.png" alt="" className="absolute top-12 left-12 w-9 opacity-80 animate-bounce [animation-duration:5s]" />
        <img src="/images/floating_pistachio_right.png" alt="" className="absolute bottom-16 left-24 w-8 opacity-75 rotate-12" />
        <img src="/images/floating_pistachio_center.png" alt="" className="absolute top-20 right-28 w-8 opacity-70 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* Sparkle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#8DBA38] text-xs font-black uppercase tracking-widest backdrop-blur-md">
          <Sparkles size={14} />
          <span>LIMITED DAILY BATCHES</span>
        </div>

        {/* Big Headline */}
        <h2 
          className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          New Today.<br />
          <span className="text-[#FCD34D]" style={{ fontFamily: '"Kalam", "Caveat", cursive' }}>
            Favourite Tomorrow. ♡
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-blue-100/90 max-w-xl mx-auto font-medium">
          Try the newest ZIP LABAN creations before everyone else. Handcrafted fresh every afternoon.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            disabled={!ORDERING_ENABLED} onClick={onOrderClick}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-[#073BB8] hover:bg-[#FFF8EE] font-black text-base shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-all cursor-pointer"
          >
            <span>{ORDERING_ENABLED ? 'Order New Arrivals' : 'Ordering paused'}</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => navigate('/menu')}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base backdrop-blur-md hover:scale-105 transition-all cursor-pointer"
          >
            <span>View Full Menu</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Mascot Peeking from bottom right */}
        <div className="relative pt-12 flex justify-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-40 sm:w-48 filter drop-shadow-2xl cursor-pointer"
            onClick={openDrawer}
            title="Open Bag"
          >
            <img 
              src="/images/zip_boy_mascot.png" 
              alt="Zip Mascot" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
