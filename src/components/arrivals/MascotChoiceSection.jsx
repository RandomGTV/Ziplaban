import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';

export default function MascotChoiceSection({ products }) {
  const [activeProductId, setActiveProductId] = useState(products[0]?.id || 'hazalnut-bar');
  const { addToCart } = useCart();
  const { navigate } = useNavigation();

  const activeProduct = products.find((p) => p.id === activeProductId) || products[0];

  const speechNotes = {
    'hazalnut-bar': 'Super crunchy! Roasted hazelnuts in every single bite! ♡',
    'lawzi-creme': 'Velvety smooth Alexandria clotted milk & almond crunch! ♡',
    'le-zip-de-paris': 'Ooh la la! 12 French praline chocolate domes! ♡',
    'fazea-chocola-cake': 'Molten warm ganache exploding with happiness! ♡',
  };

  const handleAdd = (product, e) => {
    e.stopPropagation();
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        currency: product.currency,
        image: product.image,
      },
      1
    );
  };

  const renderProductCard = (p) => {
    const isActive = p.id === activeProductId;
    return (
      <motion.div
        key={p.id}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setActiveProductId(p.id)}
        className={`w-full rounded-3xl p-4 sm:p-5 transition-all duration-300 cursor-pointer text-left relative ${
          isActive
            ? 'bg-white border-2 border-[#073BB8] shadow-[0_15px_30px_rgba(7,59,184,0.18)] scale-[1.02]'
            : 'bg-white/80 border border-[#073BB8]/15 shadow-sm hover:bg-white hover:border-[#073BB8]/40 hover:shadow-md'
        }`}
      >
        {isActive && (
          <span className="absolute -top-2.5 right-4 bg-[#8DBA38] text-[#10204A] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
            Selected
          </span>
        )}
        <div className="w-full h-24 sm:h-28 flex items-center justify-center mb-3">
          <img 
            src={p.image} 
            alt={p.name} 
            className="max-h-full max-w-full object-contain filter drop-shadow-md" 
          />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase text-[#8DBA38] tracking-wider block">
            {p.badge}
          </span>
          <h4 
            className="text-sm sm:text-base font-black text-[#10204A] leading-tight line-clamp-1 uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            {p.name}
          </h4>
          <div className="flex items-center justify-between pt-1.5">
            <span className="text-sm font-black text-[#073BB8]">₹{p.price}</span>
            <button
              onClick={(e) => handleAdd(p, e)}
              className="p-2 rounded-full bg-[#073BB8]/10 hover:bg-[#073BB8] text-[#073BB8] hover:text-white transition-colors cursor-pointer"
              title="Quick Add to Bag"
              aria-label={`Add ${p.name} to order`}
            >
              <ShoppingBag size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EE] to-white relative overflow-hidden text-center">
      {/* Dynamic Background Glow matching active product */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] opacity-20 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: activeProduct.accentColor || '#073BB8' }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#073BB8] bg-[#073BB8]/10 px-4 py-1.5 rounded-full border border-[#073BB8]/20 inline-flex items-center gap-1.5">
            <Sparkles size={14} className="text-[#8DBA38]" />
            Mascot’s Recommendation
          </span>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Which One Are You Trying First?
          </h2>
          <p className="text-base sm:text-lg text-[#10204A]/70 max-w-xl mx-auto font-medium">
            Tap a creation around Zip to get his insider scoop on tonight’s fresh batch.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* DESKTOP BALANCED 3-COLUMN STAGE (Left 2 - Mascot - Right 2)          */}
        {/* ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Left Column: Product 0 & Product 1 */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {products.slice(0, 2).map((p) => renderProductCard(p))}
          </div>

          {/* Center Column: Central Mascot with Dynamic Speech Bubble */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[440px]">
            {/* Speech Bubble */}
            <motion.div 
              key={activeProductId}
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[#073BB8] text-white px-6 py-3.5 rounded-2xl shadow-xl border-2 border-white/20 mb-6 max-w-sm text-center relative z-20"
              style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
            >
              <p className="text-base sm:text-lg font-bold leading-snug">
                {speechNotes[activeProductId] || 'Handcrafted fresh tonight with pure happiness! ♡'}
              </p>
              {/* Speech bubble beak */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#073BB8] rotate-45 border-r border-b border-white/20" />
            </motion.div>

            {/* Mascot Image */}
            <motion.div
              animate={{
                rotate: activeProductId === 'hazalnut-bar' || activeProductId === 'le-zip-de-paris' ? -2 : 2,
                y: [0, -8, 0],
              }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                rotate: { duration: 0.4 },
              }}
              className="w-56 filter drop-shadow-[0_25px_35px_rgba(7,59,184,0.22)]"
            >
              <img 
                src="/images/zip_boy_mascot.png" 
                alt="Zip Laban Mascot" 
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </motion.div>

            {/* Active Label Pill */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-xs font-bold text-[#073BB8]">
              <span className="w-2 h-2 rounded-full bg-[#8DBA38] animate-pulse" />
              <span>Talking about: <strong>{activeProduct.name}</strong></span>
            </div>
          </div>

          {/* Right Column: Product 2 & Product 3 */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {products.slice(2, 4).map((p) => renderProductCard(p))}
          </div>

        </div>

        {/* ===================================================================== */}
        {/* MOBILE & TABLET STAGE (Mascot on Top, 2x2 Grid Below)                 */}
        {/* ===================================================================== */}
        <div className="lg:hidden space-y-8">
          
          {/* Central Mascot with Speech Bubble */}
          <div className="flex flex-col items-center justify-center">
            {/* Speech Bubble */}
            <motion.div 
              key={`mob-${activeProductId}`}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[#073BB8] text-white px-5 py-2.5 rounded-2xl shadow-xl border-2 border-white/20 mb-4 max-w-xs text-center relative"
              style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
            >
              <p className="text-sm sm:text-base font-bold leading-snug">
                {speechNotes[activeProductId] || 'Handcrafted fresh tonight with pure happiness! ♡'}
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#073BB8] rotate-45" />
            </motion.div>

            {/* Mascot Image */}
            <div className="w-44 sm:w-52 filter drop-shadow-[0_20px_30px_rgba(7,59,184,0.2)]">
              <img 
                src="/images/zip_boy_mascot.png" 
                alt="Zip Laban Mascot" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 2x2 Product Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
            {products.map((p) => renderProductCard(p))}
          </div>

        </div>

      </div>
    </section>
  );
}
