import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

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

  // Keep browsing state for this visit, even while the menu is unmounted.
  const menuBrowse = useRef({ category: 'all', query: '', sort: 'popular', favoritesOnly: false, scrollY: 0 });
  const activePath = useRef(currentPath);
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const rememberScroll = () => {
      if (activePath.current === '/menu') menuBrowse.current.scrollY = window.scrollY;
    };
    window.addEventListener('scroll', rememberScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', rememberScroll);
      window.history.scrollRestoration = previous;
    };
  }, []);

  const navigate = (toPath, state = {}) => {
    let target = toPath.replace(/\/+$/, '') || '/';
    if (target === currentPath) return;
    if (activePath.current === '/menu') menuBrowse.current.scrollY = window.scrollY;
    activePath.current = target;
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
      if (activePath.current === '/menu') menuBrowse.current.scrollY = window.scrollY;
      activePath.current = path;
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
    <NavigationContext.Provider value={{ currentPath, navigate, productSlug, setProductSlug, menuBrowse }}>
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
