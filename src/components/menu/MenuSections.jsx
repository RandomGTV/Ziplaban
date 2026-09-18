import React, { useId, useRef } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, Check, Heart, Leaf, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { MENU_ARRIVALS, MENU_CATEGORIES, money } from '../../data/menuCatalog';
import ProductImage from './ProductImage';
import { useNavigation } from '../../context/NavigationContext';

function FloatingNut({className}) { const id=useId(); return <svg className={className} viewBox="468 530 115 104" width="115" height="104" aria-hidden="true"><defs><clipPath id={id}><rect x="468" y="530" width="115" height="104"/></clipPath></defs><image clipPath={`url(#${id})`} href="/images/hero-cream-foreground.png" width="1536" height="1024"/></svg>; }

export function MenuHero({onBrowse}) {
  const {navigate}=useNavigation();
  return <section className="menu-hero">
    <div className="menu-hero-inner menu-container">
      <div className="menu-hero-copy"><p className="menu-eyebrow"><span/> ZIP LABAN MENU</p><h1>What Are You<br/><em>Craving</em> Today?</h1><p className="menu-hero-subtitle">Creamy favourites, crunchy toppings<br/>and happiness in every bowl.</p><div className="menu-hero-buttons"><button className="menu-primary menu-primary--white" onClick={onBrowse}>View All Desserts <ArrowDown size={18}/></button><button className="menu-text-button" onClick={()=>navigate('/new-arrivals')}>New Arrivals <ArrowRight size={18}/></button></div><div className="menu-hero-promise"><Leaf size={15}/><span>Made fresh.</span><Heart size={15}/><span>Made for you.</span></div></div>
      <div className="menu-hero-character"><div className="menu-mascot-halo"/><img className="menu-original-mascot" src="/images/zip_boy_mascot.png" alt="Zip Laban mascot holding a dessert bowl" fetchPriority="high"/><span className="menu-handwritten">Pick Your<br/>Happiness! ♡</span><span className="menu-hero-stamp">GOOD MOOD<br/><strong>served daily.</strong></span></div>
      <FloatingNut className="menu-floating-nut menu-floating-nut--one"/><FloatingNut className="menu-floating-nut menu-floating-nut--two"/>
    </div>
    <svg className="menu-hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30C180 95 290 6 510 35S850 80 1050 38 1290 6 1440 27V80H0Z" fill="#fffaf3"/></svg>
  </section>;
}

export function CategoryTabs({selected,onSelect}) {
  const reduce=useReducedMotion();
  const choose=(event,index)=>{
    const next=event.key==='ArrowRight'?(index+1)%MENU_CATEGORIES.length:event.key==='ArrowLeft'?(index-1+MENU_CATEGORIES.length)%MENU_CATEGORIES.length:event.key==='Home'?0:event.key==='End'?MENU_CATEGORIES.length-1:null;
    if(next!==null){event.preventDefault();onSelect(MENU_CATEGORIES[next].id);event.currentTarget.parentElement.children[next].focus();}
  };
  return <div className="menu-category-sticky"><div className="menu-container"><div className="menu-category-tabs" role="tablist" aria-label="Dessert categories">{MENU_CATEGORIES.map((cat,index)=><button key={cat.id} id={`category-${cat.id}`} role="tab" aria-selected={selected===cat.id} aria-controls="menu-results" tabIndex={selected===cat.id?0:-1} onKeyDown={event=>choose(event,index)} onClick={()=>onSelect(cat.id)}>{selected===cat.id&&<motion.span layoutId="menu-category-active" className="menu-tab-active" transition={reduce?{duration:0}:{type:'spring',stiffness:400,damping:36}}/>}<span>{cat.label}</span>{cat.id==='arrivals'&&<Sparkles size={13}/>}</button>)}</div></div></div>;
}

export function MenuToolbar({query,onQuery,sort,onSort,count,favoritesOnly,onFavorites}) {
  return <div className="menu-toolbar"><div><span className="menu-eyebrow">SPOONFULS WORTH FALLING FOR</span><h2>Our Signature Desserts<span className="menu-heading-heart">♡</span></h2><p>Made fresh, topped generously,<br className="menu-mobile-break"/> and created to make your day sweeter.</p></div><div className="menu-toolbar-controls"><label className="menu-search"><Search size={18}/><input type="search" value={query} onChange={event=>onQuery(event.target.value)} placeholder="Search desserts..." aria-label="Search desserts"/>{query&&<button aria-label="Clear dessert search" onClick={()=>onQuery('')}><X size={16}/></button>}</label><div className="menu-sort-row"><label className="menu-sort"><SlidersHorizontal size={15}/><select aria-label="Sort desserts" value={sort} onChange={event=>onSort(event.target.value)}><option value="popular">Popular</option><option value="price">Price: low to high</option><option value="newest">Newest</option></select></label><button className={`menu-favorites-filter ${favoritesOnly?'is-active':''}`} aria-label="Show favourites" aria-pressed={favoritesOnly} onClick={onFavorites}><Heart size={17} fill={favoritesOnly?'currentColor':'none'}/></button><span className="menu-result-count" aria-live="polite">{count} desserts</span></div></div></div>;
}

export function IngredientChip({children}) {return <span className="menu-ingredient-chip">{children}</span>;}

