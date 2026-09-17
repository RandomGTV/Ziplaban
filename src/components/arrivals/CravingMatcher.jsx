import React, { useState } from 'react';
import { Sparkles, ShoppingBag, ArrowRight, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CravingMatcher({ products }) {
  const [selectedCraving, setSelectedCraving] = useState('CHOCOLATE');
  const { addToCart } = useCart();
  const { navigate } = useNavigation();

  const cravings = [
    { key: 'CHOCOLATE', label: 'Chocolate', emoji: '🍫', desc: 'Deep, rich cocoa ganache' },
    { key: 'CREAMY', label: 'Creamy', emoji: '🥛', desc: 'Slow-churned clotted kashta' },
    { key: 'NUTTY', label: 'Nutty', emoji: '🌰', desc: 'Toasted almonds & praline' },
    { key: 'CRUNCHY', label: 'Crunchy', emoji: '✨', desc: 'Wafer shatter & crisp pearls' },
  ];

  // Match logic
  const currentMatch = products.find((p) => p.cravingKey === selectedCraving) || products[0];

  const handleAdd = () => {
    addToCart(
      {
        id: currentMatch.id,
        name: currentMatch.name,
        price: currentMatch.price,
        currency: currentMatch.currency,
        image: currentMatch.image,
      },
      1
    );
  };

  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#073BB8]/10 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#175EFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#073BB8]/5 border border-[#073BB8]/15 text-[#073BB8] text-xs font-black uppercase tracking-widest">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>Interactive Matchmaker</span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl font-black text-[#10204A] tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Find Your New Favourite
          </h2>

          <p className="text-base sm:text-lg text-[#10204A]/70 font-medium">
            What are you craving tonight? Tap an indulgence to find your perfect match.
          </p>
        </div>

        {/* Craving Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {cravings.map((item) => {
            const isSelected = selectedCraving === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setSelectedCraving(item.key)}
                className={`relative px-6 sm:px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-[#073BB8] text-white shadow-[0_10px_25px_rgba(7,59,184,0.3)] scale-105'
                    : 'bg-[#FFF8EE] text-[#10204A] hover:bg-[#073BB8]/10 border border-[#073BB8]/15'
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#8DBA38] animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Match Reveal Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMatch.id}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFF8EE] border-2 border-[#073BB8]/15 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 sm:grid-cols-12 gap-8 items-center text-left relative overflow-hidden"
            >
              {/* Image Preview */}
              <div className="sm:col-span-5 flex items-center justify-center relative">
                <div className="w-full h-56 sm:h-64 relative flex items-center justify-center">
                  <img
                    src={currentMatch.image}
                    alt={currentMatch.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Match Details */}
              <div className="sm:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#8DBA38] bg-[#8DBA38]/15 px-3 py-1 rounded-full border border-[#8DBA38]/20">
                    Match Found • {currentMatch.badge}
                  </span>
                  <span className="text-2xl font-black text-[#073BB8]">
                    ₹{currentMatch.price}
                  </span>
                </div>

                <h3 
                  className="text-2xl sm:text-3xl font-black text-[#10204A] uppercase"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {currentMatch.name}
                </h3>

                <p className="text-sm sm:text-base text-[#10204A]/80 leading-relaxed">
                  {currentMatch.cravingMatchText}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {currentMatch.tags.map((t) => (
                    <span key={t} className="text-xs font-bold uppercase tracking-wider text-[#073BB8] bg-white px-2.5 py-0.5 rounded-md border border-[#073BB8]/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleAdd}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#073BB8] hover:bg-[#032B82] text-white font-black text-sm shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <ShoppingBag size={15} />
                    <span>Add to Order</span>
                  </button>

                  <button
                    onClick={() => navigate(`/product/${currentMatch.id}`)}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-[#FFF8EE] border border-[#073BB8]/20 text-[#073BB8] font-bold text-sm hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
