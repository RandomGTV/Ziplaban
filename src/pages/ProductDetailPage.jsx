import { ORDERING_ENABLED } from '../config/ordering';
import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import Mascot from '../components/Mascot';
import { motion } from 'framer-motion';

export default function ProductDetailPage() {
  const { productSlug, navigate } = useNavigation();
  const { addToCart } = useCart();

  // Find product by slug or fallback to first bestseller
  const product =
    PRODUCTS.find((p) => p.id === productSlug) ||
    PRODUCTS.find((p) => p.id === 'salankatiya-pistachio') ||
    PRODUCTS[0];

  // Size option
  const sizes = [
    { label: 'Regular Bowl', extraPrice: 0, tag: 'Single Joy' },
    { label: 'Large Bowl', extraPrice: 60, tag: 'More Happiness' },
    { label: 'Family Sharing', extraPrice: 150, tag: 'Party Tub' },
  ];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  // Extras list
  const availableExtras = [
    { id: 'pista-lava', name: 'Antep Pistachio Lava', price: 50 },
    { id: 'nutella-ganache', name: 'Warm Nutella Ganache', price: 40 },
    { id: 'lotus-speculoos', name: 'Spiced Lotus Speculoos', price: 40 },
    { id: 'kinder-bar', name: 'Whole Kinder Bar', price: 40 },
    { id: 'crema-trio', name: 'Triple Crema Trio (Pista, Lotus, Nutella)', price: 50 },
  ];
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  // Toggle extra
  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.some((e) => e.id === extra.id)
        ? prev.filter((e) => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  // Pricing calculations
  const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const unitPrice = product.price + selectedSize.extraPrice + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity, {
      size: selectedSize.label,
      extras: selectedExtras.map((e) => `${e.name} (+₹${e.price})`),
      extrasPrice: extrasTotal + selectedSize.extraPrice,
      unitPrice: product.price + selectedSize.extraPrice,
    });
  };

  // 5-layer ingredient stack representation
  const layers = [
    {
      name: 'Toasted Antep Pistachio Lava',
      color: 'bg-[#8DB936]',
      textColor: 'text-white',
      desc: 'Warm, slow-poured stone-ground emerald pistachios from Gaziantep.',
    },
    {
      name: 'Spiced Lotus Biscoff Crumb',
      color: 'bg-[#D97706]',
      textColor: 'text-white',
      desc: 'Caramelized Belgian speculoos cookie dust with delicate cinnamon crunch.',
    },
    {
      name: '100% Alexandria Buffalo Kashta',
      color: 'bg-[#FFFDF9] border border-gray-200',
      textColor: 'text-[#063BB6]',
      desc: 'Whipped clotted dairy cream skimmed from farm-fresh buffalo milk.',
    },
    {
      name: 'Sizzling Golden Kunafa Threads',
      color: 'bg-[#F59E0B]',
      textColor: 'text-white',
      desc: 'Spun pastry strands crisped in clarified butter until paper-thin and brittle.',
    },
    {
      name: 'Egyptian Milk Sponge Base',
      color: 'bg-[#FEF3C7]',
      textColor: 'text-[#78350F]',
      desc: 'Cloud-soft sponge cake soaked in cold sweet cardamon-infused milk.',
    },
  ];

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-[#FFFDF9] pt-28 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Back navigation */}
        <div>
          <button
            onClick={() => navigate('/menu')}
            className="text-xs font-bold text-[#063BB6] hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <span>← Back to All Creations</span>
          </button>
        </div>

        {/* Product Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Product Image & Interactive Tilt Bowl */}
          <div className="lg:col-span-6 sticky top-28">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FFF9F1]"
            >
              <img
                src={
                  product.imageType === 'salankatia'
                    ? '/images/salankatia.jpg'
                    : product.imageType === 'koshari'
                    ? '/images/theme_board_1.jpg'
                    : product.imageType === 'ruh-hayati'
                    ? '/images/qashtuta.jpg'
                    : product.imageType === 'fazea-chocola'
                    ? '/images/molten_bomb.jpg'
                    : '/images/umm_ali.jpg'
                }
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Tag / Badge */}
              {product.tag && (
                <span className="absolute top-4 left-4 bg-[#063BB6] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg">
                  {product.tag}
                </span>
              )}

              {/* Live Rating Pill */}
              <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-[#10204A] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span>{product.rating}</span>
                <span className="text-gray-400">({product.reviewsCount} reviews)</span>
              </span>
            </motion.div>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-xs">
                <span className="text-xl">🥛</span>
                <p className="text-[11px] font-bold text-[#10204A] mt-1">100% Buffalo Milk</p>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-xs">
                <span className="text-xl">🔥</span>
                <p className="text-[11px] font-bold text-[#10204A] mt-1">Freshly Churned</p>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-gray-100 shadow-xs">
                <span className="text-xl">✨</span>
                <p className="text-[11px] font-bold text-[#10204A] mt-1">Zero Preservatives</p>
              </div>
            </div>
          </div>

          {/* Right: Options & Checkout Stepper */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3 py-1 rounded-full">
                {product.category.toUpperCase()}
              </span>
              <h1
                className="text-3xl sm:text-5xl font-black text-[#10204A] mt-3 leading-tight"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Step 1: Select Size */}
            <div className="space-y-3">
              <label className="text-sm font-black text-[#10204A] uppercase tracking-wider block">
                1. Choose Portion Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((s) => {
                  const isSelected = selectedSize.label === s.label;
                  return (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSize(s)}
                      className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#063BB6] bg-[#063BB6]/5 text-[#063BB6] shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                      }`}
                    >
                      <span className="block text-xs font-bold">{s.label}</span>
                      <span className="block text-[10px] text-gray-400 mt-0.5">{s.tag}</span>
                      <span className="block text-xs font-extrabold text-[#063BB6] mt-1">
                        {s.extraPrice > 0 ? `+₹${s.extraPrice}` : 'Included'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Extra Molten Drizzles & Toppings */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-black text-[#10204A] uppercase tracking-wider block">
                  2. Add Extra Indulgence
                </label>
                <span className="text-xs text-gray-400">Optional</span>
              </div>
              <div className="space-y-2">
                {availableExtras.map((extra) => {
                  const isChecked = selectedExtras.some((e) => e.id === extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra)}
                      className={`p-3 rounded-2xl border-2 flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#8DB936] bg-[#8DB936]/10 text-[#10204A]'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded text-[#8DB936] accent-[#8DB936]"
                        />
                        <span className="text-sm font-bold">{extra.name}</span>
                      </div>
                      <span className="text-sm font-black text-[#063BB6]">+₹{extra.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Quantity & Add to Cart Action */}
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-500">Quantity</span>
                <div className="flex items-center bg-white border border-gray-300 rounded-xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-[#10204A] hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-black text-[#10204A] text-base">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-lg font-bold text-[#10204A] hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total & Button */}
              <button
                disabled={!ORDERING_ENABLED} onClick={handleAddToCart}
                className="w-full py-4 bg-[#063BB6] hover:bg-[#022B84] text-white font-extrabold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                <span>{ORDERING_ENABLED ? 'Add to Order' : 'Ordering paused'}</span>
                <span>•</span>
                <span>₹{totalPrice}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5-LAYER INGREDIENT BREAKDOWN                                              */}
        {/* ========================================================================= */}
        <div className="bg-[#FFF9F1] rounded-3xl p-8 sm:p-12 border border-[#063BB6]/15">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3 py-1 rounded-full">
              Anatomy of Perfection
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#10204A] mt-3"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              The 5-Layer Happiness Breakdown
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Every single component is prepared separately to guarantee the golden crunch never dissolves into the cold cream.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Layer Visual */}
            <div className="lg:col-span-6 space-y-2">
              {layers.map((layer, index) => {
                const isActive = activeLayerIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveLayerIndex(index)}
                    className={`p-4 rounded-2xl transition-all cursor-pointer flex items-center justify-between ${
                      layer.color
                    } ${layer.textColor} ${
                      isActive ? 'ring-4 ring-[#063BB6] scale-102 shadow-lg' : 'opacity-90 hover:opacity-100'
                    }`}
                  >
                    <span className="font-extrabold text-sm sm:text-base">
                      Layer {5 - index}: {layer.name}
                    </span>
                    <span className="text-xs font-bold uppercase">
                      {isActive ? 'Selected' : 'Inspect'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Layer Detail Box */}
            <div className="lg:col-span-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl space-y-4">
              <span className="text-xs font-black text-[#8DB936] uppercase tracking-widest">
                Layer {5 - activeLayerIndex} of 5
              </span>
              <h3
                className="text-2xl font-black text-[#063BB6]"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                {layers[activeLayerIndex].name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {layers[activeLayerIndex].desc}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#10204A]">
                <span>✓ Tested for 0% sogginess</span>
                <span>•</span>
                <span>✓ Pure Artisanal Recipe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Desserts */}
        <div className="pt-8">
          <h3
            className="text-2xl font-black text-[#10204A] mb-6"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Pairs Wonderfully With
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/product/${rel.id}`)}
                className="p-4 rounded-3xl bg-[#FFF9F1] border border-[#063BB6]/15 hover:shadow-lg cursor-pointer transition-all flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={
                      rel.imageType === 'salankatia'
                        ? '/images/salankatia.jpg'
                        : rel.imageType === 'koshari'
                        ? '/images/theme_board_1.jpg'
                        : '/images/qashtuta.jpg'
                    }
                    alt={rel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#10204A]">{rel.name}</h4>
                  <span className="text-xs font-extrabold text-[#063BB6]">₹{rel.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
