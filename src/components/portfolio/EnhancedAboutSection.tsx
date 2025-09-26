import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function EnhancedAboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Building AI that matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group" data-magnetic>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-muted/50 to-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 group-hover:border-primary/20 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold">Ronel Mendoza</h3>
                  <p className="text-muted-foreground">Philippines 🇵🇭</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="text-xs">Senior Engineer</Badge>
                    <Badge variant="secondary" className="text-xs">8+ Years</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm Ronel Mendoza, a senior engineer from the Philippines with 8 years of experience. 
                  My passion is <span className="text-primary font-semibold">Artificial Intelligence and Machine Learning</span> — 
                  building models and systems that solve real problems.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Alongside AI, I specialize in backend systems and mobile applications, always aiming for 
                  clean architecture, high performance, and meaningful results. I believe great software 
                  blends <span className="text-accent font-semibold">technology with creativity</span>.
                </p>
              </div>

              {/* Highlights */}
              <Card className="bg-muted/30 backdrop-blur-sm border-primary/10 group hover:border-primary/20 transition-all duration-300" data-magnetic>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-primary">Key Highlights</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">8+ years of professional experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Production-ready AI/ML & backend systems for global clients</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Strong research → prototype → production background</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Current Focus */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10">
                <h4 className="font-semibold mb-2 text-foreground">Current Focus</h4>
                <p className="text-muted-foreground">
                  Leading AI/ML initiatives with a focus on production deployments, 
                  scalable inference systems, and real-world impact. Specialized in 
                  voice AI, forecasting models, and intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}