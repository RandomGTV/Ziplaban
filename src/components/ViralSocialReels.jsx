import React, { useState } from 'react';
import { Play, Pause, Heart, MessageCircle, Share2, Sparkles, Star, TrendingUp, Volume2, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../data/products';
import { sound } from '../utils/audio';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ViralSocialReels() {
  const [playingId, setPlayingId] = useState(null);
  const [reels, setReels] = useState([
    {
      id: 1,
      title: 'The Famous Fazea Chocola Cake: Molten Belgian Ganache Core & Cocoa Pearls',
      creator: '@zip_laban',
      views: '4.8M',
      initialLikes: 242000,
      likes: 242000,
      liked: false,
      tag: '#FazeaChocola',
      image: '/images/viral_reel.jpg',
      soundType: 'crunch',
      instagramUrl: 'https://www.instagram.com/reel/DYMq_90iMey/',
    },
    {
      id: 2,
      title: 'Late Night Rush at Kottakkal Palathara Flagship: Layered Pistachio & Lotus Cups',
      creator: '@zip_laban',
      views: '3.6M',
      initialLikes: 189000,
      likes: 189000,
      liked: false,
      tag: '#KottakkalPalathara',
      image: '/images/salankatia.jpg',
      soundType: 'pour',
      instagramUrl: 'https://www.instagram.com/reel/DaW8aIUTJYV/',
    },
    {
      id: 3,
      title: 'Authentic Almazeya: Silky Alexandria Caramelized Custard & Clotted Kashta',
      creator: '@zip_laban',
      views: '2.9M',
      initialLikes: 135000,
      likes: 135000,
      liked: false,
      tag: '#AlmazeyaHeritage',
      image: '/images/qashtuta.jpg',
      soundType: 'pour',
      instagramUrl: 'https://www.instagram.com/reel/DRj4ysCiILJ/',
    },
    {
      id: 4,
      title: 'Zip Laban Kalikavu Branch Celebration: Theatrical Hot Pistachio Pour',
      creator: '@zip_laban',
      views: '2.4M',
      initialLikes: 118000,
      likes: 118000,
      liked: false,
      tag: '#KalikavuBranch',
      image: '/images/molten_bomb.jpg',
      soundType: 'crunch',
      instagramUrl: 'https://www.instagram.com/reel/DYv9cfsNmkE/',
    },
    {
      id: 5,
      title: 'Triple Fusion Sensation: Layers of Pistachio, Lotus Biscoff & Belgian Chocolate',
      creator: '@zip_laban',
      views: '3.1M',
      initialLikes: 167000,
      likes: 167000,
      liked: false,
      tag: '#LayeredFusionCups',
      image: '/images/real_promo.png',
      soundType: 'pour',
      instagramUrl: 'https://www.instagram.com/reel/DbzY_kDsY-1/',
    },
    {
      id: 6,
      title: 'Midnight Cravings at Kottakkal: Bubbling Fresh Buffalo Milk Reduction',
      creator: '@zip_laban',
      views: '2.1M',
      initialLikes: 94000,
      likes: 94000,
      liked: false,
      tag: '#MidnightCraving',
      image: '/images/umm_ali.jpg',
      soundType: 'crunch',
      instagramUrl: 'https://www.instagram.com/reel/DR9UsNgk8dt/',
    },
  ]);

  const togglePlay = (id, soundType) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      if (soundType === 'pour') {
        sound.playPour();
      } else {
        sound.playCrunch();
      }
    }
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    sound.playPop();
    setReels((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            liked: !r.liked,
            likes: r.liked ? r.likes - 1 : r.likes + 1,
          };
        }
        return r;
      })
    );
  };

  return (
    <section id="story" className="py-24 bg-[#FFFDF9] relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-extrabold text-xs uppercase tracking-widest mb-3 shadow-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Over 15 Million Social Video Impressions</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#061826] font-display tracking-tight leading-none mb-4">
            Viral Moments & Video Reels
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-5">
            Watch real food lovers experience the crunch, the clotted Alexandria kashta pull, and the theatrical molten pistachio cascades across Malappuram.
          </p>

          <a
            href="https://www.instagram.com/zip_laban/"
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playPop()}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @zip_laban on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Video Reels Mockup Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {reels.map((reel) => {
            const isPlaying = playingId === reel.id;

            return (
              <div
                key={reel.id}
                onClick={() => togglePlay(reel.id, reel.soundType)}
                className="relative aspect-[9/15] rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-black border-2 border-white/20 flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl select-none"
              >
                {/* Background Video Still Photo */}
                <img
                  src={reel.image}
                  alt={reel.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                    isPlaying ? 'scale-110 brightness-105' : 'scale-100 group-hover:scale-105 opacity-90'
                  }`}
                  loading="lazy"
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none" />

                {/* Top Status Bar */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    {reel.views} Views
                  </span>
                  <span className="text-[11px] font-bold text-white/90 drop-shadow">
                    {reel.tag}
                  </span>
                </div>

                {/* Center Video Play / Pause Graphic Indicator */}
                <div className="my-auto mx-auto z-10 flex flex-col items-center gap-2">
                  <div
                    className={`w-14 h-14 rounded-full backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all duration-300 shadow-xl ${
                      isPlaying
                        ? 'bg-[#009BE8] scale-110 shadow-sky-500/50'
                        : 'bg-black/40 group-hover:scale-110 group-hover:bg-[#009BE8]'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </div>
                  {isPlaying && (
                    <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1 animate-pulse">
                      <Volume2 className="w-3 h-3 text-[#009BE8]" /> Playing Audio
                    </span>
                  )}
                </div>

                {/* Bottom Details & Engagement */}
                <div className="z-10 -mx-6 -mb-6 p-6 pt-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold text-sky-300 flex items-center gap-1">
                      <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                      {reel.creator}
                    </span>

                    {/* Direct External Link to Actual Reel */}
                    {reel.instagramUrl && (
                      <a
                        href={reel.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playPop();
                        }}
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-white/90 hover:text-white bg-white/20 hover:bg-[#009BE8] px-2.5 py-0.5 rounded-md border border-white/25 transition-colors"
                        title="Open this reel on Instagram"
                      >
                        <span>Watch Reel</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h4 className="text-sm font-extrabold text-white line-clamp-2 leading-snug mb-3 drop-shadow">
                    {reel.title}
                  </h4>

                  <div className="flex items-center justify-between pt-2.5 border-t border-white/20">
                    <button
                      onClick={(e) => toggleLike(reel.id, e)}
                      className="flex items-center gap-1.5 text-xs font-bold transition-colors text-white hover:text-rose-400"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          reel.liked ? 'fill-rose-500 text-rose-500' : 'text-white'
                        }`}
                      />
                      <span>{reel.likes.toLocaleString()}</span>
                    </button>

                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        1.2k
                      </span>
                      <Share2 className="w-3.5 h-3.5 hover:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critic & VIP Review Quotes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-4">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <h5 className="font-bold text-sm text-[#061826]">{rev.name}</h5>
                <span className="text-[11px] font-medium text-gray-500 block">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
