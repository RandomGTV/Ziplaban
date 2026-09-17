import React from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../../data/contactData';

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

export default function MobileStickyBar() {
  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#073BB8]/15 px-4 py-3 shadow-2xl flex items-center gap-3 select-none">
      <a
        href={CONTACT_CONFIG.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-3 px-4 rounded-xl bg-[#8DBA38] text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs"
        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
      >
        <WhatsAppIcon className="w-4 h-4 text-white" />
        <span>Chat on WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={scrollToForm}
        className="flex-1 py-3 px-4 rounded-xl bg-[#073BB8] text-white font-black text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
      >
        <Send size={14} />
        <span>Send Message</span>
      </button>
    </div>
  );
}
