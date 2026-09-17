import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG, SOCIAL_GALLERY_IMAGES } from '../../data/contactData';

function InstagramIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

export default function SocialSection() {
  return (
    <section id="social-section" className="py-20 md:py-28 bg-[#FFF8EE] relative select-none scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#E1306C]/10 text-[#E1306C] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Heart size={13} className="fill-current" />
            <span>COMMUNITY MOMENTS</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10204A]"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Stay Close to the <br />
            <span className="text-[#073BB8]">Happiness ♡</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Daily clotted cream pulls, customer love, midnight drops, and store stories.
          </p>
        </div>

        {/* 2 Primary Social Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Instagram Tile */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-pink-100 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] text-white flex items-center justify-center shadow-lg">
                <InstagramIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#E1306C] uppercase tracking-wider">
                  OFFICIAL INSTAGRAM
                </span>
                <h3
                  className="text-2xl font-black text-[#10204A]"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {CONTACT_CONFIG.instagramHandle}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Reels, viral dessert pulls, stories & new drops
                </p>
              </div>
            </div>

            <a
              href={CONTACT_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white text-xs font-extrabold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all hover:brightness-105"
            >
              <span>Follow Along</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* WhatsApp Tile */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#8DBA38] text-white flex items-center justify-center shadow-lg">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#8DBA38] uppercase tracking-wider">
                  DIRECT WHATSAPP
                </span>
                <h3
                  className="text-2xl font-black text-[#10204A]"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  Zip Laban Chat
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Direct dessert concierge, questions & updates
                </p>
              </div>
            </div>

            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-[#8DBA38] hover:bg-[#7ba62f] text-white text-xs font-extrabold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Say Hi on WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Real Visual Social Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SOCIAL_GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm aspect-square bg-white border border-[#073BB8]/10"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073BB8]/85 via-[#073BB8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end text-white">
                <span
                  className="text-xs font-bold leading-tight line-clamp-1"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {img.title}
                </span>
                <span className="text-[10px] text-blue-100 line-clamp-1 mt-0.5">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
