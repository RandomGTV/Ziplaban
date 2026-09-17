import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Star, Heart, CheckCircle2, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function HeroSection({
  onExploreMenu = () => {},
  onOpenBag = () => {},
  onAddToBag = () => {},
  bagCount = 0,
}) {
  const [addedPistachio, setAddedPistachio] = useState(false);
  const [showRatingTip, setShowRatingTip] = useState(false);
  const [mascotCheer, setMascotCheer] = useState(false);

  // Trigger celebration on Mascot click
  const handleMascotClick = () => {
    sound.playChime();
    setMascotCheer(true);
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { x: 0.7, y: 0.4 },
      colors: ['#009BE8', '#10B981', '#F59E0B', '#FFFFFF'],
    });
    setTimeout(() => setMascotCheer(false), 2200);
  };

  // Add Pistachio Dream to Bag
  const handleAddPistachioDream = (e) => {
    e?.stopPropagation?.();
    sound.playPop();
    setAddedPistachio(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x: 0.2, y: 0.7 },
      colors: ['#10B981', '#009BE8', '#FFFFFF'],
    });
    onAddToBag({
      id: 'pistachio-dream',
      name: 'Pistachio Dream',
      price: 350,
      currency: '₹',
      imageType: 'salankatia',
    });
    setTimeout(() => setAddedPistachio(false), 2400);
  };

  const scrollToSection = (id) => {
    sound.playPop();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden select-none">
      
      {/* =========================================================================
          DESKTOP MASTER VIEW (>= 1024px)
          Faithful, pixel-perfect recreation of the reference 16:9 UI design canvas
          with precision-mapped interactive live hotspots, animations & sound
          ========================================================================= */}
      <div className="hidden lg:block relative w-full max-w-[1920px] mx-auto aspect-[16/9] shadow-2xl bg-[#FAF8F5] overflow-hidden">
        {/* Full-bleed 2K Master UI Artwork */}
        <img
          src="/images/hero_concept_2k.jpg"
          alt="Zip Laban — Scoop Happiness in Every Bite"
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* ----------------- TOP NAVBAR HOTSPOTS ----------------- */}
        {/* Logo Badge (top-left) */}
        <div
          onClick={() => {
            sound.playPop();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="absolute left-[3.5%] top-[2.2%] w-[8.2%] h-[9.8%] rounded-2xl cursor-pointer hover:ring-2 hover:ring-white/40 transition-all"
          title="Zip Laban — Back to Top"
        />

        {/* Nav Link: Home */}
        <div
          onClick={() => {
            sound.playPop();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="absolute left-[25.0%] top-[4.2%] w-[5.5%] h-[4.8%] rounded-lg cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center"
          title="Home"
        />

        {/* Nav Link: Menu */}
        <div
          onClick={() => scrollToSection('official-board')}
          className="absolute left-[31.2%] top-[4.2%] w-[5.5%] h-[4.8%] rounded-lg cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center"
          title="Explore Menu Boards"
        />

        {/* Nav Link: New Arrivals */}
        <div
          onClick={() => scrollToSection('creations')}
          className="absolute left-[37.4%] top-[4.2%] w-[7.8%] h-[4.8%] rounded-lg cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center"
          title="New Arrivals"
        />

        {/* Nav Link: About */}
        <div
          onClick={() => scrollToSection('about')}
          className="absolute left-[46.0%] top-[4.2%] w-[5.5%] h-[4.8%] rounded-lg cursor-pointer hover:bg-white/10 transition-all flex items-center justify-center"
          title="About Zip Laban"
        />

        {/* Order Now Pill Button (top-right) */}
        <div
          onClick={() => {
            sound.playPop();
            onOpenBag();
          }}
          className="absolute left-[81.2%] top-[3.0%] w-[13.8%] h-[6.8%] rounded-full cursor-pointer hover:ring-4 hover:ring-sky-400/40 hover:scale-103 transition-all duration-300 flex items-center justify-end pr-4 group"
          title="View Your Order Bag"
        >
          {/* Live Dynamic Item Count Badge if Bag has items */}
          {bagCount > 0 && (
            <span className="flex items-center justify-center px-2.5 py-0.5 text-xs font-black text-white bg-[#009BE8] rounded-full shadow-lg border-2 border-white animate-bounce">
              {bagCount} {bagCount === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {/* ----------------- PRIMARY CTAS HOTSPOTS ----------------- */}
        {/* "Explore Menu →" Button */}
        <div
          onClick={() => {
            sound.playPop();
            onExploreMenu();
          }}
          className="absolute left-[3.8%] top-[57.8%] w-[15.0%] h-[8.0%] rounded-full cursor-pointer hover:ring-4 hover:ring-sky-400/50 hover:scale-103 transition-all duration-300 group"
          title="Explore Full Menu"
        >
          {/* Subtle luminous hover pulse shimmer */}
          <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity" />
        </div>

        {/* "Order Online" Button */}
        <div
          onClick={() => {
            sound.playPop();
            onOpenBag();
          }}
          className="absolute left-[19.3%] top-[57.8%] w-[13.8%] h-[8.0%] rounded-full cursor-pointer hover:ring-4 hover:ring-blue-400/40 hover:scale-103 transition-all duration-300 group"
          title="Order Online Now"
        >
          <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-15 bg-[#009BE8] transition-opacity" />
        </div>

        {/* ----------------- FEATURE CARDS HOTSPOTS ----------------- */}
        {/* Pistachio Dream Bestseller Card */}
        <div
          onClick={handleAddPistachioDream}
          className="absolute left-[3.6%] top-[68.2%] w-[23.0%] h-[15.5%] rounded-3xl cursor-pointer hover:ring-4 hover:ring-emerald-400/50 hover:scale-[1.02] transition-all duration-300 group"
          title="Click to Add Pistachio Dream (₹350) to Bag!"
        >
          {/* Live Feedback Toast when added */}
          {addedPistachio && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white font-extrabold text-xs shadow-xl flex items-center gap-1.5 animate-bounce z-30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Added to Bag!</span>
            </div>
          )}
        </div>

        {/* 4.9/5 Rating Card */}
        <div
          onMouseEnter={() => setShowRatingTip(true)}
          onMouseLeave={() => setShowRatingTip(false)}
          className="absolute left-[27.2%] top-[68.2%] w-[18.2%] h-[15.5%] rounded-3xl cursor-pointer hover:ring-4 hover:ring-amber-400/40 transition-all duration-300 relative group"
        >
          {showRatingTip && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#061826] text-white font-bold text-[11px] shadow-xl whitespace-nowrap z-30">
              Verified by 50,000+ Foodies in Kerala ⭐
            </div>
          )}
        </div>

        {/* ----------------- 3D MASCOT INTERACTIVE TRIGGER ----------------- */}
        {/* Clickable Mascot Hitbox */}
        <div
          onClick={handleMascotClick}
          className="absolute left-[50.0%] top-[8.0%] w-[42.0%] h-[88.0%] cursor-pointer group rounded-3xl"
          title="Click Zip Boy to say hi!"
        >
          {/* Mascot Speech Bubble reaction */}
          {mascotCheer && (
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 px-4 py-2 rounded-2xl bg-white text-[#0A2E6B] font-['Caveat',cursive] text-2xl font-bold shadow-2xl border border-sky-200 z-30 animate-bounce">
              Yay! Welcome to Zip Laban! ♡
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET RESPONSIVE VIEW (< 1024px)
          Ergonomically scaled for touch screens, keeping the exact bouncy typography,
          3D mascot, dual CTAs, and interactive cards
          ========================================================================= */}
      <div className="block lg:hidden px-4 sm:px-6 pt-4 pb-12">
        {/* Mobile Mini Header */}
        <div className="flex items-center justify-between py-3 mb-6 border-b border-gray-200/60">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#0B3580] text-white flex items-center justify-center p-1.5 shadow-sm">
              <span className="font-display font-black text-xs">ZIP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg text-[#0A2E6B]">
                ZIP <span className="text-[#009BE8]">LABAN</span>
              </span>
              <span className="text-[10px] text-gray-500 font-bold -mt-1">زيب لبن</span>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onOpenBag();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A2E6B] text-white font-bold text-xs shadow-md active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order Now</span>
            {bagCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#009BE8] text-[10px] font-black flex items-center justify-center ml-0.5">
                {bagCount}
              </span>
            )}
          </button>
        </div>

        {/* 3D Mascot Scene on Mobile */}
        <div 
          onClick={handleMascotClick}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl mb-6 bg-gradient-to-br from-[#0B3888] to-[#041D4E] border border-white/20"
        >
          <img
            src="/images/hero_mascot_scene.jpg"
            alt="Zip Boy Mascot"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = '/images/hero_concept.jpg';
            }}
          />
          <div className="absolute bottom-3 left-3 z-10">
            <span className="font-['Caveat',cursive] text-base font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              Creamy Dreamy Always Laban ♡
            </span>
          </div>
        </div>

        {/* Mobile Editorial Content */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-1.5 text-[#0B3580] tracking-wider text-[11px] font-black uppercase mb-3">
            <span>MORE THAN DESSERTS</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-emerald-700">
              A HAPPIER TOMORROW
              <Heart className="w-3.5 h-3.5 fill-current" />
            </span>
          </div>

          <h1 className="font-['Fredoka',sans-serif] text-4xl sm:text-5xl font-black text-[#0A2E6B] tracking-tight leading-[1.08] mb-4">
            Scoop Happiness <br />
            in Every Bite
          </h1>

          <p className="text-sm text-gray-600 font-normal leading-relaxed mb-6">
            Indulgent desserts, creamy laban-inspired treats, and premium toppings — made to brighten your day, one scoop at a time.
          </p>

          {/* Dual CTAs Mobile */}
          <div className="flex flex-col sm:flex-row gap-3 w-full mb-6">
            <button
              onClick={() => {
                sound.playPop();
                onExploreMenu();
              }}
              className="w-full py-3.5 rounded-full bg-[#0A2E6B] text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sound.playPop();
                onOpenBag();
              }}
              className="w-full py-3.5 rounded-full bg-white text-[#0A2E6B] border border-gray-200 font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online</span>
            </button>
          </div>

          {/* Feature Cards Mobile */}
          <div className="flex flex-col gap-3 w-full mb-6">
            {/* Pistachio Dream Card */}
            <div 
              onClick={handleAddPistachioDream}
              className="p-3 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-between gap-3 active:scale-98"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/images/pistachio_dream_thumb.jpg"
                  alt="Pistachio Dream"
                  className="w-12 h-12 rounded-xl object-cover"
                  onError={(e) => {
                    e.target.src = '/images/salankatia.jpg';
                  }}
                />
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-lime-100 text-lime-800 text-[10px] font-black uppercase">
                    👑 Bestseller
                  </span>
                  <h4 className="font-extrabold text-sm text-[#0A2E6B]">Pistachio Dream</h4>
                  <p className="text-[11px] text-gray-500">Creamy. Crunchy. Unforgettable.</p>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-[#009BE8]/10 text-[#009BE8] flex items-center justify-center font-bold text-sm">
                {addedPistachio ? '✓' : '→'}
              </button>
            </div>

            {/* Ratings Card */}
            <div className="p-3 px-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="font-black text-sm text-[#0A2E6B] ml-1">4.9/5</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">50,000+ Reviews ♡</span>
            </div>
          </div>

          {/* Trust Badges Mobile */}
          <div className="flex items-center justify-between w-full text-[11px] font-black text-[#0A2E6B]/80 pt-2 border-t border-gray-200">
            <span>🌱 REAL INGREDIENTS</span>
            <span>&bull;</span>
            <span>💚 CREAMY MOMENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
