import ProductImage from './menu/ProductImage';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import Mascot from './Mascot';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer() {
  const {
    isDrawerOpen,
    closeDrawer,
    cartItems,
    itemCount,
    subtotal,
    discount,
    deliveryFee,
    taxes,
    total,
    updateQuantity,
    removeFromCart,
    applyPromo,
    appliedPromo,
    removePromo,
    promoError,
  } = useCart();

  const { navigate } = useNavigation();
  const [promoInput, setPromoInput] = useState('');

  if (!isDrawerOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput) {
      applyPromo(promoInput);
      setPromoInput('');
    }
  };

  const handleProceedCheckout = () => {
    closeDrawer();
    navigate('/cart');
  };

  const freeDeliveryThreshold = 500;
  const neededForFree = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeDrawer}
          className="absolute inset-0 bg-[#061826]/60 backdrop-blur-sm transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between select-none"
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#063BB6] text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛍️</span>
                <div>
                  <h2
                    className="text-lg font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    Your Happiness Bag
                  </h2>
                  <p className="text-xs text-blue-200">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'} ready to sweeten your day
                  </p>
                </div>
              </div>
              <button
                onClick={closeDrawer}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Free Delivery Progress */}
            <div className="bg-[#FFF9F1] px-5 py-2.5 border-b border-[#063BB6]/10">
              <div className="flex items-center justify-between text-xs font-semibold text-[#10204A] mb-1">
                <span>
                  {neededForFree === 0
                    ? '🎉 You unlocked FREE delivery!'
                    : `Add ₹${neededForFree} more for FREE delivery`}
                </span>
                <span>{freeDeliveryProgress}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8DB936] transition-all duration-300 rounded-full"
                  style={{ width: `${freeDeliveryProgress}%` }}
                />
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#10204A]/60">
                  <Mascot
                    variant="hero"
                    size="sm"
                    speechText="Your bag is empty!"
                    speechPosition="top"
                  />
                  <h3
                    className="text-lg font-bold text-[#10204A] mt-4"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    Craving something sweet?
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs">
                    Explore our legendary Salankatiya, Koshari, or build your own bowl!
                  </p>
                  <button
                    onClick={() => {
                      closeDrawer();
                      navigate('/menu');
                    }}
                    className="mt-5 px-6 py-2.5 bg-[#063BB6] hover:bg-[#022B84] text-white rounded-full font-bold text-sm shadow-md"
                  >
                    Browse Our Menu →
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 rounded-2xl bg-[#FFF9F1] border border-[#063BB6]/10 flex gap-3 relative group"
                  >
                    {/* Item Thumbnail / Mascot */}
                    <div className="w-16 h-16 rounded-xl bg-white p-1 flex-shrink-0 border border-[#063BB6]/10 shadow-sm flex items-center justify-center overflow-hidden">
                      {item.imageAsset ? <ProductImage product={item} /> : item.isCustomBowl ? (
                        <span className="text-3xl">🥣</span>
                      ) : (
                        <img
                          src={
                            item.imageType === 'salankatia'
                              ? '/images/salankatia.jpg'
                              : item.imageType === 'koshari'
                              ? '/images/theme_board_1.jpg'
                              : item.imageType === 'ruh-hayati'
                              ? '/images/qashtuta.jpg'
                              : '/images/molten_bomb.jpg'
                          }
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between pr-4">
                        <h4 className="font-bold text-[#10204A] text-sm truncate">{item.name}</h4>
                        <span className="font-extrabold text-[#063BB6] text-sm">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.size || 'Regular'} • ₹{item.price} each
                      </p>

                      {/* Extras list */}
                      {item.extras && item.extras.length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {item.extras.map((extra, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-white text-[#063BB6] px-1.5 py-0.5 rounded border border-[#063BB6]/15 font-medium"
                            >
                              {extra}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Quantity Stepper */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200/60">
                        <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            className="w-7 h-7 flex items-center justify-center text-[#10204A] hover:bg-gray-100 font-bold"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#10204A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#10204A] hover:bg-gray-100 font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-xs text-red-500 hover:text-red-700 font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Summary with Mascot */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-gray-100 bg-[#FFFDF9] space-y-3">
                {/* Mascot packing bag animation */}
                <div className="flex items-center justify-between px-2 py-1 bg-blue-50/70 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2">
                    <Mascot variant="packing" size="xs" />
                    <div>
                      <p className="text-xs font-bold text-[#063BB6]">Almost There! ♡</p>
                      <p className="text-[10px] text-gray-500">Packed fresh in chilled thermal boxes</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#8DB936] bg-[#8DB936]/15 px-2 py-0.5 rounded-full">
                    Fresh Churn
                  </span>
                </div>

                {/* Promo Code Input */}
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs text-emerald-800 font-semibold">
                    <span>🎉 {appliedPromo.label} ({appliedPromo.code})</span>
                    <button
                      onClick={removePromo}
                      className="text-emerald-700 underline text-[11px] hover:text-emerald-900 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder='Coupon (e.g. "ZIP10")'
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 bg-white border border-gray-300 rounded-xl px-3 py-1.5 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-[#063BB6] text-white rounded-xl text-xs font-bold hover:bg-[#022B84]"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && <p className="text-[10px] text-red-500 font-medium">{promoError}</p>}

                {/* Price Breakdown */}
                <div className="space-y-1.5 text-xs text-[#10204A]/80 pt-1">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#10204A]">₹{subtotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Discount</span>
                      <span>−₹{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="font-semibold text-[#10204A]">
                      {deliveryFee === 0 ? <span className="text-[#8DB936] font-bold">FREE</span> : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Taxes (5% GST)</span>
                    <span>₹{taxes}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-[#063BB6] pt-1.5 border-t border-gray-200">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleProceedCheckout}
                  className="w-full py-3 bg-[#063BB6] hover:bg-[#022B84] text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#063BB6]/20 transition-all flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  <span>Proceed to Checkout</span>
                  <span>•</span>
                  <span>₹{total}</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
