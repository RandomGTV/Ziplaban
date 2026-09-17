import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function FooterCTA() {
  const { navigate } = useNavigation();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full overflow-hidden border-b border-white/10 pb-12 pt-8 sm:pt-12 sm:pb-16">
      {/* Soft Ambient Radial Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#175EFF]/15 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#8DBA38]/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Floating Accents (Restrained) */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Floating Pistachio Accent */}
        <div className="absolute top-6 left-[8%] sm:left-[12%] w-7 h-7 rounded-full bg-[#8DBA38]/20 border border-[#8DBA38]/40 flex items-center justify-center text-xs shadow-sm animate-pulse">
          🥜
        </div>
        {/* Small Lotus Biscuit Speck */}
        <div className="absolute bottom-8 left-[22%] w-6 h-6 rounded-lg bg-[#EAB308]/20 border border-[#EAB308]/40 flex items-center justify-center text-[10px] rotate-12">
          🍪
        </div>
        {/* Soft Cream Droplet */}
        <div className="absolute top-8 right-[32%] w-3.5 h-3.5 rounded-full bg-white/40 blur-[0.5px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Headline & Subtitle */}
          <div className="text-center lg:text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#8DBA38] text-xs font-black uppercase tracking-widest backdrop-blur-sm">
              <Sparkles size={12} />
              <span>Happiness Awaits</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] uppercase"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Ready for Another<br />
              <span className="text-[#FFF8EE]">
                Scoop of Happiness?
                <span className="text-[#E11D48] ml-2 inline-block animate-pulse">♡</span>
              </span>
            </h2>

            <p className="text-sm sm:text-base text-blue-100/85 font-medium leading-relaxed">
              Discover your favourites or visit ZIP LABAN near you.
            </p>
          </div>

          {/* Action CTAs & Small Peeking Mascot */}
          <div className="relative flex flex-col sm:flex-row items-center gap-4 lg:gap-5 w-full sm:w-auto">
            
            {/* Explore Menu Button */}
            <button
              onClick={() => handleNav('/menu')}
              aria-label="Explore Zip Laban menu"
              className="group w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#032B82] hover:bg-[#FFF8EE] font-black text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Explore Menu</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1.5"
              />
            </button>

            {/* Find a Store Button */}
            <button
              onClick={() => handleNav('/locations')}
              aria-label="Find a Zip Laban store in Kerala"
              className="group w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-white/50 font-black text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              <span>Find a Store</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1.5"
              />
            </button>

            {/* Tasteful Peeking Mascot (Tasteful small scale) */}
            <div className="hidden sm:block absolute -top-16 -right-12 lg:-top-20 lg:-right-16 pointer-events-none select-none z-20">
              <div className="w-24 lg:w-28 filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)] -rotate-6">
                <img
                  src="/images/zip_boy_mascot.png"
                  alt="Zip peeking playfully"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
