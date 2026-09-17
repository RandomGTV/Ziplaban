import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { LEGAL_POLICIES } from '../../data/footerData';

export default function LegalModal({ policyKey, onClose }) {
  if (!policyKey || !LEGAL_POLICIES[policyKey]) return null;

  const policy = LEGAL_POLICIES[policyKey];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#011B54]/75 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#FFFDF9] text-[#061826] rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border border-[#073BB8]/15 my-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#073BB8]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#073BB8]/10 text-[#073BB8] flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3
                  id="legal-modal-title"
                  className="text-xl sm:text-2xl font-black text-[#032B82] tracking-tight"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {policy.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Last updated: {policy.lastUpdated}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="py-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2 text-sm leading-relaxed text-[#10204A]/80">
            {policy.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer Close Button */}
          <div className="pt-4 border-t border-[#073BB8]/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#073BB8] hover:bg-[#052E99] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
