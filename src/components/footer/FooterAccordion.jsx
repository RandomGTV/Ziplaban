import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

export default function FooterAccordion({ sections, onOpenFranchise, onOpenPolicy }) {
  const { navigate } = useNavigation();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const handleLinkClick = (e, item) => {
    e.preventDefault();

    if (item.isAction && item.action === 'franchise') {
      if (onOpenFranchise) onOpenFranchise();
      return;
    }

    if (item.isModal && item.modal) {
      if (onOpenPolicy) onOpenPolicy(item.modal);
      return;
    }

    if (item.path) {
      navigate(item.path);
      if (item.hash) {
        setTimeout(() => {
          const el = document.querySelector(item.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full divide-y divide-white/10 border-y border-white/10">
      {Object.entries(sections).map(([key, section]) => {
        const isOpen = openSection === key;

        return (
          <div key={key} className="overflow-hidden">
            {/* Accordion Header */}
            <button
              type="button"
              onClick={() => toggleSection(key)}
              aria-expanded={isOpen}
              aria-controls={`footer-accordion-${key}`}
              className="w-full min-h-[52px] py-3.5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBA38] cursor-pointer"
            >
              <span
                className="text-base font-black tracking-wide text-white uppercase"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                {section.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-blue-200"
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`footer-accordion-${key}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <ul className="pb-4 pt-1 space-y-3 pl-1">
                    {section.links.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.path || '#'}
                          onClick={(e) => handleLinkClick(e, item)}
                          className={`min-h-[38px] flex items-center gap-2 text-sm transition-colors cursor-pointer ${
                            item.highlight
                              ? 'text-[#8DBA38] font-bold'
                              : 'text-blue-100/80 hover:text-white'
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[10px] bg-[#8DBA38] text-white px-1.5 py-0.2 rounded font-black">
                              {item.badge}
                            </span>
                          )}
                          {item.isAction && <ArrowRight size={13} />}
                        </a>
                        {item.subtext && (
                          <p className="text-[11px] text-blue-200/60 pl-2">
                            {item.subtext}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
