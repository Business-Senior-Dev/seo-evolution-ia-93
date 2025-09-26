import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Particles } from '@/components/ui/particles';
import { useParallax } from '@/hooks/useParallax';

export function EnhancedHeroSection() {
  const backgroundLayer1 = useParallax({ speed: 0.05, direction: 'both' });
  const backgroundLayer2 = useParallax({ speed: 0.1, direction: 'both' });
  const backgroundLayer3 = useParallax({ speed: 0.15, direction: 'both' });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div ref={backgroundLayer1} className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div ref={backgroundLayer2} className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tl from-accent/30 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div ref={backgroundLayer3} className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g className="animate-pulse">
            <path d="M100,400 Q300,200 600,400 T1100,400" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M50,500 Q250,300 550,500 T1050,500" stroke="url(#neural-gradient)" strokeWidth="1.5" fill="none" opacity="0.2"/>
            <path d="M150,300 Q350,500 650,300 T1150,300" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" opacity="0.15"/>
          </g>
        </svg>
      </div>

      {/* Particle Field */}
      <Particles count={80} speed={0.3} size={3} interactive={true} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in backdrop-blur-sm"
            data-magnetic
          >
            <span className="text-sm font-medium text-primary">✨ Senior AI/ML Engineer • 8+ Years Experience</span>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              AI/ML Engineer
            </span>
            <br />
            <span className="text-foreground/90 text-5xl md:text-7xl">& Senior Developer</span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
            I design intelligent AI systems, scalable backends, and creative apps — 
            delivering results with <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">8 years of proven experience</span>.
          </p>

          {/* CTA Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105 px-10 py-7 text-lg font-medium shadow-2xl shadow-primary/25"
              onClick={() => scrollToSection('#projects')}
              data-magnetic
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-md blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:bg-primary/10 px-10 py-7 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('#playground')}
              data-magnetic
            >
              Explore Playground
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-primary hover:bg-primary/10 px-10 py-7 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('#contact')}
              data-magnetic
            >
              Contact Me
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex items-center justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-muted/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 border border-primary/10 hover:border-primary/30"
              data-magnetic
            >
              <Github className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-muted/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 border border-primary/10 hover:border-primary/30"
              data-magnetic
            >
              <Linkedin className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a 
              href="mailto:felixbright0720@gmail.com"
              className="group p-4 rounded-full bg-muted/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 border border-primary/10 hover:border-primary/30"
              data-magnetic
            >
              <Mail className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>

          {/* Dynamic Stats Bar */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Shipped</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="text-2xl font-bold text-primary">1,000+</div>
              <div className="text-sm text-muted-foreground">Daily AI Calls</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            data-magnetic
          >
            <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
            <div className="p-2 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors">
              <ChevronDown className="h-5 w-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}