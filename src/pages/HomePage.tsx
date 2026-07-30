import React from 'react';
import { Hero } from '../components/Hero';
import { TrustedBar } from '../components/TrustedBar';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessSection } from '../components/ProcessSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { StatsSection } from '../components/StatsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { MapSection } from '../components/MapSection';

interface HomePageProps {
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      <Hero onOpenQuote={onOpenQuote} />
      <TrustedBar />
      <AboutSection />
      <ServicesSection onOpenQuote={onOpenQuote} />
      <WhyChooseUs />
      <ProcessSection />
      <FeaturedProjects onOpenQuote={onOpenQuote} />
      <StatsSection />
      <FAQSection />
      <ContactSection />
      <MapSection />
    </div>
  );
};
