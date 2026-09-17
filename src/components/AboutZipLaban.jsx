import React from 'react';
import { Sparkles, MapPin, Cake, UtensilsCrossed, Award, ExternalLink, Flame, ShieldCheck, Heart } from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function AboutZipLaban() {
  const handleBadgeClick = () => {
    sound.playChime();
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#009BE8', '#10B981', '#F59E0B', '#FFFFFF'],
    });
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FBFDFF] relative z-10 border-t border-sky-100 overflow-hidden">
      {/* Subtle geometric & light ambience */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#009BE8]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div
            onClick={handleBadgeClick}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#009BE8]/10 border border-[#009BE8]/25 text-[#009BE8] font-black text-xs uppercase tracking-widest mb-4 cursor-pointer hover:bg-[#009BE8]/20 transition-colors shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#009BE8]" />
            <span>About Zip Laban &bull; زيب لبن</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#009BE8]" />
            <span className="text-gray-700 font-semibold">The Kerala Story</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#061826] font-display tracking-tight leading-tight mb-5">
            The Egyptian Dessert Brand <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009BE8] via-[#0B3E96] to-emerald-600">
              in Kerala, India
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
            Born out of a deep reverence for Egyptian dairy craftsmanship and Alexandria’s late-night street food culture,
            <strong className="text-[#061826] font-bold"> Zip Laban </strong> has captured the hearts and tastebuds of dessert lovers across Kerala.
          </p>
        </div>

        {/* 3 Core Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Pillar 1: Signature Egyptian Desserts */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60 mb-3 inline-block">
                Cuisine Heritage
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#061826] mb-3">
                Signature Egyptian Desserts
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                From the velvety caramelized semolina layers of <strong className="text-gray-900 font-bold">Almazeya</strong> to sweet <strong className="text-gray-900 font-bold">Koshari Royale</strong> and crispy ghee-toasted kunafa nests, every recipe follows century-old Cairo & Alexandria techniques.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>Almazeya &bull; Salankatia &bull; Koshari</span>
              <Award className="w-4 h-4" />
            </div>
          </div>

          {/* Pillar 2: Layered Creamy Fusion Cups */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#009BE8]/5 via-white to-white border border-[#009BE8]/30 shadow-md hover:shadow-xl hover:border-[#009BE8] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#009BE8]/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#009BE8]/10 text-[#009BE8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#009BE8] bg-[#009BE8]/10 px-2.5 py-0.5 rounded-md border border-[#009BE8]/20 mb-3 inline-block">
                Viral Cups
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#061826] mb-3">
                Creamy Fusion Cups
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Special fusion cups featuring luxurious layers of <strong className="text-gray-900 font-bold">Pistachio, Lotus Biscoff, and Belgian Chocolate</strong>, stacked over slow-simmered 100% farm-fresh buffalo milk Kashta cream.
              </p>
            </div>
            <div className="pt-4 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-[#009BE8]">
              <span>Pistachio &bull; Lotus &bull; Chocolate</span>
              <Heart className="w-4 h-4 fill-current text-rose-500" />
            </div>
          </div>

          {/* Pillar 3: Fazea Chocola Cake & Flavored Cakes */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-amber-900/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-900/10 text-amber-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Cake className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-300 mb-3 inline-block">
                Celebrity Favorite
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#061826] mb-3">
                Fazea Chocola Cake & Bakes
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The showstopping <strong className="text-gray-900 font-bold">Fazea Chocola Cake</strong> baked with an explosive molten dark ganache core and cocoa pearls, alongside molten <strong className="text-gray-900 font-bold">Hebba Cakes</strong> and chilled Layalee Velvet boxes.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-amber-900">
              <span>Fazea &bull; Hebba &bull; Layalee</span>
              <Flame className="w-4 h-4 fill-current text-amber-600" />
            </div>
          </div>
        </div>

        {/* Heartland Highlight: Malappuram Expansion & Official Instagram */}
        <div className="rounded-3xl bg-gradient-to-r from-[#031526] via-[#061E38] to-[#0A2E54] text-white p-8 sm:p-12 shadow-2xl border border-sky-400/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#009BE8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl text-left">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-extrabold text-[11px] uppercase tracking-wider border border-sky-400/30">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Malappuram Heartland & Expansion
              </span>
              <span className="text-xs text-amber-300 font-bold">
                📍 Kottakkal Palathara &bull; Kalikavu &bull; Perinthalmanna
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
              Operating & Expanding Across Malappuram
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
              Beginning from our flagship boutique at <strong className="text-white">Palathara, Kottakkal</strong> and expanding to <strong className="text-white">Kalikavu</strong> and surrounding regions in Malappuram, Zip Laban serves crowds of dessert lovers day and late into the night.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-sky-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Farm-Fresh Dairy
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#009BE8]" />
                14-Hour Copper Vats Reduction
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-pink-400" />
                ഒരു ദിവസം പോലും പിരിയാൻ പറ്റാത്ത ബന്ധം!
              </span>
            </div>
          </div>

          {/* Right Action: Official Instagram CTA */}
          <div className="flex flex-col items-center lg:items-end gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="https://www.instagram.com/zip_laban/"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playPop()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#009BE8] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0369A1] text-white font-extrabold text-sm shadow-lg shadow-sky-500/30 hover:scale-103 transition-all duration-300"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Follow @zip_laban on Instagram</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
            <span className="text-[11px] text-gray-400 text-center lg:text-right">
              View latest updates, menu drops & store announcements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
