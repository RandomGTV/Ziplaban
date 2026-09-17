import React, { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate for non-touch pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is interactive
      const target = e.target;
      const interactive = target.closest('button, a, input, [role="button"], .cursor-pointer');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updatePosition = () => {
      // Smooth lerp trailing
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      setPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Outer Liquid Ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#009BE8]/60 transition-all duration-300 ${
          isHovered
            ? 'w-14 h-14 bg-[#009BE8]/15 border-[#009BE8] scale-110 shadow-lg shadow-sky-500/20'
            : 'w-8 h-8 bg-transparent'
        }`}
      />
      {/* Inner Droplet Core */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
          isHovered ? 'w-2 h-2 bg-[#10B981]' : 'w-2.5 h-2.5 bg-[#009BE8]'
        }`}
      />
    </div>
  );
}
