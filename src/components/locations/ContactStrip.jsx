import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function ContactStrip() {
  return (
    <section id="contact-strip" className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#073BB8]/10 text-center">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="text-left">
          <h3 
            className="text-xl sm:text-2xl font-black text-[#10204A] uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Need Help Finding Us?
          </h3>
          <p className="text-xs sm:text-sm text-[#10204A]/70 mt-0.5 font-medium">
            Reach out directly for store assistance, directions, or party takeaways.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://instagram.com/ziplaban"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[#FFF8EE] hover:bg-[#073BB8] text-[#073BB8] hover:text-white border border-[#073BB8]/20 font-black text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <InstagramIcon size={16} />
            <span>Instagram</span>
          </a>

          <a
            href="https://wa.me/?text=Hi%20Zip%20Laban!%20I%20would%20like%20directions%20to%20your%20branch."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[#8DBA38] hover:bg-[#7ba42f] text-white font-black text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => alert('Official central support line will be connected soon. Please message us on Instagram @ziplaban!')}
            className="px-5 py-3 rounded-full bg-[#073BB8] hover:bg-[#052E99] text-white font-black text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Phone size={16} />
            <span>Call Us</span>
          </button>
        </div>

      </div>
    </section>
  );
}
