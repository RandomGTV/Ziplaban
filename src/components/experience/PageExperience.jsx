import { useMotionPreference } from '../../context/MotionPreference';
import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import './page-experience.css';
const messages = {
 '/': ['A little more happy.', 'Your favourite flavours. Your next sweet memory.'],
 '/menu': ['So many flavours. One happy you.', 'Take your time. Your next favourite is waiting.'],
 '/new-arrivals': ['Say hello to something new.', 'A fresh reason to save room for dessert.'],
 '/about': ['Made to bring us together.', 'A shared spoonful. A smile. A little ZIP LABAN happiness.'],
 '/locations': ['Your happy place is closer.', 'Pick a store and make a little time for something sweet.'],
 '/contact': ['We’re all ears. And smiles.', 'Questions, ideas or a little hello — we’d love to hear from you.'],
};
export default function PageExperience({ children }) {
 const { currentPath, navigate } = useNavigation();
 const {reduce, paused, setPaused} = useMotionPreference();
 const scope = useRef(null);
 const [reaction,setReaction] = useState(null);
 useEffect(() => {
  const react = event => setReaction({message:event.detail, key:Date.now()});
  window.addEventListener('zip:mascot-reaction',react);
  return () => window.removeEventListener('zip:mascot-reaction',react);
 },[]);
 useEffect(() => { if (!reaction) return; const timer=setTimeout(()=>setReaction(null),3200);return()=>clearTimeout(timer); },[reaction]);
 const copy = messages[currentPath] || (currentPath.startsWith('/product/') ? ['Love at first spoonful.', 'Find the flavours that make your day a little sweeter.'] : ['A little happiness is waiting.', 'Let’s find your way to something sweet.']);

 useEffect(() => {
  if (paused || reduce || !window.IntersectionObserver) return;
  const elements = [...scope.current.querySelectorAll('section')].filter(el => el.getBoundingClientRect().top > window.innerHeight && !el.closest('.award-hero'));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
   if (entry.isIntersecting) { entry.target.classList.add('zip-section-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => { el.classList.add('zip-section-reveal'); observer.observe(el); });
  return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('zip-section-reveal', 'zip-section-visible')); };
 }, [currentPath, paused, reduce]);
 return <div ref={scope} className="zip-page-experience">
  {!reduce && !paused && <div key={`transition-${currentPath}`} className="zip-page-wipe" aria-hidden="true"><img src="/images/zip_boy_mascot.png" alt=""/><span>{({'/':'Home','/menu':'Our menu','/about':'Our story','/locations':'Our branches','/contact':'Say hello','/new-arrivals':'New arrivals'})[currentPath] || 'A little happiness'}</span><small>ZIP LABAN</small><svg className="zip-transition-wave" viewBox="0 0 1440 140" preserveAspectRatio="none"><path d="M0 0H1440V45Q1320 135 1200 72T960 70T720 76T480 64T240 78T0 50Z" fill="currentColor"/></svg></div>}
  <div key={currentPath} className="zip-route-enter">{children}</div>
  {reaction && <div key={reaction.key} className="zip-mascot-reaction" role="status"><img src="/images/zip_boy_mascot.png" alt=""/><span>{reaction.message}</span><button aria-label="Dismiss mascot message" onClick={()=>setReaction(null)}>×</button></div>}
  <section className="zip-mascot-moment" aria-label="A little ZIP LABAN happiness">
   <div className="zip-mascot-stage" aria-hidden="true"><span className="zip-orbit zip-orbit-one">✦</span><span className="zip-orbit zip-orbit-two">♡</span><img src="/images/zip_boy_mascot.png" alt="" loading="lazy"/><span className="zip-mascot-shadow"/></div>
   <div className="zip-moment-copy"><span className="zip-moment-eyebrow"><Sparkles size={15}/> MORE HAPPINESS, PLEASE</span><h2>{copy[0]}</h2><p>{copy[1]}</p><button onClick={() => navigate(currentPath === '/menu' ? '/locations' : '/menu')}>{currentPath === '/menu' ? 'Find your store' : 'Explore the menu'} <ArrowRight size={17}/></button></div>
   <button className="zip-motion-control" onClick={() => setPaused(value => !value)} disabled={!!reduce} aria-pressed={paused || !!reduce} aria-label={reduce ? 'Reduced motion enabled' : paused ? 'Resume animations' : 'Pause animations'}>{paused || reduce ? <Play size={14}/> : <Pause size={14}/>}<span>{reduce ? 'Reduced motion' : paused ? 'Motion paused' : 'Pause motion'}</span></button>
  </section>
 </div>;
}
