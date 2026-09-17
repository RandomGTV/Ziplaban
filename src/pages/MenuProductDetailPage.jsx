import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useCart } from '../context/CartContext';
import { MENU_PRODUCTS, money } from '../data/menuCatalog';
import ProductImage from '../components/menu/ProductImage';
import QuickAddModal from '../components/menu/QuickAddModal';
import { IngredientChip, ProductGrid } from '../components/menu/MenuSections';
import './menu-page.css';
export default function MenuProductDetailPage(){
 const {productSlug,navigate}=useNavigation();const {addToCart,openDrawer}=useCart();
 const product=MENU_PRODUCTS.find(item=>item.id===productSlug);
 const [quick,setQuick]=useState(null);const [added,setAdded]=useState(false);const [favorites,setFavorites]=useState([]);
 if(!product)return null;
 return <div className="premium-menu menu-detail-page"><div className="menu-detail-header"/><div className="menu-container"><button className="menu-detail-back" onClick={()=>navigate('/menu')}><ArrowLeft size={17}/> Back to the menu</button><div className="menu-detail-layout"><div className="menu-detail-photo"><ProductImage product={product} priority/></div><div className="menu-detail-copy"><span className="menu-eyebrow">{product.category.replaceAll('-',' ').toUpperCase()}</span><h1>{product.name}</h1><p>{product.description}</p><div className="menu-ingredients">{product.ingredients.map(ingredient=><IngredientChip key={ingredient}>{ingredient}</IngredientChip>)}</div><strong className="menu-detail-price">{money(product.price)}</strong><p className="menu-detail-size">{product.sizes.length>1?'Regular bowl · choose a size and extras below':'Original size'}</p><button className="menu-primary" onClick={()=>setQuick(product)}>Customise & Add <ArrowRight size={18}/></button><p className="menu-detail-allergens">Contains milk. May contain nuts and wheat.</p>{added&&<div className="menu-detail-added" role="status"><Check size={17}/> Added to your happiness bag <button onClick={openDrawer}>View bag <ShoppingBag size={15}/></button></div>}</div></div><div className="menu-more-heading"><span className="menu-eyebrow">ANOTHER SPOONFUL?</span><h2>You might love these too.</h2></div><ProductGrid products={MENU_PRODUCTS.filter(item=>item.category===product.category&&item.id!==product.id).slice(0,3)} favorites={favorites} onFavorite={id=>setFavorites(prev=>prev.includes(id)?prev.filter(item=>item!==id):[...prev,id])} onQuickAdd={setQuick}/></div>{quick&&<QuickAddModal key={quick.id} product={quick} onClose={()=>setQuick(null)} onAdd={(item,quantity,options)=>{addToCart(item,quantity,options);setQuick(null);setAdded(true);}}/>}</div>;
}
