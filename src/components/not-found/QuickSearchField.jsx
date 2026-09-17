import React from 'react';
import { Search } from 'lucide-react';

export default function QuickSearchField({ onOpenSearch }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <p className="text-xs sm:text-sm font-bold text-blue-100/80 mb-2 uppercase tracking-wider text-center">
        Looking for something?
      </p>
      
      <button
        type="button"
        onClick={onOpenSearch}
        aria-label="Open search for desserts"
        className="w-full h-12 px-5 bg-white/10 hover:bg-white/15 border border-white/25 hover:border-white/40 rounded-full text-white placeholder-blue-200/50 flex items-center justify-between shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-center gap-3 text-sm text-blue-100/70 group-hover:text-white">
          <Search size={18} className="text-[#8DBA38] group-hover:scale-110 transition-transform" />
          <span>Search desserts...</span>
        </div>
        <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono text-blue-200 border border-white/15">
          Ctrl + K
        </kbd>
      </button>
    </div>
  );
}
