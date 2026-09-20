import React from 'react';
import { motion } from '../../context/MotionPreference';

export default function FloatingIngredients({ mousePosition = { x: 0, y: 0 } }) {
  // Delicate sparkles matching the brand style
  const sparkles = [
    { top: '22%', left: '46%', size: 14, delay: 0 },
    { top: '38%', left: '12%', size: 18, delay: 1.2 },
    { top: '65%', right: '42%', size: 12, delay: 2.1 },
    { top: '18%', right: '35%', size: 16, delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 z-25 pointer-events-none select-none overflow-hidden">
      {sparkles.map((s, idx) => (
        <motion.div
          key={idx}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, 90, 180],
            x: mousePosition.x * 8,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: s.delay,
          }}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
          }}
          className="absolute text-amber-200/80 drop-shadow-sm"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
