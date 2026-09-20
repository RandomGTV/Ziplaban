import { useMotionPreference } from '../context/MotionPreference';
import React, { useState } from 'react';
import { LOCATIONS } from '../data/locationsData';
import LocationsHero from '../components/locations/LocationsHero';
import LocationSearch from '../components/locations/LocationSearch';
import BranchTabs from '../components/locations/BranchTabs';
import InteractiveMap from '../components/locations/InteractiveMap';
import BranchCard from '../components/locations/BranchCard';
import StoreExperienceSection from '../components/locations/StoreExperienceSection';
import PlanVisit from '../components/locations/PlanVisit';
import PopularLocationsProducts from '../components/locations/PopularLocationsProducts';
import LocalBrandMoment from '../components/locations/LocalBrandMoment';
import ContactStrip from '../components/locations/ContactStrip';
import LocationsCTA from '../components/locations/LocationsCTA';
import { Navigation } from 'lucide-react';

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export default function LocationsPage() {
  const { disabled: motionDisabled } = useMotionPreference();
  const [activeStoreId, setActiveStoreId] = useState('kottakkal');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLocating, setIsLocating] = useState(false);
  const [nearestResult, setNearestResult] = useState(null);

  const filteredLocations = LOCATIONS.filter(store => (selectedFilter === 'all' || store.id === selectedFilter) && searchQuery.toLowerCase().trim().split(/\s+/).every(word => (store.name + ' Kerala ' + (store.hasOfficialAddress ? store.address : '')).toLowerCase().includes(word)));
  const activeStore = filteredLocations.find(store => store.id === activeStoreId) || filteredLocations[0];
  const resetFilters = () => { setSearchQuery(''); setSelectedFilter('all'); };
  const [locationError, setLocationError] = useState('');

  const scrollToMap = () => {
    const el = document.getElementById('map-section');
    if (el) {
      el.scrollIntoView({ behavior: motionDisabled ? 'instant' : 'smooth' });
    }
  };

  const handleSelectStore = (id) => {
    setActiveStoreId(id);
    resetFilters();
    scrollToMap();
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Location is unavailable in this browser. Choose a branch below.');
      return;
    }

    setLocationError('');
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const { latitude, longitude } = pos.coords;

        const distances = LOCATIONS.map((loc) => ({
          ...loc,
          dist: loc.latitude && loc.longitude ? getDistanceKm(latitude, longitude, loc.latitude, loc.longitude) : null,
        }));

        distances.sort((a, b) => (a.dist ?? 9999) - (b.dist ?? 9999));
        const closest = distances[0];

        if (closest && closest.dist !== null) {
          setNearestResult({
            name: closest.name,
            distance: closest.dist,
          });
          resetFilters();
          setActiveStoreId(closest.id);
          scrollToMap();
        }
      },
      (err) => {
        setIsLocating(false);
        setLocationError('Could not determine your location. Please choose Malappuram or Kottakkal below.');
      },
      { timeout: 10000 }
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF8EE] text-[#10204A] selection:bg-[#073BB8] selection:text-white pb-20 sm:pb-0">
      
      {/* 1. Hero Section */}
      <LocationsHero
        onFindBranchClick={scrollToMap}
        activeStoreId={activeStore?.id}
        onSelectStore={handleSelectStore}
      />

      {/* 2. Interactive Map & Branch Switcher Section */}
      <section id="map-section" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#073BB8]/10">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#073BB8] bg-[#073BB8]/10 px-4 py-1.5 rounded-full">
              INTERACTIVE FINDER
            </span>
            <h2 
              className="text-3xl sm:text-5xl font-black text-[#10204A] uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Our Locations in Kerala
            </h2>
            <p className="text-xs sm:text-sm text-[#10204A]/70 font-medium">
              Switch branches below or click on the interactive radar map to explore.
            </p>
          </div>

          {/* Location Search Bar & Geolocation */}
          <LocationSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            onUseMyLocation={handleUseMyLocation}
            isLocating={isLocating}
            nearestResult={nearestResult}
          />

          {locationError && <p role="alert" className="text-center text-sm text-[#073BB8]">{locationError}</p>}
          <p role="status" className="text-sm text-center">{filteredLocations.length} {filteredLocations.length === 1 ? 'branch matches' : 'branches match'} your search.</p>
          {!activeStore && <div className="text-center rounded-3xl bg-[#FFF8EE] p-8"><h3 className="text-xl font-bold">No branches found</h3><p className="my-3">Try Malappuram or Kottakkal, or clear your filters.</p><button className="rounded-full bg-[#073BB8] text-white px-6 py-3" onClick={resetFilters}>Show all branches</button></div>}
          {/* Branch Switcher Tabs */}
          <BranchTabs
            locations={filteredLocations}
            activeStoreId={activeStore?.id}
            onSelectStore={(id) => setActiveStoreId(id)}
          />

          {/* Main Map & Branch Card Split View */}
          {activeStore && <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Map Column (60-65% width) */}
            <div className="lg:col-span-7">
              <InteractiveMap
                locations={filteredLocations}
                activeStoreId={activeStore?.id}
                onSelectStore={(id) => setActiveStoreId(id)}
              />
            </div>

            {/* Active Branch Card Column (35-40% width) */}
            <div className="lg:col-span-5">
              <BranchCard store={activeStore} />
            </div>
          </div>}

        </div>
      </section>

      {/* 3. Store Experience Section ("Choose Your ZIP LABAN") */}
      <StoreExperienceSection locations={LOCATIONS} />

      {/* 4. Plan Your Visit Section */}
      <PlanVisit onScrollToMap={scrollToMap} />

      {/* 5. Popular at Both Locations */}
      <PopularLocationsProducts />

      {/* 6. Local Brand Moment (Kerala Nights) */}
      <LocalBrandMoment />

      {/* 7. Contact Strip */}
      <ContactStrip />

      {/* 8. Bottom CTA */}
      <LocationsCTA onSelectStore={handleSelectStore} />

      {/* 9. Mobile Sticky Bottom Bar */}
      {activeStore && <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-xl border-t border-[#073BB8]/15 shadow-2xl flex items-center gap-3">
        <a
          href={activeStore.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-2xl bg-[#073BB8] text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md active:scale-95 text-center"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          <Navigation size={14} />
          <span>Get Directions ({activeStore.name})</span>
        </a>

        
      </div>}

    </div>
  );
}
