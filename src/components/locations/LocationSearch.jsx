import React from 'react';
import { Search, Navigation, MapPin } from 'lucide-react';

export default function LocationSearch({
  searchQuery,
  onSearchChange,
  selectedFilter,
  onFilterChange,
  onUseMyLocation,
  isLocating,
  nearestResult,
}) {
  return (
    <div className="w-full space-y-4">
      {/* Search & Geolocation Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#10204A]/40 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search your area (e.g. Malappuram, Kottakkal)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-[#073BB8]/15 text-[#10204A] placeholder-[#10204A]/40 text-sm font-semibold shadow-sm focus:outline-none focus:border-[#073BB8] focus:ring-2 focus:ring-[#073BB8]/10 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#10204A]/50 hover:text-[#10204A] bg-[#10204A]/5 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Use My Location Button */}
        <button
          onClick={onUseMyLocation}
          disabled={isLocating}
          className="px-5 py-3.5 rounded-2xl bg-[#073BB8] hover:bg-[#052E99] active:scale-95 text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap disabled:opacity-60"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          <Navigation size={16} className={isLocating ? 'animate-spin' : ''} />
          <span>{isLocating ? 'Locating...' : 'Use My Location'}</span>
        </button>
      </div>

      {/* Optional Distance Status Banner */}
      {nearestResult && (
        <div className="p-3.5 rounded-2xl bg-[#8DBA38]/15 border border-[#8DBA38]/30 flex items-center justify-between text-xs sm:text-sm font-bold text-[#10204A]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8DBA38] animate-ping" />
            <span>
              Nearest Branch: <strong className="text-[#073BB8] font-black">{nearestResult.name}</strong>
              {nearestResult.distance != null ? (' — ' + nearestResult.distance + ' km away') : ''}
            </span>
          </div>
          <span className="text-[11px] text-[#8DBA38] uppercase font-black tracking-wider bg-white px-2 py-0.5 rounded-full shadow-xs">
            Calculated
          </span>
        </div>
      )}

      {/* Filter Tabs / Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-xs font-bold text-[#10204A]/60 hidden sm:inline mr-1">Filter:</span>
        {[
          { id: 'all', label: 'ALL LOCATIONS' },
          { id: 'malappuram', label: 'MALAPPURAM' },
          { id: 'kottakkal', label: 'KOTTAKKAL' },
        ].map((pill) => {
          const active = selectedFilter === pill.id;
          return (
            <button
              key={pill.id}
              onClick={() => onFilterChange(pill.id)}
              className={'px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all cursor-pointer ' + (
                active
                  ? 'bg-[#073BB8] text-white shadow-md'
                  : 'bg-white text-[#10204A]/70 hover:text-[#073BB8] border border-[#073BB8]/10 hover:bg-[#FFF8EE]'
              )}
            >
              {pill.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
