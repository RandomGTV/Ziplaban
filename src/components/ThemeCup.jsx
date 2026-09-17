import React from 'react';

export default function ThemeCup({
  name = 'Zip Laban',
  topping = 'pistachio-lotus',
  cupColor = 'blue', // 'blue' | 'pink'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
}) {
  const isPink = cupColor === 'pink';
  const cupBgGrad = isPink ? 'url(#pinkCupGrad)' : 'url(#blueCupGrad)';
  const cupBorder = isPink ? '#FDA4AF' : '#60A5FA';

  return (
    <div className={`relative flex flex-col items-center select-none group cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 180 140"
        className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Royal Blue Cup Gradient */}
          <linearGradient id="blueCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E5BB5" />
            <stop offset="40%" stopColor="#0E47A8" />
            <stop offset="100%" stopColor="#082E74" />
          </linearGradient>

          {/* Ruh Hayathi Pink Cup Gradient */}
          <linearGradient id="pinkCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#9F1239" />
          </linearGradient>

          {/* Lotus Biscuit Gradient */}
          <linearGradient id="lotusBiscuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          {/* Pistachio Emerald Gradient */}
          <radialGradient id="pistaGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </radialGradient>

          {/* Chocolate Nutella Gradient */}
          <linearGradient id="chocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="50%" stopColor="#451A03" />
            <stop offset="100%" stopColor="#240D02" />
          </linearGradient>

          {/* Kunafa Golden Base */}
          <linearGradient id="kunafaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Drop Shadow */}
          <filter id="cupShadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="90" cy="126" rx="65" ry="12" fill="rgba(0,0,0,0.35)" filter="blur(5px)" />

        {/* Cup Body (Tapered Bucket) */}
        <path
          d="M 22 55 L 42 120 C 44 125, 48 128, 90 128 C 132 128, 136 125, 138 120 L 158 55 Z"
          fill={cupBgGrad}
          stroke={cupBorder}
          strokeWidth="1.5"
          filter="url(#cupShadow)"
        />

        {/* Cup Front Logo Badge */}
        <g transform="translate(68, 76) scale(0.68)">
          <path
            d="M 6 16 C 6 6, 18 2, 32 2 C 46 2, 58 6, 58 16 L 58 48 C 58 56, 46 60, 32 60 C 18 60, 6 56, 6 48 Z"
            fill="#FFFFFF"
            stroke="#0B3E96"
            strokeWidth="2"
          />
          <path
            d="M 9 17 C 9 8, 20 5, 32 5 C 44 5, 55 8, 55 17 L 55 46 C 55 53, 44 57, 32 57 C 20 57, 9 53, 9 46 Z"
            fill="#0E47A8"
          />
          <text x="32" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900">
            زيب لبن
          </text>
          <path d="M 16 32 L 48 32" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <text x="32" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">
            Zip Laban
          </text>
        </g>

        {/* Cup Inner Dessert Surface (Oval Top) */}
        <ellipse cx="90" cy="55" rx="68" ry="24" fill="#FEF3C7" stroke="#FFFFFF" strokeWidth="3" />

        {/* Surface Topping Specific Layers */}
        {/* 1. TRIO (3 Split Stripes: Pistachio, Choc, Lotus) */}
        {topping === 'trio' && (
          <g>
            <clipPath id="trioClip">
              <ellipse cx="90" cy="55" rx="66" ry="22" />
            </clipPath>
            <g clipPath="url(#trioClip)">
              {/* Pistachio 1/3 */}
              <rect x="22" y="30" width="45" height="50" fill="url(#pistaGrad)" />
              {/* Chocolate 1/3 */}
              <rect x="67" y="30" width="45" height="50" fill="url(#chocGrad)" />
              {/* Lotus 1/3 */}
              <rect x="112" y="30" width="45" height="50" fill="url(#kunafaGrad)" />
              {/* Crunchy Topping Specs */}
              <circle cx="45" cy="55" r="2.5" fill="#A7F3D0" />
              <circle cx="55" cy="50" r="2" fill="#FFFFFF" />
              <circle cx="90" cy="52" r="2" fill="#FDE68A" />
              <circle cx="135" cy="56" r="3" fill="#B45309" />
              <path d="M 25 50 Q 50 65 80 48" stroke="#34D399" strokeWidth="1.5" fill="none" />
              <path d="M 70 54 Q 90 42 110 58" stroke="#FBBF24" strokeWidth="1.5" fill="none" />
            </g>
          </g>
        )}

        {/* 2. PISTACHIO LOTUS (Left Pistachio, Right Lotus Biscuit) */}
        {topping === 'pistachio-lotus' && (
          <g>
            <clipPath id="pistaLotusClip">
              <ellipse cx="90" cy="55" rx="66" ry="22" />
            </clipPath>
            <g clipPath="url(#pistaLotusClip)">
              {/* Emerald Pistachio Ground */}
              <rect x="22" y="30" width="70" height="50" fill="url(#pistaGrad)" />
              {/* Golden Lotus Dust Base */}
              <rect x="90" y="30" width="70" height="50" fill="url(#kunafaGrad)" />
              {/* Pistachio Specks */}
              <circle cx="45" cy="52" r="2" fill="#A7F3D0" />
              <circle cx="65" cy="48" r="2.5" fill="#047857" />
              <circle cx="75" cy="58" r="2" fill="#ECFDF5" />
            </g>
            {/* Real Lotus Biscoff Biscuit in Center */}
            <g transform="translate(62, 42)">
              <rect x="0" y="0" width="56" height="24" rx="4" fill="url(#lotusBiscuitGrad)" stroke="#78350F" strokeWidth="1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))" />
              {/* Scalloped edge details */}
              <circle cx="3" cy="12" r="1.5" fill="#78350F" opacity="0.6" />
              <circle cx="53" cy="12" r="1.5" fill="#78350F" opacity="0.6" />
              <rect x="6" y="4" width="44" height="16" rx="2" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
              <text x="28" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontStyle="italic" letterSpacing="0.5">
                Lotus
              </text>
            </g>
          </g>
        )}

        {/* 3. NUTELLA LOTUS (Nutella Base with Lotus Biscuit) */}
        {topping === 'nutella-lotus' && (
          <g>
            <clipPath id="nutellaLotusClip">
              <ellipse cx="90" cy="55" rx="66" ry="22" />
            </clipPath>
            <g clipPath="url(#nutellaLotusClip)">
              <rect x="22" y="30" width="140" height="50" fill="url(#chocGrad)" />
              {/* Swirls */}
              <path d="M 30 52 Q 90 70 150 48" stroke="#92400E" strokeWidth="4" fill="none" opacity="0.7" />
              <path d="M 40 45 Q 90 35 140 55" stroke="#FBBF24" strokeWidth="2" fill="none" opacity="0.6" />
            </g>
            {/* Real Lotus Biscoff Biscuit in Center */}
            <g transform="translate(62, 42)">
              <rect x="0" y="0" width="56" height="24" rx="4" fill="url(#lotusBiscuitGrad)" stroke="#78350F" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))" />
              <rect x="6" y="4" width="44" height="16" rx="2" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
              <text x="28" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontStyle="italic" letterSpacing="0.5">
                Lotus
              </text>
            </g>
          </g>
        )}

        {/* 4. PISTACHIO NUTELLA (Split Pistachio & Nutella, or with Pink Heart for Ruh Hayathi) */}
        {topping === 'pistachio-nutella' && (
          <g>
            <clipPath id="pistaNutellaClip">
              <ellipse cx="90" cy="55" rx="66" ry="22" />
            </clipPath>
            <g clipPath="url(#pistaNutellaClip)">
              <rect x="22" y="30" width="68" height="50" fill="url(#pistaGrad)" />
              <rect x="90" y="30" width="68" height="50" fill="url(#chocGrad)" />
              <circle cx="45" cy="50" r="2.5" fill="#ECFDF5" />
              <circle cx="65" cy="56" r="2" fill="#047857" />
              <circle cx="120" cy="52" r="2" fill="#FBBF24" />
              <path d="M 88 32 Q 90 55 92 78" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
            </g>
            {/* If in Ruh Hayathi, render the famous PINK CANDY HEART in center! */}
            {isPink && (
              <g transform="translate(80, 44) scale(0.9)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))">
                <path
                  d="M 12 5 C 9 0, 0 1, 0 9 C 0 15, 12 22, 12 22 C 12 22, 24 15, 24 9 C 24 1, 15 0, 12 5 Z"
                  fill="#F43F5E"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
                <circle cx="7" cy="6" r="1.5" fill="#FFFFFF" opacity="0.8" />
              </g>
            )}
          </g>
        )}

        {/* 5. KINDER NUTELLA (Kinder chocolate bars & rich Nutella) */}
        {topping === 'kinder-nutella' && (
          <g>
            <clipPath id="kinderClip">
              <ellipse cx="90" cy="55" rx="66" ry="22" />
            </clipPath>
            <g clipPath="url(#kinderClip)">
              <rect x="22" y="30" width="140" height="50" fill="#FFFDF9" />
              {/* Nutella & Kinder Drizzle */}
              <path d="M 25 45 Q 60 70 110 40 T 155 58" stroke="#451A03" strokeWidth="5" fill="none" />
              <path d="M 35 60 Q 80 40 145 65" stroke="#78350F" strokeWidth="3" fill="none" />
              <path d="M 50 40 Q 90 60 130 45" stroke="#F59E0B" strokeWidth="2" fill="none" />
            </g>
            {/* Mini Kinder Bar on top */}
            <g transform="translate(68, 44) rotate(-5)">
              <rect x="0" y="0" width="44" height="18" rx="3" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))" />
              <rect x="2" y="2" width="40" height="7" rx="2" fill="#E11D48" />
              <text x="22" y="15" textAnchor="middle" fill="#451A03" fontSize="7" fontWeight="900">
                Kinder
              </text>
            </g>
          </g>
        )}

        {/* 6. ZIP LABAN ORIGINAL (Golden Kunafa, Pistachio, Milk Cream) */}
        {topping === 'zip-laban' && (
          <g>
            <clipPath id="classicClip">
              <ellipse cx="90" cy="55" rx="66" ry="22" />
            </clipPath>
            <g clipPath="url(#classicClip)">
              <rect x="22" y="30" width="140" height="50" fill="url(#kunafaGrad)" />
              {/* Spun kunafa threads */}
              <path d="M 30 40 Q 60 65 90 45 T 150 50" stroke="#FEF3C7" strokeWidth="1.5" fill="none" />
              <path d="M 25 55 Q 80 35 135 60" stroke="#D97706" strokeWidth="1" fill="none" />
              <circle cx="60" cy="50" r="3" fill="#10B981" />
              <circle cx="80" cy="58" r="2.5" fill="#047857" />
              <circle cx="115" cy="48" r="3" fill="#059669" />
              <circle cx="135" cy="55" r="2" fill="#A7F3D0" />
            </g>
          </g>
        )}

        {/* Top Rim Glaze Highlight */}
        <ellipse cx="90" cy="53" rx="65" ry="21" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" pointerEvents="none" />
      </svg>

      {/* Flavor Title Below Cup */}
      <span className="text-[11px] sm:text-xs font-extrabold text-white group-hover:text-[#60A5FA] tracking-wide mt-1 text-center line-clamp-1">
        {name}
      </span>
    </div>
  );
}
