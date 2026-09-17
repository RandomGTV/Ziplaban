import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useCart } from '../context/CartContext';
import AwardHero from '../components/hero/AwardHero';
import Mascot from '../components/Mascot';
import ThemeBoardMenu from '../components/ThemeBoardMenu';
import ViralSocialReels from '../components/ViralSocialReels';
import { PRODUCTS } from '../data/products';
import { motion } from 'framer-motion';

export default function HomePage({ onOpenSearch }) {
  const { navigate } = useNavigation();
  const { addToCart } = useCart();
  const [activeKeyword, setActiveKeyword] = useState('CREAMY');

  const keywords = [
    { key: 'CREAMY', label: 'Creamy', desc: '14-hour slow clotted buffalo milk kashta, whipped to velvet perfection.', color: '#073BB8' },
    { key: 'CRUNCHY', label: 'Crunchy', desc: 'Golden clarified-butter kunafa threads toasted until they sizzle and shatter.', color: '#D97706' },
    { key: 'PISTACHIO', label: 'Pistachio', desc: 'Pure stone-ground Antep emerald pistachios with zero artificial food dyes.', color: '#8DBA38' },
    { key: 'CHOCOLATE', label: 'Chocolate', desc: 'Belgian molten ganache and delicate dark cocoa pearls dripping in bliss.', color: '#451A03' },
    { key: 'LOTUS', label: 'Lotus', desc: 'Warm spiced speculoos cookie cream caramelized with brown cane sugar.', color: '#B45309' },
    { key: 'HAPPINESS', label: 'Happiness', desc: 'Crafted to make hearts smile across Malappuram, Calicut, and beyond.', color: '#175EFF' },
  ];

  // Signature bowl selections
  const signatureItems = [
    {
      id: 'koshari-royale',
      name: 'Koshari Royale',
      price: 350,
      badge: 'Bestseller',
      desc: 'Layered crunchy kunafa strands, sweet rice milk, and rich crema.',
      image: '/images/theme_board_1.jpg',
    },
    {
      id: 'salankatiya-pistachio',
      name: 'Salankatiya (The G.O.A.T)',
      price: 350,
      badge: 'Viral Legend',
      desc: 'Toasted golden kunafa nest with molten pistachio lava pour.',
      image: '/images/salankatia.jpg',
    },
    {
      id: 'ruh-hayati',
      name: 'Ruh Hayathi (Soul of Life)',
      price: 380,
      badge: 'Romantic Pink Bowl',
      desc: 'Twin Pistachio & Nutella swirl crowned with pink candy heart.',
      image: '/images/qashtuta.jpg',
    },
    {
      id: 'fazea-chocola-cake',
      name: 'Fazea Chocola Cake',
      price: 390,
      badge: 'Viral Cake 🍫',
      desc: 'Belgian dark sponge filled with flowing molten ganache & pearls.',
      image: '/images/molten_bomb.jpg',
    },
  ];

  return (
    <div className="w-full bg-[#FFF9F1] overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. AWARD-WINNING CINEMATIC HERO SECTION                                   */}
      {/* ========================================================================= */}
      <AwardHero onOpenSearch={onOpenSearch} />

      {/* ========================================================================= */}
      {/* 2. SIGNATURE PRODUCTS STRIP                                               */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative border-y border-[#063BB6]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3 py-1 rounded-full">
                Signature Bowls
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10204A] mt-3"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                Legendary Creations
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                The four viral treats that introduced authentic Egyptian sweetness to Kerala.
              </p>
            </div>

            <button
              onClick={() => navigate('/menu')}
              className="mt-4 md:mt-0 text-sm font-bold text-[#063BB6] hover:text-[#022B84] flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Menu</span>
              <span>→</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8, rotate: 0.5 }}
                className="bg-[#FFF9F1] rounded-3xl p-5 border border-[#063BB6]/15 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div>
                  {/* Image container */}
                  <div className="w-full h-48 rounded-2xl overflow-hidden bg-white shadow-sm mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#063BB6] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-black text-[#10204A] group-hover:text-[#063BB6] transition-colors"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#063BB6]/10 flex items-center justify-between">
                  <span className="text-lg font-black text-[#063BB6]">₹{item.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const fullProd = PRODUCTS.find((p) => p.id === item.id) || item;
                      addToCart(fullProd, 1);
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-[#063BB6] hover:bg-[#022B84] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    + Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 AUTHENTIC THEME BOARDS (BOARD 1 & BOARD 2 SWITCHER)                   */}
      {/* ========================================================================= */}
      <ThemeBoardMenu onAddToBag={(item) => addToCart(item, 1)} />

      {/* ========================================================================= */}
      {/* 3. BENEFIT STRIP (4 ICONS)                                                */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#063BB6] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                🥛
              </div>
              <div>
                <h4
                  className="text-base font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  Premium Ingredients
                </h4>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  100% farm buffalo milk, authentic Alexandria kashta, and whole Antep pistachios.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                ⚡
              </div>
              <div>
                <h4
                  className="text-base font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  Freshly Made
                </h4>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  Slow-churned continuously across midnight hours so every bite is at peak crispness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                🎉
              </div>
              <div>
                <h4
                  className="text-base font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  Desserts for Everyone
                </h4>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  Generous, shareable portions created to bring families, friends, and sweet tooths together.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                🌱
              </div>
              <div>
                <h4
                  className="text-base font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  A Sweeter Tomorrow
                </h4>
                <p className="text-xs text-blue-100/75 leading-relaxed">
                  Clean recipe philosophy with zero artificial stabilizers, gelatin, or chemical preservatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY ZIP LABAN? SPLIT INTERACTIVE KEYWORDS                              */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F1] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Interactive Keyword Buttons */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3 py-1 rounded-full">
                The Sensation
              </span>

              <h2
                className="text-3xl sm:text-5xl font-black text-[#10204A] leading-tight"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                Why Does Everyone Fall in Love with ZIP LABAN?
              </h2>

              <p className="text-base text-gray-600">
                Click each sensation to discover what makes our handcrafted Egyptian desserts impossible to forget.
              </p>

              {/* Keyword Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {keywords.map((item) => {
                  const isSelected = activeKeyword === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setActiveKeyword(item.key)}
                      className={`px-5 py-2.5 rounded-2xl text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#063BB6] text-white shadow-lg scale-105'
                          : 'bg-white text-[#10204A] border border-[#063BB6]/15 hover:border-[#063BB6]'
                      }`}
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Highlight Box for active keyword */}
              <motion.div
                key={activeKeyword}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-3xl bg-white border-2 border-[#063BB6]/15 shadow-lg"
              >
                <h4
                  className="text-xl font-black text-[#063BB6] mb-2"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  The {keywords.find((k) => k.key === activeKeyword)?.label} Factor
                </h4>
                <p className="text-sm text-[#10204A]/80 leading-relaxed font-medium">
                  {keywords.find((k) => k.key === activeKeyword)?.desc}
                </p>
              </motion.div>
            </div>

            {/* Right side: Visual Display & Mascot */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3">
                <img
                  src="/images/real_promo.png"
                  alt="Zip Laban Real Creation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061826]/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold text-[#8DB936] uppercase tracking-wider">
                    Made with Heritage
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-black mt-1"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    Every Single Spoonful Tells a Story
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/90 mt-1">
                    From Cairo’s street corners to Kottakkal’s Palathara bypass.
                  </p>
                </div>
              </div>

              {/* Peeking Mascot Sticker */}
              <div className="absolute -bottom-8 -right-4 hidden sm:block">
                <Mascot
                  variant="sticker"
                  size="sm"
                  speechText="Taste the magic!"
                  speechPosition="left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.5 VIRAL SOCIAL REELS & VERIFIED REVIEWS                                 */}
      {/* ========================================================================= */}
      <ViralSocialReels />

      {/* ========================================================================= */}
      {/* 5. BUILD YOUR BOWL CTA BANNER                                             */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#063BB6] via-[#145DFF] to-[#022B84] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full">
              Interactive Builder
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 leading-tight"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Build Your Own Happiness Bowl!
            </h2>
            <p className="text-sm sm:text-base text-blue-100 mt-2">
              Choose your favorite sponge or kunafa base, cascade rich pistachio crema, add golden crunches, and finish with a warm molten lava pour.
            </p>
            <button
              onClick={() => navigate('/build-your-bowl')}
              className="mt-6 px-8 py-3.5 rounded-full bg-white text-[#063BB6] hover:bg-[#FFF9F1] font-black text-sm sm:text-base shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Launch Bowl Studio</span>
              <span>🥣</span>
            </button>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <div className="w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-white/10 p-3 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
              <img
                src="/images/salankatia.jpg"
                alt="Happiness Bowl"
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
