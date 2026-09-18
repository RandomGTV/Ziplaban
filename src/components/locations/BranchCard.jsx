import React from 'react';
import { MapPin, Phone, Clock, ShoppingBag, Navigation, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function BranchCard({ store }) {
  const { navigate } = useNavigation();

  return (
    <div className="w-full bg-white rounded-[32px] p-6 sm:p-7 border border-[#073BB8]/15 shadow-xl space-y-6 text-left relative overflow-hidden">
      
      {/* Top Banner with Store Image & Status */}
      <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-inner border border-[#073BB8]/10 group">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021B54]/90 via-[#021B54]/30 to-transparent" />
        
        {/* Badges on Image */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#8DBA38] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
            {store.badge}
          </span>
          {store.isFlagship && (
            <span className="px-2.5 py-1 rounded-full bg-white text-[#073BB8] text-[10px] font-extrabold uppercase shadow-md">
              KOTTAKKAL BRANCH
            </span>
          )}
        </div>

        {/* Store Title On Image Base */}
        <div className="absolute bottom-3 left-4 right-4">
          <h2 
            className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            ZIP LABAN {store.name}
          </h2>
          <p className="text-xs text-blue-100 font-medium">
            {store.tagline}
          </p>
        </div>
      </div>

      {/* Information Fields */}
      <div className="space-y-3.5 divide-y divide-[#073BB8]/10 text-xs sm:text-sm">
        
        {/* Address */}
        <div className="pt-2 flex items-start gap-3 text-[#10204A]">
          <div className="w-8 h-8 rounded-xl bg-[#073BB8]/10 flex items-center justify-center text-[#073BB8] flex-shrink-0 mt-0.5">
            <MapPin size={16} />
          </div>
          <div>
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#073BB8]">Address</span>
            <p className="font-semibold text-[#10204A]/80 mt-0.5">
              {store.address}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="pt-3.5 flex items-start gap-3 text-[#10204A]">
          <div className="w-8 h-8 rounded-xl bg-[#073BB8]/10 flex items-center justify-center text-[#073BB8] flex-shrink-0 mt-0.5">
            <Phone size={16} />
          </div>
          <div>
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#073BB8]">Phone</span>
            <p className="font-semibold text-[#10204A]/80 mt-0.5">
              {store.phone}
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="pt-3.5 flex items-start gap-3 text-[#10204A]">
          <div className="w-8 h-8 rounded-xl bg-[#073BB8]/10 flex items-center justify-center text-[#073BB8] flex-shrink-0 mt-0.5">
            <Clock size={16} />
          </div>
          <div>
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#073BB8]">Hours</span>
            <p className="font-semibold text-[#10204A]/80 mt-0.5 flex items-center gap-2">
              <span>{store.hours}</span>
              <span className="w-2 h-2 rounded-full bg-[#8DBA38]" />
            </p>
          </div>
        </div>

      </div>

      {/* Features Pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {store.features.map((f, i) => (
          <span key={i} className="px-2.5 py-1 rounded-full bg-[#FFF8EE] border border-[#073BB8]/15 text-[#073BB8] text-[11px] font-bold flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-[#8DBA38]" />
            <span>{f}</span>
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-2">
        <a
          href={store.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-2xl bg-[#073BB8] hover:bg-[#052E99] active:scale-98 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-[#073BB8]/25 transition-all text-center"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          <Navigation size={16} />
          <span>Get Directions →</span>
        </a>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => navigate('/menu')}
            className="py-3 rounded-2xl bg-[#8DBA38] hover:bg-[#7ba42f] active:scale-98 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <ShoppingBag size={15} />
            <span>Explore Menu</span>
          </button>

          <a
            href={store.hasOfficialPhone ? ('tel:' + store.phone) : '#'}
            onClick={(e) => {
              if (!store.hasOfficialPhone) {
                e.preventDefault();
                alert('Official phone line opening soon. Please visit the branch directly or message our team via Instagram @ziplaban!');
              }
            }}
            className="py-3 rounded-2xl bg-[#FFF8EE] hover:bg-[#f3ebd9] text-[#073BB8] border border-[#073BB8]/20 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <Phone size={15} />
            <span>Call Store</span>
          </a>
        </div>
      </div>

    </div>
  );
}
