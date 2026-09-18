import { FranchiseInvitation } from '../components/FranchiseModal';
import React, { useState, useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactOptions from '../components/contact/ContactOptions';
import ContactForm from '../components/contact/ContactForm';
import QuickHelp from '../components/contact/QuickHelp';
import FAQAccordion from '../components/contact/FAQAccordion';
import SocialSection from '../components/contact/SocialSection';
import LocationsTeaser from '../components/contact/LocationsTeaser';
import BusinessCTA from '../components/contact/BusinessCTA';
import BottomContactCTA from '../components/contact/BottomContactCTA';
import MobileStickyBar from '../components/contact/MobileStickyBar';

export default function ContactPage({ onOpenFranchise }) {
  const [selectedSubject, setSelectedSubject] = useState('General Enquiry');

  // Scroll to top upon mounting route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#10204A] flex flex-col relative pb-16 md:pb-0">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Contact Options / Channels Section */}
      <ContactOptions onSelectSubject={handleSubjectSelect} />

      {/* 3. Form Section (with Instant Success State) */}
      <ContactForm
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
      />

      {/* 4. Quick Help Section */}
      <QuickHelp onSelectSubject={handleSubjectSelect} />

      {/* 5. FAQ Accordion */}
      <FAQAccordion />

      {/* 6. Social Community Showcase */}
      <SocialSection />

      {/* 7. Locations Teaser (Malappuram & Kottakkal) */}
      <LocationsTeaser />

      {/* 8. Business & Collaborations Editorial Block */}
      <FranchiseInvitation onOpen={onOpenFranchise} />
      <BusinessCTA onSelectSubject={handleSubjectSelect} />

      {/* 9. Bottom High-Conversion CTA */}
      <BottomContactCTA />

      {/* 10. Mobile Sticky Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
