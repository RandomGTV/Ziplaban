import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/contactData';
import './franchise.css';
export function FranchiseInvitation({ onOpen }) {
 return <section className="franchise-invitation" id="franchise-inquiry"><div><span className="franchise-eyebrow">GROW WITH ZIP LABAN</span><h2>Bring a little happiness<br/>to your neighbourhood.</h2><p>Interested in opening a ZIP LABAN? Tell us about yourself and the place you have in mind. Let’s start a conversation.</p><button className="franchise-primary" onClick={onOpen}>Franchise inquiry <ArrowRight size={18}/></button></div><div className="franchise-invite-art"><span>Let’s grow together ♡</span><img src="/images/zip_boy_mascot.png" alt="ZIP LABAN mascot welcoming future partners" loading="lazy"/></div></section>;
}
export default function FranchiseModal({ isOpen=false, onClose=()=>{} }) {
 const dialog=useRef(null);
 const [draftReady,setDraftReady]=useState(false);
 const [form,setForm]=useState({name:'',email:'',phone:'',city:'',format:'Let’s discuss',message:''});
 useEffect(()=>{
  if(!isOpen)return;
  const previous=document.activeElement;const overflow=document.body.style.overflow;
  dialog.current.showModal();document.body.style.overflow='hidden';setDraftReady(false);
  return()=>{dialog.current?.close();document.body.style.overflow=overflow;previous?.focus();};
 },[isOpen]);
 if(!isOpen)return null;
 const update=event=>setForm(value=>({...value,[event.target.name]:event.target.value}));
 const body=`Franchise inquiry\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProposed city: ${form.city}\nSpace: ${form.format}\n\n${form.message}`;
 const emailHref=`mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent('ZIP LABAN franchise inquiry — '+form.city)}&body=${encodeURIComponent(body)}`;
 return createPortal(<dialog ref={dialog} className="franchise-dialog" aria-labelledby="franchise-title" onCancel={event=>{event.preventDefault();onClose();}} onClick={event=>{if(event.target===event.currentTarget)onClose();}}>
  <button className="franchise-close" aria-label="Close franchise inquiry" onClick={onClose}><X size={21}/></button>
  <div className="franchise-layout"><aside className="franchise-story"><span className="franchise-eyebrow"><Sparkles size={15}/> A SWEETER NEXT CHAPTER</span><h2 id="franchise-title">Your city.<br/>Our happiness.</h2><p>Let’s talk about bringing ZIP LABAN to a new neighbourhood.</p><img src="/images/zip_boy_mascot.png" alt="ZIP LABAN mascot"/><span className="franchise-handwritten">Good things grow together ♡</span></aside>
  <div className="franchise-form-panel"><span className="franchise-eyebrow">FRANCHISE INQUIRY</span><h3>Tell us your idea.</h3><p>A few details to help us start the conversation. Fields marked * are required.</p>
  <form onSubmit={event=>{event.preventDefault();setDraftReady(true);}}>
   <div className="franchise-fields">{[['name','Full name','text','name'],['email','Email address','email','email'],['phone','Phone number','tel','tel'],['city','Proposed city','text','address-level2']].map(([name,label,type,autoComplete])=><label key={name} htmlFor={`franchise-${name}`}>{label} *<input id={`franchise-${name}`} name={name} type={type} autoComplete={autoComplete} value={form[name]} onChange={update} required maxLength={120}/></label>)}</div>
   <label htmlFor="franchise-format">Do you have a space in mind?<select id="franchise-format" name="format" value={form.format} onChange={update}><option>Let’s discuss</option><option>I have a location</option><option>I’m looking for a location</option></select></label>
   <label htmlFor="franchise-message">Anything else you’d like to share?<textarea id="franchise-message" name="message" value={form.message} onChange={update} rows={3} maxLength={1500} placeholder="Your location, experience, or questions…"/></label>
   <p className="franchise-privacy">We’ll prepare an email with these details. Nothing is sent until you send it from your email app.</p>
   <button className="franchise-primary" type="submit">Prepare inquiry <ArrowRight size={18}/></button>
   {draftReady&&<div className="franchise-draft" role="status"><strong>Your inquiry is ready to send.</strong><a href={emailHref}><Mail size={17}/> Open email draft</a><span>No email app? Write to <a href={`mailto:${CONTACT_CONFIG.email}`}>{CONTACT_CONFIG.email}</a>.</span></div>}
  </form></div></div>
 </dialog>,document.body);
}
