import React from 'react';
import { motion } from '../context/MotionPreference';

export default function FloatingIngredients({ count = 6, className = '' }) {
  const ingredients = [
    {
      id: 1,
      type: 'pistachio',
      emoji: '🥑',
      svg: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#8DB936] drop-shadow-md fill-current">
          <ellipse cx="20" cy="20" rx="14" ry="9" transform="rotate(-30 20 20)" fill="#8DB936" />
          <ellipse cx="20" cy="20" rx="10" ry="5" transform="rotate(-30 20 20)" fill="#688F23" />
        </svg>
      ),
      initial: { x: '10%', y: '15%', rotate: -15 },
      animate: { y: ['15%', '10%', '15%'], rotate: [-15, 5, -15] },
      duration: 6,
    },
    {
      id: 2,
      type: 'lotus',
      svg: (
        <svg viewBox="0 0 50 30" className="w-10 h-6 text-[#D97706] drop-shadow-md">
          <rect x="2" y="2" width="46" height="26" rx="4" fill="#B45309" stroke="#92400E" strokeWidth="2" />
          <circle cx="10" cy="15" r="2" fill="#FDE68A" />
          <circle cx="25" cy="15" r="3" fill="#FDE68A" />
          <circle cx="40" cy="15" r="2" fill="#FDE68A" />
        </svg>
      ),
      initial: { x: '85%', y: '25%', rotate: 20 },
      animate: { y: ['25%', '30%', '25%'], rotate: [20, -10, 20] },
      duration: 7,
    },
    {
      id: 3,
      type: 'cream',
      svg: (
        <svg viewBox="0 0 30 30" className="w-6 h-6 text-white drop-shadow-md">
          <path d="M15 2 C20 12 26 18 26 22 C26 27 21 29 15 29 C9 29 4 27 4 22 C4 18 10 12 15 2 Z" fill="#FFFDF9" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      ),
      initial: { x: '75%', y: '70%', rotate: 5 },
      animate: { y: ['70%', '64%', '70%'], rotate: [5, -15, 5] },
      duration: 5.5,
    },
    {
      id: 4,
      type: 'sparkle',
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400 drop-shadow-sm fill-current">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      ),
      initial: { x: '20%', y: '80%', rotate: 0 },
      animate: { y: ['80%', '75%', '80%'], rotate: [0, 90, 180, 270, 360] },
      duration: 8,
    },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {ingredients.slice(0, count).map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{ left: item.initial.x, top: item.initial.y }}
          animate={item.animate}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.svg}
        </motion.div>
      ))}
    </div>
  );
}
