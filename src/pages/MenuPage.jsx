import { flavourTheme } from '../utils/flavourTheme';
import useMenuFavorites from '../hooks/useMenuFavorites';
import { ORDERING_ENABLED } from '../config/ordering';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { Check, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_PRODUCTS, money } from '../data/menuCatalog';
import { MenuHero, CategoryTabs, MenuToolbar, ProductGrid, FeaturedProduct, NewArrivalsCarousel, MenuEmptyState, MenuClosingMessage } from '../components/menu/MenuSections';
import QuickAddModal from '../components/menu/QuickAddModal';
import './menu-page.css';

export default function MenuPage() {
  const {addToCart,itemCount,total,openDrawer}=useCart();
  const [category,setCategory]=useState('all');
  const [query,setQuery]=useState('');
  const [sort,setSort]=useState('popular');
  const [favorites,setFavorites]=useMenuFavorites();
  const [favoritesOnly,setFavoritesOnly]=useState(false);
  const [quickProduct,setQuickProduct]=useState(null);
  const [toast,setToast]=useState('');
  const resultsRef=useRef(null);
  const reduce=useReducedMotion();
  useEffect(()=>{if(!toast)return;const timeout=setTimeout(()=>setToast(''),4000);return()=>clearTimeout(timeout);},[toast]);
  const products=useMemo(()=>{
    const words=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return MENU_PRODUCTS.filter(product=>(category==='all'||product.category===category)&&(!favoritesOnly||favorites.includes(product.id))&&words.every(word=>`${product.name} ${product.category} ${product.ingredients.join(' ')} ${product.description}`.toLowerCase().includes(word))).sort((a,b)=>sort==='price'?a.price-b.price||a.rank-b.rank:sort==='newest'?(b.releaseOrder||0)-(a.releaseOrder||0)||a.rank-b.rank:a.rank-b.rank);
  },[category,query,sort,favorites,favoritesOnly]);
  const browse=()=>resultsRef.current?.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
  const chooseCategory=(next)=>{setCategory(next);if(window.scrollY>220)browse();};
  const reset=()=>{setQuery('');setCategory('all');setFavoritesOnly(false);setSort('popular');};
  const favorite=(id)=>setFavorites(prev=>prev.includes(id)?prev.filter(item=>item!==id):[...prev,id]);
  const add=(product,quantity,options)=>{addToCart(product,quantity,options);setQuickProduct(null);setToast(`${Date.now()}`);};
  const editorial=category==='all'&&!query.trim()&&!favoritesOnly&&sort==='popular';
  const first=editorial?products.slice(0,6):products;
  return <MotionConfig reducedMotion="user"><div className="premium-menu" data-flavour={flavourTheme(query)}>
    <MenuHero onBrowse={browse}/><CategoryTabs selected={category} onSelect={chooseCategory}/>
    <section className="menu-catalog menu-container" ref={resultsRef}>
      <MenuToolbar query={query} onQuery={setQuery} sort={sort} onSort={setSort} count={products.length} favoritesOnly={favoritesOnly} onFavorites={()=>setFavoritesOnly(!favoritesOnly)}/>
      <div className="menu-flavour-shortcuts"><span>In the mood for</span>{['Pistachio','Lotus','Nutella','Mango','Strawberry'].map(flavour=><button key={flavour} className={query===flavour?'is-selected':''} onClick={()=>setQuery(query===flavour?'':flavour)}>{flavour} <span>↗</span></button>)}</div>
      <div id="menu-results" role="tabpanel" aria-labelledby={`category-${category}`} tabIndex={-1} className="menu-results">
        <AnimatePresence mode="wait" initial={false}><motion.div key={`${category}:${query}:${sort}:${favoritesOnly}`} initial={reduce?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}} transition={{duration:reduce?0:.16}}>
          {products.length?<><ProductGrid products={first} favorites={favorites} onFavorite={favorite} onQuickAdd={setQuickProduct}/>{editorial&&<><FeaturedProduct product={MENU_PRODUCTS[0]} onQuickAdd={setQuickProduct}/><div className="menu-more-heading"><span className="menu-eyebrow">KEEP THE GOOD SPOONS COMING</span><h2>More to fall in love with.</h2><p>From signature bowls to Egyptian classics. Find your next favourite.</p></div><ProductGrid products={products.slice(6)} favorites={favorites} onFavorite={favorite} onQuickAdd={setQuickProduct}/></>}</>:<MenuEmptyState onReset={reset}/>}
        </motion.div></AnimatePresence>
      </div>
    </section>
    <NewArrivalsCarousel onQuickAdd={setQuickProduct}/><MenuClosingMessage/>
    {ORDERING_ENABLED && <div className="menu-mobile-cart"><button onClick={openDrawer}><ShoppingBag size={19}/><span>View Cart <small>{itemCount} {itemCount===1?'item':'items'}</small></span><strong>{money(total)}</strong><span aria-hidden="true">→</span></button></div>}
    {quickProduct&&<QuickAddModal key={quickProduct.id} product={quickProduct} onClose={()=>setQuickProduct(null)} onAdd={add}/>}
    <AnimatePresence>{toast&&<motion.div role="status" className="menu-toast" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}><Check size={19}/><span>Added to your happiness bag ♡</span><button onClick={()=>{setToast('');openDrawer();}}>View bag</button><button aria-label="Dismiss notification" onClick={()=>setToast('')}><X size={16}/></button></motion.div>}</AnimatePresence>
  </div></MotionConfig>;
}
