import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Utensils, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { QUICK_HELP_ITEMS, CONTACT_CONFIG } from '../../data/contactData';

export default function QuickHelp({ onSelectSubject }) {
  const { navigate } = useNavigation();

  const handleAction = (item) => {
    if (item.actionType === 'support') {
      if (onSelectSubject) {
        onSelectSubject('Branch Support');
      }
      const formEl = document.getElementById('contact-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const getIcon = (id) => {
    switch (id) {
      case 'branch-help':
        return <MessageCircle className="w-6 h-6 text-[#073BB8]" />;
      case 'find-store':
        return <MapPin className="w-6 h-6 text-[#8DBA38]" />;
      case 'menu-questions':
        return <Utensils className="w-6 h-6 text-[#175EFF]" />;
      default:
        return <ArrowRight className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <section id="quick-help" className="py-16 md:py-20 bg-[#FFF8EE] relative select-none border-t border-b border-[#073BB8]/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#073BB8] bg-[#073BB8]/10 px-3.5 py-1.5 rounded-full inline-block">
            FAST TRACK
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#10204A]"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Need Something Quickly?
          </h2>
          <p className="text-sm text-gray-600 font-medium">
            Jump straight to the right place for fastest assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUICK_HELP_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 border border-[#073BB8]/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF8EE] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#073BB8]">
                    {item.tag}
                  </span>
                </div>

                <h3
                  className="text-lg font-black text-[#10204A] mb-2"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={() => handleAction(item)}
                  className="w-full py-3 px-4 rounded-xl bg-[#073BB8] hover:bg-[#032B82] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <span>{item.buttonText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
