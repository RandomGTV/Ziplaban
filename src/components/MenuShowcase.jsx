import React, { useState, useMemo } from 'react';
import { Search, Plus, Eye, Sparkles, Heart, Check, ShieldCheck, X, FileText, ChevronRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import DessertVisual from './DessertVisual';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function MenuShowcase({ onAddToBag = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [justAddedId, setJustAddedId] = useState(null);
  const [menuCardModalOpen, setMenuCardModalOpen] = useState(false);
  const [activeMenuPage, setActiveMenuPage] = useState(1);

  // Filter products based on category and search text
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.flavorNotes.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.flavorVariants && item.flavorVariants.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (product, e, customVariant = null) => {
    e?.stopPropagation();
    sound.playChime();
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1200);

    // Micro-confetti pop from button location
    confetti({
      particleCount: 22,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#009BE8', '#10B981', '#F59E0B', '#FFFFFF'],
    });

    const itemToAdd = {
      ...product,
      name: customVariant ? `${product.name} (${customVariant})` : product.name,
    };
    onAddToBag(itemToAdd);
  };

  const openProductModal = (product) => {
    setActiveModalProduct(product);
    setSelectedVariant(product.flavorVariants ? product.flavorVariants[0] : null);
  };

  return (
    <section id="creations" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#009BE8]/10 text-[#009BE8] font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authentic Egyptian & Kottakkal Menu</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#061826] font-display tracking-tight leading-none mb-4">
            Legendary Creations
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
            Simmered in copper vats using 100% farm buffalo milk. Experience the viral sensations from Alexandria now freshly served at Palathara, Kottakkal.
          </p>

          {/* Action Row: Official Menu Card Trigger & Search */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl mt-6">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Koshari, Salankatiya, Ruh Hayati..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#009BE8] focus:bg-white text-xs sm:text-sm font-medium transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Official Menu Card Button */}
            <button
              onClick={() => {
                sound.playPop();
                setMenuCardModalOpen(true);
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#061826] hover:bg-[#009BE8] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 shrink-0"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Official Menu Card</span>
            </button>
          </div>
        </div>

        {/* Real Brand Promo Banner: The Iconic Trio Feature */}
        <div className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#061826] via-[#0A2540] to-[#061826] border-2 border-[#009BE8]/30 shadow-2xl p-6 sm:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-pink-300 font-bold text-xs uppercase tracking-wider mb-4">
                <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                <span>The Unbreakable Bond</span>
              </div>

              {/* Malayalam Authentic Tagline */}
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight mb-2 font-display">
                ഒരു ദിവസം പോലും പിരിയാൻ പറ്റാത്ത ബന്ധം!
              </h3>
              <p className="text-xs sm:text-sm text-sky-200 font-medium mb-6 max-w-lg">
                &ldquo;A bond that cannot be separated even for a single day!&rdquo; — Experience the iconic trio: <strong className="text-white">Creme de la creme</strong>, <strong className="text-pink-300">Ruh Hayati</strong> in the signature pink heart bowl, and crunchy <strong className="text-amber-300">Kabsa</strong>.
              </p>

              {/* Trio Mini Cards */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-6">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur text-center">
                  <span className="text-[10px] uppercase font-bold text-sky-300 block">Strawberry</span>
                  <span className="text-xs font-black block">Creme de la creme</span>
                  <span className="text-xs font-extrabold text-[#009BE8]">₹380</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-500/20 border border-pink-400/30 backdrop-blur text-center relative overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-pink-300 block">Iconic Heart</span>
                  <span className="text-xs font-black block text-pink-100">Ruh Hayati</span>
                  <span className="text-xs font-extrabold text-pink-300">₹380</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur text-center">
                  <span className="text-[10px] uppercase font-bold text-amber-300 block">Chocolate Puffs</span>
                  <span className="text-xs font-black block">Kabsa Crunch</span>
                  <span className="text-xs font-extrabold text-[#009BE8]">₹380</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    const ruhHayati = PRODUCTS.find((p) => p.id === 'ruh-hayati');
                    if (ruhHayati) openProductModal(ruhHayati);
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/30 active:scale-95 flex items-center gap-2"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Taste Ruh Hayati</span>
                </button>
                <button
                  onClick={() => {
                    sound.playPop();
                    setMenuCardModalOpen(true);
                  }}
                  className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  View Menu Card
                </button>
              </div>
            </div>

            {/* Right Poster Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group">
                <img
                  src="/images/real_promo.png"
                  alt="Zip Laban Real Promo Banner"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-amber-400/30">
                    Official Kottakkal Signature Trio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playPop();
                setSelectedCategory(cat.id);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#061826] text-white shadow-md shadow-gray-900/20 scale-102'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                sound.playPop();
                openProductModal(product);
              }}
              className="group relative bg-[#FFFDF9] rounded-3xl border border-gray-200/80 hover:border-[#009BE8]/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Card Top: Tags */}
              <div className="p-6 pb-0 flex items-start justify-between z-10 relative">
                <span className={`px-3 py-1 rounded-full text-white font-extrabold text-[11px] uppercase tracking-wider ${product.badgeColor} shadow-sm`}>
                  {product.tag}
                </span>
                <span className="text-xs font-bold text-gray-500 bg-white/80 backdrop-blur px-2.5 py-1 rounded-full border border-gray-200">
                  {product.calories}
                </span>
              </div>

              {/* Central Visual Showcase */}
              <div className="px-6 py-4 flex items-center justify-center relative my-auto">
                <div className="w-56 h-56 transform group-hover:scale-108 transition-transform duration-500 ease-out flex items-center justify-center">
                  <DessertVisual type={product.imageType} className="w-full h-full" />
                </div>
              </div>

              {/* Card Content & Action Bottom */}
              <div className="p-6 pt-2 bg-white/70 border-t border-gray-100/90 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-display font-bold text-xl text-[#061826] group-hover:text-[#009BE8] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <span className="text-xl font-black text-[#009BE8] font-display shrink-0">
                    {product.currency}
                    {product.price}
                  </span>
                </div>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Flavor Notes Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.flavorNotes.slice(0, 3).map((note, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-700"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playPop();
                      openProductModal(product);
                    }}
                    className="flex-1 py-2.5 rounded-xl border border-gray-200 hover:border-gray-400 text-gray-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-gray-500" />
                    <span>Quick Taste</span>
                  </button>

                  <button
                    onClick={(e) => handleAdd(product, e)}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                      justAddedId === product.id
                        ? 'bg-[#10B981] text-white scale-98'
                        : 'bg-[#009BE8] hover:bg-[#0086c9] text-white shadow-sky-500/20 active:scale-95'
                    }`}
                  >
                    {justAddedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add To Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <p className="text-lg font-bold text-gray-700">No creations found matching &quot;{searchQuery}&quot;</p>
            <p className="text-sm text-gray-500 mt-1">Try searching for &quot;Salankatiya&quot;, &quot;Koshari&quot;, or &quot;Ruh Hayati&quot;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[#009BE8] text-white font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Official Scanned Menu Cards Lightbox Modal */}
      {menuCardModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setMenuCardModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#061826] rounded-3xl shadow-2xl overflow-hidden border border-white/20 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between text-white bg-[#061826]/90">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#009BE8]" />
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl leading-none">
                    Official Zip Laban Menu
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">
                    Palathara, Kottakkal Branch &bull; Verified Authentic Menu
                  </span>
                </div>
              </div>

              {/* Page Switcher Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveMenuPage(1)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeMenuPage === 1 ? 'bg-[#009BE8] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Page 1 (Koshari & Salankatiya)
                </button>
                <button
                  onClick={() => setActiveMenuPage(2)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    activeMenuPage === 2 ? 'bg-[#009BE8] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Page 2 (Kabsa & Hebba)
                </button>
                <button
                  onClick={() => setMenuCardModalOpen(false)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Menu Image Preview */}
            <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-black/40">
              <img
                src={activeMenuPage === 1 ? '/images/menu_page_1.jpg' : '/images/menu_page_2.jpg'}
                alt={`Zip Laban Official Menu Page ${activeMenuPage}`}
                className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}

      {/* Quick Taste Detail Modal */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-t-[32px] sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row h-[88vh] sm:h-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Left / Top: Visual */}
            <div className="md:w-1/2 bg-gradient-to-b from-[#E0F2FE] via-[#F0FDF4] to-[#FFFDF9] p-5 sm:p-8 flex flex-col items-center justify-center relative shrink-0">
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white font-extrabold text-xs uppercase ${activeModalProduct.badgeColor}`}>
                {activeModalProduct.tag}
              </span>
              <div className="w-40 h-40 sm:w-64 sm:h-64 flex items-center justify-center my-auto">
                <DessertVisual type={activeModalProduct.imageType} className="w-full h-full" />
              </div>
              <div className="text-center mt-1 sm:mt-2">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Texture Profile
                </span>
                <p className="font-extrabold text-xs sm:text-sm text-[#061826]">
                  {activeModalProduct.texture}
                </p>
              </div>
            </div>

            {/* Modal Right: Details */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-display font-black text-2xl text-[#061826] leading-snug">
                    {activeModalProduct.name}
                  </h3>
                  <button
                    onClick={() => setActiveModalProduct(null)}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black text-[#009BE8] font-display">
                    {activeModalProduct.currency}
                    {activeModalProduct.price}
                  </span>
                  <span className="text-xs font-bold text-gray-400">&bull;</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {activeModalProduct.calories}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {activeModalProduct.description}
                </p>

                {/* Flavor Variants Selection (if available) */}
                {activeModalProduct.flavorVariants && (
                  <div className="mb-5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">
                      Select Flavor Variant
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProduct.flavorVariants.map((variant, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedVariant(variant)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedVariant === variant
                              ? 'bg-[#009BE8] text-white shadow-sm scale-102'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Flavor Notes */}
                <div className="mb-5">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">
                    Sensory Notes
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProduct.flavorNotes.map((note, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#009BE8]/10 text-[#009BE8] border border-[#009BE8]/20"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dietary Guarantees */}
                <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#10B981] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#061826] block">100% Egyptian Buffalo Milk Guarantee</span>
                    <span className="text-gray-500">Pure clotted Kashta with zero artificial stabilizers.</span>
                  </div>
                </div>
              </div>

              {/* Add CTA */}
              <button
                onClick={(e) => {
                  handleAdd(activeModalProduct, e, selectedVariant);
                  setActiveModalProduct(null);
                }}
                className="w-full py-3.5 bg-[#009BE8] hover:bg-[#0086c9] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-sky-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>
                  Add {selectedVariant ? `"${selectedVariant}"` : ''} &bull; {activeModalProduct.currency}{activeModalProduct.price}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
