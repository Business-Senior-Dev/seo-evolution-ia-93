import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Server, 
  Smartphone, 
  Cloud, 
  Code, 
  Database,
  Cpu,
  Zap
} from 'lucide-react';

export function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'aiml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Building intelligent systems that solve real-world problems',
      skills: [
        { name: 'Python', years: 8, level: 95 },
        { name: 'TensorFlow', years: 6, level: 90 },
        { name: 'PyTorch', years: 5, level: 88 },
        { name: 'Scikit-learn', years: 6, level: 92 },
        { name: 'Transformers', years: 4, level: 85 },
        { name: 'OpenAI APIs', years: 3, level: 88 },
      ],
      domains: ['NLP', 'Computer Vision', 'Predictive Analytics', 'Time-Series Forecasting', 'Recommenders'],
      tools: ['MLflow', 'Docker', 'Kubernetes', 'AWS SageMaker', 'GCP Vertex AI', 'Azure ML'],
      achievements: ['Voice AI systems', 'Trading bots', 'Forecasting models', 'Intelligent assistants']
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      description: 'Scalable, secure, and high-performance server systems',
      skills: [
        { name: 'Python', years: 8, level: 95 },
        { name: 'Node.js', years: 6, level: 88 },
        { name: 'Java', years: 5, level: 82 },
        { name: 'TypeScript', years: 4, level: 85 },
        { name: 'FastAPI', years: 4, level: 92 },
        { name: 'Django', years: 6, level: 90 },
      ],
      domains: ['REST APIs', 'GraphQL', 'WebSockets', 'Microservices', 'Event-driven systems'],
      tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Express', 'Spring Boot'],
      achievements: ['99.9% uptime systems', 'API security', 'Performance optimization', 'Scalability']
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      description: 'Native and cross-platform mobile applications',
      skills: [
        { name: 'Java/Kotlin', years: 6, level: 88 },
        { name: 'React Native', years: 4, level: 85 },
        { name: 'Flutter', years: 3, level: 80 },
        { name: 'Android SDK', years: 6, level: 90 },
        { name: 'iOS/Swift', years: 3, level: 75 },
        { name: 'Firebase', years: 5, level: 88 },
      ],
      domains: ['Native Android', 'Cross-platform', 'Offline-first apps', 'API integration'],
      tools: ['Android Studio', 'Xcode', 'Expo', 'App Store deployment', 'Play Store'],
      achievements: ['100k+ user apps', '99% crash-free rate', 'Store featured apps', 'Offline capabilities']
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      description: 'Scalable infrastructure and deployment automation',
      skills: [
        { name: 'AWS', years: 5, level: 88 },
        { name: 'Docker', years: 5, level: 90 },
        { name: 'Kubernetes', years: 4, level: 82 },
        { name: 'GitHub Actions', years: 4, level: 85 },
        { name: 'Terraform', years: 3, level: 78 },
        { name: 'Monitoring', years: 4, level: 85 },
      ],
      domains: ['CI/CD', 'Serverless', 'Load balancing', 'Security hardening'],
      tools: ['Lambda', 'EC2', 'RDS', 'S3', 'Jenkins', 'GitLab CI', 'Grafana', 'Prometheus'],
      achievements: ['Auto-scaling systems', 'Zero-downtime deploys', 'Cost optimization', 'Security compliance']
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; years: number; level: number } }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.years}y</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              8 years of hands-on experience across the full spectrum of modern software development
            </p>
          </div>

          <Tabs defaultValue="aiml" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-muted/50">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
                    <span className="sm:hidden">{category.title.split(' ')[0][0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Skills & Tools */}
                    <div className="space-y-6">
                      <Card 
                        className="overflow-hidden transition-all duration-300 hover:shadow-xl border-border/40"
                        onMouseEnter={() => setHoveredCard(category.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-2xl">{category.title}</CardTitle>
                          </div>
                          <p className="text-muted-foreground">{category.description}</p>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          {category.skills.map((skill, index) => (
                            <SkillBar key={skill.name} skill={skill} />
                          ))}
                        </CardContent>
                      </Card>
                    </div>

                    {/* Right Column - Domains & Achievements */}
                    <div className="space-y-6">
                      {/* Domains */}
                      <Card className="border-border/40">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Code className="h-5 w-5 text-primary" />
                            Specializations
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {category.domains.map((domain) => (
                              <Badge key={domain} variant="secondary" className="hover:bg-primary/20 transition-colors">
                                {domain}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Tools */}
                      <Card className="border-border/40">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Database className="h-5 w-5 text-primary" />
                            Tools & Technologies
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {category.tools.map((tool) => (
                              <Badge key={tool} variant="outline" className="hover:border-primary transition-colors">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Achievements */}
                      <Card className="border-border/40">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            Key Achievements
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {category.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-center gap-2 text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
}