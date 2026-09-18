import { useEffect, useState } from 'react';
const key = 'zip-menu-favourites';
export default function useMenuFavorites() {
 const [favorites,setFavorites] = useState(() => {
  try { const saved=JSON.parse(localStorage.getItem(key)||'[]'); return Array.isArray(saved)?saved.filter(id=>typeof id==='string'):[]; } catch { return []; }
 });
 useEffect(() => { try {localStorage.setItem(key,JSON.stringify(favorites));} catch { /* Keep favourites usable without storage. */ } },[favorites]);
 const updateFavorites = update => {
  const next = typeof update === 'function' ? update(favorites) : update;
  if (next.some(id => !favorites.includes(id))) window.dispatchEvent(new CustomEvent('zip:mascot-reaction', {detail: 'Saved! A little happiness for later. ♡'}));
  setFavorites(next);
 };
 return [favorites,updateFavorites];
}
