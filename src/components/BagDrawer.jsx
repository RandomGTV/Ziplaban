import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';
import { sound } from '../utils/audio';

export default function BagDrawer({
  isOpen = false,
  onClose = () => {},
  bagItems = [],
  onUpdateQty = () => {},
  onRemoveItem = () => {},
}) {
  if (!isOpen) return null;

  const subtotal = bagItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryThreshold = 600;
  const progressPercent = Math.min(100, Math.round((subtotal / deliveryThreshold) * 100));
  const freeDeliveryRemaining = Math.max(0, deliveryThreshold - subtotal);

  const handleCheckoutWhatsApp = () => {
    sound.playChime();
    const itemsList = bagItems
      .map((item) => `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join('%0A');
    const message = `Hello ZIP LABAN! 🥛%0A%0AI would like to place an order:%0A${itemsList}%0A%0A*Total: ₹${subtotal}*%0A%0APlease confirm delivery time and payment link.`;
    window.open(`https://wa.me/914952439001?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-gray-100 z-10 animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#009BE8]" />
              <h3 className="font-display font-extrabold text-xl text-[#061826]">
                Your Dessert Bag
              </h3>
              <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {bagItems.reduce((acc, i) => acc + i.quantity, 0)} Items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Meter */}
          <div className="px-6 py-3 bg-[#E0F2FE]/40 border-b border-[#009BE8]/15">
            <div className="flex items-center justify-between text-xs font-bold text-[#061826] mb-1.5">
              <span>
                {freeDeliveryRemaining === 0
                  ? '🎉 You unlocked FREE Royal Delivery!'
                  : `Add ₹${freeDeliveryRemaining} more for FREE Delivery`}
              </span>
              <span className="text-[#009BE8]">{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#009BE8] to-[#10B981] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Drawer Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {bagItems.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-gray-700">Your bag is empty</h4>
                <p className="text-xs text-gray-400 mt-1 max-w-[240px]">
                  Explore our official menu boards and viral Egyptian creations!
                </p>
              </div>
            ) : (
              bagItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200/80 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-[#061826] truncate">
                      {item.name}
                    </h4>
                    {item.isCustom && item.customDetails && (
                      <p className="text-[10px] text-gray-500 truncate mt-0.5">
                        {item.customDetails.base} &bull; {item.customDetails.cream}
                      </p>
                    )}
                    <span className="text-xs font-extrabold text-[#009BE8] font-display mt-1 block">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-gray-200">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="p-1 text-gray-500 hover:text-[#061826]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="p-1 text-gray-500 hover:text-[#061826]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {bagItems.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50/70">
              <div className="space-y-2 mb-4 text-xs font-medium text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#061826]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insulated Thermal Packaging</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-bold text-[#061826]">
                    {freeDeliveryRemaining === 0 ? 'FREE' : '₹40'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 text-sm font-extrabold text-[#061826]">
                  <span>Total Amount</span>
                  <span className="text-lg text-[#009BE8] font-display">
                    ₹{subtotal + (freeDeliveryRemaining === 0 ? 0 : 40)}
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Direct Order CTA */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp &bull; Instant Confirmation</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