export function ProductCard({product,favorite,onFavorite,onQuickAdd,index=0}) {
  const {navigate}=useNavigation();
  const reduce=useReducedMotion();
  return <motion.article className="menu-product-card" layout={!reduce} initial={reduce?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} exit={{opacity:0,y:8}} transition={{duration:reduce?0:.3,delay:reduce?0:(index%3)*.045}}>
    <div className="menu-card-top"><span className={`menu-product-badge ${product.badge==='New'?'menu-product-badge--new':''}`}>{product.badge==='Bestseller'&&<Sparkles size={12}/>} {product.badge||'Made for you'}</span><button className={`menu-heart ${favorite?'is-favorite':''}`} aria-label={`${favorite?'Remove':'Save'} ${product.name} ${favorite?'from':'to'} favourites`} aria-pressed={favorite} onClick={()=>onFavorite(product.id)}><Heart size={18} fill={favorite?'currentColor':'none'}/></button></div>
    <button className="menu-card-photo" aria-label={`View details for ${product.name}`} onClick={()=>navigate(`/product/${product.id}`)}><ProductImage product={product}/></button>
    <div className="menu-card-content"><span className="menu-card-category">{product.category.replaceAll('-',' ')}</span><h3>{product.name}</h3><p>{product.description}</p><div className="menu-ingredients">{product.ingredients.slice(0,3).map(item=><IngredientChip key={item}>{item}</IngredientChip>)}</div><div className="menu-card-order"><strong>{money(product.price)}</strong><button className="menu-primary" onClick={()=>navigate(`/product/${product.id}`)}>Explore dessert <ArrowRight size={17}/></button></div><button className="menu-details" onClick={()=>navigate(`/product/${product.id}`)}>View Details <ArrowRight size={13}/></button></div>
  </motion.article>;
}

export function ProductGrid({products,favorites,onFavorite,onQuickAdd}) {return <motion.div layout className="menu-product-grid">{products.map((product,index)=><ProductCard key={product.id} product={product} index={index} favorite={favorites.includes(product.id)} onFavorite={onFavorite} onQuickAdd={onQuickAdd}/>)}</motion.div>;}

export function FeaturedProduct({product,onQuickAdd}) {
  const {navigate}=useNavigation();
  return <section className="menu-featured"><div className="menu-featured-food"><span className="menu-featured-watermark" aria-hidden="true">FAVOURITE</span><ProductImage product={product}/><img src="/images/zip_boy_mascot.png" alt="" className="menu-featured-mascot" loading="lazy"/></div><div className="menu-featured-copy"><span className="menu-eyebrow"><Sparkles size={15}/> ZIP LABAN FAVOURITE</span><span className="menu-featured-badge">THE ONE EVERYONE LOVES</span><h2>Koshari<span>One bowl. All the happiness.</span></h2><p>Creamy layers. A generous crunch. Pistachio, Nutella and Lotus coming together in one very happy bowl.</p><div className="menu-ingredients">{product.ingredients.map(item=><IngredientChip key={item}>{item}</IngredientChip>)}</div><div className="menu-featured-order"><strong>{money(product.price)}</strong><button className="menu-primary menu-primary--white" onClick={()=>navigate(`/product/${product.id}`)}>View Dessert <ArrowRight size={18}/></button></div></div></section>;
}

export function NewArrivalsCarousel({onQuickAdd}) {
  const {navigate}=useNavigation();const track=useRef(null);const reduce=useReducedMotion();
  return <section className="menu-arrivals-section"><div className="menu-container"><div className="menu-section-heading"><div><span className="menu-eyebrow">FRESH ON THE MENU</span><h2>Something New<br/><em>Just Landed.</em> <Sparkles/></h2></div><div className="menu-carousel-controls"><button aria-label="Previous new arrivals" onClick={()=>track.current.scrollBy({left:-330,behavior:reduce?'auto':'smooth'})}><ArrowLeft size={20}/></button><button aria-label="Next new arrivals" onClick={()=>track.current.scrollBy({left:330,behavior:reduce?'auto':'smooth'})}><ArrowRight size={20}/></button></div></div><div className="menu-arrival-track" ref={track} tabIndex={0} aria-label="New arrivals carousel">{MENU_ARRIVALS.map(product=><article className="menu-arrival-card" key={product.id}><span className="menu-arrival-new">JUST LANDED</span><ProductImage product={product}/><div><h3>{product.name}</h3><strong>{money(product.price)}</strong></div><button onClick={()=>navigate(`/product/${product.id}`)} aria-label={`View ${product.name}`}><ArrowRight size={20}/></button></article>)}</div><button className="menu-arrival-explore" onClick={()=>navigate('/new-arrivals')}>Explore New Arrivals <ArrowRight size={18}/></button></div></section>;
}


export function MenuEmptyState({onReset}) {return <div className="menu-empty-state"><img src="/images/zip_boy_mascot.png" alt="Zip is ready to help you choose a dessert"/><h3>Hmm… no dessert found.</h3><p>Try a different flavour. Your happiness is still on the menu.</p><button className="menu-primary" onClick={onReset}>View Full Menu <ArrowRight size={18}/></button></div>;}

export function MenuClosingMessage() {return <section className="menu-closing"><span className="menu-eyebrow">THERE’S ALWAYS ROOM FOR HAPPINESS</span><h2>Happiness Has<br/>No Last Scoop <span>♡</span></h2><div><img src="/images/zip_boy_mascot.png" alt="" loading="lazy"/></div><svg viewBox="0 0 1440 50" preserveAspectRatio="none" aria-hidden="true"><path d="M0 35Q180 0 360 28T720 20T1080 30T1440 15V50H0Z" fill="#022b84"/></svg></section>;}
