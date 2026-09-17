import React from 'react';

/**
 * ThemeDish - Procedural SVG Component for Zip Laban Official Menu Board 2
 * Matches the award-winning fidelity, gradients, drop shadows, and hover dynamics
 * of ThemeCup on Board 1.
 */
export default function ThemeDish({
  dishType = 'cup', // 'cup' | 'pastry' | 'square' | 'bowl' | 'box' | 'tub' | 'tin'
  topping = 'louah-nutella',
  name = '',
  sub = '',
  price = 350,
  className = '',
}) {
  return (
    <div className={`relative flex flex-col items-center select-none group cursor-pointer ${className}`}>
      {/* =========================================================================
          1. LOUAH CUPS (dishType === 'cup')
         ========================================================================= */}
      {dishType === 'cup' && (
        <svg
          viewBox="0 0 180 140"
          className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dishCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E5BB5" />
              <stop offset="40%" stopColor="#0E47A8" />
              <stop offset="100%" stopColor="#082E74" />
            </linearGradient>
            <radialGradient id="dishPistaGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </radialGradient>
            <linearGradient id="dishChocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="50%" stopColor="#451A03" />
              <stop offset="100%" stopColor="#240D02" />
            </linearGradient>
            <linearGradient id="dishLouahPastry" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Ambient Ground Shadow */}
          <ellipse cx="90" cy="126" rx="65" ry="12" fill="rgba(0,0,0,0.35)" filter="blur(5px)" />

          {/* Cup Body (Tapered Bucket) */}
          <path
            d="M 22 55 L 42 120 C 44 125, 48 128, 90 128 C 132 128, 136 125, 138 120 L 158 55 Z"
            fill="url(#dishCupGrad)"
            stroke="#60A5FA"
            strokeWidth="1.5"
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

          {/* Cup Inner Dessert Surface Base */}
          <ellipse cx="90" cy="55" rx="68" ry="24" fill="#FEF3C7" stroke="#FFFFFF" strokeWidth="3" />

          {/* Topping: ZIP LABAN LOUAH (Nutella | Pistachio) */}
          {topping === 'louah-nutella' && (
            <g>
              {/* Heaped Louah Pastry Mound */}
              <ellipse cx="90" cy="52" rx="64" ry="22" fill="url(#dishLouahPastry)" />
              {/* Pastry Puff Nodes */}
              <circle cx="55" cy="46" r="14" fill="#FDE68A" stroke="#B45309" strokeWidth="1" />
              <circle cx="85" cy="40" r="16" fill="#FBBF24" stroke="#92400E" strokeWidth="1" />
              <circle cx="115" cy="45" r="13" fill="#FDE68A" stroke="#B45309" strokeWidth="1" />
              <circle cx="70" cy="54" r="12" fill="#F59E0B" stroke="#78350F" strokeWidth="1" />
              <circle cx="102" cy="53" r="14" fill="#FDE68A" stroke="#B45309" strokeWidth="1" />

              {/* Rich Nutella Drizzle Cascade */}
              <path
                d="M 40 40 Q 65 65 95 38 T 145 48"
                stroke="#3B1D08"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 48 52 Q 80 32 110 58 T 140 42"
                stroke="#78350F"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 60 36 Q 90 60 125 36"
                stroke="#240D02"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Chopped Emerald Pistachios */}
              <circle cx="50" cy="44" r="2.5" fill="#34D399" />
              <circle cx="75" cy="38" r="3" fill="#10B981" />
              <circle cx="92" cy="46" r="2" fill="#ECFDF5" />
              <circle cx="108" cy="39" r="3" fill="#047857" />
              <circle cx="125" cy="48" r="2.5" fill="#34D399" />
              <circle cx="90" cy="58" r="2" fill="#10B981" />
            </g>
          )}

          {/* Topping: PISTACHIO CHOCOLATE LOUAH (Kinder | Pistachio & Strawberry) */}
          {topping === 'louah-strawberry' && (
            <g>
              {/* Cream and Pistachio Sauce Bed */}
              <ellipse cx="90" cy="52" rx="64" ry="22" fill="#ECFDF5" />
              <path
                d="M 30 50 Q 60 62 90 48 T 150 54"
                stroke="url(#dishPistaGrad)"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 35 44 Q 75 32 115 54 T 145 42"
                stroke="#451A03"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />

              {/* Kinder Mini Bar on Left */}
              <g transform="translate(42, 42) rotate(-12) scale(0.75)">
                <rect x="0" y="0" width="38" height="16" rx="2" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
                <rect x="2" y="2" width="34" height="6" rx="1" fill="#E11D48" />
                <text x="19" y="14" textAnchor="middle" fill="#451A03" fontSize="6.5" fontWeight="900">
                  Kinder
                </text>
              </g>

              {/* Fresh Sliced Heart-shaped Strawberry in Center */}
              <g transform="translate(90, 48) scale(0.95)" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.35))">
                {/* Strawberry Body */}
                <path
                  d="M 0 -16 C -12 -16 -18 -4 -12 8 C -8 16 0 22 0 22 C 0 22 8 16 12 8 C 18 -4 12 -16 0 -16 Z"
                  fill="#E11D48"
                  stroke="#9F1239"
                  strokeWidth="1"
                />
                {/* Inner Strawberry Flesh gradient */}
                <path
                  d="M 0 -12 C -8 -12 -12 -2 -8 6 C -5 12 0 16 0 16 C 0 16 5 12 8 6 C 12 -2 8 -12 0 -12 Z"
                  fill="#FB7185"
                  opacity="0.8"
                />
                {/* Core White Flesh */}
                <ellipse cx="0" cy="-2" rx="4" ry="7" fill="#FFF1F2" opacity="0.9" />
                {/* Seeds */}
                <circle cx="-5" cy="-6" r="0.8" fill="#FEF08A" />
                <circle cx="5" cy="-6" r="0.8" fill="#FEF08A" />
                <circle cx="-6" cy="2" r="0.8" fill="#FEF08A" />
                <circle cx="6" cy="2" r="0.8" fill="#FEF08A" />
                <circle cx="0" cy="8" r="0.8" fill="#FEF08A" />
                {/* Green Leaf Calyx Top */}
                <path
                  d="M 0 -16 L -5 -22 L -1 -17 L 0 -23 L 2 -17 L 6 -21 L 2 -16 Z"
                  fill="#16A34A"
                  stroke="#14532D"
                  strokeWidth="0.8"
                />
              </g>

              {/* Pistachio crumbles around the berry */}
              <circle cx="125" cy="46" r="3" fill="#10B981" />
              <circle cx="138" cy="52" r="2.5" fill="#34D399" />
              <circle cx="118" cy="58" r="2" fill="#047857" />
              <circle cx="68" cy="58" r="2.5" fill="#A7F3D0" />
            </g>
          )}

          {/* Top Rim Glaze Highlight */}
          <ellipse cx="90" cy="53" rx="65" ry="21" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" pointerEvents="none" />
        </svg>
      )}

      {/* =========================================================================
          2. CHEESE BOMB (dishType === 'pastry')
         ========================================================================= */}
      {dishType === 'pastry' && (
        <svg
          viewBox="0 0 180 140"
          className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="cheesePlateGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </radialGradient>
            <linearGradient id="flakyPastry" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="chocMelt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="40%" stopColor="#451A03" />
              <stop offset="100%" stopColor="#1F0B02" />
            </linearGradient>
          </defs>

          {/* Ground Shadow */}
          <ellipse cx="90" cy="128" rx="66" ry="10" fill="rgba(0,0,0,0.4)" filter="blur(4px)" />

          {/* Golden Scalloped Base Pedestal */}
          <ellipse cx="90" cy="122" rx="58" ry="12" fill="url(#cheesePlateGrad)" stroke="#B45309" strokeWidth="1.5" />
          <ellipse cx="90" cy="120" rx="54" ry="10" fill="#FFFFFF" opacity="0.4" />

          {/* Tier 1: Wide Pastry Mound Base */}
          <path
            d="M 40 115 C 38 98, 55 92, 90 92 C 125 92, 142 98, 140 115 C 138 122, 125 125, 90 125 C 55 125, 42 122, 40 115 Z"
            fill="url(#flakyPastry)"
            stroke="#92400E"
            strokeWidth="1.2"
          />

          {/* Tier 2: Mid Flaky Pastry Crown */}
          <path
            d="M 52 94 C 50 78, 65 72, 90 72 C 115 72, 130 78, 128 94 C 126 100, 115 104, 90 104 C 65 104, 54 100, 52 94 Z"
            fill="url(#flakyPastry)"
            stroke="#B45309"
            strokeWidth="1.2"
          />

          {/* Tier 3: Top Pyramid Spire */}
          <path
            d="M 66 75 C 64 54, 76 38, 90 38 C 104 38, 116 54, 114 75 C 112 82, 104 85, 90 85 C 76 85, 68 82, 66 75 Z"
            fill="url(#flakyPastry)"
            stroke="#92400E"
            strokeWidth="1.2"
          />

          {/* Luscious Melting Cream Cheese Streams */}
          <path
            d="M 85 40 Q 75 60 70 82 T 62 108"
            stroke="#FEF9C3"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M 95 42 Q 105 65 110 88 T 118 112"
            stroke="#FEF9C3"
            strokeWidth="5.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M 90 40 Q 92 68 88 95 T 90 118"
            stroke="#FEF08A"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Decadent Dark Molten Chocolate Ganache Cascade */}
          <path
            d="M 88 36 C 88 36, 78 52, 72 74 C 68 88, 62 102, 54 114"
            stroke="url(#chocMelt)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 92 36 C 92 36, 102 52, 108 74 C 112 88, 118 102, 126 114"
            stroke="url(#chocMelt)"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 90 35 C 90 35, 96 55, 92 80 C 89 98, 96 110, 95 120"
            stroke="#3B1D08"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Molten Chocolate Spire Cap */}
          <circle cx="90" cy="37" r="7" fill="#3B1D08" stroke="#1F0B02" strokeWidth="1" />
          <circle cx="88" cy="35" r="2" fill="#FFFFFF" opacity="0.6" />

          {/* Flaked almond crunch garnish */}
          <ellipse cx="75" cy="85" rx="3.5" ry="1.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.5" transform="rotate(-20 75 85)" />
          <ellipse cx="105" cy="88" rx="3.5" ry="1.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.5" transform="rotate(25 105 88)" />
          <ellipse cx="86" cy="108" rx="4" ry="2" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.5" transform="rotate(10 86 108)" />
        </svg>
      )}

      {/* =========================================================================
          3. AL MAZIA & LAZY CAT (dishType === 'square')
         ========================================================================= */}
      {dishType === 'square' && (
        <svg
          viewBox="0 0 180 140"
          className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground Shadow */}
          <ellipse cx="90" cy="128" rx="60" ry="10" fill="rgba(0,0,0,0.35)" filter="blur(4px)" />

          {/* AL MAZIA: Alexandria Semolina Cube */}
          {topping === 'al-mazia' && (
            <g>
              {/* Perspective Container */}
              {/* Front-Left Facet */}
              <path
                d="M 35 65 L 90 92 L 90 124 L 35 97 Z"
                fill="#D97706"
                stroke="#B45309"
                strokeWidth="1.2"
              />
              {/* Clotted Cream Stripe on Left */}
              <path d="M 35 77 L 90 104 L 90 114 L 35 87 Z" fill="#FFFBEB" opacity="0.9" />

              {/* Front-Right Facet */}
              <path
                d="M 90 92 L 145 65 L 145 97 L 90 124 Z"
                fill="#B45309"
                stroke="#92400E"
                strokeWidth="1.2"
              />
              {/* Clotted Cream Stripe on Right */}
              <path d="M 90 104 L 145 77 L 145 87 L 90 114 Z" fill="#FFFBEB" opacity="0.85" />

              {/* Top Facet (Glistening Amber Glaze) */}
              <path
                d="M 90 38 L 145 65 L 90 92 L 35 65 Z"
                fill="#FBBF24"
                stroke="#F59E0B"
                strokeWidth="1.5"
              />

              {/* Honey Sheen Highlight */}
              <path
                d="M 90 42 L 138 65 L 90 88 L 42 65 Z"
                fill="#FDE68A"
                opacity="0.5"
              />

              {/* Almond Slivers & Pistachios on top */}
              <ellipse cx="80" cy="60" rx="7" ry="3.5" fill="#FFFBEB" stroke="#92400E" strokeWidth="1" transform="rotate(-30 80 60)" />
              <ellipse cx="102" cy="62" rx="7" ry="3.5" fill="#FFFBEB" stroke="#92400E" strokeWidth="1" transform="rotate(35 102 62)" />
              <ellipse cx="90" cy="74" rx="6" ry="3" fill="#FFFBEB" stroke="#92400E" strokeWidth="1" transform="rotate(5 90 74)" />
              <circle cx="70" cy="68" r="2.5" fill="#10B981" />
              <circle cx="112" cy="55" r="2.5" fill="#059669" />
              <circle cx="88" cy="52" r="2" fill="#34D399" />
              <circle cx="98" cy="75" r="2" fill="#10B981" />

              {/* Clear Glass Edge Highlights */}
              <path d="M 35 65 L 90 92 L 145 65" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
              <path d="M 90 92 L 90 124" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            </g>
          )}

          {/* LAZY CAT: Dark Chocolate Biscuit Mosaic Slab */}
          {topping === 'lazy-cat' && (
            <g>
              {/* Front-Left Facet: Dark Chocolate Body */}
              <path
                d="M 35 65 L 90 92 L 90 124 L 35 97 Z"
                fill="#271004"
                stroke="#1F0B02"
                strokeWidth="1.2"
              />
              {/* Embedded Golden Biscuit Mosaic chunks on Left */}
              <rect x="44" y="80" width="10" height="7" rx="1" fill="#FDE68A" stroke="#B45309" strokeWidth="0.6" transform="rotate(15 44 80)" />
              <rect x="62" y="92" width="12" height="8" rx="1" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.6" transform="rotate(-10 62 92)" />
              <rect x="76" y="86" width="9" height="9" rx="1" fill="#FDE68A" stroke="#B45309" strokeWidth="0.6" transform="rotate(25 76 86)" />
              <rect x="50" y="98" width="10" height="6" rx="1" fill="#FBBF24" stroke="#B45309" strokeWidth="0.6" transform="rotate(5 50 98)" />

              {/* Front-Right Facet */}
              <path
                d="M 90 92 L 145 65 L 145 97 L 90 124 Z"
                fill="#1C0A02"
                stroke="#0F0501"
                strokeWidth="1.2"
              />
              {/* Embedded Biscuit Chunks on Right */}
              <rect x="100" y="86" width="12" height="8" rx="1" fill="#FEF3C7" stroke="#B45309" strokeWidth="0.6" transform="rotate(-15 100 86)" />
              <rect x="120" y="78" width="9" height="7" rx="1" fill="#FDE68A" stroke="#B45309" strokeWidth="0.6" transform="rotate(18 120 78)" />
              <rect x="106" y="100" width="11" height="7" rx="1" fill="#FBBF24" stroke="#B45309" strokeWidth="0.6" transform="rotate(-8 106 100)" />

              {/* Top Facet: Rich Cocoa Dust & Curls */}
              <path
                d="M 90 38 L 145 65 L 90 92 L 35 65 Z"
                fill="#3B1D08"
                stroke="#271004"
                strokeWidth="1.5"
              />

              {/* Dark Chocolate Curls & Dust */}
              <path d="M 65 58 Q 80 50 95 62" stroke="#1A0A02" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 85 70 Q 105 58 120 68" stroke="#1A0A02" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <path d="M 75 75 Q 90 85 105 76" stroke="#451A03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="68" cy="62" r="1.5" fill="#FFFFFF" opacity="0.4" />
              <circle cx="82" cy="55" r="1.5" fill="#FFFFFF" opacity="0.3" />
              <circle cx="108" cy="64" r="1.5" fill="#FFFFFF" opacity="0.4" />
              <circle cx="95" cy="75" r="1.5" fill="#FFFFFF" opacity="0.3" />

              {/* Rim Highlight */}
              <path d="M 35 65 L 90 92 L 145 65" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
            </g>
          )}
        </svg>
      )}

      {/* =========================================================================
          4. SIGNATURE BOWLS: CREME DE LA CREME & KABSA (dishType === 'bowl')
         ========================================================================= */}
      {dishType === 'bowl' && (
        <svg
          viewBox="0 0 200 135"
          className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dishBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E5BB5" />
              <stop offset="35%" stopColor="#0E47A8" />
              <stop offset="100%" stopColor="#082E74" />
            </linearGradient>
            <radialGradient id="kabsaCrunchGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="60%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </radialGradient>
          </defs>

          {/* Ground Shadow */}
          <ellipse cx="100" cy="120" rx="75" ry="12" fill="rgba(0,0,0,0.4)" filter="blur(5px)" />

          {/* Royal Blue Bowl Hull */}
          <path
            d="M 22 46 C 26 84, 52 118, 100 118 C 148 118, 174 84, 178 46 Z"
            fill="url(#dishBowlGrad)"
            stroke="#60A5FA"
            strokeWidth="1.5"
          />

          {/* Front Logo Emblem */}
          <g transform="translate(82, 70) scale(0.6)">
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

          {/* Bowl Rim & Interior Base */}
          <ellipse cx="100" cy="46" rx="78" ry="24" fill="#FEF3C7" stroke="#FFFFFF" strokeWidth="2.5" />

          {/* 4.1 CREME DE LA CREME (Strawberries & Cream) */}
          {topping === 'creme-de-la-creme' && (
            <g>
              {/* Clotted Kashta Cream Interior */}
              <ellipse cx="100" cy="46" rx="75" ry="22" fill="#FFFDF0" />

              {/* Chocolate and Caramel Swirl Lines */}
              <path
                d="M 38 48 Q 70 32 100 52 T 162 44"
                stroke="#451A03"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M 45 42 Q 85 58 120 40 T 155 50"
                stroke="#D97706"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />

              {/* Fresh Sliced Strawberries fan */}
              {/* Berry 1 Left */}
              <g transform="translate(60, 44) rotate(-18) scale(0.65)">
                <path d="M 0 -16 C -12 -16 -18 -4 -12 8 C -8 16 0 22 0 22 C 0 22 8 16 12 8 C 18 -4 12 -16 0 -16 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
                <path d="M 0 -12 C -8 -12 -12 -2 -8 6 C -5 12 0 16 0 16 C 0 16 5 12 8 6 C 12 -2 8 -12 0 -12 Z" fill="#FB7185" />
                <ellipse cx="0" cy="-2" rx="3.5" ry="6" fill="#FFF1F2" />
              </g>
              {/* Berry 2 Center-Left */}
              <g transform="translate(82, 42) rotate(-6) scale(0.7)">
                <path d="M 0 -16 C -12 -16 -18 -4 -12 8 C -8 16 0 22 0 22 C 0 22 8 16 12 8 C 18 -4 12 -16 0 -16 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
                <path d="M 0 -12 C -8 -12 -12 -2 -8 6 C -5 12 0 16 0 16 C 0 16 5 12 8 6 C 12 -2 8 -12 0 -12 Z" fill="#FB7185" />
                <ellipse cx="0" cy="-2" rx="3.5" ry="6" fill="#FFF1F2" />
              </g>
              {/* Berry 3 Center */}
              <g transform="translate(102, 43) rotate(5) scale(0.75)">
                <path d="M 0 -16 C -12 -16 -18 -4 -12 8 C -8 16 0 22 0 22 C 0 22 8 16 12 8 C 18 -4 12 -16 0 -16 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
                <path d="M 0 -12 C -8 -12 -12 -2 -8 6 C -5 12 0 16 0 16 C 0 16 5 12 8 6 C 12 -2 8 -12 0 -12 Z" fill="#FB7185" />
                <ellipse cx="0" cy="-2" rx="3.5" ry="6" fill="#FFF1F2" />
              </g>
              {/* Berry 4 Center-Right */}
              <g transform="translate(122, 42) rotate(15) scale(0.7)">
                <path d="M 0 -16 C -12 -16 -18 -4 -12 8 C -8 16 0 22 0 22 C 0 22 8 16 12 8 C 18 -4 12 -16 0 -16 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
                <path d="M 0 -12 C -8 -12 -12 -2 -8 6 C -5 12 0 16 0 16 C 0 16 5 12 8 6 C 12 -2 8 -12 0 -12 Z" fill="#FB7185" />
                <ellipse cx="0" cy="-2" rx="3.5" ry="6" fill="#FFF1F2" />
              </g>
              {/* Berry 5 Right */}
              <g transform="translate(142, 46) rotate(25) scale(0.65)">
                <path d="M 0 -16 C -12 -16 -18 -4 -12 8 C -8 16 0 22 0 22 C 0 22 8 16 12 8 C 18 -4 12 -16 0 -16 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
                <path d="M 0 -12 C -8 -12 -12 -2 -8 6 C -5 12 0 16 0 16 C 0 16 5 12 8 6 C 12 -2 8 -12 0 -12 Z" fill="#FB7185" />
                <ellipse cx="0" cy="-2" rx="3.5" ry="6" fill="#FFF1F2" />
              </g>

              {/* Mint Leaf accents */}
              <path d="M 98 28 C 94 22, 102 18, 106 24 C 104 28, 100 30, 98 28 Z" fill="#16A34A" />
              <path d="M 106 24 C 112 20, 116 26, 110 30 Z" fill="#15803D" />
            </g>
          )}

          {/* 4.2 KABSA (Crispy Chocolate Rice Crunch Mountain) */}
          {topping === 'kabsa' && (
            <g>
              {/* Mounded Crispy Crunch Surface */}
              <ellipse cx="100" cy="44" rx="76" ry="24" fill="url(#kabsaCrunchGrad)" />

              {/* Crispy Chocolate Pearls and Puffed Grain Beads */}
              {/* Clustered crunchy pearls across surface */}
              <circle cx="48" cy="45" r="4" fill="#3B1D08" stroke="#1F0B02" strokeWidth="0.8" />
              <circle cx="46" cy="44" r="1" fill="#FFFFFF" opacity="0.6" />
              <circle cx="62" cy="38" r="4.5" fill="#451A03" stroke="#1F0B02" strokeWidth="0.8" />
              <circle cx="60" cy="36" r="1.2" fill="#FFFFFF" opacity="0.6" />
              <circle cx="76" cy="48" r="5" fill="#240D02" stroke="#0F0501" strokeWidth="0.8" />
              <circle cx="74" cy="46" r="1.2" fill="#FFFFFF" opacity="0.6" />
              <circle cx="92" cy="36" r="5.5" fill="#451A03" stroke="#1F0B02" strokeWidth="0.8" />
              <circle cx="90" cy="34" r="1.5" fill="#FFFFFF" opacity="0.6" />
              <circle cx="108" cy="46" r="5" fill="#3B1D08" stroke="#1F0B02" strokeWidth="0.8" />
              <circle cx="106" cy="44" r="1.2" fill="#FFFFFF" opacity="0.6" />
              <circle cx="125" cy="38" r="4.5" fill="#451A03" stroke="#1F0B02" strokeWidth="0.8" />
              <circle cx="123" cy="36" r="1.2" fill="#FFFFFF" opacity="0.6" />
              <circle cx="140" cy="46" r="4" fill="#240D02" stroke="#0F0501" strokeWidth="0.8" />
              <circle cx="138" cy="44" r="1" fill="#FFFFFF" opacity="0.6" />
              <circle cx="155" cy="42" r="3.5" fill="#3B1D08" stroke="#1F0B02" strokeWidth="0.8" />

              {/* Smaller filler crunch beads */}
              <circle cx="58" cy="50" r="3" fill="#D97706" />
              <circle cx="70" cy="38" r="3.5" fill="#F59E0B" />
              <circle cx="85" cy="44" r="3.5" fill="#B45309" />
              <circle cx="100" cy="38" r="3" fill="#F59E0B" />
              <circle cx="116" cy="38" r="3.5" fill="#D97706" />
              <circle cx="132" cy="48" r="3" fill="#B45309" />
              <circle cx="148" cy="38" r="3" fill="#F59E0B" />
              <circle cx="98" cy="54" r="4" fill="#3B1D08" />

              {/* Caramel and Dulce de Leche Drizzle Lines */}
              <path
                d="M 35 46 Q 70 30 100 50 T 165 42"
                stroke="#FEF3C7"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M 45 40 Q 85 58 125 36 T 155 48"
                stroke="#FBBF24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
            </g>
          )}

          {/* Glossy Rim Highlight */}
          <ellipse cx="100" cy="45" rx="76" ry="22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" pointerEvents="none" />
        </svg>
      )}

      {/* =========================================================================
          5. LAYALEE VALVET BOXES (dishType === 'box')
         ========================================================================= */}
      {dishType === 'box' && (
        <svg
          viewBox="0 0 190 140"
          className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground Shadow */}
          <ellipse cx="95" cy="128" rx="68" ry="10" fill="rgba(0,0,0,0.35)" filter="blur(4px)" />

          {/* Isometric Box Perspective */}
          {/* Left Side (Royal Blue Brand Panel) */}
          <path
            d="M 28 62 L 95 90 L 95 120 L 28 92 Z"
            fill="#0E47A8"
            stroke="#082E74"
            strokeWidth="1.2"
          />
          {/* Zip Laban Mini Badge on Front Left Box */}
          <g transform="translate(44, 76) scale(0.42)">
            <rect x="0" y="0" width="40" height="24" rx="4" fill="#FFFFFF" stroke="#0B3E96" strokeWidth="1.5" />
            <text x="20" y="16" textAnchor="middle" fill="#0B3E96" fontSize="10" fontWeight="900">
              زيب لبن
            </text>
          </g>

          {/* Right Side (Festive Crimson Panel) */}
          <path
            d="M 95 90 L 162 62 L 162 92 L 95 120 Z"
            fill="#BE123C"
            stroke="#881337"
            strokeWidth="1.2"
          />
          {/* Slogan Banner on Right Side */}
          <g transform="translate(106, 76) scale(0.45)">
            <rect x="0" y="0" width="70" height="22" rx="3" fill="#FFFFFF" opacity="0.9" />
            <text x="35" y="15" textAnchor="middle" fill="#BE123C" fontSize="9" fontWeight="900">
              Zip Laban
            </text>
          </g>

          {/* Top Dessert Opening / Surface */}
          <path
            d="M 95 34 L 162 62 L 95 90 L 28 62 Z"
            fill="#FFFBEB"
            stroke="#60A5FA"
            strokeWidth="1.5"
          />

          {/* 5.1 LAYALEE VALVET STRAWBERRY */}
          {topping === 'layalee-strawberry' && (
            <g>
              {/* Crimson Red Velvet Crumb Base */}
              <path d="M 95 36 L 158 62 L 95 88 L 32 62 Z" fill="#E11D48" />

              {/* White Kashta Piped Rosettes */}
              <circle cx="60" cy="56" r="10" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="0.8" />
              <circle cx="85" cy="48" r="11" fill="#FFFDF0" stroke="#F1F5F9" strokeWidth="0.8" />
              <circle cx="110" cy="54" r="11" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="0.8" />
              <circle cx="130" cy="62" r="9" fill="#FFFDF0" stroke="#F1F5F9" strokeWidth="0.8" />
              <circle cx="80" cy="68" r="10" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="0.8" />
              <circle cx="105" cy="72" r="10" fill="#FFFDF0" stroke="#F1F5F9" strokeWidth="0.8" />

              {/* Fresh Sliced Strawberries */}
              <g transform="translate(95, 58) scale(0.75)" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))">
                <path d="M 0 -16 C -12 -16 -18 -4 -12 8 C -8 16 0 22 0 22 C 0 22 8 16 12 8 C 18 -4 12 -16 0 -16 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
                <ellipse cx="0" cy="-2" rx="3.5" ry="6" fill="#FFF1F2" />
                <path d="M 0 -16 L -4 -20 L -1 -17 L 0 -22 L 2 -17 L 5 -19 L 2 -16 Z" fill="#16A34A" />
              </g>

              {/* Strawberry coulis drizzle */}
              <path d="M 45 60 Q 80 75 115 50 T 145 65" stroke="#9F1239" strokeWidth="2" fill="none" opacity="0.7" />
            </g>
          )}

          {/* 5.2 LAYALEE VALVET RAFFAELLO */}
          {topping === 'layalee-raffaello' && (
            <g>
              {/* White Almond Velvet Base */}
              <path d="M 95 36 L 158 62 L 95 88 L 32 62 Z" fill="#FEF3C7" />

              {/* Snow-White Coconut Cream Coating */}
              <path d="M 95 38 L 154 62 L 95 86 L 36 62 Z" fill="#FFFFFF" opacity="0.95" />

              {/* Center Raffaello Truffle Ball */}
              <g transform="translate(95, 60)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))">
                <circle cx="0" cy="0" r="12" fill="#FFFDF5" stroke="#E2E8F0" strokeWidth="1" />
                <circle cx="-3" cy="-3" r="3" fill="#FFFFFF" opacity="0.8" />
                {/* Shredded Coconut Specks */}
                <circle cx="-6" cy="4" r="1" fill="#FDE68A" />
                <circle cx="5" cy="-5" r="1" fill="#FDE68A" />
                <circle cx="6" cy="4" r="1" fill="#FDE68A" />
                <circle cx="0" cy="-7" r="1" fill="#FDE68A" />
              </g>

              {/* Toasted Almond Flakes */}
              <ellipse cx="65" cy="55" rx="6" ry="2.5" fill="#FDE68A" stroke="#B45309" strokeWidth="0.6" transform="rotate(-25 65 55)" />
              <ellipse cx="125" cy="58" rx="6" ry="2.5" fill="#FDE68A" stroke="#B45309" strokeWidth="0.6" transform="rotate(30 125 58)" />
              <ellipse cx="80" cy="72" rx="5" ry="2.5" fill="#FDE68A" stroke="#B45309" strokeWidth="0.6" transform="rotate(10 80 72)" />
              <ellipse cx="112" cy="70" rx="5" ry="2.5" fill="#FDE68A" stroke="#B45309" strokeWidth="0.6" transform="rotate(-15 112 70)" />

              {/* Silver/Golden Sugar Pearls */}
              <circle cx="52" cy="65" r="1.5" fill="#CBD5E1" />
              <circle cx="75" cy="48" r="1.5" fill="#CBD5E1" />
              <circle cx="118" cy="48" r="1.5" fill="#CBD5E1" />
              <circle cx="138" cy="66" r="1.5" fill="#CBD5E1" />
            </g>
          )}

          {/* Box Outer Edge Rim */}
          <path d="M 28 62 L 95 90 L 162 62" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
        </svg>
      )}

      {/* =========================================================================
          6. MANGO FUSION (dishType === 'tub')
         ========================================================================= */}
      {dishType === 'tub' && (
        <svg
          viewBox="0 0 170 145"
          className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mangoCubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="clearTubGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
            </linearGradient>
          </defs>

          {/* Ground Shadow */}
          <ellipse cx="85" cy="130" rx="52" ry="9" fill="rgba(0,0,0,0.35)" filter="blur(4px)" />

          {/* Clear Takeaway Tub Body */}
          <path
            d="M 32 60 L 46 122 C 48 126, 52 128, 85 128 C 118 128, 122 126, 124 122 L 138 60 Z"
            fill="url(#clearTubGrad)"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
          />

          {/* Cream & Sponge layers visible through clear container */}
          <path d="M 44 116 C 55 120, 115 120, 126 116 L 122 122 C 120 125, 115 127, 85 127 C 55 127, 50 125, 48 122 Z" fill="#D97706" opacity="0.6" />
          <path d="M 38 92 C 55 98, 115 98, 132 92 L 129 104 C 115 110, 55 110, 41 104 Z" fill="#FEF3C7" opacity="0.8" />
          <path d="M 35 74 C 55 80, 115 80, 135 74 L 133 84 C 115 90, 55 90, 37 84 Z" fill="#F59E0B" opacity="0.6" />

          {/* Mini Zip Laban Seal on Clear Tub */}
          <g transform="translate(68, 82) scale(0.55)">
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
            <text x="32" y="44" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">
              Zip Laban
            </text>
          </g>

          {/* Tub Rim */}
          <ellipse cx="85" cy="60" rx="54" ry="18" fill="#FDE68A" stroke="#FFFFFF" strokeWidth="2" />

          {/* Overflowing Heap of Ripe Golden Alphonso Mango Cubes */}
          {/* Layer 1 Cubes */}
          <rect x="42" y="48" width="16" height="14" rx="2.5" fill="url(#mangoCubeGrad)" stroke="#B45309" strokeWidth="0.8" transform="rotate(-15 42 48)" />
          <rect x="62" y="42" width="17" height="15" rx="2.5" fill="url(#mangoCubeGrad)" stroke="#B45309" strokeWidth="0.8" transform="rotate(8 62 42)" />
          <rect x="85" y="40" width="16" height="15" rx="2.5" fill="url(#mangoCubeGrad)" stroke="#B45309" strokeWidth="0.8" transform="rotate(-5 85 40)" />
          <rect x="106" y="46" width="17" height="14" rx="2.5" fill="url(#mangoCubeGrad)" stroke="#B45309" strokeWidth="0.8" transform="rotate(18 106 46)" />

          {/* Layer 2 Mid Mound Cubes */}
          <rect x="52" y="34" width="16" height="15" rx="2.5" fill="url(#mangoCubeGrad)" stroke="#92400E" strokeWidth="0.8" transform="rotate(12 52 34)" />
          <rect x="74" y="28" width="18" height="16" rx="2.5" fill="url(#mangoCubeGrad)" stroke="#92400E" strokeWidth="0.8" transform="rotate(-8 74 28)" />
          <rect x="98" y="32" width="17" height="15" rx="2.5" fill="url(#mangoCubeGrad)" stroke="#92400E" strokeWidth="0.8" transform="rotate(5 98 32)" />

          {/* Top Peak Cube */}
          <rect x="76" y="16" width="18" height="16" rx="2.5" fill="#FDE68A" stroke="#B45309" strokeWidth="1" transform="rotate(10 76 16)" />
          {/* Juicy Sheen Highlight */}
          <circle cx="82" cy="22" r="2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="62" cy="38" r="1.8" fill="#FFFFFF" opacity="0.7" />
          <circle cx="104" cy="38" r="1.8" fill="#FFFFFF" opacity="0.7" />
          <circle cx="92" cy="46" r="1.8" fill="#FFFFFF" opacity="0.7" />

          {/* Glossy syrup drizzle over mango cubes */}
          <path d="M 55 45 Q 85 25 115 50" stroke="#F59E0B" strokeWidth="2.5" fill="none" opacity="0.7" />
        </svg>
      )}

      {/* =========================================================================
          7. HEBBA CAKES: FOIL BAKING TINS (dishType === 'tin')
         ========================================================================= */}
      {dishType === 'tin' && (
        <svg
          viewBox="0 0 175 140"
          className="w-full h-auto drop-shadow-xl overflow-visible transition-transform duration-300 group-hover:scale-108 group-hover:-translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="tinBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E5BB5" />
              <stop offset="50%" stopColor="#0E47A8" />
              <stop offset="100%" stopColor="#082E74" />
            </linearGradient>
            <linearGradient id="kinderChoc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="50%" stopColor="#451A03" />
              <stop offset="100%" stopColor="#290E02" />
            </linearGradient>
            <radialGradient id="pistaTinGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </radialGradient>
            <linearGradient id="belgiumDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B1D08" />
              <stop offset="50%" stopColor="#1F0B02" />
              <stop offset="100%" stopColor="#0D0401" />
            </linearGradient>
          </defs>

          {/* Ground Shadow */}
          <ellipse cx="88" cy="126" rx="60" ry="10" fill="rgba(0,0,0,0.35)" filter="blur(4px)" />

          {/* 3D Angled Square Baking Tin */}
          {/* Front Left Wall */}
          <path
            d="M 28 65 L 88 95 L 88 122 L 28 92 Z"
            fill="url(#tinBlueGrad)"
            stroke="#082E74"
            strokeWidth="1.2"
          />
          {/* Front Right Wall */}
          <path
            d="M 88 95 L 148 65 L 148 92 L 88 122 Z"
            fill="#082E74"
            stroke="#051C47"
            strokeWidth="1.2"
          />

          {/* Silver Crimped Foil Rim Base */}
          <path
            d="M 26 64 L 88 33 L 150 64 L 88 95 Z"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />

          {/* Top Cake Lava Surface */}
          <path
            d="M 30 65 L 88 36 L 146 65 L 88 94 Z"
            fill="#FEF3C7"
          />

          {/* 7.1 KINDER HEBBA CAKE */}
          {topping === 'kinder' && (
            <g>
              <path d="M 30 65 L 88 36 L 146 65 L 88 94 Z" fill="url(#kinderChoc)" />
              {/* White Hazelnut Cream Swirls */}
              <path d="M 45 62 Q 88 45 130 68" stroke="#FFFDF0" strokeWidth="4" fill="none" opacity="0.9" />
              <path d="M 55 72 Q 88 55 120 78" stroke="#FFFDF0" strokeWidth="3" fill="none" opacity="0.8" />
              <path d="M 68 50 Q 88 72 108 48" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.7" />

              {/* Kinder Mini Bar in Center */}
              <g transform="translate(88, 64) rotate(-15) scale(0.9)">
                <rect x="-20" y="-8" width="40" height="16" rx="2" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))" />
                <rect x="-18" y="-6" width="36" height="6" rx="1" fill="#E11D48" />
                <text x="0" y="5" textAnchor="middle" fill="#451A03" fontSize="6.5" fontWeight="900">
                  Kinder
                </text>
              </g>
            </g>
          )}

          {/* 7.2 PISTA HEBBA CAKE */}
          {topping === 'pista' && (
            <g>
              <path d="M 30 65 L 88 36 L 146 65 L 88 94 Z" fill="url(#pistaTinGrad)" />
              {/* Golden Kunafa Threads Shreds */}
              <path d="M 38 60 Q 75 45 110 65 T 140 58" stroke="#FEF3C7" strokeWidth="2" fill="none" />
              <path d="M 45 70 Q 85 52 125 72 T 135 68" stroke="#FDE68A" strokeWidth="1.8" fill="none" />
              <path d="M 60 50 Q 88 75 118 52" stroke="#D97706" strokeWidth="1.2" fill="none" />

              {/* Crushed Whole Pistachio Gems */}
              <circle cx="65" cy="58" r="3.5" fill="#047857" stroke="#A7F3D0" strokeWidth="0.8" />
              <circle cx="85" cy="50" r="4" fill="#059669" stroke="#ECFDF5" strokeWidth="0.8" />
              <circle cx="108" cy="56" r="3.5" fill="#047857" stroke="#A7F3D0" strokeWidth="0.8" />
              <circle cx="88" cy="74" r="3.5" fill="#10B981" stroke="#ECFDF5" strokeWidth="0.8" />
              <circle cx="122" cy="66" r="3" fill="#047857" />
              <circle cx="52" cy="68" r="2.5" fill="#34D399" />
            </g>
          )}

          {/* 7.3 BELGIUM CHOCOLATE HEBBA CAKE */}
          {topping === 'belgium' && (
            <g>
              <path d="M 30 65 L 88 36 L 146 65 L 88 94 Z" fill="url(#belgiumDark)" />
              {/* Dark Mirror Glaze Sheen */}
              <path d="M 45 58 L 88 40 L 130 58 L 88 76 Z" fill="rgba(255,255,255,0.12)" />

              {/* White and Dark Chocolate Crisp Pearls */}
              <circle cx="55" cy="62" r="3" fill="#FFFDF0" stroke="#78350F" strokeWidth="0.5" />
              <circle cx="70" cy="52" r="3.5" fill="#240D02" stroke="#451A03" strokeWidth="0.5" />
              <circle cx="88" cy="48" r="3" fill="#FFFDF0" stroke="#78350F" strokeWidth="0.5" />
              <circle cx="105" cy="54" r="3.5" fill="#240D02" stroke="#451A03" strokeWidth="0.5" />
              <circle cx="120" cy="64" r="3" fill="#FFFDF0" stroke="#78350F" strokeWidth="0.5" />
              <circle cx="72" cy="72" r="3.5" fill="#240D02" stroke="#451A03" strokeWidth="0.5" />
              <circle cx="92" cy="70" r="3" fill="#FFFDF0" stroke="#78350F" strokeWidth="0.5" />
              <circle cx="108" cy="74" r="3.5" fill="#240D02" stroke="#451A03" strokeWidth="0.5" />

              {/* Gold leaf sparkle flakes */}
              <rect x="80" y="58" width="5" height="5" fill="#FBBF24" opacity="0.9" transform="rotate(45 80 58)" />
              <rect x="96" y="60" width="4" height="4" fill="#FDE68A" opacity="0.9" transform="rotate(20 96 60)" />
            </g>
          )}

          {/* 7.4 NUTELLA HEBBA CAKE */}
          {topping === 'nutella' && (
            <g>
              <path d="M 30 65 L 88 36 L 146 65 L 88 94 Z" fill="url(#kinderChoc)" />
              {/* Zigzag Caramel & Waffle Lattice */}
              <path d="M 40 65 L 88 40 L 136 65" stroke="#F59E0B" strokeWidth="3" fill="none" opacity="0.8" />
              <path d="M 45 74 L 88 52 L 131 74" stroke="#FBBF24" strokeWidth="2.5" fill="none" opacity="0.85" />
              <path d="M 52 82 L 88 64 L 124 82" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.8" />

              {/* Crushed Roasted Hazelnuts */}
              <circle cx="65" cy="58" r="3" fill="#D97706" />
              <circle cx="85" cy="46" r="2.5" fill="#B45309" />
              <circle cx="108" cy="52" r="3" fill="#FDE68A" />
              <circle cx="78" cy="70" r="2.5" fill="#FBBF24" />
              <circle cx="98" cy="68" r="3" fill="#D97706" />
              <circle cx="118" cy="65" r="2.5" fill="#B45309" />
            </g>
          )}

          {/* Foil Rim Detail */}
          <path d="M 28 65 L 88 95 L 148 65" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      )}

      {/* Flavor Title Below Dish */}
      {name && (
        <div className="text-center mt-2 w-full px-1">
          <span className="text-[11px] sm:text-xs font-black text-white group-hover:text-[#60A5FA] tracking-wide block line-clamp-1 transition-colors">
            {name}
          </span>
          {sub && (
            <span className="text-[9px] text-sky-200/70 block line-clamp-1 mt-0.5">
              {sub}
            </span>
          )}
          {price && (
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#0E47A8] border border-blue-400/40 text-white font-black text-xs shadow-md">
              ₹{price}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
