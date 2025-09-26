import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Server, Smartphone, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  years: string;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: Skill[];
  technologies: string[];
}

export function EnhancedSkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Artificial Intelligence & Machine Learning",
      description: "Primary focus with production-ready AI systems and models",
      skills: [
        { name: "Python", level: "Expert", years: "8y" },
        { name: "PyTorch", level: "Expert", years: "6y" },
        { name: "TensorFlow", level: "Advanced", years: "5y" },
        { name: "MLOps", level: "Advanced", years: "4y" },
      ],
      technologies: ["NLP", "Computer Vision", "Predictive Analytics", "Time-Series", "Recommenders", "Voice AI", "Trading Bots", "Forecasting", "Chatbots"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Engineering",
      description: "Scalable systems with microservices architecture",
      skills: [
        { name: "FastAPI", level: "Expert", years: "6y" },
        { name: "Node.js", level: "Advanced", years: "6y" },
        { name: "Django", level: "Advanced", years: "5y" },
        { name: "PostgreSQL", level: "Expert", years: "7y" },
      ],
      technologies: ["REST APIs", "GraphQL", "WebSockets", "Microservices", "Event-driven", "Performance", "Security", "Scalability"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile & App Development",
      description: "Native and cross-platform apps with 100k+ users",
      skills: [
        { name: "Kotlin/Java", level: "Advanced", years: "5y" },
        { name: "React Native", level: "Advanced", years: "4y" },
        { name: "Flutter", level: "Proficient", years: "3y" },
        { name: "App Architecture", level: "Expert", years: "6y" },
      ],
      technologies: ["Android", "iOS", "API Integration", "Offline-first", "Store Deployment", "99% Crash-free", "Performance"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "DevOps & Cloud Infrastructure",
      description: "Scalable deployments with modern cloud practices",
      skills: [
        { name: "AWS", level: "Advanced", years: "5y" },
        { name: "Docker/K8s", level: "Advanced", years: "4y" },
        { name: "CI/CD", level: "Expert", years: "6y" },
        { name: "Monitoring", level: "Advanced", years: "4y" },
      ],
      technologies: ["Lambda", "EC2", "RDS", "S3", "Serverless", "Load Balancing", "Security", "Observability"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-primary/10 text-primary border-primary/20';
      case 'Advanced': return 'bg-accent/10 text-accent border-accent/20';
      case 'Proficient': return 'bg-muted text-muted-foreground border-muted-foreground/20';
      default: return 'bg-muted text-muted-foreground border-muted-foreground/20';
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Technical Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              8+ years of experience across AI/ML, backend systems, mobile development, and cloud infrastructure
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="group bg-muted/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                data-magnetic
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{category.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Core Skills */}
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Core Skills</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between p-2 rounded-lg bg-background/50">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <div className="flex items-center space-x-1">
                            <Badge variant="outline" className={`text-xs px-2 py-0.5 ${getLevelColor(skill.level)}`}>
                              {skill.years}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Technologies & Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-primary/5 text-primary/80 hover:bg-primary/10 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Legend */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-6 p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-primary/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Expert (6-8y)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Advanced (4-6y)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <span className="text-sm text-muted-foreground">Proficient (2-4y)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}