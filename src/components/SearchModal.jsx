import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { MENU_PRODUCTS, money } from '../data/menuCatalog';
import ProductImage from './menu/ProductImage';
import { useNavigation } from '../context/NavigationContext';
import './search-modal.css';
export default function SearchModal({ isOpen, onClose }) {
 const [query,setQuery]=useState('');const dialog=useRef(null);const {navigate}=useNavigation();
 useEffect(()=>{
  if(!isOpen)return;
  const previous=document.activeElement;const overflow=document.body.style.overflow;const element=dialog.current;
  element.showModal();document.body.style.overflow='hidden';
  return()=>{element.close();document.body.style.overflow=overflow;previous?.focus();setQuery('');};
 },[isOpen]);
 if(!isOpen)return null;
 const words=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
 const results=MENU_PRODUCTS.filter(product=>words.every(word=>`${product.name} ${product.category} ${product.description} ${product.ingredients.join(' ')}`.toLowerCase().includes(word))).slice(0,6);
 return createPortal(<dialog ref={dialog} className="zip-search-dialog" aria-label="Search desserts" onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===event.currentTarget)onClose();}}>
 <div className="zip-search-header"><Search size={22} aria-hidden="true"/><input autoFocus type="search" aria-label="Search the dessert menu" placeholder="Search desserts…" value={query} onChange={event=>setQuery(event.target.value)}/><button aria-label="Close search" onClick={onClose}><X size={20}/></button></div>
 <div className="zip-search-suggestions" aria-label="Suggested searches">{['Koshari','Pistachio','Lotus','Nutella','Arrivals'].map(tag=><button key={tag} onClick={()=>setQuery(tag)}>{tag}</button>)}</div>
 <div className="zip-search-results"><p role="status" className="zip-search-status">{results.length ? `${results.length} desserts shown` : `No desserts found for “${query}”. Try another flavour.`}</p>{results.map(product=><button className="zip-search-result" key={product.id} onClick={()=>{onClose();navigate(`/product/${product.id}`);}}><div className="zip-search-photo"><ProductImage product={product}/></div><span><strong>{product.name}</strong><small>{product.description}</small></span><b>{money(product.price)}</b><ArrowRight size={16}/></button>)}</div>
 </dialog>,document.body);
}
