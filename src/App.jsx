import PageMetadata from './components/experience/PageMetadata';
import { DessertComparisonProvider } from './context/DessertComparison';
import { MotionPreferenceProvider } from './context/MotionPreference';
import { PRODUCTS } from './data/products';
import PageExperience from './components/experience/PageExperience';
import { ORDERING_ENABLED } from './config/ordering';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { CartProvider } from './context/CartContext';
import GlobalNavbar from './components/navigation/GlobalNavbar';
import GlobalFooter from './components/footer/GlobalFooter';
import SearchModal from './components/SearchModal';
import FranchiseModal from './components/FranchiseModal';
import CursorFollower from './components/CursorFollower';

import RouteBoundary from './components/experience/RouteBoundary';

// Keep the landing page immediate; load other pages only when visited.
import HomePage from './pages/HomePage';
const MenuPage = lazy(() => import('./pages/MenuPage'));
const NewArrivalsPage = lazy(() => import('./pages/NewArrivalsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const MenuProductDetailPage = lazy(() => import('./pages/MenuProductDetailPage'));
import { MENU_PRODUCTS } from './data/menuCatalog';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function MainRouter({ onOpenFranchise, onOpenSearch }) {
  const { currentPath } = useNavigation();

  if (!ORDERING_ENABLED && ['/cart', '/checkout'].some(path => currentPath.startsWith(path))) return <NotFoundPage onOpenSearch={onOpenSearch} />;

  // Route matching
  if (currentPath === '/' || currentPath === '') {
    return <HomePage onOpenSearch={onOpenSearch} />;
  }
  if (currentPath === '/menu') {
    return <MenuPage />;
  }
  if (currentPath === '/new-arrivals') {
    return <NewArrivalsPage />;
  }
  if (currentPath.startsWith('/product/')) {
    if (MENU_PRODUCTS.some(product => currentPath === `/product/${product.id}`)) return <MenuProductDetailPage key={currentPath} />;
    return PRODUCTS.some(product => currentPath === `/product/${product.id}`) ? <ProductDetailPage key={currentPath} /> : <NotFoundPage onOpenSearch={onOpenSearch} />;
  }
  if (currentPath === '/about') {
    return <AboutPage />;
  }
  if (currentPath === '/cart') {
    return <CartPage />;
  }
  if (currentPath === '/locations') {
    return <LocationsPage />;
  }
  if (currentPath === '/contact') {
    return <ContactPage onOpenFranchise={onOpenFranchise} />;
  }
  if (currentPath === '/404') {
    return <NotFoundPage onOpenSearch={onOpenSearch} />;
  }

  // Fallback to NotFoundPage for unknown URLs
  return <NotFoundPage onOpenSearch={onOpenSearch} />;
}

function AppShell() {
  const { currentPath } = useNavigation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  useEffect(() => {
    const handleSearch = event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k' && !isFranchiseOpen) {
        event.preventDefault(); setIsSearchOpen(open => !open);
      }
    };
    window.addEventListener('keydown', handleSearch);
    return () => window.removeEventListener('keydown', handleSearch);
  }, [isFranchiseOpen]);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#061826] flex flex-col relative selection:bg-[#073BB8] selection:text-white">
      {/* Liquid Interactive Cursor Follower */}
      <PageMetadata /><CursorFollower />

      {/* Universal Global Navigation Header across all pages */}
      <GlobalNavbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Dynamic Page Router */}
      <main className="flex-1 w-full">
        <RouteBoundary key={currentPath}><Suspense fallback={<div className="zip-route-loading" role="status"><span className="zip-loading-dot"/> A little happiness is loading…</div>}><PageExperience><MainRouter
          onOpenFranchise={() => setIsFranchiseOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        /></PageExperience></Suspense></RouteBoundary>
      </main>

      {/* Universal Global Footer across all pages */}
      <GlobalFooter onOpenFranchise={() => setIsFranchiseOpen(true)} />



      {/* Instant Menu Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Global Franchise Modal */}
      <FranchiseModal
        isOpen={isFranchiseOpen}
        onClose={() => setIsFranchiseOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <MotionPreferenceProvider><NavigationProvider>
      <CartProvider>
        <DessertComparisonProvider><AppShell /></DessertComparisonProvider>
      </CartProvider>
    </NavigationProvider></MotionPreferenceProvider>
  );
}
