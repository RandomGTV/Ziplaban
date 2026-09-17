import React, { useState } from 'react';
import Mascot from '../components/Mascot';
import { motion } from 'framer-motion';

export default function ContactPage({ onOpenFranchise }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFDF9] pt-28 pb-24 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header with Waving Mascot */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Mascot
            variant="waving"
            size="sm"
            speechText="Say Hello to Zip! ♡"
            speechPosition="top"
          />

          <span className="text-xs font-extrabold uppercase tracking-widest text-[#063BB6] bg-[#063BB6]/10 px-3.5 py-1.5 rounded-full inline-block">
            Customer Care & Outlets
          </span>

          <h1
            className="text-4xl sm:text-6xl font-black text-[#10204A] leading-tight"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            We’d Love to Hear From You!
          </h1>

          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Have a question about our clotted cream recipes, catering orders for weddings, or looking to partner?
          </p>
        </div>

        {/* 4 Interactive Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Instagram */}
          <div className="p-6 rounded-3xl bg-[#FFF9F1] border border-[#063BB6]/15 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-500 text-white flex items-center justify-center text-2xl mb-4 shadow-md">
                📸
              </div>
              <h3
                className="text-lg font-black text-[#10204A]"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                Instagram
              </h3>
              <p className="text-xs text-gray-500 mt-1">@zip_laban</p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                Watch daily viral reel pulls, customer stories, and store drop announcements.
              </p>
            </div>
            <a
              href="https://www.instagram.com/zip_laban/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full py-2.5 bg-[#063BB6] hover:bg-[#022B84] text-white text-xs font-bold rounded-xl text-center shadow-xs block"
            >
              Follow @zip_laban ↗
            </a>
          </div>

          {/* Card 2: WhatsApp Direct */}
          <div className="p-6 rounded-3xl bg-[#FFF9F1] border border-[#063BB6]/15 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8DB936] text-white flex items-center justify-center text-2xl mb-4 shadow-md">
                💬
              </div>
              <h3
                className="text-lg font-black text-[#10204A]"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                WhatsApp Direct
              </h3>
              <p className="text-xs text-gray-500 mt-1">+91 98460 77889</p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                Direct concierge for bulk orders, party tubs, and live store queue status.
              </p>
            </div>
            <a
              href="https://wa.me/919846077889"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full py-2.5 bg-[#8DB936] hover:bg-[#78a02a] text-white text-xs font-bold rounded-xl text-center shadow-xs block"
            >
              Chat on WhatsApp ↗
            </a>
          </div>

          {/* Card 3: Email Desk */}
          <div className="p-6 rounded-3xl bg-[#FFF9F1] border border-[#063BB6]/15 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#145DFF] text-white flex items-center justify-center text-2xl mb-4 shadow-md">
                ✉️
              </div>
              <h3
                className="text-lg font-black text-[#10204A]"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                Email Desk
              </h3>
              <p className="text-xs text-gray-500 mt-1">care@ziplaban.com</p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                For feedback, guest experience reports, and general brand queries.
              </p>
            </div>
            <a
              href="mailto:care@ziplaban.com"
              className="mt-6 w-full py-2.5 bg-white text-[#063BB6] border border-[#063BB6]/20 hover:bg-gray-50 text-xs font-bold rounded-xl text-center shadow-xs block"
            >
              Send an Email ↗
            </a>
          </div>

          {/* Card 4: Franchise Desk */}
          <div className="p-6 rounded-3xl bg-[#FFF9F1] border border-[#063BB6]/15 hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#CA8A04] text-white flex items-center justify-center text-2xl mb-4 shadow-md">
                🚀
              </div>
              <h3
                className="text-lg font-black text-[#10204A]"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                Franchise Desk
              </h3>
              <p className="text-xs text-gray-500 mt-1">expansion@ziplaban.com</p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                Join our journey across Kerala, Karnataka, and GCC countries.
              </p>
            </div>
            <button
              onClick={onOpenFranchise}
              className="mt-6 w-full py-2.5 bg-[#063BB6] hover:bg-[#022B84] text-white text-xs font-bold rounded-xl text-center shadow-xs cursor-pointer"
            >
              Franchise Portal ↗
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE MESSAGE FORM                                                  */}
        {/* ========================================================================= */}
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <h2
              className="text-2xl sm:text-3xl font-black text-[#10204A]"
              style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
            >
              Send Us a Note
            </h2>
            <p className="text-xs text-gray-500">
              Our hospitality team in Kottakkal typically responds within 2 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
              <span className="text-4xl">💌</span>
              <h3 className="text-lg font-bold text-emerald-800">Message Received!</h3>
              <p className="text-xs text-emerald-700">
                Thank you, {formData.name || 'friend'}! We’ll get back to you shortly with sweet news.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-800 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohammed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-3 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="mohammed@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-3 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98460 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-3 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">Topic</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-3 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                  >
                    <option>General Inquiries</option>
                    <option>Event & Wedding Catering</option>
                    <option>Store Experience Feedback</option>
                    <option>Franchise Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">Your Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us what's on your mind or describe your catering event..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FFF9F1] border border-gray-300 rounded-xl p-3 text-xs text-[#10204A] focus:outline-none focus:border-[#063BB6]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#063BB6] hover:bg-[#022B84] text-white font-extrabold text-sm rounded-2xl shadow-lg transition-all"
                style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
              >
                Send Message to Zip Laban →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
