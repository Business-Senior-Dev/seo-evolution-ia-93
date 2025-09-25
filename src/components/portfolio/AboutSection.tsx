import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  const highlights = [
    "8+ years of professional experience",
    "Delivered production-ready AI/ML and backend systems for global clients", 
    "Strong background in research, prototyping, and real-world deployments"
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Crafting the Future with 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> AI & Code</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/40">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary-foreground">RM</span>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 animate-pulse">
                    <Badge className="bg-primary text-primary-foreground">AI/ML Expert</Badge>
                  </div>
                  <div className="absolute -bottom-4 -left-4 animate-pulse" style={{ animationDelay: '1s' }}>
                    <Badge variant="secondary">8+ Years</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm <span className="text-primary font-semibold">Ronel Mendoza</span>, a senior engineer from the Philippines with 8 years of experience. My passion is <span className="text-primary font-semibold">Artificial Intelligence and Machine Learning</span> — building models and systems that solve real problems.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Alongside AI, I specialize in <span className="text-foreground font-medium">backend systems</span> and <span className="text-foreground font-medium">mobile applications</span>, always aiming for clean architecture, high performance, and meaningful results.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I believe great software blends <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">technology with creativity</span>.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Highlights</h3>
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">App Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}