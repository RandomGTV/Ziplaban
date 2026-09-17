import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StoryVideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#032B82]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl bg-[#061826] rounded-3xl border border-white/20 shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-[#073BB8] flex items-center justify-center text-lg font-bold transition-colors cursor-pointer"
          >
            ✕
          </button>

          {/* Video / Visual Header */}
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            <img
              src="/images/real_promo.png"
              alt="Zip Laban Story"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Play Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061826] via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#073BB8] flex items-center justify-center shadow-2xl animate-pulse">
                <svg className="w-8 h-8 fill-[#073BB8] ml-1" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                The Story of ZIP LABAN
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 max-w-md">
                From slow-simmered Cairo clotted buffalo milk kashta to Kottakkal’s midnight dessert fever.
              </p>
            </div>
          </div>

          {/* Modal Footer Info */}
          <div className="p-6 bg-[#032B82] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
            <div className="flex items-center gap-3">
              <span className="text-xl">🏆</span>
              <span>Authentic Egyptian Dairy Heritage • Kerala Flagship</span>
            </div>

            <a
              href="https://www.instagram.com/zip_laban/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-[#8DBA38] text-white font-bold hover:bg-[#78a02a] transition-colors"
            >
              Watch Viral Reels on Instagram ↗
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
