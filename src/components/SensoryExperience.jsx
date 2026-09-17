import React, { useState } from 'react';
import { Volume2, Sparkles, Thermometer, Flame, Snowflake, Music, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

export default function SensoryExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const [tempMode, setTempMode] = useState('contrast'); // 'hot', 'cold', 'contrast'

  const craftSteps = [
    {
      num: '01',
      title: 'The 14-Hour Copper Reduction',
      subtitle: '100% Pure Egyptian Buffalo Milk',
      desc: 'Raw, unadulterated farm milk is poured into wide, shallow copper vats and simmered gently below boiling point for 14 continuous hours until it thickens to twice its natural richness.',
      tag: 'Pure Reduction',
      stat: '50% Volume Condensation',
    },
    {
      num: '02',
      title: 'Harvesting the Clotted Kashta',
      subtitle: 'The Soul of Egyptian Dairy',
      desc: 'As the reduced milk cools under cool ambient drafts, a dense, velvety film forms on the surface. Hand-lifted in delicate ribbons, this is pure artisanal Kashta—never whipped with gelatin.',
      tag: 'Hand-Harvested',
      stat: 'Zero Emulsifiers',
    },
    {
      num: '03',
      title: 'The Ghee-Toasted Kunafa Snap',
      subtitle: 'Spun to Hair-Thin Strands',
      desc: 'Fine spun semolina pastry is roasted in pure golden buffalo ghee until it achieves a fragile, golden glass-like crunch that holds its snap even under hot pistachio lava.',
      tag: 'Golden Snap',
      stat: 'Pure Clarified Ghee',
    },
    {
      num: '04',
      title: 'Antep Emerald Pistachio Lava',
      subtitle: 'Stone-Milled Green Gold',
      desc: 'Early harvest Turkish and Persian pistachios are lightly toasted and slow-milled on volcanic granite stones to release their natural oils, yielding a luscious green sauce that pours like silk.',
      tag: '100% Whole Nut',
      stat: 'No Artificial Green Dye',
    },
  ];

  return (
    <section id="secret" className="py-24 bg-[#061826] text-white relative z-10 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#009BE8]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#10B981]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#009BE8]/20 border border-[#009BE8]/40 text-[#009BE8] font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Alchemy of Laban</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight leading-none mb-4">
            The Secret of Kashta
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Unlike modern commercial ice creams and puddings made from milk powder, ZIP LABAN preserves the ancient
            Alexandrian tradition of slow evaporation and clotted cream harvesting.
          </p>
        </div>

        {/* Step Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14">
          {craftSteps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => {
                sound.playPop();
                setActiveStep(idx);
              }}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-white/10 border-[#009BE8] shadow-lg shadow-sky-500/20 scale-102'
                  : 'bg-white/5 border-white/10 hover:bg-white/8'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-black text-2xl text-[#009BE8]">{step.num}</span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                    {step.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{step.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-sky-300">
                <span>{step.stat}</span>
                {activeStep === idx && <CheckCircle2 className="w-4 h-4 text-[#10B981]" />}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Step Deep-Dive Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009BE8] block mb-1">
              Active Focus: Step {craftSteps[activeStep].num}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3">
              {craftSteps[activeStep].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
              {craftSteps[activeStep].desc}
            </p>
            <div className="inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white">
              Authentic Egyptian Technique: {craftSteps[activeStep].subtitle}
            </div>
          </div>

          {/* ASMR Soundboard Panel */}
          <div className="w-full lg:w-auto p-6 rounded-2xl bg-[#030D14]/80 border border-[#009BE8]/30 flex flex-col items-center shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <Volume2 className="w-4 h-4 text-[#009BE8] animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-white">
                Interactive ASMR Soundboard
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <button
                onClick={() => sound.playCrunch()}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-[#D97706]/30 border border-white/15 hover:border-[#D97706] text-xs font-bold text-white transition-all active:scale-95 flex flex-col items-center gap-1 cursor-pointer"
              >
                <span>🔥 Kunafa Crunch</span>
                <span className="text-[10px] text-gray-400">Crispy snap</span>
              </button>

              <button
                onClick={() => sound.playPour()}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-[#009BE8]/30 border border-white/15 hover:border-[#009BE8] text-xs font-bold text-white transition-all active:scale-95 flex flex-col items-center gap-1 cursor-pointer"
              >
                <span>🥛 Kashta Pour</span>
                <span className="text-[10px] text-gray-400">Silky cascade</span>
              </button>

              <button
                onClick={() => sound.playPop()}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-[#10B981]/30 border border-white/15 hover:border-[#10B981] text-xs font-bold text-white transition-all active:scale-95 flex flex-col items-center gap-1 cursor-pointer"
              >
                <span>🟢 Pistachio Drop</span>
                <span className="text-[10px] text-gray-400">Rich molten pop</span>
              </button>
            </div>
          </div>
        </div>

        {/* Temperature Contrast Theory */}
        <div className="rounded-3xl border border-white/15 p-8 sm:p-10 bg-white/[0.04] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Thermometer className="w-3.5 h-3.5" />
              <span>Thermal Contrast Science</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3">
              Hot Sizzle Meets Sub-Zero Velvet
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The human palate experiences a 300% heightened sweetness sensation when encountering simultaneous
              temperature divergence. We bake our Umm Ali and Heba Cakes to a bubbling 85°C while crowning them with
              -4°C clotted kashta churn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Hot Card */}
            <div className="w-full sm:w-1/2 p-5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/10 border border-orange-500/30 text-center">
              <Flame className="w-7 h-7 text-orange-400 mx-auto mb-2 animate-bounce" />
              <div className="text-2xl font-black text-white font-display">+85°C</div>
              <div className="text-xs font-bold text-orange-300 uppercase tracking-wider mt-1">
                Freshly Baked Pastry
              </div>
              <p className="text-[11px] text-gray-300 mt-2">Bubbling spiced cream and sizzling country ghee.</p>
            </div>

            {/* Cold Card */}
            <div className="w-full sm:w-1/2 p-5 rounded-2xl bg-gradient-to-br from-sky-500/20 to-teal-500/10 border border-sky-500/30 text-center">
              <Snowflake className="w-7 h-7 text-sky-400 mx-auto mb-2 animate-pulse" />
              <div className="text-2xl font-black text-white font-display">-4°C</div>
              <div className="text-xs font-bold text-sky-300 uppercase tracking-wider mt-1">
                Frost-Churned Kashta
              </div>
              <p className="text-[11px] text-gray-300 mt-2">Dense clotted milk with pure Antep pistachio swirl.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
