import React, { createContext, useContext, useEffect, useState } from 'react';
import { MotionConfig, motion as framerMotion } from 'framer-motion';

const Context = createContext(null);
export function MotionPreferenceProvider({ children }) {
  const [paused, setPaused] = useState(() => { try { return localStorage.getItem('zip-motion-paused') === 'true'; } catch { return false; } });
  const [reduce, setReduce] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduce(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const disabled = paused || reduce;
  useEffect(() => {
    document.documentElement.classList.toggle('zip-motion-paused', disabled);
    try { localStorage.setItem('zip-motion-paused', String(paused)); } catch { /* Works without storage. */ }
  }, [disabled, paused]);
  return <Context.Provider value={{ paused, setPaused, reduce, disabled }}><MotionConfig reducedMotion={disabled ? 'always' : 'user'}>{children}</MotionConfig></Context.Provider>;
}
export const useMotionPreference = () => useContext(Context);

// Explicitly stop repeating Framer animations; CSS animation-play-state cannot stop them.
export function LoopMotion({ as = 'div', animate, transition, ...props }) {
  const { disabled } = useMotionPreference();
  const Component = framerMotion[as];
  const repeats = transition?.repeat === Infinity || Object.values(transition || {}).some(value => value?.repeat === Infinity);
  if (!repeats) return <Component {...props} animate={animate} transition={transition} />;
  const resting = Object.fromEntries(Object.entries(animate || {}).map(([key, value]) => [key, Array.isArray(value) ? value.find(item => item !== null) : value]));
  return <Component key={disabled ? 'still' : 'moving'} {...props} animate={disabled ? resting : animate} transition={disabled ? { duration: 0, repeat: 0 } : transition} />;
}

export const motion = Object.fromEntries(['div', 'img', 'span', 'article', 'h1', 'h2', 'h3', 'p'].map(tag => [tag, React.forwardRef((props, ref) => <LoopMotion {...props} ref={ref} as={tag} />)]));
