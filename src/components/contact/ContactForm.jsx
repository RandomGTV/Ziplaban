import EnquiryDelivery from '../EnquiryDelivery';
import { CONTACT_CONFIG } from '../../data/contactData';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from '../../context/MotionPreference';
import { Send, CheckCircle2, AlertCircle, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

const SUBJECT_OPTIONS = [
  'General Enquiry',
  'Branch Support',
  'Store Enquiry',
  'Business Collaboration',
  'Feedback',
  'Other',
];

export default function ContactForm({ selectedSubject, onSubjectChange }) {
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: selectedSubject || 'General Enquiry',
    message: '',
    agreeConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if parent updates selectedSubject (e.g. clicking Collab card)
  React.useEffect(() => {
    if (selectedSubject) {
      setFormData((prev) => ({ ...prev, subject: selectedSubject }));
    }
  }, [selectedSubject]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a little more detail (at least 10 characters).';
    }

    if (!formData.agreeConsent) newErrors.agreeConsent = 'Please agree to be contacted about this enquiry.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length) document.getElementById(Object.keys(newErrors)[0])?.focus();
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: 'General Enquiry',
      message: '',
      agreeConsent: false,
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact-form" className="py-20 md:py-28 bg-white relative scroll-mt-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: The Form / Success State (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFF8EE] rounded-3xl p-8 sm:p-12 border border-[#073BB8]/15 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* SUCCESS STATE */
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-10 sm:py-14 space-y-6"
                >
                  {/* Celebrating Mascot & Badge */}
                  <div className="relative inline-block mx-auto">
                    <div className="w-24 h-24 rounded-full bg-emerald-100 border-4 border-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 size={48} className="text-emerald-600" />
                    </div>
                    <motion.div
                      animate={{ rotate: [-6, 6, -6], scale: [1, 1.08, 1] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="absolute -top-2 -right-4 bg-[#8DBA38] text-white px-2.5 py-0.5 rounded-full text-xs font-black shadow-md"
                    >
                      Sweet! ✨
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="text-3xl sm:text-4xl font-black text-[#10204A]"
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      Your message is ready. ♡
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed font-medium">
                      Thanks for reaching out, <span className="font-bold text-[#073BB8]">{formData.fullName || 'friend'}</span>.
                      Choose a delivery option below. The email draft lets you send a copy from your email app.
                    </p>
                  </div>

                  <a className="inline-flex px-6 py-3 rounded-full bg-[#073BB8] text-white font-bold" href={`mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`)}`}>Open email draft →</a>
<EnquiryDelivery enquiry={{type:'contact',name:formData.fullName,email:formData.email,phone:formData.phone,subject:formData.subject,message:formData.message}}/>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => navigate('/')}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#073BB8] hover:bg-[#032B82] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-md transition-all duration-200 cursor-pointer"
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      Back to Home →
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 bg-white text-gray-700 hover:text-[#073BB8] border border-gray-300 font-bold text-xs sm:text-sm rounded-2xl transition-all duration-200 cursor-pointer"
                    >
                      Write Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* THE FORM */
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#073BB8] bg-[#073BB8]/10 px-3.5 py-1 rounded-full inline-block">
                      DROP US A LINE
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#10204A]"
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      Send Us a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      Have a thought, question, catering inquiry, or craving? Fill out the details below.
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 mb-5">We’ll prepare an email with your details. Send it from your email app, or write directly to <a className="underline" href={`mailto:${CONTACT_CONFIG.email}`}>{CONTACT_CONFIG.email}</a>.</p>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-bold text-gray-700 mb-1.5">
                          Full Name <span className="text-[#073BB8]">*</span>
                        </label>
                        <input
                          id="fullName" maxLength={120} autoComplete="name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: null });
                          }}
                          placeholder="e.g. Fatima Ali"
                          className={`w-full bg-white border ${
                            errors.fullName ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-300 focus:border-[#073BB8] focus:ring-4 focus:ring-[#073BB8]/10'
                          } rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#10204A] placeholder-gray-400 transition-all outline-none`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} />
                            <span id="fullName-error" role="alert">{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5">
                          Email Address <span className="text-[#073BB8]">*</span>
                        </label>
                        <input
                          id="email" maxLength={254} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: null });
                          }}
                          placeholder="name@example.com"
                          className={`w-full bg-white border ${
                            errors.email ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-300 focus:border-[#073BB8] focus:ring-4 focus:ring-[#073BB8]/10'
                          } rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#10204A] placeholder-gray-400 transition-all outline-none`}
                        />
                        {errors.email && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} />
                            <span id="email-error" role="alert">{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Subject Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1.5">
                          Phone Number <span className="text-gray-400 text-[10px] font-normal">(Optional)</span>
                        </label>
                        <input
                          id="phone" maxLength={40} autoComplete="tel"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 Mobile number"
                          className="w-full bg-white border border-gray-300 focus:border-[#073BB8] focus:ring-4 focus:ring-[#073BB8]/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#10204A] placeholder-gray-400 transition-all outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-bold text-gray-700 mb-1.5">
                          Subject <span className="text-[#073BB8]">*</span>
                        </label>
                        <select
                          id="subject" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined}
                          value={formData.subject}
                          onChange={(e) => {
                            setFormData({ ...formData, subject: e.target.value });
                            if (onSubjectChange) onSubjectChange(e.target.value);
                          }}
                          className="w-full bg-white border border-gray-300 focus:border-[#073BB8] focus:ring-4 focus:ring-[#073BB8]/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#10204A] font-semibold transition-all outline-none cursor-pointer"
                        >
                          {SUBJECT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1.5">
                        Message <span className="text-[#073BB8]">*</span>
                      </label>
                      <textarea
                        id="message" maxLength={3000} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: null });
                        }}
                        placeholder="Tell us what’s on your mind, your event requirements, or feedback..."
                        className={`w-full bg-white border ${
                          errors.message ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-300 focus:border-[#073BB8] focus:ring-4 focus:ring-[#073BB8]/10'
                        } rounded-2xl p-4 text-xs sm:text-sm text-[#10204A] placeholder-gray-400 transition-all outline-none resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[11px] font-semibold text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} />
                          <span id="message-error" role="alert">{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Checkbox Consent */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        id="agreeConsent" aria-invalid={!!errors.agreeConsent} aria-describedby={errors.agreeConsent ? 'consent-error' : undefined}
                        type="checkbox"
                        checked={formData.agreeConsent}
                        onChange={(e) => setFormData({ ...formData, agreeConsent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded text-[#073BB8] focus:ring-[#073BB8] border-gray-300 cursor-pointer"
                      />
                      <label htmlFor="agreeConsent" className="text-xs text-gray-600 leading-snug cursor-pointer">
                        I agree to be contacted regarding this enquiry. We respect your privacy.
                      </label>
                    </div>

                    {errors.agreeConsent && <p id="consent-error" role="alert" className="text-xs text-red-600">{errors.agreeConsent}</p>}
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#073BB8] hover:bg-[#032B82] text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 disabled:opacity-75"
                      style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Prepare Email</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Mascot & Store Visual Atmosphere Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Atmosphere Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#073BB8] to-[#032B82] text-white p-8 border border-[#073BB8]/20 shadow-2xl">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#175EFF]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8DBA38]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full text-white backdrop-blur-sm">
                    ALWAYS WELCOME
                  </span>
                  <Heart size={18} className="text-[#8DBA38] fill-[#8DBA38]" />
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-black text-white leading-snug"
                  style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                >
                  “Every Message Brings a Smile.”
                </h3>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Whether you have an inquiry about our slow-churned clotted cream recipes, wish to book our dessert truck for a wedding, or have ideas for exciting collaborations, our hospitality team will connect with you promptly.
                </p>

                {/* Mascot Illustration Preview */}
                <div className="pt-2 flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/15">
                  <div className="w-16 h-16 rounded-xl bg-white p-1 flex-shrink-0 shadow-md">
                    <img
                      src="/images/zip_boy_mascot.png"
                      alt="Zip Mascot"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span
                      className="text-base sm:text-lg font-bold text-white block leading-tight"
                      style={{ fontFamily: 'var(--font-hand, "Caveat", cursive)' }}
                    >
                      Zip is waiting to say hello! ♡
                    </span>
                    <span className="text-[11px] text-blue-200">
                      Handcrafted happiness, made fresh daily in Kerala.
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-blue-200 font-medium">
                  <span>📍 Malappuram & Kottakkal</span>
                  <span className="text-[#8DBA38] font-bold">Open Daily</span>
                </div>
              </div>
            </div>

            {/* Direct Quick Chat Pill */}
            <div className="p-5 rounded-3xl bg-[#FFF8EE] border border-[#073BB8]/10 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8DBA38] text-white flex items-center justify-center text-lg shadow-sm">
                  💬
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#10204A]">Need immediate help?</h4>
                  <p className="text-[11px] text-gray-500">Jump onto WhatsApp for fast replies.</p>
                </div>
              </div>
              <a
                href="https://wa.me/?text=Hi%20Zip%20Laban!%20I%20have%20a%20quick%20question..."
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-[#8DBA38] hover:bg-[#7ba62f] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
