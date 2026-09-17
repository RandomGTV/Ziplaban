import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { LOCATIONS_TEASER_DATA } from '../../data/contactData';

export default function LocationsTeaser() {
  const { navigate } = useNavigation();

  return (
    <section id="locations-teaser" className="py-20 md:py-24 bg-white relative select-none scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#073BB8] bg-[#073BB8]/10 px-3.5 py-1.5 rounded-full inline-block">
            IN-STORE VISITS
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10204A]"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Prefer to Say Hi <br />
            <span className="text-[#073BB8]">in Person?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Walk into our Kerala outlets, watch desserts churned fresh before your eyes, and say hi to the crew.
          </p>
        </div>

        {/* Dual Branch Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {LOCATIONS_TEASER_DATA.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#FFF8EE] rounded-3xl overflow-hidden border border-[#073BB8]/15 shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Store Image */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-[#10204A]">
                  <img
                    src={branch.image}
                    alt={`${branch.name} Branch Facade`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#073BB8] shadow-md backdrop-blur-sm">
                    {branch.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-2">
                  <div className="flex items-center gap-2 text-[#073BB8]">
                    <MapPin size={18} />
                    <h3
                      className="text-2xl font-black text-[#10204A]"
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      {branch.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                    {branch.tagline}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => navigate('/locations')}
                  className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-white hover:bg-gray-50 text-[#073BB8] border border-[#073BB8]/25 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View Location</span>
                  <ArrowRight size={14} />
                </button>

                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-[#073BB8] hover:bg-[#032B82] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Get Directions</span>
                  <Navigation size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Locations CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/locations')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#073BB8] hover:bg-[#032B82] text-white font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <span>View All Locations & Live Map</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
