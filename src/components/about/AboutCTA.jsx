import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function AboutCTA() {
  const { navigate } = useNavigation();

  return (
    <section id="about-cta" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#032B82] via-[#073BB8] to-[#175EFF] text-white relative overflow-hidden text-center">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#8DBA38] bg-white/10 px-4 py-1.5 rounded-full border border-white/20 inline-block backdrop-blur-md">
          TASTE THE HAPPINESS
        </span>

        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          Ready for a Little<br />More Happiness?
        </h2>

        <p className="text-base sm:text-lg text-blue-100/90 font-medium max-w-xl mx-auto">
          Drop by your nearest store or explore tonight’s freshly churned batches online.
        </p>

        {/* Dual Conversion Buttons */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={() => navigate('/menu')}
            className="px-8 py-4 rounded-full bg-white text-[#073BB8] hover:bg-[#FFF8EE] font-black text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <span>Explore Menu</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => navigate('/new-arrivals')}
            className="px-8 py-4 rounded-full bg-[#001D6E] hover:bg-[#001550] text-white border-2 border-white/30 font-black text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <span>New Arrivals</span>
            <span>✨</span>
          </button>
        </div>

        {/* Peeking Mascot from Bottom Edge */}
        <div className="pt-8 flex justify-center -mb-20 sm:-mb-24 relative z-20">
          <div className="w-36 sm:w-44 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] hover:translate-y-[-10px] transition-transform duration-300">
            <img 
              src="/images/zip_boy_mascot.png" 
              alt="Zip peeking with dessert bowl" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

      </div>

    </section>
  );
}
