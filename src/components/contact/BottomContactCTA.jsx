import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Heart } from 'lucide-react';
import { CONTACT_CONFIG } from '../../data/contactData';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

export default function BottomContactCTA() {
  return (
    <section id="bottom-contact-cta" className="py-20 md:py-28 bg-[#FFF8EE] relative select-none scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Heart pill */}
        <div className="inline-flex items-center gap-1.5 bg-[#073BB8]/10 text-[#073BB8] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
          <Heart size={13} className="fill-current text-[#073BB8]" />
          <span>SEE YOU SOON</span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10204A] leading-tight max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          However You Reach Us, <br />
          <span className="text-[#073BB8]">We’re Happy to Hear From You ♡</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
          Our team is passionate about crafting memorable dessert moments. Choose your preferred channel to get in touch.
        </p>

        {/* Large Icon Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={CONTACT_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-[#8DBA38] hover:bg-[#7ba62f] text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>WhatsApp →</span>
          </a>

          <a
            href={CONTACT_CONFIG.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <InstagramIcon className="w-5 h-5 text-white" />
            <span>Instagram →</span>
          </a>

          <a
            href={`mailto:${CONTACT_CONFIG.email}`}
            className="px-8 py-4 bg-[#073BB8] hover:bg-[#032B82] text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <Mail className="w-5 h-5 text-white" />
            <span>Email →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
