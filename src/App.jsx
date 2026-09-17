import React, { useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { CartProvider } from './context/CartContext';
import GlobalNavbar from './components/navigation/GlobalNavbar';
import GlobalFooter from './components/footer/GlobalFooter';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import FranchiseModal from './components/FranchiseModal';
import CursorFollower from './components/CursorFollower';

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import MenuProductDetailPage from './pages/MenuProductDetailPage';
import { MENU_PRODUCTS } from './data/menuCatalog';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';

function MainRouter({ onOpenFranchise, onOpenSearch }) {
  const { currentPath } = useNavigation();

  // Route matching
  if (currentPath === '/' || currentPath === '') {
    return <HomePage onOpenSearch={onOpenSearch} />;
  }
  if (currentPath.startsWith('/menu')) {
    return <MenuPage />;
  }
  if (currentPath.startsWith('/new-arrivals')) {
    return <NewArrivalsPage />;
  }
  if (currentPath.startsWith('/product/')) {
    if (MENU_PRODUCTS.some(product => currentPath === `/product/${product.id}`)) return <MenuProductDetailPage key={currentPath} />;
    return <ProductDetailPage key={currentPath} />;
  }
  if (currentPath.startsWith('/about')) {
    return <AboutPage />;
  }
  if (currentPath.startsWith('/cart')) {
    return <CartPage />;
  }
  if (currentPath.startsWith('/locations')) {
    return <LocationsPage />;
  }
  if (currentPath.startsWith('/contact')) {
    return <ContactPage onOpenFranchise={onOpenFranchise} />;
  }

  // Fallback to HomePage
  return <HomePage onOpenSearch={onOpenSearch} />;
}

function AppShell() {
  const { currentPath } = useNavigation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#061826] flex flex-col relative selection:bg-[#073BB8] selection:text-white">
      {/* Liquid Interactive Cursor Follower */}
      <CursorFollower />

      {/* Universal Global Navigation Header across all pages */}
      <GlobalNavbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Dynamic Page Router */}
      <main className="flex-1 w-full">
        <MainRouter
          onOpenFranchise={() => setIsFranchiseOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      </main>

      {/* Universal Global Footer across all pages */}
      <GlobalFooter onOpenFranchise={() => setIsFranchiseOpen(true)} />

      {/* Global Cart Slide-over Drawer */}
      <CartDrawer />

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
    <NavigationProvider>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </NavigationProvider>
  );
}
