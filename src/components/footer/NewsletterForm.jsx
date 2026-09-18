import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/footerData';
export default function NewsletterForm() {
 const instagram=SOCIAL_LINKS.find(link=>link.name==='Instagram');
 return <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7"><div className="flex items-center gap-2 mb-2"><Sparkles size={16} className="text-[#b9dc78]"/><h4 className="text-lg font-bold text-white">Sweet News Only.</h4></div><p className="text-sm text-blue-100 mb-4 leading-relaxed">Follow us for new desserts, branch updates and a little extra happiness.</p><a href={instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[#073BB8] font-bold text-sm">Follow on Instagram <ArrowRight size={16}/></a></div>;
}
