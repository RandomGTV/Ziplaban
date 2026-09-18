import React from 'react';
import { MapPin, Phone, Clock, Navigation, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import './branch-card.css';
export default function BranchCard({ store }) {
 const {navigate}=useNavigation();
 return <article className="visit-branch-card" aria-label={`${store.name} Branch`}>
  <div className="visit-branch-photo"><img src={store.image} alt={`ZIP LABAN ${store.name} branch`} loading="lazy"/><span>COME SAY HELLO ♡</span></div>
  <div className="visit-branch-content"><span className="visit-branch-eyebrow">YOUR NEXT SWEET STOP</span><h2>{store.name} Branch</h2><p className="visit-branch-tagline">{store.tagline}</p>
   <dl className="visit-branch-details"><div><dt><MapPin size={18}/> Find us</dt><dd>{store.hasOfficialAddress?store.address:`${store.name}, Kerala`}<a href={store.mapUrl} target="_blank" rel="noopener noreferrer">View branch on Google Maps <ArrowRight size={13}/></a></dd></div><div><dt><Clock size={18}/> Plan your visit</dt><dd>{store.hasOfficialHours?store.hours:'Please check with the team for current opening hours.'}</dd></div>{store.hasOfficialPhone&&<div><dt><Phone size={18}/> Speak to us</dt><dd><a href={`tel:${store.phone.replace(/[^+\d]/g,'')}`}>{store.phone}</a></dd></div>}</dl>
   <div className="visit-branch-actions"><a className="visit-branch-directions" href={store.mapUrl} target="_blank" rel="noopener noreferrer"><Navigation size={17}/> Get directions</a>{store.hasOfficialPhone?<a className="visit-branch-secondary" href={`tel:${store.phone.replace(/[^+\d]/g,'')}`}><Phone size={16}/> Call branch</a>:<button className="visit-branch-secondary" onClick={()=>navigate('/contact')}><MessageCircle size={16}/> Ask the team</button>}</div>
   <div className="visit-branch-bottom"><img src="/images/zip_boy_mascot.png" alt=""/><span>A little happiness awaits.</span><button onClick={()=>navigate('/menu')}>See menu <ArrowRight size={15}/></button></div>
  </div>
 </article>;
}
