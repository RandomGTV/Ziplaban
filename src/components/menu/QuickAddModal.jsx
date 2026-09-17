import { ORDERING_ENABLED, ORDERING_MESSAGE } from '../../config/ordering';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Minus, Plus, ShoppingBag, X } from 'lucide-react';
import ProductImage from './ProductImage';
import { money } from '../../data/menuCatalog';

export default function QuickAddModal({ product, onClose, onAdd }) {
  const dialog=useRef(null);
  const [size,setSize]=useState(product.sizes[0]);
  const [extras,setExtras]=useState([]);
  const [quantity,setQuantity]=useState(1);
  useEffect(()=>{
    const previouslyFocused=document.activeElement;
    const overflow=document.body.style.overflow;
    const element=dialog.current;
    element.showModal(); document.body.style.overflow='hidden';
    return()=>{element.close();document.body.style.overflow=overflow;previouslyFocused?.focus();};
  },[]);
  const toggle=(extra)=>setExtras(prev=>prev.some(item=>item.id===extra.id)?prev.filter(item=>item.id!==extra.id):[...prev,extra]);
  const extrasTotal=extras.reduce((sum,item)=>sum+item.price,0);
  const total=(product.price+size.price+extrasTotal)*quantity;
  return createPortal(<dialog className="menu-quick-dialog" ref={dialog} aria-labelledby="quick-title" onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===event.currentTarget)onClose();}}>
    <div className="menu-quick-shell">
      <button autoFocus className="menu-quick-close" aria-label="Close quick add" onClick={onClose}><X size={22}/></button>
      <div className="menu-quick-photo"><span className="menu-eyebrow">A LITTLE BOWL OF HAPPINESS</span><ProductImage product={product}/><p>Creamy. Crunchy. Yours.</p></div>
      <div className="menu-quick-content">
        <span className="menu-eyebrow">MAKE IT YOURS</span>
        <h2 id="quick-title">{product.name}</h2><p>{product.description}</p>
        <p className="menu-allergens">Allergen information: contains milk. May contain nuts and wheat.</p>
        <fieldset><legend>Choose your size</legend><div className="menu-size-options">{product.sizes.map(option=><label key={option.label} className={size.label===option.label?'is-selected':''}><input type="radio" name="bowl-size" value={option.label} checked={size.label===option.label} onChange={()=>setSize(option)}/><strong>{option.label}</strong><span>{option.price?`+${money(option.price)}`:'Original size'}</span></label>)}</div></fieldset>
        {product.extras.length>0&&<fieldset><legend>A little extra happiness <span>Optional</span></legend><div className="menu-extra-options">{product.extras.map(extra=><label key={extra.id}><input type="checkbox" checked={extras.some(item=>item.id===extra.id)} onChange={()=>toggle(extra)}/><span>{extra.name}</span><strong>+{money(extra.price)}</strong></label>)}</div></fieldset>}
        <div className="menu-quick-bottom"><div className="menu-quantity" aria-label="Quantity"><button aria-label="Decrease quantity" disabled={quantity===1} onClick={()=>setQuantity(quantity-1)}><Minus size={16}/></button><output aria-label="Selected quantity">{quantity}</output><button aria-label="Increase quantity" disabled={quantity===20} onClick={()=>setQuantity(quantity+1)}><Plus size={16}/></button></div><span className="menu-quick-total" aria-live="polite">{money(total)}</span></div>
        {!ORDERING_ENABLED && <p className="zip-order-status">{ORDERING_MESSAGE}</p>}
        <button disabled={!ORDERING_ENABLED} className="menu-primary menu-add-confirm" onClick={()=>onAdd(product,quantity,{size:size.label,unitPrice:product.price+size.price,extras:extras.map(extra=>`${extra.name} (+${money(extra.price)})`),extrasPrice:extrasTotal,openDrawer:false})}><ShoppingBag size={18}/> {ORDERING_ENABLED ? 'Add to Cart' : 'Ordering temporarily paused'} <Check size={18}/></button>
      </div>
    </div>
  </dialog>,document.body);
}
