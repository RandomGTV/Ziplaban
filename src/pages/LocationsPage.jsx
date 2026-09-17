import React, { useState } from 'react';
import { STORES } from '../data/products';
import { useNavigation } from '../context/NavigationContext';
import Mascot from '../components/Mascot';
import { motion } from 'framer-motion';

export default function LocationsPage() {
  const { navigate } = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeStoreId, setActiveStoreId] = useState('kottakkal');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All Outlets' },
    { id: 'malappuram', label: 'Malappuram Heartland 📍' },
    { id: 'north', label: 'Calicut & North Kerala' },
    { id: 'central', label: 'Kochi & Central Kerala' },
  ];

  const filteredStores = STORES.filter((store) => {
    // Region match
    if (selectedFilter === 'malappuram' && !store.city.includes('Malappuram')) return false;
    if (selectedFilter === 'north' && !store.city.includes('Calicut')) return false;
    if (selectedFilter === 'central' && !store.city.includes('Kochi')) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        store.name.toLowerCase().includes(q) ||
        store.landmark.toLowerCase().includes(q) ||
        store.city.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const activeStore = STORES.find((s) => s.id === activeStoreId) || STORES[0];

  return (
    <div className="w-full min-h-screen bg-[#022B84] text-white selection:bg-[#8DB936] selection:text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Mascot */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#8DB936] bg-white/10 px-3 py-1 rounded-full">
              Kerala Outlets & Midnight Churn
            </span>
            <h1
              className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Happiness Might Be Closer Than You Think ♡
            </h1>
            <p className="text-sm sm:text-base text-blue-200">
              Open daily till 2:00 AM. Find your nearest ZIP LABAN branch for dine-in scoops or fresh takeaway.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Mascot
              variant="pin"
              size="sm"
              speechText="Found Us! Come say hi!"
              speechPosition="left"
            />
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {filters.map((f) => {
              const isSelected = selectedFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#8DB936] text-white shadow-lg'
                      : 'bg-white/10 text-blue-100 hover:bg-white/20'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search area (e.g. Palathara, Kalikavu)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs text-white placeholder-blue-200 focus:outline-none focus:border-[#8DB936]"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE MAP LAYOUT & STORE CARDS                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stylized Interactive Kerala Map Display */}
          <div className="lg:col-span-6 bg-[#061826] rounded-3xl p-6 border-2 border-white/10 shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            {/* Ambient Map Glow */}
            <div className="absolute inset-0 bg-radial from-[#145DFF]/20 to-transparent pointer-events-none" />

            {/* Map Top Bar */}
            <div className="relative z-10 flex items-center justify-between text-xs font-bold text-blue-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8DB936] animate-ping" />
                <span>KERALA RADAR • LIVE DISPATCH</span>
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-full text-[10px]">
                6 Outlets Active
              </span>
            </div>

            {/* Visual SVG Map Representation with Glowing Pins */}
            <div className="relative my-8 h-72 w-full flex items-center justify-center">
              {/* Abstract Kerala Coast Vector Shape */}
              <svg viewBox="0 0 300 400" className="w-full h-full opacity-30 fill-none stroke-blue-400 stroke-2">
                <path d="M120 20 Q140 100 130 180 T160 300 T180 390" strokeDasharray="4 4" />
                <path d="M100 40 C110 80 120 120 115 170 C110 220 140 280 160 380" strokeWidth="3" />
              </svg>

              {/* Glowing Pin 1: Kottakkal Flagship */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveStoreId('kottakkal')}
                className="absolute top-[35%] left-[45%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-[#8DB936] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#8DB936]/50 animate-pulse">
                  📍
                </div>
                <span className="absolute top-9 left-1/2 -translate-x-1/2 bg-white text-[#022B84] text-[10px] font-extrabold px-2 py-0.5 rounded shadow whitespace-nowrap">
                  Palathara Flagship
                </span>
              </motion.div>

              {/* Glowing Pin 2: Kalikavu */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveStoreId('kalikavu')}
                className="absolute top-[30%] left-[58%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-[#145DFF] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#145DFF]/50">
                  📍
                </div>
                <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-[#022B84] text-[9px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                  Kalikavu
                </span>
              </motion.div>

              {/* Glowing Pin 3: Perinthalmanna */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveStoreId('perinthalmanna')}
                className="absolute top-[45%] left-[52%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-[#145DFF] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  📍
                </div>
                <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-[#022B84] text-[9px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                  Perinthalmanna
                </span>
              </motion.div>

              {/* Glowing Pin 4: Calicut */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveStoreId('calicut')}
                className="absolute top-[20%] left-[35%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-[#145DFF] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  📍
                </div>
                <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-[#022B84] text-[9px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                  Calicut
                </span>
              </motion.div>

              {/* Glowing Pin 5: Kochi */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveStoreId('kochi')}
                className="absolute top-[75%] left-[60%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-[#145DFF] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  📍
                </div>
                <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-[#022B84] text-[9px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                  Kochi Marine Drive
                </span>
              </motion.div>
            </div>

            {/* Active Store Inspector Bar */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#8DB936] font-bold uppercase">Selected Hub</span>
                <h4 className="font-extrabold text-sm text-white">{activeStore.name}</h4>
                <p className="text-xs text-blue-200">{activeStore.landmark}</p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `Zip Laban ${activeStore.name} ${activeStore.city}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-[#8DB936] hover:bg-[#78a02a] text-white text-xs font-bold rounded-xl shadow transition-colors"
              >
                Get Directions ↗
              </a>
            </div>
          </div>

          {/* Right Column: Outlet Cards List */}
          <div className="lg:col-span-6 space-y-4">
            {filteredStores.map((store) => {
              const isCurrent = activeStoreId === store.id;
              return (
                <div
                  key={store.id}
                  onClick={() => setActiveStoreId(store.id)}
                  className={`p-5 rounded-3xl border-2 transition-all cursor-pointer ${
                    isCurrent
                      ? 'border-[#8DB936] bg-white/15 shadow-xl scale-101'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3
                          className="text-lg font-black text-white"
                          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                        >
                          {store.name}
                        </h3>
                        {store.isFlagship && (
                          <span className="text-[10px] bg-[#8DB936] text-white font-extrabold px-2 py-0.5 rounded-full">
                            FLAGSHIP 👑
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-blue-200 mt-0.5">{store.landmark}</p>
                      <p className="text-xs font-semibold text-blue-300">{store.city}</p>
                    </div>

                    <span className="text-xs font-bold text-[#8DB936] bg-[#8DB936]/15 px-2.5 py-1 rounded-full">
                      {store.status}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-blue-100">
                    <div>
                      <span className="text-blue-300 block text-[10px]">Hours:</span>
                      <span className="font-semibold">{store.hours}</span>
                    </div>
                    <div>
                      <span className="text-blue-300 block text-[10px]">Phone:</span>
                      <a href={`tel:${store.phone}`} className="hover:underline font-semibold">
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-[10px] text-blue-300">
                      <span>Available on:</span>
                      {store.aggregators.map((ag, i) => (
                        <span key={i} className="bg-white/10 px-1.5 py-0.5 rounded text-white">
                          {ag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/menu');
                      }}
                      className="px-3.5 py-1.5 bg-white text-[#022B84] hover:bg-[#8DB936] hover:text-white rounded-xl text-xs font-extrabold shadow-sm transition-colors"
                    >
                      Order Here →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
