import React, { useState, useEffect, useCallback } from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import MobileMenu from './MobileMenu';
import MobileStickyOrderBar from './MobileStickyOrderBar';
import { useNavigation } from '../../context/NavigationContext';

export default function GlobalNavbar({ onOpenSearch, light: manualLight }) {
  const { currentPath } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  // Automatically determine if page has a light top background unless explicitly overridden
  // Note: Home, Menu, New Arrivals, Locations, and Contact all have deep royal blue heroes
  const isLightPage =
    manualLight !== undefined
      ? manualLight
      : ['/about', '/product', '/cart', '/checkout'].some((p) =>
          currentPath.startsWith(p)
        );

  // Track scroll for compact floating pill transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Primary Fixed Top Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ease-out select-none ${
          isScrolled ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
      >
        <div className="pointer-events-auto">
          {/* Desktop Navigation (1024px+) */}
          <DesktopNavigation
            isScrolled={isScrolled}
            isLight={isLightPage}
            onOpenSearch={onOpenSearch}
          />

          {/* Mobile Navigation (<1024px) */}
          <MobileNavigation
            isScrolled={isScrolled}
            isLight={isLightPage}
            onOpenSearch={onOpenSearch}
            onOpenMenu={() => setIsMobileMenuOpen(true)}
            isMenuOpen={isMobileMenuOpen}
          />
        </div>
      </header>

      {/* Slide-in Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      {/* Intelligent Mobile Floating Sticky Order Bar */}
      <MobileStickyOrderBar isMobileMenuOpen={isMobileMenuOpen} />
    </>
  );
}
