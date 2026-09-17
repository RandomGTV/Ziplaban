import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Heart, Leaf, Pause, Play, Smile, UsersRound } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import StoryVideoModal from './StoryVideoModal';
import BrandNavigation from '../BrandNavigation';
import './reference-hero.css';

const benefits = [[Leaf, 'Premium', 'Ingredients'], [Heart, 'Freshly', 'Made'], [Smile, 'Desserts', 'for Everyone'], [UsersRound, 'A Sweeter', 'Tomorrow']];

export default function AwardHero({ onOpenSearch }) {
  const { navigate } = useNavigation();
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [mascotBouncing, setMascotBouncing] = useState(false);
  const heroRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);
  const go = (path) => { setMobileOpen(false); navigate(path); };
  return (
    <section ref={heroRef} className="reference-hero" data-motion-paused={motionPaused || isStoryOpen || mobileOpen} aria-labelledby="hero-title">
      <img className="reference-hero__art" src="/images/hero-mascot-background.png" alt="" fetchPriority="high" />
      <img className={`reference-hero__art reference-mascot${mascotBouncing ? ' reference-mascot--bounce' : ''}`} src="/images/hero-mascot-cutout.png" alt="Zip Laban mascot holding a dessert bowl" onAnimationEnd={(event) => { if (event.animationName === 'reference-mascot-bounce') setMascotBouncing(false); }} />
      <img className="reference-hero__art reference-cream-front" src="/images/hero-cream-foreground.png" alt="" />
      <button className="reference-mascot-hitbox" aria-label="Make Zip bounce" title="Give Zip a little bounce!" onClick={() => { if (!motionPaused) setMascotBouncing(true); }} disabled={motionPaused} />
      <div className="reference-sparkles" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => <i key={index} style={{ '--spark-x': `${8 + (index * 29) % 85}%`, '--spark-y': `${20 + (index * 17) % 57}%`, '--spark-delay': `${index * -.83}s`, '--spark-duration': `${5 + index % 4}s` }} />)}
      </div>
      <BrandNavigation home onOpenSearch={onOpenSearch} onMenuOpenChange={setMobileOpen} />
      <div className="reference-copy">
        <p className="reference-eyebrow">Premium desserts. Bold flavours.</p>
        <h1 id="hero-title">Happiness <span aria-hidden="true">♡</span><br />in Every Bite</h1>
        <p className="reference-subtitle">Creamy. Crunchy. Dreamy.<br />Made for Everyone.</p>
        <div className="reference-cta-row">
          <button className="reference-explore" onClick={() => go('/menu')}>Explore Menu <ArrowRight /></button>
          <button className="reference-story" onClick={() => setIsStoryOpen(true)}><span className="reference-play"><Play fill="currentColor" /></span><span>Watch<br />Our Story</span></button>
        </div>
      </div>
      <div className="reference-bottom">
        <ul className="reference-benefits" aria-label="The Zip Laban promise">
          {benefits.map(([Icon, first, second]) => <li key={first}><Icon strokeWidth={1.6} /><span>{first}<br />{second}</span></li>)}
        </ul>
        <button className="reference-arrivals" onClick={() => go('/new-arrivals')}>
          <span className="reference-bowl" aria-hidden="true" />
          <span>Try Our<strong>New Arrivals!</strong></span>
          <span className="reference-arrivals-arrow"><ArrowRight /></span>
        </button>
      </div>
      <button className="reference-motion-toggle" onClick={() => setMotionPaused(!motionPaused)} aria-label={motionPaused ? 'Resume hero animation' : 'Pause hero animation'} aria-pressed={motionPaused}>
        {motionPaused ? <Play size={13} /> : <Pause size={13} />}<span>{motionPaused ? 'Resume motion' : 'Pause motion'}</span>
      </button>
      <StoryVideoModal isOpen={isStoryOpen} onClose={() => setIsStoryOpen(false)} />
    </section>
  );
}


