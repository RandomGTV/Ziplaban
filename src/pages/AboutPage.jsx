import React from 'react';
import AboutHero from '../components/about/AboutHero';
import BrandStory from '../components/about/BrandStory';
import StoryTimeline from '../components/about/StoryTimeline';
import BrandRecipe from '../components/about/BrandRecipe';
import TrustStats from '../components/about/TrustStats';
import BrandValues from '../components/about/BrandValues';
import MascotSection from '../components/about/MascotSection';
import ProcessSteps from '../components/about/ProcessSteps';
import CommunityGrid from '../components/about/CommunityGrid';
import StoreExperience from '../components/about/StoreExperience';
import FutureSection from '../components/about/FutureSection';
import AboutCTA from '../components/about/AboutCTA';

export default function AboutPage() {
  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF8EE] text-[#10204A] selection:bg-[#073BB8] selection:text-white">
      {/* 1. Hero Section */}
      <AboutHero onDiscoverClick={scrollToStory} />

      {/* 2. Brand Story Section ("How ZIP LABAN Began") */}
      <BrandStory />

      {/* 3. Story Timeline Section ("From One Idea to Many Smiles") */}
      <StoryTimeline />

      {/* 4. The ZIP LABAN Recipe */}
      <BrandRecipe />

      {/* 5. Why People Love ZIP LABAN (Trust / Quality Section) */}
      <TrustStats />

      {/* 6. Brand Values Section ("What We Believe In") */}
      <BrandValues />

      {/* 7. Mascot Story Section ("Meet the Face of Happiness") */}
      <MascotSection />

      {/* 8. Behind the Dessert ("From Bowl to Smile") */}
      <ProcessSteps />

      {/* 9. Community Section ("Happiness Tastes Better Together") */}
      <CommunityGrid />

      {/* 10. Store Experience Section ("More Than a Dessert Shop") */}
      <StoreExperience />

      {/* 11. Our Future Section ("The Future Is Sweeter ♡") */}
      <FutureSection />

      {/* 12. Bottom CTA ("Ready for a Little More Happiness?") */}
      <AboutCTA />
    </div>
  );
}
