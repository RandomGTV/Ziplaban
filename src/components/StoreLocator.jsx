import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORES } from '../data/products';
import { sound } from '../utils/audio';

export default function StoreLocator() {
  const [activeStore, setActiveStore] = useState(STORES[0]);

  return (
    <section id="locations" className="py-24 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#009BE8]/10 text-[#009BE8] font-bold text-xs uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Malappuram Heartland & Store Outlets</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#061826] font-display tracking-tight leading-none mb-4">
            Visit Our Boutiques
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Operating and expanding across regions in Malappuram, including spots like Kottakkal Palathara and Kalikavu. Experience freshly churned Kashta and toasted kunafa in person or order for delivery.
          </p>
        </div>

        {/* 2-Column Locator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Outlet Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {STORES.map((store) => (
              <div
                key={store.id}
                onClick={() => {
                  sound.playPop();
                  setActiveStore(store);
                }}
                className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeStore.id === store.id
                    ? 'bg-[#009BE8]/5 border-[#009BE8] shadow-md shadow-sky-500/10 scale-101'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-lg text-[#061826]">
                        {store.name}
                      </h4>
                      {store.isFlagship && (
                        <span className="px-2 py-0.5 rounded-full bg-[#009BE8] text-white text-[9px] font-extrabold uppercase tracking-wider">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{store.landmark}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    {store.status}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {store.hours}
                  </span>
                  <span className="font-bold text-[#009BE8]">{store.distance}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Selected Boutique Detailed Card & Map Preview */}
          <div className="lg:col-span-7 bg-[#061826] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden border border-white/10">
            {/* Ambient Egyptian Light Beam */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#009BE8]/25 rounded-full blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#009BE8]">
                  {activeStore.city}
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  Distance: {activeStore.distance}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white font-display mb-2">
                {activeStore.name}
              </h3>
              <p className="text-sm text-gray-300 mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#009BE8] shrink-0" />
                <span>{activeStore.landmark}</span>
              </p>

              {/* Storefront Visual Preview */}
              {activeStore.image && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-white/20 h-48 sm:h-56 relative group">
                  <img
                    src={activeStore.image}
                    alt={activeStore.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-200">
                      {activeStore.tagline || 'Fresh Daily Alexandria Churn'}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-[#009BE8] text-white">
                      Verified Store
                    </span>
                  </div>
                </div>
              )}

              {/* Operating Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Operating Hours
                  </span>
                  <p className="text-sm font-semibold text-white">{activeStore.hours}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Direct Contact / Table Queries
                  </span>
                  <p className="text-sm font-semibold text-white">{activeStore.phone}</p>
                </div>
              </div>

              {/* Delivery Aggregators */}
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                  Order Direct To Home
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStore.aggregators.map((partner, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{partner}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.name + ' ' + activeStore.landmark)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[200px] py-3.5 bg-[#009BE8] hover:bg-[#0086c9] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-sky-500/25 transition-all text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={`tel:${activeStore.phone.replace(/[^0-9+]/g, '')}`}
                className="py-3.5 px-6 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-bold text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Outlet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
