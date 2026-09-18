import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  // Read initial path from window.location.pathname or default to '/'
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname.replace(/\/+$/, '') || '/';
    }
    return '/';
  });

  // Track slug for dynamic routes like /product/:slug
  const [productSlug, setProductSlug] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/product/')) {
      return window.location.pathname.replace('/product/', '');
    }
    return 'salankatiya-pistachio';
  });

  const navigate = (toPath, state = {}) => {
    let target = toPath.replace(/\/+$/, '') || '/';
    if (target === currentPath) return;
    if (target.startsWith('/product/')) {
      const slug = target.replace('/product/', '');
      setProductSlug(slug);
    }

    setCurrentPath(target);

    if (typeof window !== 'undefined' && window.history) {
      window.history.pushState(state, '', target);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      setCurrentPath(path);
      if (path.startsWith('/product/')) {
        setProductSlug(path.replace('/product/', ''));
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPath, navigate, productSlug, setProductSlug }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
