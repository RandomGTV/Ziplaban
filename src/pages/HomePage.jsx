import React, { useState } from 'react';
import { ArrowRight, MapPin, Plus } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useCart } from '../context/CartContext';
import AwardHero from '../components/hero/AwardHero';
import ProductImage from '../components/menu/ProductImage';
import QuickAddModal from '../components/menu/QuickAddModal';
import { MENU_PRODUCTS, MENU_ARRIVALS, money } from '../data/menuCatalog';
import './menu-page.css';
import './home-content.css';

const signatures = ['koshari-trio', 'salankatiya-pistachio-nutella', 'ruh-hayathi-pistachio-nutella'].map(id => MENU_PRODUCTS.find(product => product.id === id));
const flavours = [
  { label: 'Pistachio', id: 'hebba-pista', title: 'A little nutty. A lot to love.', copy: 'Meet Hebba Cake Pista: a cake topped with pistachio, ready for your next sweet moment.', color: '#eaf0d6' },
  { label: 'Chocolate', id: 'lazy-cat', title: 'For the chocolate kind of day.', copy: 'Discover Lazy Cat, with layers of chocolate and biscuit in every spoonful.', color: '#f1e3d9' },
  { label: 'Strawberry', id: 'layalee-strawberry', title: 'Your berry happy moment.', copy: 'Make room for Layalee Valvet Strawberry, a creamy strawberry treat from our cake collection.', color: '#fbe6e4' },
  { label: 'Mango', id: 'mango-fusion', title: 'A spoonful of sunshine.', copy: 'Mango Fusion brings mango and cream together in one bright, fruity dessert.', color: '#fff0cb' },
];

export default function HomePage({ onOpenSearch }) {
  const { navigate } = useNavigation();
  const { addToCart } = useCart();
  const [flavour, setFlavour] = useState(0);
  const [quickProduct, setQuickProduct] = useState(null);
  const selection = flavours[flavour];
  const featured = MENU_PRODUCTS.find(product => product.id === selection.id);
  const link = (event, path) => { event.preventDefault(); navigate(path); };
  const add = (product, quantity, options) => { setQuickProduct(null); addToCart(product, quantity, { ...options, openDrawer: true }); };

  return <div className="zip-home">
    <AwardHero onOpenSearch={onOpenSearch} />
    <div className="home-content">
      <section className="home-section home-signatures" aria-labelledby="home-signatures-title">
        <div className="home-section-heading"><div><span className="home-kicker">START WITH A SIGNATURE</span><h2 id="home-signatures-title">Three bowls.<br/>So much happiness.</h2><p>Koshari, Salankatiya or Ruh Hayathi. Find your favourite first spoonful.</p></div><a className="home-text-link" href="/menu" onClick={event => link(event, '/menu')}>Explore the full menu <ArrowRight size={19}/></a></div>
        <div className="home-signature-grid">{signatures.map((product, index) => <article className="home-signature-card" key={product.id}>
          <div className="home-card-top"><span>0{index + 1} / SIGNATURE</span><span>{product.ingredients.join(' · ')}</span></div>
          <a className="home-signature-photo" href={`/product/${product.id}`} onClick={event => link(event, `/product/${product.id}`)}><ProductImage product={product}/></a>
          <div className="home-card-bottom"><div><h3><a href={`/product/${product.id}`} onClick={event => link(event, `/product/${product.id}`)}>{['Koshari Trio', 'Salankatiya', 'Ruh Hayathi'][index]}</a></h3><p>{money(product.price)} <span>/ Regular</span></p></div><button className="home-add" aria-label={`Choose ${product.name}`} onClick={() => setQuickProduct(product)}><Plus size={22}/></button></div>
        </article>)}</div>
      </section>

      <section className="home-flavours" aria-labelledby="home-flavours-title" style={{ '--flavour-color': selection.color }}>
        <div className="home-flavour-layout home-section">
          <div className="home-flavour-copy"><span className="home-kicker">FOLLOW YOUR CRAVING</span><h2 id="home-flavours-title">What’s your<br/>happy flavour?</h2><div className="home-flavour-options" role="group" aria-label="Choose a flavour">{flavours.map((item, index) => <button key={item.label} aria-pressed={index === flavour} onClick={() => setFlavour(index)}>{item.label}</button>)}</div><div aria-live="polite"><h3>{selection.title}</h3><p>{selection.copy}</p></div><button className="home-pill" onClick={() => setQuickProduct(featured)}>Try {featured.name} <ArrowRight size={18}/></button></div>
          <div className="home-flavour-visual" key={featured.id}><span className="home-flavour-note">Made for your sweet side ♡</span><ProductImage product={featured}/><div className="home-flavour-caption"><span>{featured.name}</span><strong>{money(featured.price)}</strong></div></div>
        </div>
      </section>

      <section className="home-section home-arrivals" aria-labelledby="home-arrivals-title">
        <div className="home-section-heading"><div><span className="home-kicker">SOMETHING NEW TO LOVE</span><h2 id="home-arrivals-title">Meet your next favourite.</h2><p>Four more reasons to leave a little room for dessert.</p></div><a className="home-text-link" href="/new-arrivals" onClick={event => link(event, '/new-arrivals')}>Discover new arrivals <ArrowRight size={19}/></a></div>
        <div className="home-arrival-grid">{MENU_ARRIVALS.map(product => <article key={product.id} className="home-arrival-card"><a className="home-arrival-photo" href={`/product/${product.id}`} onClick={event => link(event, `/product/${product.id}`)}><ProductImage product={product}/><span>NEW</span></a><h3><a href={`/product/${product.id}`} onClick={event => link(event, `/product/${product.id}`)}>{product.name}</a></h3><div><span>{money(product.price)}</span><button aria-label={`Add ${product.name} to order`} onClick={() => setQuickProduct(product)}>Add to order <Plus size={16}/></button></div></article>)}</div>
      </section>
      <section className="home-visit home-section" aria-label="Visit ZIP LABAN"><div className="home-visit-icon"><MapPin size={28}/></div><div><span className="home-kicker">GOOD COMPANY. GREAT DESSERT.</span><h2>Let’s meet over something sweet.</h2><p>Find your ZIP LABAN store and make a little time for happiness.</p></div><a className="home-pill" href="/locations" onClick={event => link(event, '/locations')}>Find a store <ArrowRight size={18}/></a></section>
    </div>
    {quickProduct && <QuickAddModal key={quickProduct.id} product={quickProduct} onClose={() => setQuickProduct(null)} onAdd={add}/>}
  </div>;
}
