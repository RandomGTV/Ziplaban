import React from 'react';
import { motion } from 'framer-motion';

export default function InteractiveMap({ locations, activeStoreId, onSelectStore }) {
  return (
    <div className="w-full bg-[#021B54] rounded-[32px] p-6 sm:p-8 border-2 border-[#073BB8]/30 shadow-2xl relative overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-between select-none">
      
      {/* Ambient Map Glow */}
      <div className="absolute inset-0 bg-radial from-[#175EFF]/15 via-transparent to-transparent pointer-events-none" />

      {/* Top Radar Bar */}
      <div className="relative z-10 flex items-center justify-between text-xs font-bold text-blue-200">
        <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#8DBA38] animate-ping" />
          <span className="tracking-widest uppercase text-[10px] text-white">ZIP LABAN RADAR • MALAPPURAM REGION</span>
        </span>
        <span className="bg-[#8DBA38]/20 text-[#8DBA38] border border-[#8DBA38]/30 px-2.5 py-1 rounded-full text-[10px] font-black uppercase">
          {locations.length} {locations.length === 1 ? 'Matching Branch' : 'Matching Branches'}
        </span>
      </div>

      {/* Vector Map Canvas with Styling */}
      <div className="relative my-auto h-72 sm:h-80 w-full flex items-center justify-center">
        
        {/* Abstract Stylized Geographic Contours (Malappuram / Kerala Coastal Curve) */}
        <svg viewBox="0 0 600 400" className="w-full h-full opacity-35 fill-none stroke-blue-400">
          {/* Subtle Radar Rings */}
          <circle cx="300" cy="200" r="160" stroke="#175EFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="300" cy="200" r="100" stroke="#175EFF" strokeWidth="1" opacity="0.2" />
          <circle cx="300" cy="200" r="40" stroke="#8DBA38" strokeWidth="1" opacity="0.4" />

          {/* Regional Coastal Contour */}
          <path
            d="M 100,50 Q 220,120 250,200 T 380,320 T 480,380"
            stroke="#60A5FA"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Internal District Road Interconnect */}
          <path
            d="M 380,140 Q 320,190 240,240"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Secondary Route */}
          <path
            d="M 240,240 L 190,300"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        </svg>

        {/* PIN 1: MALAPPURAM */}
        {locations.some(store => store.id === 'malappuram') && <button type="button" aria-label="Select malappuram branch" aria-pressed={activeStoreId === 'malappuram'}
          onClick={() => onSelectStore('malappuram')}
          className="absolute top-[34%] left-[62%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
        >
          {activeStoreId === 'malappuram' && (
            <span className="absolute -inset-4 rounded-full bg-[#8DBA38]/30 animate-ping pointer-events-none" />
          )}
          
          <motion.div
            whileHover={{ scale: 1.15 }}
            className={'relative px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-2xl transition-all ' + (
              activeStoreId === 'malappuram'
                ? 'bg-[#8DBA38] text-white ring-4 ring-white/30 scale-110'
                : 'bg-[#032B82] text-white border border-white/30 hover:bg-[#073BB8]'
            )}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
            <div className="text-left">
              <span className="block text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
                MALAPPURAM
              </span>
              <span className="block text-[9px] font-bold text-white/80 whitespace-nowrap">
                Active Branch 📍
              </span>
            </div>
          </motion.div>
        </button>}

        {/* PIN 2: KOTTAKKAL */}
        {locations.some(store => store.id === 'kottakkal') && <button type="button" aria-label="Select kottakkal branch" aria-pressed={activeStoreId === 'kottakkal'}
          onClick={() => onSelectStore('kottakkal')}
          className="absolute top-[60%] left-[38%] -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
        >
          {activeStoreId === 'kottakkal' && (
            <span className="absolute -inset-4 rounded-full bg-[#175EFF]/40 animate-ping pointer-events-none" />
          )}

          <motion.div
            whileHover={{ scale: 1.15 }}
            className={'relative px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-2xl transition-all ' + (
              activeStoreId === 'kottakkal'
                ? 'bg-[#175EFF] text-white ring-4 ring-white/30 scale-110'
                : 'bg-[#032B82] text-white border border-white/30 hover:bg-[#073BB8]'
            )}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#8DBA38] shadow-xs" />
            <div className="text-left">
              <span className="block text-[11px] font-black uppercase tracking-wider whitespace-nowrap">
                KOTTAKKAL
              </span>
              <span className="block text-[9px] font-bold text-white/80 whitespace-nowrap">
                Kottakkal Branch 👑
              </span>
            </div>
          </motion.div>
        </button>}

      </div>

      {/* Bottom Map Helper Footer */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-blue-200">
        <span>Click a pin to view full branch information</span>
        <span className="text-white/60">Malappuram District, Kerala</span>
      </div>

    </div>
  );
}
