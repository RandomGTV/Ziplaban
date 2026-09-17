import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CONTACT_METHODS, CONTACT_CONFIG } from '../../data/contactData';

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function ContactOptions({ onSelectSubject }) {
  const handleCollabClick = () => {
    if (onSelectSubject) {
      onSelectSubject('Business Collaboration');
    }
    const formEl = document.getElementById('contact-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="contact-options" className="py-16 md:py-24 bg-[#FFF8EE] relative select-none scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#073BB8] bg-[#073BB8]/10 px-4 py-1.5 rounded-full inline-block">
            CONNECT WITH US
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10204A]"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            How Would You Like <br />
            <span className="text-[#073BB8]">to Reach Out?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Pick whichever channel is easiest for you. We’re always excited to connect!
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_METHODS.map((method, idx) => {
            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-6 sm:p-7 bg-white border border-[#073BB8]/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle top corner gradient tint */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-60 transition-opacity group-hover:opacity-100"
                  style={{ backgroundColor: method.bgTint }}
                />

                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: method.color }}
                    >
                      {method.type === 'whatsapp' && <WhatsAppIcon className="w-6 h-6 text-white" />}
                      {method.type === 'instagram' && <InstagramIcon className="w-6 h-6 text-white" />}
                      {method.type === 'email' && <Mail className="w-6 h-6 text-white" />}
                      {method.type === 'collab' && <Briefcase className="w-6 h-6 text-white" />}
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-[#073BB8]/10 group-hover:text-[#073BB8] transition-colors">
                      {method.badge}
                    </span>
                  </div>

                  {/* Card Title & Handle/Address */}
                  <h3
                    className="text-xl font-black text-[#10204A] mb-1.5"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {method.title}
                  </h3>

                  {method.handle && (
                    <span className="text-xs font-bold text-[#E1306C] block mb-2">
                      {method.handle}
                    </span>
                  )}
                  {method.address && (
                    <span className="text-xs font-semibold text-gray-500 block mb-2">
                      {method.address}
                    </span>
                  )}

                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                    {method.subtitle}
                  </p>
                </div>

                {/* Bottom CTA Action */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  {method.type === 'whatsapp' && (
                    <a
                      href={CONTACT_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-300 transform group-hover:brightness-105"
                      style={{ backgroundColor: method.color }}
                    >
                      <span>{method.cta}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {method.type === 'instagram' && (
                    <a
                      href={CONTACT_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-300 transform group-hover:brightness-105"
                      style={{ backgroundColor: method.color }}
                    >
                      <span>{method.cta}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {method.type === 'email' && (
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-300 transform group-hover:brightness-105"
                      style={{ backgroundColor: method.color }}
                    >
                      <span>{method.cta}</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {method.type === 'collab' && (
                    <button
                      onClick={handleCollabClick}
                      className="w-full py-3 px-4 rounded-xl text-xs font-extrabold text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-300 transform group-hover:brightness-105 cursor-pointer"
                      style={{ backgroundColor: method.color }}
                    >
                      <span>{method.cta}</span>
                      <ArrowUpRight size={16} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
