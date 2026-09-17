import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import './BrandNavigation.css';
const LINKS=[['Home','/'],['Menu','/menu'],['New Arrivals','/new-arrivals'],['About','/about'],['Locations','/locations'],['Contact','/contact']];
export default function BrandNavigation({onOpenSearch,home=false,light=false,onMenuOpenChange}) {
  const {currentPath,navigate}=useNavigation();
  const {itemCount,openDrawer}=useCart();
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  const toggle=(value)=>{setOpen(value);onMenuOpenChange?.(value);};
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>45); update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
  useEffect(()=>{const escape=(event)=>{if(event.key==='Escape'){setOpen(false);onMenuOpenChange?.(false);}};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape);},[onMenuOpenChange]);
  const go=(event,path)=>{event.preventDefault();toggle(false);navigate(path);};
  return <header className={`brand-nav ${home?'brand-nav--home':''} ${light?'brand-nav--light':''} ${scrolled?'brand-nav--scrolled':''}`}>
    <div className="brand-nav-inner">
      <a className="brand-nav-logo" href="/" aria-label="Zip Laban home" onClick={e=>go(e,'/')} />
      <nav aria-label="Main navigation" className="brand-nav-links">{LINKS.map(([label,path])=><a key={path} href={path} aria-current={currentPath===path?'page':undefined} onClick={e=>go(e,path)}>{label}</a>)}</nav>
      <div className="brand-nav-actions">
        <button onClick={onOpenSearch} aria-label="Search menu"><Search size={22}/></button>
        <button onClick={openDrawer} aria-label={`View shopping bag, ${itemCount} items`} className="brand-nav-bag"><ShoppingBag size={22}/>{itemCount>0&&<span key={itemCount} className="brand-cart-count">{itemCount}</span>}</button>
        <a className="brand-nav-order" href="/menu" onClick={e=>go(e,'/menu')}>Order Now <ArrowRight size={18}/></a>
        <button className="brand-nav-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="brand-mobile-links" onClick={()=>toggle(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
    </div>
    {open&&<nav id="brand-mobile-links" className="brand-mobile-links" aria-label="Mobile navigation">{LINKS.map(([label,path])=><a key={path} href={path} aria-current={currentPath===path?'page':undefined} onClick={e=>go(e,path)}>{label}<ArrowRight size={18}/></a>)}</nav>}
  </header>;
}
