import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

export default function NavLink({ name, path, isLight = false, isScrolled = false, onClick }) {
  const { currentPath, navigate } = useNavigation();

  const isActive = path === '/' ? currentPath === '/' : currentPath.startsWith(path);

  const handleClick = (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (onClick) onClick();
    if (currentPath === path) window.scrollTo({ top: 0, behavior: 'instant' });
    else navigate(path);
  };

  // Determine text and underline color
  // When scrolled, floating navbar is always deep royal blue (#032B82), so text/underline is white
  const isLightMode = isLight && !isScrolled;

  const textColor = isLightMode
    ? isActive
      ? 'text-[#032B82] font-black'
      : 'text-[#073BB8] hover:text-[#032B82] font-bold'
    : isActive
    ? 'text-white font-black'
    : 'text-white/90 hover:text-white font-semibold';

  const underlineColor = isLightMode ? 'bg-[#073BB8]' : 'bg-white';

  return (
    <a
      href={path}
      onClick={handleClick}
      aria-current={isActive ? 'page' : undefined}
      className={`relative py-2 px-1 text-sm tracking-wide transition-colors duration-200 cursor-pointer select-none whitespace-nowrap group ${textColor}`}
    >
      <span className="relative z-10">{name}</span>

      {/* Animated Underline Indicator across active links */}
      {isActive && (
        <motion.span
          layoutId="activeNavUnderline"
          className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full ${underlineColor} shadow-xs`}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}

      {/* Subtle hover underline when not active */}
      {!isActive && (
        <span
          className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${underlineColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-center opacity-60`}
        />
      )}
    </a>
  );
}
