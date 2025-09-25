import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { BlogSection } from '@/components/portfolio/BlogSection';
import { PlaygroundSection } from '@/components/portfolio/PlaygroundSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Ronel Mendoza | Senior AI/ML Engineer & Backend Developer</title>
        <meta 
          name="description" 
          content="Senior AI/ML Engineer with 8+ years experience building intelligent systems, scalable backends, and mobile apps. Based in Philippines, available worldwide."
        />
        <meta 
          name="keywords" 
          content="AI engineer, machine learning, backend developer, mobile app developer, Python, TensorFlow, React Native, Philippines"
        />
        <meta name="author" content="Ronel Mendoza" />
        <link rel="canonical" href="https://ronelmendoza.dev" />
      </Helmet>

      <div className="min-h-screen">
        <PortfolioHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <BlogSection />
          <PlaygroundSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;