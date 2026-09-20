import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MENU_PRODUCTS, money } from '../data/menuCatalog';
import { useNavigation } from './NavigationContext';
import ProductImage from '../components/menu/ProductImage';
import './dessert-comparison.css';

const Context = createContext(null);
export const useDessertComparison = () => useContext(Context);
export function DessertComparisonProvider({ children }) {
  const [ids, setIds] = useState([]);
  const [open, setOpen] = useState(false);
  const { currentPath, navigate } = useNavigation();
  const dialog = useRef(null);
  const products = ids.map(id => MENU_PRODUCTS.find(product => product.id === id)).filter(Boolean);
  const visible = currentPath === '/menu' || currentPath.startsWith('/product/');
  const toggle = id => setIds(previous => previous.includes(id) ? previous.filter(value => value !== id) : previous.length < 3 ? [...previous, id] : previous);
  useEffect(() => { setOpen(false); }, [currentPath]);
  useEffect(() => {
    if (!open) return;
    const element = dialog.current, previous = document.activeElement, overflow = document.body.style.overflow;
    element.showModal(); document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [open]);
  return <Context.Provider value={{ ids, toggle }}>
    {children}
    {visible && ids.length > 0 && <aside className="compare-tray" aria-label="Dessert comparison"><span role="status">{ids.length}/3 desserts selected</span><button disabled={ids.length < 2} onClick={() => setOpen(true)}>Compare desserts</button><button onClick={() => setIds([])}>Clear</button></aside>}
    {open && createPortal(<dialog ref={dialog} className="compare-dialog" aria-labelledby="compare-title" onCancel={event => { event.preventDefault(); setOpen(false); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
      <header><div><small>FIND YOUR NEXT FAVOURITE</small><h2 id="compare-title">A spoonful of each?</h2><p>Compare flavours, ingredients, and starting prices.</p></div><button aria-label="Close dessert comparison" onClick={() => setOpen(false)}>×</button></header>
      <p className="compare-hint">Scroll across to compare all selected desserts →</p>
      <div className="compare-scroll" tabIndex={0} role="region" aria-label="Dessert comparison table"><table><thead><tr><th scope="col">Dessert</th>{products.map(product => <th scope="col" key={product.id}><ProductImage product={product}/>{product.name}</th>)}</tr></thead><tbody>
        <tr><th scope="row">Starting price</th>{products.map(product => <td key={product.id}>{money(product.price)}</td>)}</tr>
        <tr><th scope="row">Flavours & ingredients</th>{products.map(product => <td key={product.id}>{product.ingredients.join(', ')}</td>)}</tr>
        <tr><th scope="row">What to expect</th>{products.map(product => <td key={product.id}>{product.description}</td>)}</tr>
        <tr><th scope="row">Explore</th>{products.map(product => <td key={product.id}><button onClick={() => { setOpen(false); navigate(`/product/${product.id}`); }}>View {product.name}</button></td>)}</tr>
      </tbody></table></div><p className="compare-footnote">For allergen or dietary questions, please check with the branch team.</p>
    </dialog>, document.body)}
  </Context.Provider>;
}
