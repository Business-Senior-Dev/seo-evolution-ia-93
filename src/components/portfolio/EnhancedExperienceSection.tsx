import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface ExperienceItem {
  period: string;
  title: string;
  company?: string;
  location: string;
  type: 'work' | 'milestone';
  description: string;
  highlights: string[];
  technologies: string[];
  achievements?: string[];
}

export function EnhancedExperienceSection() {
  const experience: ExperienceItem[] = [
    {
      period: '2024-2025',
      title: 'Senior AI/ML + Backend + Apps',
      company: 'Global SaaS & Consulting',
      location: 'Philippines (Remote)',
      type: 'work',
      description: 'Leading AI/ML initiatives with focus on production deployments, voice AI at scale, and mobile integrations. SRE/observability ownership.',
      highlights: [
        'Scaling voice AI systems to handle 10k+ daily calls',
        'Mobile app integrations with ML backends',
        'SRE and observability leadership',
        'Global SaaS architecture ownership'
      ],
      technologies: ['Python', 'FastAPI', 'Kubernetes', 'React Native', 'AWS', 'Grafana'],
      achievements: [
        '10x system scalability improvement',
        '99.95% uptime across all services',
        'Led team of 5 engineers'
      ]
    },
    {
      period: '2022-2023',
      title: 'AI/ML Lead Focus',
      company: 'Multiple Production Systems',
      location: 'Philippines',
      type: 'milestone',
      description: 'Major breakthrough year with multiple production AI systems. Key 2023 wins in voice AI, forecasting, and trading models.',
      highlights: [
        'AssistMind Voice AI production deployment',
        'Revenue forecasting system (MAE ↓18%)',
        'AI-powered trading bot with risk controls',
        'MLOps pipeline standardization'
      ],
      technologies: ['PyTorch', 'TensorFlow', 'Twilio', 'FastAPI', 'TimescaleDB', 'Docker'],
      achievements: [
        '3 major AI systems in production',
        '$2M+ annual cost savings',
        'Industry recognition for ML innovation'
      ]
    },
    {
      period: '2019-2021',
      title: 'AI/ML Specialist',
      company: 'Research & Development',
      location: 'Philippines',
      type: 'work',
      description: 'NLP and forecasting R&D with first production deployments. Established CI/CD for ML training and inference pipelines.',
      highlights: [
        'NLP research to production pipeline',
        'Time-series forecasting models',
        'First ML production deployments',
        'MLOps CI/CD establishment'
      ],
      technologies: ['Scikit-learn', 'NLTK', 'Pandas', 'Flask', 'Jenkins', 'PostgreSQL'],
      achievements: [
        'First ML models in production',
        '85% prediction accuracy achieved',
        'ML team establishment'
      ]
    },
    {
      period: '2017-2019',
      title: 'Backend Engineer',
      company: 'Web Development & APIs',
      location: 'Philippines',
      type: 'work',
      description: 'Foundation years building robust CRUD systems, REST APIs, and SQL scaling. Established clean architecture principles.',
      highlights: [
        'Django REST API development',
        'SQL optimization and scaling',
        'Authentication and authorization systems',
        'Clean architecture implementation'
      ],
      technologies: ['Django', 'PostgreSQL', 'Redis', 'Nginx', 'Linux', 'Git'],
      achievements: [
        'Built 10+ production APIs',
        'Reduced query times by 70%',
        'Established coding standards'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20">
              Experience Timeline
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              8 Years of Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From backend foundations to AI/ML leadership, emphasizing production deployments and real-world impact
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

            {experience.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-1 z-10 ${
                  item.type === 'milestone' ? 'w-6 h-6' : 'w-4 h-4'
                }`}>
                  <div className={`w-full h-full rounded-full ${
                    item.type === 'milestone' 
                      ? 'bg-accent shadow-lg shadow-accent/50' 
                      : 'bg-primary shadow-lg shadow-primary/50'
                  }`}></div>
                  {item.type === 'milestone' && (
                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pr-0'
                }`}>
                  <Card 
                    className="group bg-muted/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500"
                    data-magnetic
                  >
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{item.period}</span>
                        </div>
                        {item.type === 'milestone' && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            Key Year
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      {item.company && (
                        <div className="flex items-center space-x-2 mb-3">
                          <TrendingUp className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-muted-foreground">{item.company}</span>
                        </div>
                      )}

                      <div className="flex items-center space-x-2 mb-4">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{item.location}</span>
                      </div>

                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-foreground">Key Highlights</h4>
                        <ul className="space-y-1">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-foreground">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {item.achievements && (
                        <div className="pt-4 border-t border-border/50">
                          <h4 className="font-medium mb-2 text-primary">Key Achievements</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="font-medium">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6 rounded-lg bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="p-6 rounded-lg bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">AI Models in Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}