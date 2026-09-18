import { ORDERING_ENABLED } from '../config/ordering';
import React, { useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import { ARRIVALS_PRODUCTS } from '../data/arrivalsData';
import { ShoppingBag, ArrowRight } from 'lucide-react';

// Campaign Subcomponents
import NewArrivalsHero from '../components/arrivals/NewArrivalsHero';
import ProductMarquee from '../components/arrivals/ProductMarquee';
import FeatureProductSection from '../components/arrivals/FeatureProductSection';
import CravingMatcher from '../components/arrivals/CravingMatcher';
import MascotChoiceSection from '../components/arrivals/MascotChoiceSection';
import NewArrivalsGrid from '../components/arrivals/NewArrivalsGrid';
import SocialSection from '../components/arrivals/SocialSection';
import NewArrivalsCTA from '../components/arrivals/NewArrivalsCTA';

export default function NewArrivalsPage() {
  const { openDrawer } = useCart();
  const dropsRef = useRef(null);

  const scrollToDrops = () => {
    const el = document.getElementById('hazalnut-bar') || dropsRef.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF8EE] text-[#10204A] selection:bg-[#073BB8] selection:text-white">
      {/* ======================================================================= */}
      {/* 1. CAMPAIGN HERO (75–90vh)                                             */}
      {/* ======================================================================= */}
      <NewArrivalsHero onExploreClick={scrollToDrops} />

      {/* ======================================================================= */}
      {/* 2. INFINITE MARQUEE BANNER                                             */}
      {/* ======================================================================= */}
      <ProductMarquee />

      {/* ======================================================================= */}
      {/* 3. FOUR EDITORIAL FEATURED SECTIONS (ALTERNATING CREATION STORIES)      */}
      {/* ======================================================================= */}
      <div ref={dropsRef} id="drops" className="w-full">
        {ARRIVALS_PRODUCTS.map((product, index) => (
          <FeatureProductSection 
            key={product.id} 
            product={product} 
            index={index} 
          />
        ))}
      </div>

      {/* ======================================================================= */}
      {/* 4. INTERACTIVE CRAVING MATCHER                                          */}
      {/* ======================================================================= */}
      <div id="craving-matcher" className="w-full">
        <CravingMatcher products={ARRIVALS_PRODUCTS} />
      </div>

      {/* ======================================================================= */}
      {/* 5. MASCOT CHOICE EXPERIENCE ("Which One Are You Trying First?")          */}
      {/* ======================================================================= */}
      <div id="mascot-choice" className="w-full">
        <MascotChoiceSection products={ARRIVALS_PRODUCTS} />
      </div>

      {/* ======================================================================= */}
      {/* 6. COMPLETE NEW ARRIVALS GRID (4 ACROSS)                                */}
      {/* ======================================================================= */}
      <div id="arrivals-grid" className="w-full">
        <NewArrivalsGrid products={ARRIVALS_PRODUCTS} />
      </div>

      {/* ======================================================================= */}
      {/* 7. SOCIAL / COMMUNITY UGC SECTION                                       */}
      {/* ======================================================================= */}
      <div id="arrivals-social" className="w-full">
        <SocialSection />
      </div>

      {/* ======================================================================= */}
      {/* 8. CLOSING CAMPAIGN CTA                                                 */}
      {/* ======================================================================= */}
      <div id="arrivals-cta" className="w-full">
        <NewArrivalsCTA onOrderClick={openDrawer} />
      </div>



    </div>
  );
}
