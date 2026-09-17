import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BranchTabs({ locations, activeStoreId, onSelectStore }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {locations.map((store) => {
        const isSelected = activeStoreId === store.id;
        return (
          <button
            key={store.id}
            onClick={() => onSelectStore(store.id)}
            className={'p-4 sm:p-5 rounded-3xl border-2 transition-all cursor-pointer flex items-center gap-4 text-left group ' + (
              isSelected
                ? 'bg-[#073BB8] border-[#073BB8] text-white shadow-xl scale-[1.01]'
                : 'bg-[#FFF8EE] border-[#073BB8]/15 text-[#10204A] hover:bg-white hover:border-[#073BB8]/30'
            )}
          >
            {/* Store Thumbnail */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden flex-shrink-0 relative border border-white/20 shadow-sm">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {store.isFlagship && (
                <span className="absolute top-1 left-1 bg-[#8DBA38] text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded shadow">
                  ★
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <h3 
                  className={'text-base sm:text-xl font-black uppercase tracking-tight whitespace-nowrap ' + (
                    isSelected ? 'text-white' : 'text-[#073BB8]'
                  )}
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {store.name}
                </h3>
                <span className={'text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase whitespace-nowrap ' + (
                  isSelected ? 'bg-white/20 text-white' : 'bg-[#073BB8]/10 text-[#073BB8]'
                )}>
                  {store.badge}
                </span>
              </div>
              <p className={'text-xs mt-1 truncate ' + (
                isSelected ? 'text-blue-100' : 'text-[#10204A]/70'
              )}>
                {store.tagline}
              </p>
            </div>

            {/* Direction Arrow */}
            <div className={'w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-1 ' + (
              isSelected ? 'bg-white text-[#073BB8]' : 'bg-[#073BB8]/10 text-[#073BB8]'
            )}>
              <ArrowRight size={16} />
            </div>
          </button>
        );
      })}
    </div>
  );
}
