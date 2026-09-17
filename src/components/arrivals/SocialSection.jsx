import React from 'react';
import { Heart, MessageCircle, Share2, Sparkles } from 'lucide-react';

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function SocialSection() {
  const posts = [
    {
      handle: '@foodie_calicut',
      caption: 'Unboxing the new Le Zip de Paris! 12 chocolate praline domes of pure joy 🇫🇷✨',
      likes: '4.2k',
      image: '/images/arrivals/le-zip-de-paris.png',
      tag: '#ZipLabanNewDrop',
    },
    {
      handle: '@kerala_dessert_hunt',
      caption: 'The Fazea Chocola Cake warm molten ganache pull is INSANE 🔥 Must try in Kottakkal!',
      likes: '6.8k',
      image: '/images/arrivals/fazea-chocola-cake.png',
      tag: '#FazeaCake',
    },
    {
      handle: '@malappuram_vibes',
      caption: 'Late night drive with the Hazelnut Bar. The wafer crunch is so crispy! 🍫🚗',
      likes: '3.9k',
      image: '/images/arrivals/hazelnut-bar.png',
      tag: '#HazelnutCrunch',
    },
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EE] text-[#10204A] relative overflow-hidden text-center">
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#073BB8]/10 text-[#073BB8] text-xs font-black uppercase tracking-widest">
            <InstagramIcon size={14} />
            <span>Community Drops</span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Spotted Something You Love?
          </h2>

          <p className="text-base sm:text-lg text-[#10204A]/70 font-medium">
            Tag <strong className="text-[#073BB8]">@ZipLaban</strong> on your reels and stories to show us your first bite of the new collection.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#073BB8]/10 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* User Handle */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#E11D48] to-[#9333EA] p-0.5 flex items-center justify-center">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[10px] font-black text-[#073BB8]">
                        ZL
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#10204A]">{post.handle}</span>
                  </div>
                  <InstagramIcon size={16} className="text-[#E11D48]" />
                </div>

                {/* Media Preview */}
                <div className="w-full h-48 rounded-2xl bg-[#FFF8EE] p-4 flex items-center justify-center mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <img src={post.image} alt="" className="max-h-full max-w-full object-contain filter drop-shadow-md" />
                </div>

                {/* Caption */}
                <p className="text-xs sm:text-sm text-[#10204A]/80 leading-relaxed mb-3">
                  {post.caption}
                </p>
                <span className="text-xs font-bold text-[#073BB8] block mb-4">
                  {post.tag}
                </span>
              </div>

              {/* Engagement bar */}
              <div className="flex items-center justify-between pt-3 border-t border-[#073BB8]/10 text-xs text-[#10204A]/60 font-semibold">
                <div className="flex items-center gap-1 text-[#E11D48]">
                  <Heart size={14} fill="currentColor" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><MessageCircle size={13} /> Comment</span>
                  <span className="flex items-center gap-1"><Share2 size={13} /> Share</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://www.instagram.com/zip_laban/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#E11D48] via-[#C026D3] to-[#7C3AED] text-white font-extrabold text-sm shadow-xl hover:scale-105 transition-transform"
          >
            <InstagramIcon size={18} />
            <span>Follow @ZipLaban on Instagram</span>
          </a>

          <a
            href="https://www.instagram.com/zip_laban/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-[#FFF8EE] text-[#073BB8] border border-[#073BB8]/20 font-bold text-sm hover:scale-105 transition-transform"
          >
            <Sparkles size={16} />
            <span>Share Your Moment</span>
          </a>
        </div>

      </div>
    </section>
  );
}
