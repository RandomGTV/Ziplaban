import { ORDERING_ENABLED } from '../../config/ordering';
import React from 'react';
import { ArrowRight, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';

export default function FeatureProductSection({ product, index }) {
  const { addToCart } = useCart();
  const { navigate } = useNavigation();

  const isEven = index % 2 === 0;
  // Hazelnut Bar (0: cream, left image), Lawzi Creme (1: blue, right image), Le Zip (2: cream, left image), Fazea (3: dark navy, right image)
  const isBlueTheme = product.theme === 'blue';
  const isDarkTheme = product.theme === 'dark-navy';
  const isDarkBackground = isBlueTheme || isDarkTheme;

  const handleAdd = () => {
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

  const handleNavigateDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <section 
      id={product.id}
      data-alias={product.aliasId}
      className={`relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors ${
        isDarkTheme 
          ? 'bg-gradient-to-b from-[#032B82] via-[#0B1E4A] to-[#0A1633] text-white' 
          : isBlueTheme 
            ? 'bg-[#073BB8] text-white' 
            : 'bg-[#FFF8EE] text-[#10204A]'
      }`}
    >
      {/* Decorative Background Accents */}
      {isBlueTheme && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      )}
      {isDarkTheme && (
        <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-[#175EFF]/15 rounded-full blur-[100px] pointer-events-none" />
      )}
      {!isDarkBackground && (
        <div className="absolute top-0 right-10 w-72 h-72 bg-[#175EFF]/5 rounded-full blur-2xl pointer-events-none" />
      )}

      {/* Subtle fine blue grid lines for Le Zip De Paris */}
      {product.theme === 'luxury-cream' && (
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#073BB8 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
          !isEven ? 'lg:flex-row-reverse' : ''
        }`}>
          
          {/* ======================================================================= */}
          {/* IMAGE COLUMN (Responsive: On mobile, image shows first)                */}
          {/* ======================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`order-1 ${isEven ? 'lg:order-1 lg:col-span-6' : 'lg:order-2 lg:col-span-6'} relative flex items-center justify-center`}
          >
            {/* Elegant Cream Ribbon/Swoosh behind Lawzi Creme */}
            {isBlueTheme && (
              <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-white/15 via-white/5 to-transparent rounded-full blur-2xl pointer-events-none" />
            )}

            {/* Product Card / Showcase Pod */}
            <div className="relative w-full max-w-[500px] group">
              {/* Soft Pedestal Shadow */}
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-xl pointer-events-none ${
                isDarkBackground ? 'bg-black/60' : 'bg-[#073BB8]/15'
              }`} />

              <div 
                onClick={handleNavigateDetail}
                className={`relative rounded-3xl p-6 sm:p-10 transition-all duration-300 cursor-pointer ${
                  isDarkTheme
                    ? 'bg-white/5 border border-white/15 shadow-2xl backdrop-blur-md group-hover:border-[#E11D48]/50'
                    : isBlueTheme
                      ? 'bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md group-hover:border-white/40'
                      : 'bg-white border border-[#073BB8]/10 shadow-[0_20px_50px_rgba(7,59,184,0.08)] group-hover:shadow-[0_25px_60px_rgba(7,59,184,0.15)] group-hover:border-[#073BB8]/25'
                }`}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-[320px] sm:h-[400px] object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Handwritten Stamp */}
                {product.handwrittenNote && (
                  <div 
                    className={`absolute -top-4 -right-2 sm:-right-4 px-4 py-1.5 rounded-full shadow-lg text-xs sm:text-sm font-bold rotate-[4deg] ${
                      isDarkBackground ? 'bg-[#FFF8EE] text-[#073BB8]' : 'bg-[#073BB8] text-white'
                    }`}
                    style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
                  >
                    {product.handwrittenNote}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ======================================================================= */}
          {/* TEXT & DETAILS COLUMN                                                  */}
          {/* ======================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className={`order-2 ${isEven ? 'lg:order-2 lg:col-span-6' : 'lg:order-1 lg:col-span-6'} space-y-6 text-left`}
          >
            {/* Badges and Edition Header */}
            <div className="flex items-center gap-3">
              <span className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                isDarkBackground
                  ? 'bg-white/15 text-[#8DBA38] border border-white/20'
                  : 'bg-[#073BB8]/10 text-[#073BB8] border border-[#073BB8]/20'
              }`}>
                {product.badge}
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isDarkBackground ? 'text-blue-200/70' : 'text-[#10204A]/60'
              }`}>
                {product.edition} • {product.heroHighlight}
              </span>
            </div>

            {/* Giant Title & Price Header */}
            <div className="space-y-2">
              <h2 
                className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase ${
                  isDarkBackground ? 'text-white' : 'text-[#10204A]'
                }`}
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                {product.name}
              </h2>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-[#8DBA38]">
                  ₹{product.price}
                </span>
                <span className={`text-xs uppercase tracking-wider font-semibold ${
                  isDarkBackground ? 'text-blue-200/70' : 'text-[#10204A]/50'
                }`}>
                  Taxes Included • Single Serving
                </span>
              </div>
            </div>

            {/* Short Narrative & Long Description */}
            <p className={`text-base sm:text-lg leading-relaxed font-normal ${
              isDarkBackground ? 'text-blue-100/85' : 'text-[#10204A]/80'
            }`}>
              {product.description}
            </p>
            <p className={`text-sm leading-relaxed hidden sm:block ${
              isDarkBackground ? 'text-blue-200/70' : 'text-[#10204A]/65'
            }`}>
              {product.longDescription}
            </p>

            {/* Ingredient & Flavour Tags */}
            <div className="space-y-2 pt-2">
              <span className={`text-xs font-extrabold uppercase tracking-wider block ${
                isDarkBackground ? 'text-blue-300' : 'text-[#073BB8]'
              }`}>
                Flavour Architecture:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span 
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                      isDarkBackground
                        ? 'bg-white/10 border border-white/20 text-white'
                        : 'bg-[#073BB8]/5 border border-[#073BB8]/15 text-[#073BB8]'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tasting Notes Checklist */}
            <div className="space-y-2 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.notes.map((note) => (
                  <div key={note} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#8DBA38] text-white flex items-center justify-center flex-shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className={`text-xs font-semibold ${
                      isDarkBackground ? 'text-blue-100' : 'text-[#10204A]'
                    }`}>
                      {note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={handleNavigateDetail}
                className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-extrabold text-sm shadow-xl hover:scale-[1.02] transition-all cursor-pointer ${
                  isDarkBackground
                    ? 'bg-white text-[#073BB8] hover:bg-[#FFF8EE]'
                    : 'bg-[#073BB8] text-white hover:bg-[#032B82]'
                }`}
              >
                <span>{product.ctaText}</span>
              </button>

              <button
                disabled={!ORDERING_ENABLED} onClick={handleAdd}
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm border hover:scale-[1.02] transition-all cursor-pointer ${
                  isDarkBackground
                    ? 'bg-white/10 hover:bg-white/20 border-white/30 text-white'
                    : 'bg-[#073BB8]/5 hover:bg-[#073BB8]/10 border-[#073BB8]/20 text-[#073BB8]'
                }`}
              >
                <ShoppingBag size={16} />
                <span>{ORDERING_ENABLED ? product.actionLabel : 'Ordering paused'}</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
