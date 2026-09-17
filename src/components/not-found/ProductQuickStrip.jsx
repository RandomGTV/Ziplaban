import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

const POPULAR_BOWLS = [
  {
    id: 'koshari-trio',
    name: 'Koshari Royale',
    category: 'Layered Crunch',
    price: '₹350',
    tag: 'Bestseller',
    image: '/images/salankatia.jpg',
    path: '/product/koshari-trio',
    description: 'Crisp layered kunafa, rich cream, and chocolate lava.',
  },
  {
    id: 'salankatiya-pistachio-nutella',
    name: 'Salankatiya G.O.A.T',
    category: 'The Original',
    price: '₹350',
    tag: 'Viral Legend',
    image: '/images/qashtuta.jpg',
    path: '/product/salankatiya-pistachio-nutella',
    description: 'Fresh Egyptian kashta crowned with Antep pistachio.',
  },
  {
    id: 'ruh-hayathi-pistachio-nutella',
    name: 'Ruh Hayathi',
    category: 'Pink Signature',
    price: '₹380',
    tag: 'Signature',
    image: '/images/umm_ali.jpg',
    path: '/product/ruh-hayathi-pistachio-nutella',
    description: 'Slow-churned velvet cream with golden toasted crunch.',
  },
];

export default function ProductQuickStrip() {
  const { navigate } = useNavigation();

  const handleProductClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full pt-8 sm:pt-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#8DBA38] text-xs font-black uppercase tracking-widest mb-2 border border-white/15 backdrop-blur-sm">
            <Sparkles size={13} />
            <span>RECOMMENDED FOR YOU</span>
          </div>
          <h3
            className="text-2xl sm:text-3xl font-black text-white tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Since You’re Here…
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/75 mt-1">
            Pick up one of our viral legendary creations instead!
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {POPULAR_BOWLS.map((bowl) => (
            <div
              key={bowl.id}
              onClick={() => handleProductClick(bowl.path)}
              className="group relative bg-[#021B54]/80 hover:bg-[#032675] border border-white/15 hover:border-[#8DBA38]/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#011640]/50 cursor-pointer flex flex-col justify-between"
            >
              {/* Image & Badge */}
              <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden mb-4 bg-white/5">
                <img
                  src={bowl.image}
                  alt={bowl.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8DBA38] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    {bowl.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1.5 flex-1">
                <p className="text-[11px] font-bold text-blue-200 uppercase tracking-widest">
                  {bowl.category}
                </p>
                <h4
                  className="text-lg font-black text-white tracking-tight group-hover:text-[#8DBA38] transition-colors"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {bowl.name}
                </h4>
                <p className="text-xs text-blue-100/70 line-clamp-2 leading-relaxed">
                  {bowl.description}
                </p>
              </div>

              {/* Price & View CTA */}
              <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-lg font-black text-white">
                  {bowl.price}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-black text-[#8DBA38] group-hover:text-white transition-colors">
                  <span>View</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
