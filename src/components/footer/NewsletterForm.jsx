import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setErrorMsg('');
    }, 600);
  };

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles size={16} className="text-[#8DBA38]" />
        <h4
          className="text-lg font-black text-white tracking-wide"
          style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
        >
          Sweet News Only.
        </h4>
      </div>

      <p className="text-xs sm:text-sm text-blue-100/80 mb-4 leading-relaxed">
        New drops, store updates and a little extra happiness.
      </p>

      {status === 'success' ? (
        <div className="py-3 px-4 bg-[#8DBA38]/20 border border-[#8DBA38]/40 rounded-xl flex items-center gap-2.5 text-[#8DBA38] text-xs sm:text-sm font-bold animate-fadeIn">
          <Check size={16} className="shrink-0" />
          <span>You’re in! Sweet updates coming your way ♡</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Your email address"
                aria-label="Your email address"
                disabled={status === 'submitting'}
                className="w-full h-11 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200/50 text-sm focus:outline-none focus:border-[#8DBA38] focus:bg-white/15 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              aria-label="Join newsletter"
              className="group h-11 px-5 rounded-xl bg-[#8DBA38] hover:bg-[#7ba42f] text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0 disabled:opacity-50"
            >
              <span>{status === 'submitting' ? 'Joining...' : 'Join'}</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>

          {status === 'error' && (
            <p className="text-xs text-rose-300 font-medium pl-1">
              {errorMsg}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
