import React, { useState, useEffect, useRef } from 'react';
import { MENU_PRODUCTS as PRODUCTS } from '../data/menuCatalog';
import ProductImage from './menu/ProductImage';
import { useNavigation } from '../context/NavigationContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const { navigate } = useNavigation();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) || item.ingredients.some(ingredient => ingredient.toLowerCase().includes(q)) ||
      (item.flavorVariants && item.flavorVariants.some((v) => v.toLowerCase().includes(q))) ||
      (item.flavorNotes && item.flavorNotes.some((n) => n.toLowerCase().includes(q)))
    );
  }).slice(0, 6);

  const handleSelectItem = (productId) => {
    navigate(`/product/${productId}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#061826]/60 backdrop-blur-sm transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative max-w-xl mx-auto bg-white rounded-3xl shadow-2xl border border-[#063BB6]/15 overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="p-5 border-b border-gray-100 flex items-center gap-3 bg-[#FFF9F1]">
            <span className="text-xl text-[#073BB8]">🔍</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search desserts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-[#10204A] placeholder-gray-400 font-medium focus:outline-none text-base sm:text-xl"
            />
            <button
              onClick={onClose}
              className="px-2.5 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              ESC
            </button>
          </div>

          {/* Quick suggestions */}
          <div className="px-5 py-2.5 bg-white flex items-center gap-2 overflow-x-auto text-xs border-b border-gray-100">
            <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Suggestions:</span>
            {['Koshari', 'Pistachio', 'Lotus', 'Nutella', 'New Arrivals'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag === 'New Arrivals' ? 'Arrivals' : tag)}
                className="px-3 py-1 bg-[#FFF9F1] hover:bg-[#073BB8]/10 text-[#073BB8] font-bold rounded-full transition-colors whitespace-nowrap cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-3 divide-y divide-gray-100">
            {filteredProducts.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm">
                No sweet treats found for "{query}". Try "Pistachio" or "Lotus"!
              </div>
            ) : (
              filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSelectItem(product.id)}
                  className="w-full text-left p-3 rounded-2xl hover:bg-[#FFF9F1] cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                      <ProductImage product={product} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-[#10204A] text-sm group-hover:text-[#063BB6]">
                          {product.name}
                        </h4>
                        {product.isSignature && (
                          <span className="text-[10px] bg-[#8DB936] text-white px-1.5 py-0.2 rounded-full font-bold">
                            Signature
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                    </div>
                  </div>

                  <div className="text-right pl-3 flex-shrink-0">
                    <span className="font-bold text-[#063BB6] text-sm">₹{product.price}</span>
                    <span className="block text-[10px] text-gray-400">View Details →</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
