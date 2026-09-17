import React from 'react';
import { UtensilsCrossed, Sparkles, ShoppingBag, MapPin, Star } from 'lucide-react';
import { sound } from '../utils/audio';

export default function MobileBottomNav({
  bagCount = 0,
  onOpenBag = () => {},
}) {
  const scrollTo = (id) => {
    sound.playPop();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#009BE8]/20 shadow-[0_-4px_25px_rgba(0,155,232,0.12)] px-3 py-2">
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {/* Official Boards Tab */}
        <button
          onClick={() => scrollTo('official-board')}
          className="flex flex-col items-center justify-center p-1.5 text-gray-600 hover:text-[#0B3E96] transition-colors active:scale-90"
        >
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-[10px] font-bold mt-1">Boards</span>
        </button>

        {/* Menu Creations Tab */}
        <button
          onClick={() => scrollTo('creations')}
          className="flex flex-col items-center justify-center p-1.5 text-gray-600 hover:text-[#009BE8] transition-colors active:scale-90"
        >
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">Menu</span>
        </button>

        {/* Central Order Bag Action Button */}
        <button
          onClick={() => {
            sound.playChime();
            onOpenBag();
          }}
          className="-mt-7 p-3.5 rounded-full bg-gradient-to-tr from-[#0B3E96] via-[#009BE8] to-[#10B981] text-white shadow-xl shadow-blue-500/40 border-4 border-white transition-all active:scale-90 hover:scale-105 flex flex-col items-center justify-center group relative"
          title="Open Order Bag"
        >
          <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
          {bagCount > 0 && (
            <span className="absolute -top-1 -right-1 px-1.5 py-0.2 text-[9px] font-black text-white bg-rose-500 rounded-full border-2 border-white shadow-md">
              {bagCount}
            </span>
          )}
          <span className="text-[8px] font-black uppercase tracking-wider mt-0.5">My Bag</span>
        </button>

        {/* Viral Moments Tab */}
        <button
          onClick={() => scrollTo('viral')}
          className="flex flex-col items-center justify-center p-1.5 text-gray-600 hover:text-[#009BE8] transition-colors active:scale-90"
        >
          <Star className="w-5 h-5 text-amber-400" />
          <span className="text-[10px] font-bold mt-1">Viral</span>
        </button>

        {/* Outlets Tab */}
        <button
          onClick={() => scrollTo('locations')}
          className="flex flex-col items-center justify-center p-1.5 text-gray-600 hover:text-[#009BE8] transition-colors active:scale-90"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">Outlets</span>
        </button>
      </div>
    </div>
  );
}
