import React from 'react';
import { ArrowRight, Navigation } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function StoreExperienceSection({ locations }) {
  const { navigate } = useNavigation();

  return (
    <section id="store-experience" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EE] border-b border-[#073BB8]/10 text-center">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#073BB8] bg-[#073BB8]/10 px-4 py-1.5 rounded-full">
            EXPLORE BOTH DESTINATIONS
          </span>
          <h2 
            className="text-3xl sm:text-5xl font-black text-[#10204A] uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Choose Your ZIP LABAN
          </h2>
          <p className="text-sm sm:text-base text-[#10204A]/70 font-medium">
            Two welcoming homes, one shared standard of warm hospitality, slow-churned kashta, and unforgettable smiles.
          </p>
        </div>

        {/* Two Large Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {locations.map((store) => (
            <div
              key={store.id}
              className="group relative rounded-[36px] overflow-hidden bg-[#032B82] text-white shadow-2xl border-4 border-white min-h-[460px] flex flex-col justify-end p-8 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Background Photo with Zoom Effect */}
              <img
                src={store.image}
                alt={store.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />
              
              {/* Deep Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021B54] via-[#021B54]/75 to-transparent" />

              {/* Content Box */}
              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#8DBA38] text-white text-xs font-black uppercase tracking-wider shadow">
                  {store.badge}
                </span>

                <div>
                  <h3 
                    className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {store.name}
                  </h3>
                  <p className="text-sm text-blue-100 mt-1 max-w-md leading-relaxed">
                    {store.tagline}
                  </p>
                </div>

                {/* Dual Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FFF8EE] text-[#073BB8] font-black text-xs sm:text-sm shadow-lg flex items-center gap-2 active:scale-95 transition-all"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    <Navigation size={15} />
                    <span>Directions</span>
                  </a>

                  <button
                    onClick={() => navigate('/menu')}
                    className="px-6 py-3.5 rounded-full bg-[#073BB8] hover:bg-[#052E99] text-white border border-white/25 font-black text-xs sm:text-sm shadow-lg flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    <span>Explore Menu</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
