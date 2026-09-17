import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import { MENU_ARRIVALS } from '../data/menuCatalog';
import ProductImage from '../components/menu/ProductImage';
import Mascot from '../components/Mascot';
import { motion } from 'framer-motion';

export default function NewArrivalsPage() {
  const { addToCart } = useCart();
  const { navigate } = useNavigation();

  // The 4 campaign drops
  const drops = [
    {
      id: 'hazalnut-bar',
      name: 'HAZELNUT BAR',
      subtitle: 'Crispy Hazelnut Wafer & Cold Laban Core',
      price: 380,
      badge: 'DROP 01 • ON-THE-GO',
      image: '/images/salankatia.jpg',
      align: 'left',
      accentColor: '#145DFF',
      description:
        'A revolutionary snackable bar that marries roasted Italian hazelnuts, airy wafer crunches, and our signature slow-churned clotted milk cream. Handcrafted for late-night drives across Malappuram.',
      notes: ['Roasted Piedmont Hazelnuts', 'Crispy Wafer Layers', 'Cold Clotted Milk Core'],
      calories: '360 kcal',
    },
    {
      id: 'lawzi-creme',
      name: 'LAWZI CREME',
      subtitle: 'Toasted Almond Croquant & Pure Alexandria Clotted Silk',
      price: 380,
      badge: 'DROP 02 • LIMITED HARVEST',
      image: '/images/theme_board_2.jpg',
      align: 'right',
      accentColor: '#8DB936',
      description:
        'Inspired by centuries-old North African pastry kitchens: whole roasted Mediterranean almonds folded tenderly into velvet clotted buffalo cream, crowned with organic orange blossom honey mist.',
      notes: ['Mediterranean Almonds', 'Buffalo Milk Kashta', 'Blossom Honey Mist'],
      calories: '490 kcal',
    },
    {
      id: 'le-zip-de-paris',
      name: 'LE ZIP DE PARIS',
      subtitle: 'French Mille-Feuille Craft Meets Cairo Heritage',
      price: 390,
      badge: 'DROP 03 • HAUTE PATISSERIE',
      image: '/images/qashtuta.jpg',
      align: 'left',
      accentColor: '#D97706',
      description:
        'Presented in our signature royal blue gift box: delicate, whisper-thin caramelized puff pastry sheets layered between Egyptian clotted cream and roasted hazelnut praline.',
      notes: ['Golden French Puff', 'Alexandria Clotted Kashta', 'Hazelnut Praline Ganache'],
      calories: '510 kcal',
    },
    {
      id: 'fazea-chocola-cake',
      name: 'FAZEA CHOCOLA CAKE',
      subtitle: 'The Viral Molten Ganache & Dark Sponge Sensation',
      price: 390,
      badge: 'DROP 04 • VIRAL PHENOMENON',
      image: '/images/molten_bomb.jpg',
      align: 'right',
      accentColor: '#E11D48',
      description:
        'The cake that took social media by storm! Decadent Belgian 70% dark sponge with an explosive warm molten ganache core, dusted with crispy cocoa crunch pearls and edible gold shimmer.',
      notes: ['70% Belgian Cocoa', 'Explosive Molten Ganache', 'Cocoa Crunch Pearls', '24K Gold Shimmer'],
      calories: '540 kcal',
    },
  ];

  const handleQuickAdd = (drop) => {
    const fullProd = MENU_ARRIVALS.find((p) => p.id === drop.id) || {
      id: drop.id,
      name: drop.name,
      price: drop.price,
      currency: '₹',
    };
    addToCart(fullProd, 1);
  };

  return (
    <div className="w-full min-h-screen bg-[#022B84] text-white selection:bg-[#8DB936] selection:text-white pt-24 pb-24">
      {/* ========================================================================= */}
      {/* DARK ROYAL BLUE HERO                                                      */}
      {/* ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Glow ambient circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#145DFF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-black uppercase tracking-widest text-[#8DB936]">
            <span className="w-2 h-2 rounded-full bg-[#8DB936] animate-ping" />
            <span>EXCLUSIVELY LAUNCHED • SEASON 2026</span>
          </div>

          <h1
            className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase leading-none"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            NEW ARRIVALS
          </h1>

          <p className="text-base sm:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto">
            Four boundary-pushing creations combining centuries of Middle Eastern heritage with contemporary culinary theatre.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EDITORIAL CAMPAIGN SHOWCASES (ALTERNATING)                                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-8">
        {drops.map((drop, index) => {
          const isLeft = drop.align === 'left';
          return (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                !isLeft ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Area */}
              <div
                className={`lg:col-span-6 relative ${
                  !isLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer" onClick={() => navigate(`/product/${drop.id}`)}>
                  <div className="w-full h-[400px] sm:h-[480px] p-8"><ProductImage product={MENU_ARRIVALS.find(item => item.id === drop.id)} /></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022B84] via-transparent to-transparent opacity-60" />

                  {/* Top floating badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#022B84] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {drop.badge}
                  </span>

                  {/* Calorie tag */}
                  <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1 rounded-full">
                    {drop.calories}
                  </span>
                </div>
              </div>

              {/* Text & Campaign Spec Area */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  !isLeft ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-2">
                  <span
                    className="text-xs font-black uppercase tracking-widest text-[#8DB936]"
                  >
                    Edition #{index + 1}
                  </span>
                  <h2
                    className="text-4xl sm:text-5xl font-black tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {drop.name}
                  </h2>
                  <p className="text-base text-blue-200 font-medium">
                    {drop.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-blue-100/85 leading-relaxed">
                  {drop.description}
                </p>

                {/* Tasting Notes */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Tasting & Sensory Notes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {drop.notes.map((note, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs text-white font-semibold"
                      >
                        ✓ {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-4 flex items-center gap-6">
                  <div>
                    <span className="text-xs text-blue-300 block">Launch Price</span>
                    <span className="text-3xl font-black text-[#8DB936]">₹{drop.price}</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(drop)}
                    className="px-8 py-3.5 rounded-full bg-[#145DFF] hover:bg-white hover:text-[#063BB6] text-white font-extrabold text-sm shadow-xl transition-all cursor-pointer flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    <span>Taste Now</span>
                    <span>→</span>
                  </button>

                  <button
                    onClick={() => navigate(`/product/${drop.id}`)}
                    className="text-xs font-bold text-blue-200 hover:text-white underline cursor-pointer"
                  >
                    Full Details
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Mascot Special Section at Bottom */}
      <div className="max-w-4xl mx-auto mt-24 text-center px-4">
        <Mascot
          variant="waving"
          size="md"
          speechText="All 4 drops churned fresh tonight!"
          speechPosition="top"
        />
      </div>
    </div>
  );
}
