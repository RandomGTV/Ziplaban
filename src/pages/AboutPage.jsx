import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import Mascot from '../components/Mascot';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const { navigate } = useNavigation();
  const [selectedPillar, setSelectedPillar] = useState(0);

  const milestones = [
    {
      year: '2023',
      title: 'The Egyptian Spark',
      desc: 'Inspired by Cairo’s historic dairy artisans who slow-simmered buffalo milk for 14 hours to skim thick golden kashta, our founders set out to introduce this forgotten craft to Kerala.',
    },
    {
      year: 'Early 2024',
      title: 'The First Midnight Churn',
      desc: 'Tested in a small experimental confectionery in Malappuram. When warm molten Antep pistachio lava met ice-cold Alexandria kashta, everyone in the kitchen knew history was being made.',
    },
    {
      year: 'Mid 2024',
      title: 'Flagship Launch at Palathara',
      desc: 'Opened the doors of our flagship outlet at Palathara Bypass Junction in Kottakkal. Lines stretched down the boulevard as food enthusiasts discovered Salankatiya and Koshari.',
    },
    {
      year: '2025',
      title: 'Going Viral & Kalikavu Branch',
      desc: 'Over 5 million views on Instagram reels. Expanded to our beloved Kalikavu branch, introducing late-night dessert runs to families and students across the region.',
    },
    {
      year: '2026 & Beyond',
      title: 'Spreading Happiness Globally',
      desc: 'Bringing our handcrafted Egyptian desserts across Kerala, Bangalore, and Dubai with the same timeless promise: Happiness in Every Bite.',
    },
  ];

  const pillars = [
    {
      icon: '🥛',
      title: '100% Buffalo Farm Milk',
      desc: 'Never diluted with water or artificial stabilizers. We source rich, high-fat morning buffalo milk directly from local farms.',
    },
    {
      icon: '🌾',
      title: 'Clarified Butter Kunafa',
      desc: 'Spun paper-thin pastry shreds baked fresh every two hours in pure country ghee so the crunch remains explosive.',
    },
    {
      icon: '🟢',
      title: 'Unadulterated Pistachios',
      desc: 'Stone-ground emerald Antep pistachios with zero artificial green coloring or palm oil fillers.',
    },
    {
      icon: '💖',
      title: 'Happiness Guarantee',
      desc: 'If any spoon doesn’t bring an instant smile to your face, our team will churn a new bowl on the house.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFFDF9] pt-28 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3.5 py-1.5 rounded-full">
            Our Story & Heritage
          </span>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black text-[#063BB6] leading-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Born to Make People <br />
            <span className="text-[#8DB936] underline decoration-[#145DFF]/20 decoration-wavy">
              Smile ♡
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#10204A]/80 font-medium">
            “We don’t just make desserts. We craft joyful moments that bring people together.”
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BRAND MANIFESTO SPLIT                                                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FFF9F1] p-8 sm:p-12 rounded-3xl border border-[#063BB6]/15">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black text-[#8DB936] uppercase tracking-wider">
              The Egyptian-Kerala Connection
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#10204A]"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              When Ancient Cairo Met Warm Malappuram Hospitality
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Egypt is a land where desserts are celebrations of life. From the clotted kashta carts of Alexandria to Cairo’s bustling pastry alleys, desserts are meant to be generous, creamy, and shared.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              In Malappuram, food is also an expression of genuine love. When we introduced authentic Egyptian dairy traditions here, the synergy was instant. Today, our stores are bustling midnight gathering points for families, friends, and food lovers.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/menu')}
                className="px-6 py-3 rounded-full bg-[#063BB6] hover:bg-[#022B84] text-white font-black text-xs shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Taste Our Heritage</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/real_promo.png"
                alt="Zip Laban Heritage"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Mascot in sticker badge */}
            <div className="absolute -bottom-8 -left-4">
              <Mascot
                variant="sticker"
                size="sm"
                speechText="Made with 100% pure love!"
                speechPosition="right"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MILESTONE TIMELINE                                                        */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#10204A] mt-3"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              The ZIP LABAN Milestone Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((m, index) => (
              <div
                key={m.year}
                className="p-6 rounded-3xl bg-white border border-[#063BB6]/15 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#063BB6] block mb-2">
                    {m.year}
                  </span>
                  <h4 className="font-extrabold text-base text-[#10204A] mb-2">{m.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#8DB936]">
                  <span>Step 0{index + 1}</span>
                  <span>•</span>
                  <span>Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE 4 PILLARS                                                             */}
        {/* ========================================================================= */}
        <div className="bg-[#063BB6] text-white rounded-3xl p-8 sm:p-14 space-y-10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#8DB936] bg-white/10 px-3 py-1 rounded-full">
              Our Non-Negotiables
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-white mt-3"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              The ZIP LABAN Recipe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3"
              >
                <span className="text-3xl">{p.icon}</span>
                <h4
                  className="text-lg font-black text-white"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {p.title}
                </h4>
                <p className="text-xs text-blue-100/80 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Outlets CTA */}
        <div className="text-center py-6">
          <p
            className="text-2xl text-[#8DB936] font-bold"
            style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
          >
            Visit us at Palathara Kottakkal, Kalikavu, and Perinthalmanna! ♡
          </p>
          <button
            onClick={() => navigate('/locations')}
            className="mt-4 px-8 py-3.5 bg-[#063BB6] hover:bg-[#022B84] text-white font-extrabold text-sm rounded-full shadow-lg"
          >
            Find Outlets & Hours →
          </button>
        </div>
      </div>
    </div>
  );
}
