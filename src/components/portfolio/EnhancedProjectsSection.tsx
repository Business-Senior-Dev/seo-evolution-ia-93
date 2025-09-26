import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, Zap, TrendingUp, Smartphone } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Backend' | 'Mobile' | 'Full-Stack';
  year: string;
  featured: boolean;
  description: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  links: {
    github?: string;
    demo?: string;
    case_study?: string;
  };
}

export function EnhancedProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 'assistmind-voice-ai',
      title: 'AssistMind Voice AI',
      category: 'AI/ML',
      year: '2023-2024',
      featured: true,
      description: 'Production-ready 24/7 intelligent voice support system',
      problem: 'Businesses needed 24/7 voice support with human-level intelligence and sub-second response times.',
      solution: 'Built FastAPI microservices, integrated Twilio voice flows, and deployed custom ML models for real-time inference.',
      result: 'Serving 1,000+ calls/day with median latency <400ms and 99.9% uptime.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'FastAPI', 'Twilio', 'PyTorch', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
      metrics: [
        { label: 'Daily Calls', value: '1,000+' },
        { label: 'Avg Latency', value: '<400ms' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Cost Reduction', value: '65%' }
      ],
      links: {
        github: '#',
        demo: '#',
        case_study: '#'
      }
    },
    {
      id: 'revenue-forecasting',
      title: 'Revenue Forecasting & Labor Scheduling',
      category: 'AI/ML',
      year: '2023',
      featured: true,
      description: 'ML-powered demand prediction and staffing optimization system',
      problem: 'Restaurant chain needed accurate demand prediction to optimize staffing and reduce labor costs.',
      solution: 'Feature pipelines, time-series models, inference API, and scheduling optimizer with real-time adjustments.',
      result: 'MAE ↓18%, labor cost ↓12%, actionable dashboards for 200+ locations.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI', 'Apache Airflow', 'TimescaleDB', 'Grafana'],
      metrics: [
        { label: 'MAE Improvement', value: '18%' },
        { label: 'Cost Reduction', value: '12%' },
        { label: 'Locations', value: '200+' },
        { label: 'Daily Predictions', value: '10K+' }
      ],
      links: {
        github: '#',
        case_study: '#'
      }
    },
    {
      id: 'ai-trading-bot',
      title: 'AI-Powered Trading Bot',
      category: 'AI/ML',
      year: '2022-2023',
      featured: true,
      description: 'Automated ML-signal execution with risk management',
      problem: 'Execute ML trading signals across multiple wallets with real-time risk controls and performance monitoring.',
      solution: 'Predictive models + real-time execution engine + advanced risk controls with multi-wallet orchestration.',
      result: 'Multi-wallet automation with live monitoring and profitable signal execution.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'WebSockets', 'Redis', 'MongoDB', 'Celery', 'REST APIs'],
      metrics: [
        { label: 'Wallets Managed', value: '25+' },
        { label: 'Trades/Day', value: '500+' },
        { label: 'Uptime', value: '99.8%' },
        { label: 'Latency', value: '<50ms' }
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      id: 'scalable-api-platform',
      title: 'Scalable API Platform',
      category: 'Backend',
      year: '2022-2023',
      featured: false,
      description: 'High-performance microservices platform handling millions of requests',
      problem: 'Legacy monolith couldn\'t handle growing traffic and needed modern architecture.',
      solution: 'Microservices with FastAPI, event-driven architecture, and comprehensive monitoring.',
      result: 'Handles 10M+ requests/day with 99.95% uptime and auto-scaling.',
      image: '/api/placeholder/600/400',
      technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes', 'Prometheus'],
      metrics: [
        { label: 'Requests/Day', value: '10M+' },
        { label: 'Uptime', value: '99.95%' },
        { label: 'Response Time', value: '<100ms' },
        { label: 'Services', value: '15' }
      ],
      links: {
        github: '#'
      }
    },
    {
      id: 'mobile-fitness-app',
      title: 'AI Fitness Coach Mobile App',
      category: 'Mobile',
      year: '2021-2022',
      featured: false,
      description: 'Personalized workout recommendations with 100k+ active users',
      problem: 'Users needed personalized fitness guidance that adapts to their progress and preferences.',
      solution: 'React Native app with ML recommendations engine and offline-first architecture.',
      result: '100k+ active users, 4.8★ rating, 99.2% crash-free sessions.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'TypeScript', 'MLKit', 'Firebase', 'Redux', 'SQLite'],
      metrics: [
        { label: 'Active Users', value: '100k+' },
        { label: 'App Rating', value: '4.8★' },
        { label: 'Crash-free Rate', value: '99.2%' },
        { label: 'Retention (30d)', value: '67%' }
      ],
      links: {
        demo: '#'
      }
    }
  ];

  const categories = ['All', 'AI/ML', 'Backend', 'Mobile', 'Full-Stack'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return <Brain className="h-4 w-4" />;
      case 'Backend': return <Zap className="h-4 w-4" />;
      case 'Mobile': return <Smartphone className="h-4 w-4" />;
      case 'Full-Stack': return <TrendingUp className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              AI/ML Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Production-ready AI systems and scalable applications that deliver measurable business impact
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                  data-magnetic
                >
                  {getCategoryIcon(category)}
                  <span className="ml-2">{category}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group bg-muted/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
                data-magnetic
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                      {project.year}
                    </Badge>
                  </div>
                  
                  {/* Placeholder for actual project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 4).map((metric, idx) => (
                      <div key={idx} className="text-center p-2 rounded-lg bg-background/50">
                        <div className="text-sm font-semibold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex space-x-2">
                      {project.links.github && (
                        <Button size="sm" variant="ghost" className="p-2" data-magnetic>
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button size="sm" variant="ghost" className="p-2" data-magnetic>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <Button size="sm" variant="outline" className="text-xs" data-magnetic>
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Projects */}
          {selectedCategory !== 'All' && filteredProjects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.filter(p => !p.featured).map((project, index) => (
                <Card 
                  key={project.id}
                  className="group bg-muted/20 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300"
                  data-magnetic
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {project.links.github && (
                          <Button size="sm" variant="ghost" className="p-2">
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                        {project.links.demo && (
                          <Button size="sm" variant="ghost" className="p-2">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}