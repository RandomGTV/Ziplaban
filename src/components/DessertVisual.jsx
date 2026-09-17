import React, { useState } from 'react';

// Generates high-fidelity visual representations for each signature Egyptian creation
// Uses photorealistic Gemini/Omni food assets with elegant SVG fallbacks
export default function DessertVisual({ type, className = '', isHero = false }) {
  const [imgError, setImgError] = useState(false);

  // Map types to real photographic assets
  const photoMap = {
    'salankatia': '/images/salankatia.jpg',
    'koshari': '/images/salankatia.jpg',
    'ruh-hayati': '/images/real_promo.png',
    'kabsa': '/images/real_promo.png',
    'creme-de-la-creme': '/images/real_promo.png',
    'qashtuta': '/images/qashtuta.jpg',
    'qashtuta-strawberry': '/images/qashtuta.jpg',
    'mango-fusion': '/images/qashtuta.jpg',
    'umm-ali': '/images/umm_ali.jpg',
    'crispy-umm-ali': '/images/umm_ali.jpg',
    'cheese-bomb': '/images/umm_ali.jpg',
    'al-mazia': '/images/umm_ali.jpg',
    'bomb': '/images/molten_bomb.jpg',
    'molten-bomb': '/images/molten_bomb.jpg',
    'hebba-cake': '/images/molten_bomb.jpg',
    'fazea-chocola': '/images/molten_bomb.jpg',
    'lazy-cat': '/images/molten_bomb.jpg',
    'lawzi-creme': '/images/qashtuta.jpg',
    'le-zip-de-paris': '/images/qashtuta.jpg',
    'hazalnut-bar': '/images/molten_bomb.jpg',
    'layalee-valvet': '/images/qashtuta.jpg',
    'louah': '/images/salankatia.jpg',
    'mascot': '/images/zip_boy_mascot.png',
  };

  const objectPositions = {
    'ruh-hayati': 'center 85%',
    'kabsa': '85% 58%',
    'creme-de-la-creme': '15% 58%',
  };

  const photoSrc = photoMap[type];

  if (photoSrc && !imgError) {
    return (
      <div className={`relative flex items-center justify-center select-none group ${className}`}>
        {/* Ambient Color Aura */}
        <div
          className={`absolute inset-0 rounded-full blur-2xl transform scale-95 opacity-60 transition-opacity duration-500 group-hover:opacity-90 ${
            type === 'ruh-hayati'
              ? 'bg-gradient-to-tr from-pink-500/40 via-rose-400/30 to-purple-400/20'
              : type.includes('salankatia') || type.includes('koshari')
              ? 'bg-gradient-to-tr from-emerald-500/30 via-sky-400/20 to-amber-300/20'
              : type.includes('umm-ali') || type.includes('cheese-bomb') || type.includes('al-mazia')
              ? 'bg-gradient-to-tr from-amber-600/30 via-orange-500/20 to-yellow-200/20'
              : type.includes('kabsa') || type.includes('creme-de-la-creme')
              ? 'bg-gradient-to-tr from-sky-500/40 via-blue-400/30 to-amber-200/20'
              : 'bg-gradient-to-tr from-rose-500/30 via-sky-400/20 to-amber-200/20'
          }`}
        />

        {/* Photorealistic Image Frame */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/60 bg-gray-100 flex items-center justify-center transform group-hover:scale-104 transition-transform duration-500">
          <img
            src={photoSrc}
            alt={type}
            onError={() => setImgError(true)}
            style={objectPositions[type] ? { objectPosition: objectPositions[type], transform: 'scale(1.35)' } : {}}
            className="w-full h-full object-cover object-center transition-transform duration-500"
            loading="lazy"
          />
          {/* Subtle glossy glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/15 pointer-events-none" />
        </div>
      </div>
    );
  }

  // Fallback SVG renders for items without dedicated photos
  switch (type) {
    case 'aseera':
    case 'aseera-lotus':
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-emerald-400/20 to-teal-200/20 rounded-full blur-2xl transform scale-95" />
          <svg viewBox="0 0 320 280" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="glass-body" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="30%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="70%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
              </linearGradient>
              <linearGradient id="shake-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A7F3D0" />
                <stop offset="40%" stopColor="#6EE7B7" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            <ellipse cx="160" cy="250" rx="75" ry="20" fill="rgba(6, 24, 38, 0.15)" filter="blur(6px)" />
            <ellipse cx="160" cy="242" rx="45" ry="12" fill="url(#glass-body)" stroke="#009BE8" strokeWidth="1" />
            <path d="M152 242 L152 205 L168 205 L168 242 Z" fill="url(#glass-body)" />

            <path d="M110 80 Q105 180 152 205 L168 205 Q215 180 210 80 Z" fill="url(#shake-liquid)" opacity="0.95" />
            <path d="M106 75 Q100 180 150 207 L170 207 Q220 180 214 75 Z" fill="url(#glass-body)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />

            <ellipse cx="160" cy="75" rx="55" ry="16" fill="#FFFDF7" />
            <path d="M115 75 Q135 30 160 25 Q185 30 205 75 Z" fill="#FFFFFF" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.06))" />

            <line x1="175" y1="95" x2="205" y2="10" stroke="#009BE8" strokeWidth="7" strokeLinecap="round" />
            <line x1="175" y1="95" x2="205" y2="10" stroke="#FFFFFF" strokeWidth="7" strokeDasharray="6 6" strokeLinecap="round" />

            <path d="M135 60 Q150 40 165 65 T190 55" fill="none" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
            <circle cx="150" cy="45" r="3" fill="#10B981" />
            <circle cx="170" cy="50" r="2.5" fill="#34D399" />
          </svg>
        </div>
      );

    default:
      // Elegant Generic Egyptian Kashta Pot for Bambooza, Halibo, etc.
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-amber-300/20 to-emerald-400/20 rounded-full blur-2xl transform scale-90" />
          <svg viewBox="0 0 320 280" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="pot-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
            </defs>

            <ellipse cx="160" cy="225" rx="110" ry="32" fill="rgba(6, 24, 38, 0.12)" filter="blur(7px)" />
            <path d="M70 145 L85 205 Q160 240 235 205 L250 145 Z" fill="url(#pot-body)" stroke="#009BE8" strokeWidth="2" />
            <ellipse cx="160" cy="145" rx="90" ry="26" fill="#009BE8" />
            
            <ellipse cx="160" cy="140" rx="82" ry="22" fill="#FFFDF7" />
            
            <path d="M100 140 Q130 125 160 140 T220 140" fill="none" stroke="#D97706" strokeWidth="8" strokeLinecap="round" />
            <circle cx="160" cy="138" r="7" fill="#10B981" />
            <circle cx="140" cy="142" r="5" fill="#34D399" />
            <circle cx="180" cy="142" r="5" fill="#059669" />
          </svg>
        </div>
      );
  }
}
