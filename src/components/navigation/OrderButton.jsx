import { ORDERING_ENABLED } from '../../config/ordering';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function OrderButton({ isLight = false, isScrolled = false, onClick, className = '' }) {
  const { navigate } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();
    navigate('/menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLightMode = isLight && !isScrolled;

  const styleClasses = isLightMode
    ? 'bg-[#073BB8] text-white hover:bg-[#032B82] shadow-md hover:shadow-lg hover:shadow-[#073BB8]/20'
    : 'bg-white text-[#073BB8] hover:bg-[#FFF8EE] shadow-lg hover:shadow-xl hover:shadow-black/15';

  if (!ORDERING_ENABLED) return <button disabled className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm zip-order-disabled ${styleClasses} ${className}`} title="Online ordering is temporarily unavailable">Ordering paused</button>;

  return (
    <a
      href="/menu"
      onClick={handleClick}
      aria-label="Order from menu"
      className={`group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full font-extrabold text-sm tracking-tight transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer select-none ${styleClasses} ${className}`}
      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
    >
      <span>Order Now</span>
      <ArrowRight
        size={17}
        className="transform transition-transform duration-300 group-hover:translate-x-1.5"
      />
    </a>
  );
}
