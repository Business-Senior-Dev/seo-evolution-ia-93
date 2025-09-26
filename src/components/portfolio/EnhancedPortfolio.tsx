import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useCursor } from '@/hooks/useCursor';
import { EnhancedHeader } from './EnhancedHeader';
import { EnhancedHeroSection } from './EnhancedHeroSection';
import { EnhancedAboutSection } from './EnhancedAboutSection';
import { EnhancedSkillsSection } from './EnhancedSkillsSection';
import { EnhancedProjectsSection } from './EnhancedProjectsSection';
import { EnhancedExperienceSection } from './EnhancedExperienceSection';
import { EnhancedBlogSection } from './EnhancedBlogSection';
import { ContactSection } from './ContactSection';
import { Helmet } from 'react-helmet';

const EnhancedPortfolio = () => {
  useCursor({ enabled: true, trailLength: 10, glowSize: 24 });

  return (
    <ThemeProvider>
      <Helmet>
        <title>Ronel Mendoza — Senior AI/ML & Backend Engineer (8+ Years)</title>
        <meta 
          name="description" 
          content="Senior AI/ML Engineer and Backend Developer with 8+ years delivering intelligent systems, scalable APIs, and mobile apps. Projects, blog, and playground."
        />
        <meta 
          name="keywords" 
          content="AI engineer, machine learning, backend developer, mobile app developer, Python, TensorFlow, React Native, Philippines, voice AI, forecasting"
        />
        <meta name="author" content="Ronel Mendoza" />
        <link rel="canonical" href="https://ronelmendoza.dev" />
        <meta property="og:title" content="Ronel Mendoza — Senior AI/ML Engineer" />
        <meta property="og:description" content="8+ years experience building intelligent AI systems, scalable backends, and mobile apps" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <EnhancedHeader />
        <main>
          <EnhancedHeroSection />
          <EnhancedAboutSection />
          <EnhancedSkillsSection />
          <EnhancedProjectsSection />
          <EnhancedExperienceSection />
          <EnhancedBlogSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default EnhancedPortfolio;