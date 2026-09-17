import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import Mascot from './Mascot';

export default function Footer({ onOpenFranchise }) {
  const { navigate } = useNavigation();

  const handleLink = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#022B84] text-white pt-20 pb-12 overflow-hidden border-t-4 border-[#063BB6] select-none">
      {/* Giant faded watermark in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0 select-none opacity-5 whitespace-nowrap text-[16vw] font-black text-white tracking-widest leading-none" style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}>
        ZIP LABAN
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLink('/')}>
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-lg flex items-center justify-center">
                <img
                  src="/images/zip_boy_mascot.png"
                  alt="Zip Laban Mascot"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3
                  className="text-2xl font-black tracking-tight text-white flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  ZIP LABAN
                  <span className="text-xs bg-[#8DB936] text-white px-2 py-0.5 rounded-full font-bold">
                    زيب لبن
                  </span>
                </h3>
                <p className="text-xs text-blue-200 font-medium">Authentic Egyptian Desserts • Kerala, India</p>
              </div>
            </div>

            <p className="text-sm text-blue-100/80 leading-relaxed max-w-sm pt-2">
              Born from Cairo’s legendary sweet-making craft and crafted in Malappuram with 100% pure farm milk, golden kunafa crunch, and flowing Antep pistachio lava.
            </p>

            <div className="pt-2">
              <span
                className="inline-block text-xl text-[#8DB936] font-bold"
                style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
              >
                “See you for the next scoop of happiness ♡”
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.instagram.com/zip_laban/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#145DFF] flex items-center justify-center text-white transition-colors"
                title="Instagram @zip_laban"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919846077889"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8DB936] flex items-center justify-center text-white transition-colors"
                title="WhatsApp Direct"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore Routes */}
          <div>
            <h4
              className="text-base font-bold text-white mb-4 tracking-wide uppercase"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Explore Menu
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/75">
              <li>
                <button onClick={() => handleLink('/menu')} className="hover:text-white hover:underline cursor-pointer">
                  All Creations
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/product/salankatiya-pistachio')} className="hover:text-white hover:underline cursor-pointer">
                  Salankatiya (The G.O.A.T)
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/product/koshari-royale')} className="hover:text-white hover:underline cursor-pointer">
                  Koshari Royale
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/product/ruh-hayati')} className="hover:text-white hover:underline cursor-pointer">
                  Ruh Hayathi (Pink Bowl)
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/new-arrivals')} className="hover:text-white hover:underline cursor-pointer flex items-center gap-1.5">
                  <span>New Arrivals</span>
                  <span className="text-[10px] bg-[#8DB936] text-white px-1.5 py-0.2 rounded font-bold">DROP</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Brand */}
          <div>
            <h4
              className="text-base font-bold text-white mb-4 tracking-wide uppercase"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              The Brand
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/75">
              <li>
                <button onClick={() => handleLink('/about')} className="hover:text-white hover:underline cursor-pointer">
                  Our Story & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/locations')} className="hover:text-white hover:underline cursor-pointer">
                  Store Locator (Kerala)
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/contact')} className="hover:text-white hover:underline cursor-pointer">
                  Say Hello to Zip!
                </button>
              </li>
              <li>
                <button onClick={onOpenFranchise} className="hover:text-white hover:underline cursor-pointer text-[#8DB936] font-bold">
                  Franchise & Partner Inquiries 🚀
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/cart')} className="hover:text-white hover:underline cursor-pointer">
                  Track Delivery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Flagship & Hours */}
          <div className="relative">
            <h4
              className="text-base font-bold text-white mb-4 tracking-wide uppercase"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Kerala Hubs
            </h4>
            <div className="space-y-3 text-sm text-blue-100/80">
              <div>
                <p className="font-bold text-white">Kottakkal (Flagship Lounge)</p>
                <p className="text-xs text-blue-200">Palathara Bypass, Malappuram</p>
                <p className="text-xs text-[#8DB936] font-semibold">Open Daily • Late Night Dessert</p>
              </div>
              <div>
                <p className="font-bold text-white">Malappuram Branch</p>
                <p className="text-xs text-blue-200">Fresh Clotted Cream Churn Counter</p>
                <p className="text-xs text-[#8DB936] font-semibold">Open Daily • Midnight Churn</p>
              </div>
              <div className="pt-1">
                <button
                  onClick={() => handleLink('/locations')}
                  className="text-xs font-bold text-white hover:text-[#8DB936] underline cursor-pointer"
                >
                  View Locations Map & Directions →
                </button>
              </div>
            </div>

            {/* Peeking Mascot in Footer */}
            <div className="hidden lg:block absolute -right-4 -bottom-16">
              <Mascot
                variant="peeking"
                size="sm"
                speechText="Happy scooping!"
                speechPosition="left"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <p>© {new Date().getFullYear()} ZIP LABAN (زيب لبن). All rights reserved. Made with love for Malappuram & beyond.</p>
          <div className="flex items-center gap-6">
            <span>100% Buffalo Milk</span>
            <span>•</span>
            <span>Zero Artificial Gums</span>
            <span>•</span>
            <span className="text-[#8DB936] font-bold">Happiness in Every Bite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
