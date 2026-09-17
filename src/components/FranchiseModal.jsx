import React, { useState } from 'react';
import { X, Building2, CheckCircle, Sparkles, Send } from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

export default function FranchiseModal({ isOpen = false, onClose = () => {} }) {
  const [selectedFormat, setSelectedFormat] = useState('boutique');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: '₹35L - ₹50L',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const formats = [
    {
      id: 'kiosk',
      name: 'Express Kiosk',
      space: '250 – 400 sq ft',
      desc: 'Ideal for premium shopping malls, airport terminals, and transit hubs.',
    },
    {
      id: 'boutique',
      name: 'Signature Flagship Café',
      space: '1,000 – 1,800 sq ft',
      desc: 'Full dine-in theatrical experience with live cream bar & outdoor lounge.',
    },
    {
      id: 'cloud',
      name: 'Drive-Thru & Cloud Hub',
      space: '500 – 800 sq ft',
      desc: 'Optimized for high-volume delivery, pick-up windows, and car orders.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playChime();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-t-[32px] sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[88vh] sm:h-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#061826] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#009BE8]/20 text-[#009BE8]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl">
                Partner With ZIP LABAN
              </h3>
              <p className="text-xs text-gray-400">
                Join the highest-growth viral Egyptian dessert brand in the region.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-2xl text-[#061826] mb-2">
                Application Received!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mb-6 leading-relaxed">
                Thank you for your interest in expanding ZIP LABAN to {formData.city || 'your region'}. Our global
                franchise development team will contact you within 24 business hours with the financial prospectus.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-[#061826] text-white font-bold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Format */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  Select Store Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {formats.map((fmt) => (
                    <div
                      key={fmt.id}
                      onClick={() => {
                        sound.playPop();
                        setSelectedFormat(fmt.id);
                      }}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        selectedFormat === fmt.id
                          ? 'border-[#009BE8] bg-[#E0F2FE]/40 ring-2 ring-[#009BE8]/30'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h5 className="font-bold text-xs text-[#061826]">{fmt.name}</h5>
                      <span className="text-[10px] text-[#009BE8] font-semibold block mt-0.5">
                        {fmt.space}
                      </span>
                      <p className="text-[10px] text-gray-500 mt-1 leading-tight">{fmt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Mansoor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#009BE8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tariq@holding.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#009BE8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#009BE8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Target City & Region *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Chennai, Doha..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#009BE8]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Available Investment Capacity
                </label>
                <select
                  value={formData.investment}
                  onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#009BE8] bg-white"
                >
                  <option>₹25L – ₹40L (Kiosk Model)</option>
                  <option>₹40L – ₹75L (Flagship Café)</option>
                  <option>₹75L – ₹1.5 Cr (Multi-Unit Franchise)</option>
                  <option>International Master Franchise ($200K+)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#009BE8] hover:bg-[#0086c9] text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Franchise Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
