import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export default function FooterColumn({ title, links = [], onOpenFranchise, onOpenPolicy }) {
  const { navigate } = useNavigation();

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
    <div className="space-y-4">
      <h3
        className="text-sm font-black uppercase tracking-[0.15em] text-[#8DBA38]"
        style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
      >
        {title}
      </h3>

      <ul className="space-y-2.5">
        {links.map((item, idx) => {
          const isHighlight = item.highlight;

          return (
            <li key={idx}>
              <a
                href={item.path || '#'}
                onClick={(e) => handleLinkClick(e, item)}
                className={`group inline-flex items-center gap-1.5 text-sm transition-all duration-200 cursor-pointer ${
                  isHighlight
                    ? 'font-bold text-white hover:text-[#8DBA38]'
                    : 'text-blue-100/75 hover:text-white'
                }`}
              >
                {/* Micro pistachio dot hover indicator */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DBA38] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                  {item.label}
                </span>

                {item.badge && (
                  <span className="text-[10px] bg-[#8DBA38] text-white px-1.5 py-0.2 rounded font-black tracking-wider shadow-sm">
                    {item.badge}
                  </span>
                )}

                {item.isAction && (
                  <ArrowRight
                    size={13}
                    className="opacity-60 transition-transform duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                )}
              </a>

              {/* Subtext info for locations */}
              {item.subtext && (
                <p className="text-[11px] text-blue-200/60 pl-3 pt-0.5 leading-tight">
                  {item.subtext}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
