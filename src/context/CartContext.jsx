import { ORDERING_ENABLED, ORDERING_MESSAGE } from '../config/ordering';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { sound } from '../utils/audio';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [orderingNotice, setOrderingNotice] = useState(false);
  const showOrderingNotice = () => setOrderingNotice(true);
  useEffect(() => {
    if (!orderingNotice) return;
    const timer = setTimeout(() => setOrderingNotice(false), 6000);
    return () => clearTimeout(timer);
  }, [orderingNotice]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  const openDrawer = () => ORDERING_ENABLED ? setIsDrawerOpen(true) : showOrderingNotice();
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => ORDERING_ENABLED ? setIsDrawerOpen((prev) => !prev) : showOrderingNotice();

  // Add item with customizable options
  const addToCart = (product, quantity = 1, options = {}) => {
    if (!ORDERING_ENABLED) { showOrderingNotice(); return false; }
    sound.playPop();
    const size = options.size || 'Regular';
    const extras = [...(options.extras || [])];
    const extrasTotal = options.extrasPrice || 0;
    const basePrice = options.unitPrice || product.price;
    const effectivePrice = basePrice + extrasTotal;

    const cartItemId = options.cartItemId || `${product.id}-${size}-${extras.sort().join('-') || 'plain'}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        return prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          cartItemId,
          price: effectivePrice,
          unitPrice: effectivePrice,
          quantity,
          size,
          extras,
          isCustomBowl: options.isCustomBowl || false,
          customDetails: options.customDetails || null,
        },
      ];
    });

    // Auto open drawer so customer gets instant feedback
    if (options.openDrawer !== false) setIsDrawerOpen(true);
  };

  const updateQuantity = (cartItemId, delta) => {
    sound.playPop();
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (cartItemId) => {
    sound.playPop();
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedPromo(null);
  };

  // Promo Code Validation
  const applyPromo = (code) => {
    const cleanCode = (code || '').trim().toUpperCase();
    setPromoError('');

    if (!cleanCode) {
      setPromoError('Please enter a coupon code.');
      return false;
    }

    if (cleanCode === 'ZIP10') {
      setAppliedPromo({ code: 'ZIP10', discountType: 'percentage', value: 10, label: '10% Off Your Order' });
      sound.playSuccess();
      return true;
    } else if (cleanCode === 'HAPPINESS') {
      setAppliedPromo({ code: 'HAPPINESS', discountType: 'flat', value: 50, label: '₹50 Flat Happiness Treat' });
      sound.playSuccess();
      return true;
    } else if (cleanCode === 'KOTTAKKAL') {
      setAppliedPromo({ code: 'KOTTAKKAL', discountType: 'flat', value: 40, label: '₹40 Kottakkal Branch Welcome Off' });
      sound.playSuccess();
      return true;
    } else {
      setPromoError('Invalid code. Try "ZIP10" or "HAPPINESS"');
      return false;
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoCode('');
    setPromoError('');
  };

  // Calculations
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let discount = 0;
  if (appliedPromo && subtotal > 0) {
    if (appliedPromo.discountType === 'percentage') {
      discount = Math.round((subtotal * appliedPromo.value) / 100);
    } else if (appliedPromo.discountType === 'flat') {
      discount = Math.min(subtotal, appliedPromo.value);
    }
  }

  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 40;
  const taxes = subtotal > 0 ? Math.round((subtotal - discount) * 0.05) : 0;
  const total = Math.max(0, subtotal - discount + deliveryFee + taxes);

  return (
    <CartContext.Provider
      value={{
        orderingEnabled: ORDERING_ENABLED,
        showOrderingNotice,
        cartItems,
        itemCount,
        subtotal,
        discount,
        deliveryFee,
        taxes,
        total,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        promoCode,
        setPromoCode,
        appliedPromo,
        promoError,
        applyPromo,
        removePromo,
      }}
    >
      {children}
      {orderingNotice && <div className="zip-ordering-notice" role="status">{ORDERING_MESSAGE}<button aria-label="Dismiss ordering notice" onClick={() => setOrderingNotice(false)}>✕</button></div>}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
