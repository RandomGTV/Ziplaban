import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

function InstagramIcon({ size = 20, className = '' }) {
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

export default function CommunityGrid() {
  const images = [
    { src: '/images/salankatia.jpg', alt: 'Salankatiya Dessert bowl', caption: 'Midnight pistachio cravings', span: 'col-span-1 row-span-1' },
    { src: '/images/mascot_store.png', alt: 'Store mascot and friends', caption: 'Smiles at the counter', span: 'col-span-1 sm:col-span-2 row-span-1' },
    { src: '/images/qashtuta.jpg', alt: 'Qashtuta Royale', caption: 'Pure clotted kashta dreams', span: 'col-span-1 row-span-1' },
    { src: '/images/arrivals/fazea-chocola-cake.png', alt: 'Fazea Chocola Cake', caption: 'Molten chocolate joy', span: 'col-span-1 row-span-1' },
    { src: '/images/umm_ali.jpg', alt: 'Crispy Umm Ali', caption: 'Warm golden pastry', span: 'col-span-1 sm:col-span-2 row-span-1' },
  ];

  return (
    <section id="community" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#073BB8]/10 relative overflow-hidden text-center">
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073BB8]/10 border border-[#073BB8]/20 text-[#073BB8] text-xs font-black uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-[#8DBA38]" />
            <span>COMMUNITY MOMENTS</span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#10204A] tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Happiness Tastes Better Together
          </h2>
          
          <p className="text-base sm:text-lg text-[#10204A]/70 font-medium max-w-xl mx-auto">
            From family celebrations to midnight drives — our favourite memories are the ones you share with us.
          </p>
        </div>

        {/* Dynamic Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {images.map((item, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl overflow-hidden shadow-md group ${item.span} h-56 sm:h-64 border-2 border-white`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032B82]/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-left text-white flex items-center justify-between">
                <span className="text-xs font-bold">{item.caption}</span>
                <span className="text-xs text-[#8DBA38]">♡</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Social CTA */}
        <div className="pt-4">
          <a
            href="https://www.instagram.com/zip_laban/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#E1306C] to-[#833AB4] text-white font-black text-sm sm:text-base shadow-xl hover:scale-105 transition-all cursor-pointer"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <InstagramIcon size={20} />
            <span>Join Us on Instagram →</span>
          </a>
        </div>

      </div>

    </section>
  );
}
