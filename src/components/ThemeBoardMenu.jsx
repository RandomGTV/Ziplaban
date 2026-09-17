import React, { useState } from 'react';
import { Plus, Check, Heart, Sparkles, QrCode, ArrowDownRight, Layers, Eye, Milk, Smile } from 'lucide-react';
import ThemeCup from './ThemeCup';
import ThemeDish from './ThemeDish';
import ZipLabanLogo from './ZipLabanLogo';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function ThemeBoardMenu({ onAddToBag = () => {} }) {
  const [activeBoard, setActiveBoard] = useState(1); // 1: Board 1 | 2: Board 2
  const [justAddedName, setJustAddedName] = useState(null);
  const [posterLightbox, setPosterLightbox] = useState(false);

  const handleItemClick = (name, price, imageType = 'salankatia', category = '') => {
    sound.playChime();
    setJustAddedName(name);
    setTimeout(() => setJustAddedName(null), 1500);

    confetti({
      particleCount: 26,
      spread: 55,
      origin: { y: 0.6 },
      colors: name.includes('Ruh') || name.includes('Strawberry')
        ? ['#F43F5E', '#FDA4AF', '#FFFFFF']
        : ['#0B3E96', '#60A5FA', '#10B981', '#F59E0B'],
    });

    onAddToBag({
      id: `${category}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: name,
      price: price,
      currency: '₹',
      imageType: imageType,
    });
  };

  // ===================== BOARD 1 DATA =====================
  const koshariVariants = [
    { name: 'Kinder Nutella', topping: 'kinder-nutella' },
    { name: 'Trio', topping: 'trio' },
    { name: 'Pistachio Lotus', topping: 'pistachio-lotus' },
  ];

  const salankattiyaVariants = [
    { name: 'Kinder Nutella', topping: 'kinder-nutella' },
    { name: 'Pistachio Nutella', topping: 'pistachio-nutella' },
    { name: 'Nutella Lotus', topping: 'nutella-lotus' },
  ];

  const ruhHayathiVariants = [
    { name: 'Pistachio Nutella', topping: 'pistachio-nutella', heart: true },
    { name: 'Pistachio Lotus', topping: 'pistachio-lotus' },
    { name: 'Nutella Lotus', topping: 'nutella-lotus' },
  ];

  const newArrivals = [
    {
      id: 'hazalnut-bar',
      name: 'HAZALNUT BAR',
      price: 380,
      crop: 'object-[78%_16%] scale-[1.9]',
      desc: 'Rich hazelnut wafer bar with creamy milk filling in official packaging.',
    },
    {
      id: 'lawzi-creme',
      name: 'LAWZI CREME',
      price: 380,
      crop: 'object-[78%_38%] scale-[1.9]',
      desc: 'Roasted Mediterranean almond cream in signature royal blue gift box.',
    },
    {
      id: 'le-zip-de-paris',
      name: 'LE ZIP DE PARIS',
      price: 390,
      crop: 'object-[78%_60%] scale-[1.9]',
      desc: 'Parisian mille-feuille praline layered with Alexandria clotted Kashta.',
    },
    {
      id: 'fazea-chocola-cake',
      name: 'FAZEA CHOCOLA CAKE',
      price: 390,
      crop: 'object-[78%_80%] scale-[1.9]',
      desc: 'A Slice of Happiness! Intense dark chocolate with gold finish.',
    },
  ];

  // ===================== BOARD 2 DATA (OPTIMIZED TO POSTER HIERARCHY) =====================
  const louahItems = [
    {
      id: 'louah-nutella',
      name: 'Zip Laban Louah',
      sub: 'Nutella | Pistachio',
      price: 350,
      dishType: 'cup',
      topping: 'louah-nutella',
    },
    {
      id: 'louah-strawberry',
      name: 'Pistachio Chocolate Louah',
      sub: 'Kinder | Pistachio & Berry',
      price: 350,
      dishType: 'cup',
      topping: 'louah-strawberry',
    },
    {
      id: 'cheese-bomb',
      name: 'Cheese Bomb',
      sub: 'Warm Melted Pastry',
      price: 290,
      dishType: 'pastry',
      topping: 'cheese-bomb',
    },
    {
      id: 'al-mazia',
      name: 'Almazeya (Al Mazia)',
      sub: 'Alexandria Cream Heritage',
      price: 250,
      dishType: 'square',
      topping: 'al-mazia',
    },
    {
      id: 'lazy-cat',
      name: 'Lazy Cat',
      sub: 'Mosaic Biscuit Slab',
      price: 290,
      dishType: 'square',
      topping: 'lazy-cat',
    },
  ];

  const middleSignatureItems = [
    {
      id: 'creme-de-la-creme',
      name: 'Creme De La Creme',
      sub: 'Fresh Strawberries & Double Clotted Kashta',
      price: 380,
      dishType: 'bowl',
      topping: 'creme-de-la-creme',
      badge: 'Bestseller',
      badgeColor: 'bg-rose-600',
    },
    {
      id: 'kabsa-crunch',
      name: 'Kabsa Dessert Crunch',
      sub: 'Chocolate Crispy Rice Pearls over Milk Sponge',
      price: 380,
      dishType: 'bowl',
      topping: 'kabsa',
      badge: 'Crunch Bowl',
      badgeColor: 'bg-sky-600',
    },
  ];

  const layaleeValvetItems = [
    {
      id: 'layalee-strawberry',
      name: 'Strawberry',
      sub: 'Red Velvet & Kashta Cream',
      price: 320,
      dishType: 'box',
      topping: 'layalee-strawberry',
    },
    {
      id: 'layalee-raffaello',
      name: 'Raffaello',
      sub: 'White Velvet & Coconut Almond',
      price: 320,
      dishType: 'box',
      topping: 'layalee-raffaello',
    },
  ];

  const mangoFusionItem = {
    id: 'mango-fusion',
    name: 'Mango Fusion',
    sub: 'Alphonso Mango Cubes & Kashta',
    price: 380,
    dishType: 'tub',
    topping: 'mango-fusion',
  };

  const hebbaCakes = [
    {
      id: 'hebba-kinder',
      name: 'Kinder',
      sub: 'Hazelnut Milk Ganache',
      price: 350,
      dishType: 'tin',
      topping: 'kinder',
    },
    {
      id: 'hebba-pista',
      name: 'Pista',
      sub: 'Kunafa & Crushed Pistachio',
      price: 350,
      dishType: 'tin',
      topping: 'pista',
    },
    {
      id: 'hebba-belgium',
      name: 'Belgium Chocolate',
      sub: 'Dark Ganache & Crisp Pearls',
      price: 390,
      dishType: 'tin',
      topping: 'belgium',
    },
    {
      id: 'hebba-nutella',
      name: 'Nutella',
      sub: 'Caramel & Hazelnut Swirls',
      price: 350,
      dishType: 'tin',
      topping: 'nutella',
    },
  ];

  return (
    <section id="official-board" className="py-16 bg-[#031324] relative z-10 overflow-hidden">
      {/* Toast Notification */}
      {justAddedName && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#10B981] text-white px-6 py-3 rounded-full shadow-2xl font-black text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <Check className="w-5 h-5" />
          <span>Added &ldquo;{justAddedName}&rdquo; To Your Bag!</span>
        </div>
      )}

      {/* Floating Decorative Elements */}
      <div className="absolute top-12 left-10 w-8 h-8 rounded bg-amber-900/60 rotate-12 blur-[1px] pointer-events-none hidden lg:block" />
      <div className="absolute top-48 left-6 w-5 h-7 rounded-full bg-emerald-700/60 -rotate-45 blur-[1px] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-24 left-12 w-9 h-9 rounded bg-amber-950/70 rotate-45 blur-[1px] pointer-events-none hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Board Switcher Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#60A5FA] animate-ping" />
            <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-wide">
              Official Zip Laban Menu Boards
            </h2>
          </div>

          {/* Segmented Board Switcher Tab */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
            <button
              onClick={() => {
                sound.playPop();
                setActiveBoard(1);
              }}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeBoard === 1
                  ? 'bg-[#0E47A8] text-white shadow-lg shadow-blue-500/30 scale-102 border border-blue-400/40'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Board 1</span>
              <span className="hidden sm:inline font-medium opacity-80">&bull; Koshari & New Arrivals</span>
            </button>

            <button
              onClick={() => {
                sound.playPop();
                setActiveBoard(2);
              }}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeBoard === 2
                  ? 'bg-[#0E47A8] text-white shadow-lg shadow-blue-500/30 scale-102 border border-blue-400/40'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>Board 2</span>
              <span className="hidden sm:inline font-medium opacity-80">&bull; Louah, Kabsa & Hebba</span>
            </button>

            {/* Poster Lightbox Trigger */}
            <button
              onClick={() => {
                sound.playPop();
                setPosterLightbox(true);
              }}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors"
              title="View full poster graphics"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            MAIN BOARD CONTAINER
           ========================================================================= */}
        <div className="relative rounded-[32px] sm:rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden border-4 border-[#1E5BB5]/40 flex flex-col lg:flex-row">
          
          {/* =======================================================================
              LEFT BLUE SECTION (~68% on Desktop)
             ======================================================================= */}
          <div className="lg:w-[68%] bg-gradient-to-br from-[#0B3A82] via-[#0E47A8] to-[#072C68] p-4 sm:p-7 lg:p-9 text-white relative">
            
            {/* Top Brand Header Row */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
              <div className="flex items-center gap-3">
                <ZipLabanLogo className="w-12 h-14 sm:w-16 sm:h-18 drop-shadow-lg" />
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none text-white">
                    ZIP <span className="text-[#60A5FA]">LABAN</span>
                  </h3>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-sky-200 block mt-0.5">
                    زيب لبن &bull; Palathara, Kottakkal
                  </span>
                </div>
              </div>

              {/* Hand-written Cursive Script Slogan */}
              <div className="text-right">
                <span className="font-['Caveat',cursive] text-2xl sm:text-3xl md:text-4xl font-bold text-sky-100 tracking-wide block transform -rotate-2">
                  The Sweet Side of Happiness ♡
                </span>
              </div>
            </div>

            {/* Inner Grid: Mascot Sidebar (Desktop) + Products Column */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Mascot Sidebar Column */}
              <div className="md:col-span-4 flex flex-col items-center justify-start text-center pt-2">
                <div
                  onClick={() => {
                    sound.playChime();
                    confetti({
                      particleCount: 35,
                      spread: 60,
                      origin: { y: 0.5 },
                      colors: ['#0B3E96', '#60A5FA', '#F59E0B', '#10B981', '#FFFFFF'],
                    });
                  }}
                  className="relative w-56 sm:w-64 md:w-full max-w-[280px] flex flex-col items-center justify-center cursor-pointer group select-none py-1"
                  title="Tap Zip Boy!"
                >
                  {/* Ambient backglow on the royal blue board */}
                  <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-400/30 transition-colors" />

                  <img
                    src="/images/zip_boy_mascot.png"
                    alt="Official Zip Boy Mascot"
                    className="w-full h-auto max-h-[310px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] group-hover:scale-106 group-hover:-translate-y-2 transition-transform duration-500 relative z-10"
                  />

                  {/* Ground Shadow underneath his blue sneakers */}
                  <div className="w-40 h-4 bg-black/45 rounded-full blur-md -mt-3 relative z-0" />

                  <div className="mt-3 text-center pointer-events-none relative z-10">
                    <span className="text-[10px] uppercase font-black tracking-wider px-3.5 py-1 rounded-full bg-[#0B3E96] text-white border border-sky-300/50 shadow-lg inline-flex items-center gap-1.5 backdrop-blur-sm">
                      <span>Zip Boy Mascot</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </span>
                  </div>
                </div>

                {/* Slogan Below Mascot */}
                <div className="mt-4 px-2">
                  <p className="font-['Fredoka',sans-serif] font-black text-base sm:text-lg text-white leading-tight">
                    {activeBoard === 1 ? 'Happiness in Every Bite ♡' : 'Same Great Taste, Bigger Smiles!'}
                  </p>

                  <div className="mt-4 flex flex-col gap-2 text-left bg-white/5 p-3 rounded-xl border border-white/10 text-xs">
                    <span className="flex items-center gap-2 text-sky-200">
                      <Milk className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span>{activeBoard === 1 ? 'Premium Ingredients' : '100% Clotted Kashta'}</span>
                    </span>
                    <span className="flex items-center gap-2 text-sky-200">
                      <Heart className="w-3.5 h-3.5 text-pink-400" />
                      <span>{activeBoard === 1 ? 'Freshly Made Daily' : 'Warm Molten Centers'}</span>
                    </span>
                    <span className="flex items-center gap-2 text-sky-200">
                      <Smile className="w-3.5 h-3.5 text-amber-300" />
                      <span>Desserts for Everyone</span>
                    </span>
                  </div>

                  <p className="text-[10px] text-sky-200/70 mt-3 italic font-medium">
                    ഒരു ദിവസം പോലും പിരിയാൻ പറ്റാത്ത ബന്ധം!
                  </p>
                </div>
              </div>

              {/* Products Content Column */}
              <div className="md:col-span-8 flex flex-col gap-6">
                
                {/* ----------------- BOARD 1 CONTENT ----------------- */}
                {activeBoard === 1 && (
                  <>
                    {/* KOSHARI */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/15">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase text-white">
                            KOSHARI
                          </h3>
                          <span className="h-0.5 w-12 sm:w-24 bg-white/40 rounded-full" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white text-[#0B3E96] font-black text-sm sm:text-base font-display shadow-md">
                          ₹350
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {koshariVariants.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleItemClick(`Koshari ${item.name}`, 350, 'koshari', 'koshari')}
                            title={`Add Koshari ${item.name} (₹350)`}
                          >
                            <ThemeCup
                              name={item.name}
                              topping={item.topping}
                              cupColor="blue"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SALANKATTIYA */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/15">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase text-white">
                            SALANKATTIYA
                          </h3>
                          <span className="h-0.5 w-12 sm:w-24 bg-white/40 rounded-full" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white text-[#0B3E96] font-black text-sm sm:text-base font-display shadow-md">
                          ₹350
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {salankattiyaVariants.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleItemClick(`Salankattiya ${item.name}`, 350, 'salankatia', 'salankattiya')}
                            title={`Add Salankattiya ${item.name} (₹350)`}
                          >
                            <ThemeCup
                              name={item.name}
                              topping={item.topping}
                              cupColor="blue"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* RUH HAYATHI */}
                    <div className="bg-gradient-to-r from-pink-900/30 via-rose-900/20 to-pink-900/30 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-pink-400/25">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-pink-300/20">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase text-pink-100 flex items-center gap-2">
                            RUH HAYATHI
                            <Heart className="w-4 h-4 fill-pink-400 text-pink-400 animate-pulse" />
                          </h3>
                          <span className="h-0.5 w-8 sm:w-16 bg-pink-300/40 rounded-full" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-pink-500 text-white font-black text-sm sm:text-base font-display shadow-md border border-pink-300">
                          ₹380
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
                        {ruhHayathiVariants.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleItemClick(`Ruh Hayathi ${item.name}`, 380, 'ruh-hayati', 'ruh-hayathi')}
                            title={`Add Ruh Hayathi ${item.name} (₹380)`}
                          >
                            <ThemeCup
                              name={item.name}
                              topping={item.topping}
                              cupColor="pink"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* ----------------- BOARD 2 CONTENT (OPTIMIZED HIERARCHY) ----------------- */}
                {activeBoard === 2 && (
                  <>
                    {/* 1. LOUAH (TOP ROW ON POSTER) */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/15">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase text-white">
                            LOUAH
                          </h3>
                          <span className="h-0.5 w-12 sm:w-28 bg-white/40 rounded-full" />
                        </div>
                        <span className="text-xs font-extrabold text-sky-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                          Loaded Crema & Pastry
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {louahItems.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleItemClick(item.name, item.price, item.id, 'louah')}
                            className="p-3 rounded-2xl bg-white/5 hover:bg-white/12 border border-white/10 hover:border-sky-300/50 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group shadow-md hover:shadow-xl hover:-translate-y-1.5"
                            title={`Add ${item.name} (₹${item.price})`}
                          >
                            <div className="w-full h-28 sm:h-32 flex items-center justify-center">
                              <ThemeDish
                                dishType={item.dishType}
                                topping={item.topping}
                              />
                            </div>
                            <span className="text-xs font-black text-white group-hover:text-sky-300 transition-colors mt-2 line-clamp-1">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-sky-200/75 line-clamp-1 mt-0.5">
                              {item.sub}
                            </span>
                            <span className="mt-2 px-3 py-0.5 rounded-full bg-[#0B3E96] text-white font-black text-xs shadow-md border border-sky-300/40 group-hover:bg-[#1E5BB5] transition-colors">
                              ₹{item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. SIGNATURE BOWLS: CREME DE LA CREME & KABSA (CENTER HERO BOWLS) */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/15">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display font-black text-xl sm:text-2xl tracking-wider uppercase text-white">
                            SIGNATURE BOWLS
                          </h3>
                          <span className="h-0.5 w-12 sm:w-28 bg-white/40 rounded-full" />
                        </div>
                        <span className="text-xs font-extrabold text-sky-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                          Double Clotted Kashta
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {middleSignatureItems.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleItemClick(item.name, item.price, item.id, 'bowl')}
                            className="p-5 sm:p-6 rounded-3xl bg-white/5 hover:bg-white/12 border border-white/15 hover:border-sky-300/50 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
                            title={`Add ${item.name} (₹${item.price})`}
                          >
                            <div className="w-full flex items-center justify-between mb-1">
                              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-white ${item.badgeColor} shadow-sm`}>
                                {item.badge}
                              </span>
                              <span className="text-[10px] font-bold text-sky-200">
                                Fresh Daily
                              </span>
                            </div>

                            <div className="w-full max-w-[260px] h-36 sm:h-44 flex items-center justify-center my-1">
                              <ThemeDish
                                dishType={item.dishType}
                                topping={item.topping}
                              />
                            </div>

                            <h4 className="font-display font-black text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors uppercase tracking-wider mt-2">
                              {item.name}
                            </h4>
                            <p className="text-xs text-sky-100/75 mt-1 line-clamp-1 max-w-xs">
                              {item.sub}
                            </p>

                            <div className="mt-3.5 flex items-center gap-2">
                              <span className="px-4 py-1 rounded-full bg-white text-[#0B3E96] font-black text-sm font-display shadow-lg border border-white group-hover:scale-105 transition-transform">
                                ₹{item.price}
                              </span>
                              <span className="text-[11px] font-bold text-sky-300 group-hover:text-white transition-colors flex items-center gap-1">
                                <Plus className="w-3.5 h-3.5" /> Tap to Add
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. LAYALEE VALVET & MANGO FUSION (MATCHING POSTER STRUCTURE) */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                        {/* Layalee Valvet Section (8 cols) */}
                        <div className="md:col-span-8">
                          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/15">
                            <div className="flex items-center gap-3">
                              <h3 className="font-display font-black text-lg sm:text-xl tracking-wider uppercase text-white">
                                LAYALEE VALVET
                              </h3>
                              <span className="h-0.5 w-12 sm:w-20 bg-white/40 rounded-full" />
                            </div>
                            <span className="text-[10px] font-bold text-sky-200">
                              Chilled Gift Boxes
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {layaleeValvetItems.map((item, idx) => (
                              <div
                                key={idx}
                                onClick={() => handleItemClick(`Layalee Valvet ${item.name}`, item.price, item.id, 'valvet')}
                                className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-sky-300/50 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group shadow-md hover:shadow-xl hover:-translate-y-1.5"
                                title={`Add Layalee Valvet ${item.name} (₹${item.price})`}
                              >
                                <div className="w-full max-w-[170px] h-28 sm:h-32 flex items-center justify-center">
                                  <ThemeDish dishType={item.dishType} topping={item.topping} />
                                </div>
                                <span className="text-xs sm:text-sm font-black text-white group-hover:text-sky-300 transition-colors uppercase tracking-wide mt-2">
                                  {item.name}
                                </span>
                                <span className="text-[10px] text-sky-200/75 line-clamp-1 mt-0.5">
                                  {item.sub}
                                </span>
                                <span className="mt-2 px-3.5 py-0.5 rounded-full bg-[#0E47A8] text-white font-black text-xs shadow-md border border-sky-300/40">
                                  ₹{item.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Dashed Separator (Desktop) */}
                        <div className="hidden md:flex justify-center md:col-span-1">
                          <div className="w-px h-48 border-r-2 border-dashed border-white/25" />
                        </div>

                        {/* Mango Fusion Section (3 cols) */}
                        <div className="md:col-span-3 flex flex-col items-center">
                          <div
                            onClick={() => handleItemClick(mangoFusionItem.name, mangoFusionItem.price, mangoFusionItem.id, 'mango')}
                            className="w-full p-3.5 rounded-2xl bg-gradient-to-b from-amber-500/10 via-white/5 to-white/5 hover:bg-white/15 border border-amber-400/30 hover:border-amber-400/70 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group shadow-md hover:shadow-xl hover:-translate-y-1.5"
                            title={`Add Mango Fusion (₹${mangoFusionItem.price})`}
                          >
                            <div className="w-full max-w-[150px] h-28 sm:h-32 flex items-center justify-center">
                              <ThemeDish dishType={mangoFusionItem.dishType} topping={mangoFusionItem.topping} />
                            </div>
                            <span className="text-xs sm:text-sm font-black text-white group-hover:text-amber-300 transition-colors uppercase tracking-wide mt-2">
                              {mangoFusionItem.name}
                            </span>
                            <span className="text-[10px] text-amber-200/80 line-clamp-1 mt-0.5">
                              {mangoFusionItem.sub}
                            </span>
                            <span className="mt-2 px-3.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-xs shadow-md border border-amber-300/50">
                              ₹{mangoFusionItem.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>

          {/* =======================================================================
              TORN PAPER DIVIDER (Deckled Edge SVG divider)
             ======================================================================= */}
          <div className="relative hidden lg:block w-8 -ml-4 z-20 pointer-events-none self-stretch">
            <svg
              viewBox="0 0 40 1000"
              preserveAspectRatio="none"
              className="w-full h-full drop-shadow-[4px_0_8px_rgba(0,0,0,0.35)]"
            >
              <path
                d="M 20 0 
                   Q 30 50, 15 100 
                   T 25 200 
                   T 10 300 
                   T 28 400 
                   T 14 500 
                   T 26 600 
                   T 12 700 
                   T 27 800 
                   T 15 900 
                   Q 30 950, 20 1000 
                   L 40 1000 
                   L 40 0 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          {/* =======================================================================
              RIGHT SECTION: TEXTURED WHITE PAPER (~32% on Desktop)
             ======================================================================= */}
          <div className="lg:w-[32%] bg-[#FFFFFF] p-6 sm:p-8 lg:p-9 text-[#061826] flex flex-col justify-between relative">
            
            {/* BOARD 1 RIGHT SECTION: NEW ARRIVALS */}
            {activeBoard === 1 && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-['Fredoka',sans-serif] font-black text-3xl sm:text-4xl text-[#0B3E96] tracking-tight uppercase inline-block relative">
                    NEW ARRIVALS
                    <svg viewBox="0 0 200 16" className="w-full h-3 text-[#0B3E96] mt-1 overflow-visible" fill="none">
                      <path d="M 5 8 Q 50 16, 100 6 T 195 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  {newArrivals.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.name, item.price, item.id, 'arrival')}
                      className="group flex items-center gap-4 p-3 rounded-2xl border border-gray-100 hover:border-[#0B3E96]/40 hover:bg-sky-50/40 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shrink-0 shadow-inner relative flex items-center justify-center">
                        <img
                          src="/images/theme_board_1.jpg"
                          alt={item.name}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.crop}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-display font-black text-sm text-[#061826] group-hover:text-[#0B3E96] transition-colors leading-tight">
                            {item.name}
                          </h4>
                          <span className="font-display font-black text-base text-[#0B3E96] shrink-0">
                            ₹{item.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 leading-tight line-clamp-2 mt-1">
                          {item.desc}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleItemClick(item.name, item.price, item.id, 'arrival');
                          }}
                          className="mt-2 text-[10px] font-black uppercase tracking-wider text-[#0B3E96] hover:text-white hover:bg-[#0B3E96] border border-[#0B3E96]/30 px-2.5 py-0.5 rounded-full transition-colors flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          <span>Add To Bag</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BOARD 2 RIGHT SECTION: HEBBA CAKE */}
            {activeBoard === 2 && (
              <div>
                <div className="text-center mb-6">
                  <h3 className="font-['Fredoka',sans-serif] font-black text-3xl sm:text-4xl text-[#0B3E96] tracking-tight uppercase inline-block relative">
                    HEBBA CAKE
                    <svg viewBox="0 0 200 16" className="w-full h-3 text-[#0B3E96] mt-1 overflow-visible" fill="none">
                      <path d="M 5 8 Q 50 16, 100 6 T 195 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </h3>
                  <p className="text-xs font-extrabold text-[#0B3E96]/70 mt-1 uppercase tracking-wider">
                    Egyptian Molten Core Cake Tins
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {hebbaCakes.map((cake, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleItemClick(`Hebba Cake ${cake.name}`, cake.price, cake.id, 'hebba')}
                      className="p-3 sm:p-4 rounded-2xl border border-gray-200 hover:border-[#0B3E96] hover:bg-sky-50/50 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group shadow-xs hover:shadow-lg hover:-translate-y-1.5"
                      title={`Add Hebba Cake ${cake.name} (₹${cake.price})`}
                    >
                      <div className="w-full h-24 sm:h-28 flex items-center justify-center">
                        <ThemeDish
                          dishType={cake.dishType}
                          topping={cake.topping}
                        />
                      </div>
                      <span className="font-display font-black text-xs sm:text-sm text-[#061826] group-hover:text-[#0B3E96] transition-colors mt-1">
                        {cake.name}
                      </span>
                      <span className="text-[10px] text-gray-500 line-clamp-1">
                        {cake.sub}
                      </span>
                      <span className="mt-2 font-display font-black text-xs text-white bg-[#0B3E96] border border-[#0B3E96] px-3.5 py-0.5 rounded-full shadow-xs group-hover:bg-[#082E74] transition-colors">
                        ₹{cake.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 text-xs shadow-inner">
                  <span className="font-black text-[#0B3E96] block mb-1 text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" /> Molten Core Warm Sponge
                  </span>
                  <span className="text-gray-700 leading-relaxed block">
                    Freshly baked Alexandria sponge infused with clotted Kashta, erupting with liquid chocolate and pistachio lava under crisp crimped foil.
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Section: Scan to Follow Us on Instagram */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex flex-col items-start">
                <span className="font-['Caveat',cursive] text-lg font-bold text-[#0B3E96] leading-none flex items-center gap-1">
                  Scan to Follow Us on Instagram
                  <ArrowDownRight className="w-4 h-4 text-[#0B3E96]" />
                </span>
                <a
                  href="https://instagram.com/ziplaban"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-black text-gray-700 hover:text-[#0B3E96] mt-1 group"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@ziplaban</span>
                </a>
              </div>

              {/* QR Code Graphic */}
              <div className="w-14 h-14 p-1.5 bg-gray-50 border border-gray-200 rounded-xl shadow-xs flex items-center justify-center">
                <QrCode className="w-full h-full text-[#0B3E96]" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Full Resolution Poster Lightbox Modal */}
      {posterLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPosterLightbox(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#061826] rounded-3xl overflow-hidden border border-white/20 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#061826]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveBoard(1)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold ${
                    activeBoard === 1 ? 'bg-[#0E47A8] text-white' : 'bg-white/10 text-gray-300'
                  }`}
                >
                  Poster Board 1
                </button>
                <button
                  onClick={() => setActiveBoard(2)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold ${
                    activeBoard === 2 ? 'bg-[#0E47A8] text-white' : 'bg-white/10 text-gray-300'
                  }`}
                >
                  Poster Board 2
                </button>
              </div>

              <button
                onClick={() => setPosterLightbox(false)}
                className="text-gray-400 hover:text-white px-3 py-1 text-xs font-bold"
              >
                Close ✕
              </button>
            </div>

            <div className="p-4 flex items-center justify-center overflow-y-auto">
              <img
                src={activeBoard === 1 ? '/images/theme_board_1.jpg' : '/images/theme_board_2.jpg'}
                alt={`Zip Laban Official Board ${activeBoard}`}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
