import React from 'react';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';

export default function NewArrivalsGrid({ products }) {
  const { addToCart } = useCart();
  const { navigate } = useNavigation();

  const handleAdd = (product) => {
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

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#032B82] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#175EFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#001850]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#8DBA38] text-xs font-black uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Complete Launch Lineup</span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Explore the New Drop
          </h2>

          <p className="text-base sm:text-lg text-blue-100/80 font-medium">
            Four handcrafted signature items available in limited daily batches across Malappuram & Calicut.
          </p>
        </div>

        {/* 4 Cards Grid: Desktop 4, Tablet 2, Mobile horizontal scroll */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 sm:pb-0 sm:overflow-visible snap-x snap-mandatory scrollbar-none text-left">
          {products.map((product) => {
            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-[280px] sm:w-auto snap-center rounded-3xl bg-white/10 border border-white/15 p-6 flex flex-col justify-between group shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-white/35 backdrop-blur-md transition-all relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#FFF8EE] text-[#073BB8] shadow-sm">
                    {product.badge}
                  </span>
                  <span className="text-xl font-black text-[#8DBA38]">
                    ₹{product.price}
                  </span>
                </div>

                {/* Product Image Container */}
                <div 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full h-48 sm:h-52 flex items-center justify-center cursor-pointer relative mb-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500 filter drop-shadow-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2 mb-6">
                  <h3 
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#FCD34D] transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-blue-100/75 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => handleAdd(product)}
                    className="w-full py-3 rounded-2xl bg-white text-[#073BB8] hover:bg-[#FFF8EE] font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag size={14} />
                    <span>Add to Order</span>
                  </button>

                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full py-2.5 rounded-2xl bg-transparent hover:bg-white/10 text-white/80 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
