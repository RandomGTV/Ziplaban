import React from 'react';

export default function ZipLabanLogo({ className = 'w-12 h-14' }) {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 160 190"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="zipBadgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0D52B8" />
            <stop offset="50%" stopColor="#0B449E" />
            <stop offset="100%" stopColor="#07337B" />
          </linearGradient>
          <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#061826" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Shield with Arched Crown */}
        <path
          d="M 16 48 
             C 16 18, 48 8, 80 8 
             C 112 8, 144 18, 144 48 
             L 144 152 
             C 144 176, 120 182, 80 182 
             C 40 182, 16 176, 16 152 
             Z"
          fill="url(#zipBadgeGrad)"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinejoin="round"
          filter="url(#badgeShadow)"
        />

        {/* Inner Inset Border */}
        <path
          d="M 24 50 
             C 24 26, 50 16, 80 16 
             C 110 16, 136 26, 136 50 
             L 136 148 
             C 136 168, 114 174, 80 174 
             C 46 174, 24 168, 24 148 
             Z"
          fill="none"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="2"
        />

        {/* Authentic Arabic Calligraphy "زيب لبن" */}
        <text
          x="80"
          y="84"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Noto Sans Arabic', 'Amiri', 'Segoe UI', Arial, sans-serif"
          fontWeight="900"
          fontSize="48"
        >
          زيب لبن
        </text>

        {/* Sub-divider line */}
        <path
          d="M 36 102 L 124 102"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* English Brand Wordmark "Zip Laban" */}
        <text
          x="80"
          y="142"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-0.5px"
        >
          Zip Laban
        </text>

        {/* Micro Milk Dots */}
        <circle cx="80" cy="162" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="70" cy="162" r="1.5" fill="#FFFFFF" opacity="0.5" />
        <circle cx="90" cy="162" r="1.5" fill="#FFFFFF" opacity="0.5" />
      </svg>
    </div>
  );
}
