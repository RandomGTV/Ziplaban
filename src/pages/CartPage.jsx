import ProductImage from '../components/menu/ProductImage';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import Mascot from '../components/Mascot';
import { STORES } from '../data/products';
import { motion } from 'framer-motion';

export default function CartPage() {
  const {
    cartItems,
    itemCount,
    subtotal,
    discount,
    deliveryFee,
    taxes,
    total,
    updateQuantity,
    removeFromCart,
    clearCart,
    appliedPromo,
    applyPromo,
    removePromo,
    promoError,
  } = useCart();

  const { navigate } = useNavigation();

  // Order configuration
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'takeaway' | 'dinein'
  const [selectedStore, setSelectedStore] = useState(STORES[0].id);
  const [promoInput, setPromoInput] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleApplyCode = (e) => {
    e.preventDefault();
    if (promoInput) {
      applyPromo(promoInput);
      setPromoInput('');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    const generatedId = `ZIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="w-full min-h-screen bg-[#FFFDF9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 select-none flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#063BB6]/15 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 bg-[#8DB936]/15 text-[#8DB936] text-4xl rounded-full flex items-center justify-center mx-auto animate-bounce">
            🎉
          </div>

          <Mascot
            variant="hero"
            size="sm"
            speechText="Order Confirmed! Scooping now! ♡"
            speechPosition="top"
          />

          <div>
            <span className="text-xs font-black text-[#8DB936] uppercase tracking-widest">
              Happiness on its way
            </span>
            <h1
              className="text-3xl font-black text-[#063BB6] mt-1"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Order Confirmed!
            </h1>
            <p className="text-xs font-mono font-bold text-gray-400 mt-1">Order Ref: #{orderId}</p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Thank you for ordering with ZIP LABAN! Your handcrafted desserts are being prepared fresh in our kitchen with pure buffalo milk and sizzling toasted kunafa.
            </p>
          </div>

          <div className="bg-[#FFF9F1] p-4 rounded-2xl border border-[#063BB6]/10 text-xs text-left space-y-2 text-[#10204A]">
            <div className="flex justify-between">
              <span className="text-gray-500">Service:</span>
              <span className="font-bold capitalize">{orderType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Fulfilled By:</span>
              <span className="font-bold">
                {STORES.find((s) => s.id === selectedStore)?.name || 'Kottakkal Branch'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Est. Time:</span>
              <span className="font-bold text-[#8DB936]">25 - 35 minutes</span>
            </div>
          </div>

          <button
            onClick={() => {
              setIsOrdered(false);
              navigate('/menu');
            }}
            className="w-full py-3.5 bg-[#063BB6] hover:bg-[#022B84] text-white font-extrabold text-sm rounded-2xl shadow-lg"
          >
            Order More Happiness →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FFFDF9] pt-28 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-10">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3 py-1 rounded-full">
            Review & Checkout
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black text-[#10204A] mt-2"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Your Happiness Bag 🛍️
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {itemCount} {itemCount === 1 ? 'dessert' : 'desserts'} in your bag.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-[#FFF9F1] p-12 rounded-3xl border border-[#063BB6]/15 text-center max-w-lg mx-auto space-y-4">
            <Mascot
              variant="hero"
              size="sm"
              speechText="Your bag is empty!"
              speechPosition="top"
            />
            <h3
              className="text-2xl font-black text-[#10204A]"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Nothing here yet!
            </h3>
            <p className="text-xs text-gray-500">
              Browse our menu to discover viral Egyptian treats like Salankatiya and Koshari!
            </p>
            <button
              onClick={() => navigate('/menu')}
              className="px-6 py-3 bg-[#063BB6] text-white rounded-full font-bold text-xs"
            >
              Explore Menu →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Items & Customer Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Order Mode Switcher */}
              <div className="bg-[#FFF9F1] p-2 rounded-2xl border border-[#063BB6]/15 flex items-center gap-2">
                {[
                  { id: 'delivery', label: '🛵 Home Delivery' },
                  { id: 'takeaway', label: '🥡 Store Pickup' },
                  { id: 'dinein', label: '🍨 Dine-In Scoop' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setOrderType(mode.id)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      orderType === mode.id
                        ? 'bg-[#063BB6] text-white shadow-md'
                        : 'text-[#10204A] hover:bg-white'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-4 shadow-sm">
                <h3
                  className="text-base font-black text-[#10204A]"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  Selected Desserts
                </h3>

                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.cartItemId} className="py-4 flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl bg-[#FFF9F1] overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-100">
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
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-[#10204A] truncate">{item.name}</h4>
                          <span className="font-black text-[#063BB6] text-sm">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">
                          {item.size || 'Regular'} • ₹{item.price}
                        </p>
                        {item.extras && item.extras.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.extras.map((extra, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] bg-blue-50 text-[#063BB6] px-1.5 py-0.5 rounded font-medium"
                              >
                                {extra}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold text-gray-700 hover:bg-gray-200"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold text-gray-700 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-red-500 hover:text-red-700 font-bold ml-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery / Store Details Form */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 space-y-4 shadow-sm">
                <h3
                  className="text-base font-black text-[#10204A]"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  Delivery & Contact Info
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Faras"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-2.5 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 block mb-1">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98460 XXXXX"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-2.5 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                    />
                  </div>

                  {orderType === 'delivery' ? (
                    <div className="sm:col-span-2">
                      <label className="text-xs font-bold text-gray-500 block mb-1">
                        Delivery Address in Kerala
                      </label>
                      <input
                        type="text"
                        placeholder="House / Flat, Landmark, Road, Town"
                        value={customerInfo.address}
                        onChange={(e) =>
                          setCustomerInfo({ ...customerInfo, address: e.target.value })
                        }
                        className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-2.5 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                      />
                    </div>
                  ) : (
                    <div className="sm:col-span-2">
                      <label className="text-xs font-bold text-gray-500 block mb-1">
                        Select Pickup Outlet
                      </label>
                      <select
                        value={selectedStore}
                        onChange={(e) => setSelectedStore(e.target.value)}
                        className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-2.5 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                      >
                        {STORES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} ({s.city})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-gray-500 block mb-1">
                      Special Kitchen Request
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Extra hot drizzle, write happy birthday on lid"
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                      className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-2.5 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Order Total & Mascot Packing Bag */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              {/* Mascot Packing Animation */}
              <div className="bg-[#FFF9F1] p-5 rounded-3xl border border-[#063BB6]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mascot variant="packing" size="xs" />
                  <div>
                    <h4
                      className="text-sm font-black text-[#063BB6]"
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      Almost There! ♡
                    </h4>
                    <p className="text-[11px] text-gray-500">Zip courier is ready to roll</p>
                  </div>
                </div>
                <span className="text-[10px] bg-[#8DB936] text-white px-2.5 py-1 rounded-full font-black">
                  100% Chilled
                </span>
              </div>

              {/* Order Summary Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xl space-y-4">
                <h3
                  className="text-base font-black text-[#10204A]"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  Payment Summary
                </h3>

                {/* Promo Code Input */}
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-xs text-emerald-800 font-bold">
                    <span>🎉 {appliedPromo.label}</span>
                    <button
                      onClick={removePromo}
                      className="text-emerald-700 underline text-xs hover:text-emerald-900"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCode} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon (e.g. ZIP10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 bg-[#FFF9F1] border border-gray-300 rounded-xl px-3 py-2 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#063BB6] text-white rounded-xl text-xs font-bold hover:bg-[#022B84]"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && <p className="text-[10px] text-red-500 font-medium">{promoError}</p>}

                {/* Line Items */}
                <div className="space-y-2 text-xs text-[#10204A]/80 pt-2 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-bold text-[#10204A]">₹{subtotal}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Discount</span>
                      <span>−₹{discount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-bold text-[#10204A]">
                      {deliveryFee === 0 ? <span className="text-[#8DB936]">FREE</span> : `₹${deliveryFee}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <span>Taxes & Packaging (5% GST)</span>
                    <span>₹{taxes}</span>
                  </div>

                  <div className="flex justify-between text-lg font-black text-[#063BB6] pt-3 border-t border-gray-200">
                    <span>Final Amount</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-gray-500 block mb-2">Payment Method</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'upi', label: '⚡ UPI / GPay' },
                      { id: 'card', label: '💳 Cards' },
                      { id: 'cod', label: '💵 Cash/Pay' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPaymentMethod(p.id)}
                        className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all ${
                          paymentMethod === p.id
                            ? 'border-[#063BB6] bg-[#063BB6]/10 text-[#063BB6]'
                            : 'border-gray-200 text-gray-600'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Place Order CTA */}
                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-4 bg-[#063BB6] hover:bg-[#022B84] text-white font-extrabold text-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  <span>Place Order</span>
                  <span>•</span>
                  <span>₹{total}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
