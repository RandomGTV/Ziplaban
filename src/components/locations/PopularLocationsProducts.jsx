import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { useCart } from '../../context/CartContext';
import { POPULAR_LOCATION_ITEMS } from '../../data/locationsData';

export default function PopularLocationsProducts() {
  const { navigate } = useNavigation();
  const { addToCart } = useCart();

  return (
    <section id="popular-products" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#073BB8]/10 text-center">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#073BB8] bg-[#073BB8]/10 px-3.5 py-1 rounded-full">
              FRESH AT BOTH BRANCHES
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-black text-[#10204A] uppercase tracking-tight mt-2"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Popular at ZIP LABAN
            </h2>
            <p className="text-xs sm:text-sm text-[#10204A]/70 font-medium mt-1">
              Top favourites churned fresh daily across Malappuram & Kottakkal.
            </p>
          </div>

          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 rounded-full bg-[#073BB8] hover:bg-[#052E99] text-white font-black text-xs sm:text-sm shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            <span>View Full Menu</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {POPULAR_LOCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFF8EE] rounded-3xl p-5 border border-[#073BB8]/15 shadow-md flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-[#073BB8]/10 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-[#073BB8] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-[#8DBA38] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 
                    className="text-lg font-black text-[#10204A] uppercase tracking-tight"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#10204A]/70 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 mt-3 border-t border-[#073BB8]/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#10204A]/60 font-bold block text-[10px]">Price</span>
                  <span 
                    className="text-lg font-black text-[#073BB8]"
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    ₹{item.price}
                  </span>
                </div>

                <button
                  onClick={() => {
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                      quantity: 1,
                    });
                  }}
                  className="px-4 py-2 rounded-xl bg-[#073BB8] hover:bg-[#052E99] active:scale-95 text-white text-xs font-black flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  <ShoppingBag size={14} />
                  <span>Add</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
