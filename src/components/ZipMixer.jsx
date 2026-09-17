import React, { useState } from 'react';
import { Sparkles, Check, Flame, Plus, RotateCcw, Award, Layers } from 'lucide-react';
import { MIXER_OPTIONS } from '../data/products';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function ZipMixer({ onAddCustomBowl = () => {} }) {
  const [selectedBase, setSelectedBase] = useState(MIXER_OPTIONS.bases[0]);
  const [selectedCream, setSelectedCream] = useState(MIXER_OPTIONS.creams[0]);
  const [selectedToppings, setSelectedToppings] = useState([MIXER_OPTIONS.toppings[0]]);
  const [selectedDrizzle, setSelectedDrizzle] = useState(MIXER_OPTIONS.drizzles[0]);
  const [bowlName, setBowlName] = useState('My Egyptian Royal Bowl');

  // Toggle topping item
  const toggleTopping = (topping) => {
    sound.playCrunch();
    if (selectedToppings.some((t) => t.id === topping.id)) {
      if (selectedToppings.length > 1) {
        setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
      }
    } else {
      if (selectedToppings.length < 3) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    }
  };

  // Calculate totals
  const totalPrice =
    selectedBase.price +
    selectedCream.price +
    selectedToppings.reduce((acc, t) => acc + t.price, 0) +
    selectedDrizzle.price;

  const totalCalories =
    selectedBase.cal +
    selectedCream.cal +
    selectedToppings.reduce((acc, t) => acc + t.cal, 0) +
    selectedDrizzle.cal;

  const handleCreateOrder = () => {
    sound.playChime();
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#009BE8', '#10B981', '#F59E0B', '#F43F5E', '#FFFFFF'],
    });

    const customProduct = {
      id: `custom-bowl-${Date.now()}`,
      name: bowlName || 'Custom Zip Laban Bowl',
      price: totalPrice,
      currency: '₹',
      calories: `${totalCalories} kcal`,
      description: `Custom bowl with ${selectedBase.name}, ${selectedCream.name}, ${selectedToppings
        .map((t) => t.name)
        .join(', ')} and ${selectedDrizzle.name}.`,
      imageType: 'qashtuta',
      isCustom: true,
      customDetails: {
        base: selectedBase.name,
        cream: selectedCream.name,
        toppings: selectedToppings.map((t) => t.name),
        drizzle: selectedDrizzle.name,
      },
    };

    onAddCustomBowl(customProduct);
  };

  return (
    <section id="mixer" className="py-24 bg-gradient-to-b from-white via-[#F0F9FF] to-[#FFFDF9] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Dessert Lab</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#061826] font-display tracking-tight leading-none mb-4">
            The Zip Laban Mixer
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Become the master dessert artisan. Layer authentic slow-churned kashta, spun kunafa, and velvety drizzles.
            Watch your creation build in real-time.
          </p>
        </div>

        {/* The Mixer Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive 3D Real-Time Bowl Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[420px] bg-white rounded-3xl p-5 sm:p-8 border-2 border-[#009BE8]/20 shadow-2xl relative flex flex-col items-center">
              {/* Bowl Title & Reset */}
              <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
                <input
                  type="text"
                  value={bowlName}
                  onChange={(e) => setBowlName(e.target.value)}
                  className="font-display font-bold text-base sm:text-lg text-[#061826] bg-transparent border-b border-dashed border-gray-300 focus:border-[#009BE8] focus:outline-none w-3/4"
                />
                <button
                  onClick={() => {
                    sound.playPop();
                    setSelectedBase(MIXER_OPTIONS.bases[0]);
                    setSelectedCream(MIXER_OPTIONS.creams[0]);
                    setSelectedToppings([MIXER_OPTIONS.toppings[0]]);
                    setSelectedDrizzle(MIXER_OPTIONS.drizzles[0]);
                    setBowlName('My Egyptian Royal Bowl');
                  }}
                  title="Reset to Default"
                  className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Bowl Graphic Render */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 my-2 sm:my-4 flex items-center justify-center">
                <svg viewBox="0 0 280 280" className="w-full h-full drop-shadow-2xl overflow-visible">
                  {/* Shadow */}
                  <ellipse cx="140" cy="235" rx="100" ry="24" fill="rgba(6,24,38,0.12)" filter="blur(6px)" />
                  
                  {/* Porcelain Bowl Silhouette */}
                  <path d="M40 130 Q140 270 240 130 Z" fill="#FFFFFF" stroke="#009BE8" strokeWidth="2.5" />
                  <ellipse cx="140" cy="130" rx="100" ry="24" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

                  {/* Layer 1: Selected Base */}
                  <path
                    d="M55 138 Q140 245 225 138 Z"
                    fill={selectedBase.color}
                    opacity="0.95"
                    className="transition-colors duration-500"
                  />

                  {/* Layer 2: Selected Cream Wave */}
                  <path
                    d="M60 135 C85 165, 110 130, 140 155 C170 140, 200 160, 220 135 C200 200, 80 200, 60 135 Z"
                    fill={selectedCream.color}
                    className="transition-colors duration-500"
                    filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
                  />

                  {/* Layer 3: Selected Drizzle Stream */}
                  <path
                    d="M75 135 Q110 115 140 140 T205 132"
                    fill="none"
                    stroke={selectedDrizzle.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="transition-colors duration-500"
                  />
                  <path
                    d="M95 145 Q140 125 185 148"
                    fill="none"
                    stroke={selectedDrizzle.color}
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.85"
                    className="transition-colors duration-500"
                  />

                  {/* Layer 4: Selected Topping Sprinkles */}
                  {selectedToppings.map((top, idx) => (
                    <g key={top.id} className="transition-all duration-300">
                      <circle cx={105 + idx * 30} cy={125} r="4.5" fill={top.color} />
                      <circle cx={125 + idx * 25} cy={140} r="5" fill={top.color} />
                      <circle cx={155 + idx * 20} cy={128} r="4" fill={top.color} />
                      <rect x={115 + idx * 35} y={133} width="5" height="4" rx="1" fill={top.color} transform="rotate(25)" />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Real-time Nutrition & Price Meters */}
              <div className="w-full bg-[#F8FAFC] rounded-2xl p-4 border border-gray-200 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Energy Profile
                  </span>
                  <span className="text-base font-extrabold text-[#061826]">
                    {totalCalories} kcal
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Total Price
                  </span>
                  <span className="text-2xl font-black text-[#009BE8] font-display">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleCreateOrder}
                className="w-full mt-4 py-4 bg-gradient-to-r from-[#009BE8] to-[#0077B6] hover:from-[#0086c9] hover:to-[#006499] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-sky-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Custom Bowl To Bag &bull; ₹{totalPrice}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Step 1: Base Layer */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#009BE8] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="font-display font-bold text-lg text-[#061826]">
                  Choose Base Layer
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MIXER_OPTIONS.bases.map((base) => (
                  <button
                    key={base.id}
                    onClick={() => {
                      sound.playCrunch();
                      setSelectedBase(base);
                    }}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      selectedBase.id === base.id
                        ? 'border-[#009BE8] bg-[#E0F2FE]/40 ring-2 ring-[#009BE8]/30 scale-102'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#009BE8] uppercase tracking-wider block">
                        {base.tag}
                      </span>
                      <span className="text-xs font-bold text-[#061826] block leading-tight mt-0.5">
                        {base.name}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                      <span>₹{base.price}</span>
                      <span>{base.cal} cal</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Velvety Cream Cascade */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#10B981] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="font-display font-bold text-lg text-[#061826]">
                  Select Cream Cascade
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MIXER_OPTIONS.creams.map((cream) => (
                  <button
                    key={cream.id}
                    onClick={() => {
                      sound.playPour();
                      setSelectedCream(cream);
                    }}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                      selectedCream.id === cream.id
                        ? 'border-[#10B981] bg-[#ECFDF5] ring-2 ring-[#10B981]/30 scale-102'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-wider block">
                        {cream.tag}
                      </span>
                      <span className="text-xs font-bold text-[#061826] block leading-tight mt-0.5">
                        {cream.name}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                      <span>₹{cream.price}</span>
                      <span>{cream.cal} cal</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Toppings & Crunch (Select up to 3) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#D97706] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#061826]">
                    Crunch & Toppings (Pick up to 3)
                  </h3>
                </div>
                <span className="text-xs font-semibold text-gray-400">
                  {selectedToppings.length}/3 Selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MIXER_OPTIONS.toppings.map((top) => {
                  const isChecked = selectedToppings.some((t) => t.id === top.id);
                  return (
                    <button
                      key={top.id}
                      onClick={() => toggleTopping(top)}
                      className={`p-3 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#D97706] bg-amber-50/70 ring-1 ring-[#D97706]'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="text-left">
                        <span className="text-xs font-bold text-[#061826] block leading-tight">
                          {top.name}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-500">
                          +₹{top.price} &bull; {top.cal} cal
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          isChecked ? 'bg-[#D97706] border-[#D97706] text-white' : 'border-gray-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Drizzle Finish */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#061826] text-white text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h3 className="font-display font-bold text-lg text-[#061826]">
                  Drizzle Finish
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MIXER_OPTIONS.drizzles.map((drizzle) => (
                  <button
                    key={drizzle.id}
                    onClick={() => {
                      sound.playPour();
                      setSelectedDrizzle(drizzle);
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedDrizzle.id === drizzle.id
                        ? 'border-[#061826] bg-gray-100 ring-2 ring-gray-900/20'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#061826] block leading-tight">
                      {drizzle.name}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-500 mt-1 block">
                      +₹{drizzle.price} &bull; {drizzle.cal} cal
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
