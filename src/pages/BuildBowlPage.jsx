import React, { useState } from 'react';
import { BUILDER_STEPS } from '../data/builderOptions';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import Mascot from '../components/Mascot';
import { motion, AnimatePresence } from 'framer-motion';

export default function BuildBowlPage() {
  const { addToCart } = useCart();
  const { navigate } = useNavigation();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selections, setSelections] = useState({
    base: BUILDER_STEPS[0].options[1], // default Toasted Kunafa
    sauce: BUILDER_STEPS[1].options[0], // default Royal Pistachio
    crunch: BUILDER_STEPS[2].options[0], // default Kunafa strands
    toppings: [BUILDER_STEPS[3].options[0], BUILDER_STEPS[3].options[3]], // Pistachios + Pink Heart
    finish: BUILDER_STEPS[4].options[0], // Warm Pistachio Lava
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const currentStep = BUILDER_STEPS[currentStepIndex];

  // Dynamic mascot speech based on step and choices
  const getMascotCommentary = () => {
    if (isCompleted) return 'Masterpiece! Packed with pure happiness!';
    switch (currentStepIndex) {
      case 0:
        return selections.base?.name.includes('Kunafa')
          ? 'Toasted Kunafa! Maximum crunch choice! ♡'
          : 'Mmm, cloud soft sponge base is legendary!';
      case 1:
        return selections.sauce?.name.includes('Pistachio')
          ? 'Antep Pistachio! You have royal taste! 🟢'
          : 'Lotus Biscoff Kashta? Sweet caramel dreams!';
      case 2:
        return 'Never skip the crunch layer! Makes every spoonful sing!';
      case 3:
        return 'The pink heart candy makes it an official Zip bowl! 💖';
      case 4:
        return 'The warm molten pour is pure visual theatre! 🔥';
      default:
        return 'Let’s build something incredible together!';
    }
  };

  // Option selection logic
  const handleSelectOption = (option) => {
    if (currentStep.isMultiSelect) {
      const currentList = selections[currentStep.id] || [];
      const exists = currentList.some((item) => item.id === option.id);
      if (exists) {
        setSelections({
          ...selections,
          [currentStep.id]: currentList.filter((item) => item.id !== option.id),
        });
      } else {
        if (currentList.length < (currentStep.maxSelections || 3)) {
          setSelections({
            ...selections,
            [currentStep.id]: [...currentList, option],
          });
        }
      }
    } else {
      setSelections({
        ...selections,
        [currentStep.id]: option,
      });
    }
  };

  // Pricing calculation
  const basePrice = selections.base?.price || 0;
  const saucePrice = selections.sauce?.price || 0;
  const crunchPrice = selections.crunch?.price || 0;
  const toppingsPrice = (selections.toppings || []).reduce((sum, t) => sum + t.price, 0);
  const finishPrice = selections.finish?.price || 0;
  const totalBowlPrice = basePrice + saucePrice + crunchPrice + toppingsPrice + finishPrice;

  // Add custom bowl to cart
  const handleAddBowlToCart = () => {
    const customBowlProduct = {
      id: `custom-bowl-${Date.now()}`,
      name: `Custom Happiness Bowl (${selections.sauce?.name.split(' ')[0] || 'Royal'} Special)`,
      price: totalBowlPrice,
      currency: '₹',
      imageType: 'salankatia',
    };

    const extras = [
      `Base: ${selections.base?.name}`,
      `Crema: ${selections.sauce?.name}`,
      `Crunch: ${selections.crunch?.name}`,
      `Toppings: ${(selections.toppings || []).map((t) => t.name).join(', ')}`,
      `Finish: ${selections.finish?.name}`,
    ];

    addToCart(customBowlProduct, 1, {
      isCustomBowl: true,
      size: 'Custom Artisan Bowl',
      extras,
      extrasPrice: 0,
      unitPrice: totalBowlPrice,
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFDF9] pt-28 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3.5 py-1.5 rounded-full">
            Artisanal Dessert Studio
          </span>
          <h1
            className="text-4xl sm:text-6xl font-black text-[#10204A] mt-3 leading-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Build Your Happiness Bowl! 🥣
          </h1>
          <p className="text-base text-gray-600 mt-2 font-medium">
            Choose your base, swirl rich Egyptian clotted creams, add texture crunches, and finish with a warm molten lava drizzle.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="max-w-4xl mx-auto bg-[#FFF9F1] p-3 rounded-2xl border border-[#063BB6]/15 flex items-center justify-between overflow-x-auto gap-2">
          {BUILDER_STEPS.map((s, index) => {
            const isCurrent = currentStepIndex === index;
            const isDone = currentStepIndex > index;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentStepIndex(index);
                  setIsCompleted(false);
                }}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#063BB6] text-white shadow-md'
                    : isDone
                    ? 'bg-[#8DB936]/15 text-[#063BB6]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isCurrent
                      ? 'bg-white text-[#063BB6]'
                      : isDone
                      ? 'bg-[#8DB936] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {isDone ? '✓' : index + 1}
                </span>
                <span className="truncate">{s.title.replace('Choose Your ', '')}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MAIN STUDIO GRID                                                          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Choices */}
          <div className="lg:col-span-7 bg-[#FFF9F1] p-6 sm:p-8 rounded-3xl border border-[#063BB6]/15 space-y-6">
            {!isCompleted ? (
              <>
                <div className="flex items-center justify-between border-b border-[#063BB6]/10 pb-4">
                  <div>
                    <span className="text-xs font-black text-[#8DB936] uppercase tracking-wider">
                      Step {currentStepIndex + 1} of 5
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl font-black text-[#10204A]"
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      {currentStep.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      {currentStep.subtitle}
                    </p>
                  </div>

                  {currentStep.isMultiSelect && (
                    <span className="text-xs font-bold text-[#063BB6] bg-white px-2.5 py-1 rounded-full border border-[#063BB6]/20">
                      Pick up to 3 ({(selections.toppings || []).length}/3)
                    </span>
                  )}
                </div>

                {/* Option Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentStep.options.map((option) => {
                    let isSelected = false;
                    if (currentStep.isMultiSelect) {
                      isSelected = (selections[currentStep.id] || []).some((o) => o.id === option.id);
                    } else {
                      isSelected = selections[currentStep.id]?.id === option.id;
                    }

                    return (
                      <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelectOption(option)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#063BB6] bg-white shadow-md ring-2 ring-[#063BB6]/20'
                            : 'border-gray-200/80 bg-white/70 hover:border-gray-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl">{option.icon}</span>
                            <span className="text-[10px] font-bold text-[#063BB6] bg-[#063BB6]/10 px-2 py-0.5 rounded-md">
                              {option.badge}
                            </span>
                          </div>
                          <h4 className="font-extrabold text-sm text-[#10204A]">{option.name}</h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                            {option.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                          <span className="font-semibold text-gray-400">{option.cal}</span>
                          <span className="font-black text-[#063BB6]">+₹{option.price}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Next / Previous Action Buttons */}
                <div className="pt-6 border-t border-[#063BB6]/10 flex items-center justify-between">
                  <button
                    disabled={currentStepIndex === 0}
                    onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                      currentStepIndex === 0
                        ? 'opacity-40 cursor-not-allowed text-gray-400'
                        : 'text-[#063BB6] bg-white hover:bg-gray-100 shadow-xs'
                    }`}
                  >
                    ← Previous Step
                  </button>

                  {currentStepIndex < BUILDER_STEPS.length - 1 ? (
                    <button
                      onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                      className="px-6 py-2.5 rounded-full bg-[#063BB6] hover:bg-[#022B84] text-white text-xs font-black shadow-md flex items-center gap-1.5"
                    >
                      <span>Continue to {BUILDER_STEPS[currentStepIndex + 1].title.replace('Choose Your ', '')}</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsCompleted(true)}
                      className="px-6 py-2.5 rounded-full bg-[#8DB936] hover:bg-[#78a02a] text-white text-xs font-black shadow-md flex items-center gap-1.5"
                    >
                      <span>Review Creation 🎉</span>
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Completed View */
              <div className="text-center py-6 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#8DB936]/15 text-[#8DB936] text-3xl flex items-center justify-center mx-auto animate-bounce">
                  ✨
                </div>

                <div>
                  <h2
                    className="text-3xl font-black text-[#063BB6]"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    Your Happiness Bowl Is Ready!
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Every ingredient selected with care. Churned fresh and packed cold.
                  </p>
                </div>

                {/* Final receipt summary */}
                <div className="bg-white p-5 rounded-2xl border border-[#063BB6]/15 max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-500">Base</span>
                    <span className="font-bold text-[#10204A]">{selections.base?.name}</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-500">Crema</span>
                    <span className="font-bold text-[#10204A]">{selections.sauce?.name}</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-500">Crunch</span>
                    <span className="font-bold text-[#10204A]">{selections.crunch?.name}</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-500">Toppings</span>
                    <span className="font-bold text-[#10204A]">
                      {(selections.toppings || []).map((t) => t.name).join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-gray-500">Finish Pour</span>
                    <span className="font-bold text-[#10204A]">{selections.finish?.name}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base font-black text-[#063BB6]">
                    <span>Total Bowl Price</span>
                    <span>₹{totalBowlPrice}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={handleAddBowlToCart}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#063BB6] hover:bg-[#022B84] text-white font-extrabold text-sm rounded-full shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Add to Happiness Bag</span>
                    <span>•</span>
                    <span>₹{totalBowlPrice}</span>
                    <span>🛍️</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsCompleted(false);
                      setCurrentStepIndex(0);
                    }}
                    className="text-xs font-bold text-gray-500 hover:text-[#063BB6] underline"
                  >
                    Modify Recipe
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Visual Bowl & Real-Time Mascot Commentary */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            {/* Live Visual Layered Bowl */}
            <div className="bg-white p-6 rounded-3xl border-2 border-[#063BB6]/15 shadow-xl flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-xs font-bold text-gray-400 mb-4">
                <span>LIVE BOWL PREVIEW</span>
                <span className="text-[#8DB936] font-black">● Real-time Layers</span>
              </div>

              {/* Bowl Representation */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-8 border-[#063BB6] bg-[#FFFDF9] p-4 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                {/* Visual layers stacked inside bowl */}
                <div className="w-full h-full rounded-full overflow-hidden flex flex-col justify-end shadow-inner relative">
                  {/* Layer 5: Molten Finish */}
                  <motion.div
                    animate={{ height: ['25%', '30%', '25%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-full opacity-90 transition-colors duration-500 flex items-center justify-center text-[11px] font-black text-white shadow-md z-30"
                    style={{ backgroundColor: selections.finish?.color || '#10B981' }}
                  >
                    <span className="truncate px-2">{selections.finish?.name}</span>
                  </motion.div>

                  {/* Layer 4: Toppings dots */}
                  <div className="w-full h-12 bg-amber-100/60 z-20 flex items-center justify-center gap-2 px-2">
                    {(selections.toppings || []).map((t, idx) => (
                      <span key={idx} className="text-base" title={t.name}>
                        {t.icon}
                      </span>
                    ))}
                  </div>

                  {/* Layer 3: Crunch */}
                  <div
                    className="w-full h-12 transition-colors duration-500 flex items-center justify-center text-[10px] font-bold text-white z-10"
                    style={{ backgroundColor: selections.crunch?.color || '#F59E0B' }}
                  >
                    <span className="truncate px-2">{selections.crunch?.name}</span>
                  </div>

                  {/* Layer 2: Crema / Sauce */}
                  <div
                    className="w-full h-14 transition-colors duration-500 flex items-center justify-center text-[10px] font-black text-white"
                    style={{ backgroundColor: selections.sauce?.color || '#10B981' }}
                  >
                    <span className="truncate px-2">{selections.sauce?.name}</span>
                  </div>

                  {/* Layer 1: Base */}
                  <div
                    className="w-full h-16 transition-colors duration-500 flex items-center justify-center text-[10px] font-black text-[#10204A]"
                    style={{ backgroundColor: selections.base?.color || '#FFF7ED' }}
                  >
                    <span className="truncate px-2">{selections.base?.name}</span>
                  </div>
                </div>
              </div>

              {/* Bowl Subtotal */}
              <div className="mt-6 w-full pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Total Bowl Price</span>
                  <span className="text-2xl font-black text-[#063BB6]">₹{totalBowlPrice}</span>
                </div>
                <button
                  onClick={handleAddBowlToCart}
                  className="px-5 py-2.5 bg-[#063BB6] hover:bg-[#022B84] text-white text-xs font-bold rounded-full shadow-md"
                >
                  Quick Add 🥣
                </button>
              </div>
            </div>

            {/* Mascot Real-time Speech Commentary */}
            <div className="flex justify-center">
              <Mascot
                variant="builder"
                size="md"
                speechText={getMascotCommentary()}
                speechPosition="top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
