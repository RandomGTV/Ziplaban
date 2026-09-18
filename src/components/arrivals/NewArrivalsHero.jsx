import React from 'react';
import { ArrowDown, ArrowRight, Sparkles, Crown } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function NewArrivalsHero({ onExploreClick }) {
  const { navigate } = useNavigation();

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-gradient-to-b from-[#032B82] via-[#0537A8] to-[#073BB8] text-white overflow-hidden flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Cinematic Ambient Glow & Depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#175EFF]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[450px] bg-[#001D6E]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Sparkles & Ingredient Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-[18%] left-[8%] w-2 h-2 rounded-full bg-[#FFF9F1] opacity-70 animate-ping" />
        <span className="absolute top-[32%] left-[42%] w-3 h-3 rounded-full bg-[#8DBA38] opacity-60 blur-[1px] animate-pulse" />
        <span className="absolute top-[68%] left-[12%] w-2.5 h-2.5 rounded-full bg-[#F59E0B] opacity-70" />
        <img src="/images/floating_pistachio_center.png" alt="" className="absolute top-[20%] right-[45%] w-7 opacity-75 animate-bounce [animation-duration:6s]" />
        <img src="/images/floating_pistachio_right.png" alt="" className="absolute bottom-[20%] right-[4%] w-8 opacity-70 rotate-45 animate-pulse [animation-duration:5s]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* ========================================================================= */}
        {/* LEFT: OVERSIZED EDITORIAL HEADLINE & CAMPAIGN INTRO                       */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Launch Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-black uppercase tracking-[0.25em] text-[#8DBA38] shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#8DBA38] animate-ping" />
            <span>JUST DROPPED • NEW COLLECTION</span>
          </div>

          {/* Giant Typographic Title */}
          <div className="relative">
            {/* Hand-drawn crown accent */}
            <div className="absolute -top-7 left-1 text-[#FCD34D] flex items-center gap-1.5">
              <Crown size={28} className="rotate-[-14deg] filter drop-shadow-[0_2px_10px_rgba(252,211,77,0.5)]" />
              <Sparkles size={18} className="animate-pulse text-[#FFF8EE]" />
            </div>

            <h1 className="leading-[0.88] tracking-tight select-none">
              <span 
                className="block text-4xl sm:text-5xl lg:text-6xl font-black text-white/90 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                NEW
              </span>
              <span 
                className="block text-[clamp(2.75rem,16vw,6rem)] sm:text-8xl lg:text-[106px] font-black text-white uppercase tracking-tighter drop-shadow-2xl"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                ARRIVALS
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-blue-100/90 font-medium max-w-lg leading-snug">
            New flavours. Bigger cravings. More happiness.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#073BB8] hover:bg-[#FFF8EE] font-extrabold text-base shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-all cursor-pointer group"
            >
              <span>Explore the Drop</span>
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/menu')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base backdrop-blur-md hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>View Full Menu</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT: CAMPAIGN MASCOT + 4-PRODUCT LAUNCH CLUSTER                          */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
          {/* Rotating Circular NEW DROP Badge */}
          <div className="absolute -top-6 sm:-top-2 right-2 sm:right-4 z-30">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFF8EE] text-[#073BB8] border-2 border-[#175EFF]/30 shadow-2xl flex items-center justify-center p-2">
              <div className="w-full h-full rounded-full border border-dashed border-[#073BB8]/40 flex flex-col items-center justify-center text-center animate-[spin_20s_linear_infinite]">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#073BB8]">★ JUST LANDED ★</span>
                <span className="text-[11px] sm:text-xs font-black uppercase text-[#175EFF]">NEW DROP</span>
              </div>
            </div>
          </div>

          {/* Handwritten Annotation Bubble */}
          <div 
            className="absolute -top-10 sm:-top-8 left-2 sm:left-6 z-30 bg-[#FFF8EE] text-[#073BB8] px-4 py-1.5 rounded-2xl shadow-xl border border-[#073BB8]/15 rotate-[-5deg]"
            style={{ fontFamily: '"Kalam", "Caveat", cursive' }}
          >
            <span className="text-base sm:text-lg font-bold">Meet Your New Favourites! ♡</span>
          </div>

          {/* Central Campaign Visual Pod */}
          <div className="relative w-full max-w-[560px] flex items-center justify-center pt-8">
            {/* Mascot at Center Behind Products */}
            <div className="relative z-10 w-[240px] sm:w-[290px] lg:w-[330px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
              <img 
                src="/images/zip_boy_mascot.png" 
                alt="Zip Laban Mascot" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Product 1: Hazelnut Bar (Floating Bottom-Left) */}
            <div 
              className="absolute -bottom-6 -left-4 sm:bottom-2 sm:left-2 z-20 w-[150px] sm:w-[195px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-transform"
              onClick={onExploreClick}
              title="Hazelnut Bar — ₹380"
            >
              <img src="/images/arrivals/hazelnut-bar.png" alt="Hazelnut Bar" className="w-full h-auto object-contain" />
              <span className="absolute -bottom-2 left-2 bg-[#FFF8EE] text-[#073BB8] text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md border border-[#073BB8]/20">
                ₹380
              </span>
            </div>

            {/* Product 2: Lawzi Creme (Floating Top-Right) */}
            <div 
              className="absolute top-4 -right-4 sm:top-6 sm:right-0 z-20 w-[160px] sm:w-[210px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-transform"
              onClick={onExploreClick}
              title="Lawzi Creme — ₹380"
            >
              <img src="/images/arrivals/lawzi-creme.png" alt="Lawzi Creme" className="w-full h-auto object-contain" />
              <span className="absolute -bottom-2 right-2 bg-[#FFF8EE] text-[#073BB8] text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md border border-[#073BB8]/20">
                ₹380
              </span>
            </div>

            {/* Product 3: Le Zip De Paris (Floating Bottom-Right) */}
            <div 
              className="absolute -bottom-8 right-0 sm:-bottom-4 sm:right-4 z-25 w-[160px] sm:w-[215px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-105 transition-transform"
              onClick={onExploreClick}
              title="Le Zip De Paris — ₹390"
            >
              <img src="/images/arrivals/le-zip-de-paris.png" alt="Le Zip De Paris" className="w-full h-auto object-contain" />
              <span className="absolute -bottom-2 right-4 bg-[#FFF8EE] text-[#073BB8] text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md border border-[#073BB8]/20">
                ₹390
              </span>
            </div>

            {/* Product 4: Fazea Chocola Cake (Peek Behind Mascot Top-Left) */}
            <div 
              className="absolute top-6 left-0 sm:top-8 sm:left-4 z-10 w-[140px] sm:w-[180px] filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] opacity-95 hover:opacity-100 cursor-pointer hover:scale-105 transition-transform"
              onClick={onExploreClick}
              title="Fazea Chocola Cake — ₹390"
            >
              <img src="/images/arrivals/fazea-chocola-cake.png" alt="Fazea Chocola Cake" className="w-full h-auto object-contain" />
              <span className="absolute -bottom-2 left-4 bg-[#FFF8EE] text-[#073BB8] text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md border border-[#073BB8]/20">
                ₹390
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
