import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Calendar, MapPin, Trophy } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer & Tech Lead',
      company: 'Global SaaS Solutions',
      location: 'Remote • Philippines',
      period: '2021 - Present',
      duration: '4 years',
      type: 'Full-time',
      description: 'Leading AI/ML initiatives for global SaaS platform serving 1M+ users. Architecting intelligent systems and mentoring engineering teams.',
      achievements: [
        'Led team of 8 engineers in developing production AI/ML systems',
        'Architected microservices handling 10M+ API calls daily',
        'Implemented ML models improving user engagement by 45%',
        'Reduced infrastructure costs by 30% through optimization',
        'Mentored 12+ junior developers and established best practices'
      ],
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'AWS', 'PostgreSQL', 'React Native'],
      highlights: ['Team Leadership', 'Architecture Ownership', 'ML Model Deployment', 'Cost Optimization']
    },
    {
      id: 2,
      title: 'AI/ML Specialist & Backend Engineer',
      company: 'FinTech Innovations Inc.',
      location: 'Manila, Philippines',
      period: '2019 - 2021',
      duration: '2 years',
      type: 'Full-time',
      description: 'Specialized in developing AI/ML solutions for financial services, focusing on fraud detection, risk assessment, and predictive analytics.',
      achievements: [
        'Built fraud detection system with 97% accuracy, preventing $2M+ losses',
        'Developed credit scoring models improving loan approval by 25%',
        'Created real-time risk assessment APIs processing 100K+ transactions daily',
        'Implemented automated trading algorithms with 78% success rate',
        'Designed scalable backend architecture supporting 5M+ users'
      ],
      technologies: ['Python', 'Scikit-learn', 'Django', 'Redis', 'MongoDB', 'Docker'],
      highlights: ['Fraud Detection', 'Real-time Systems', 'Financial ML', 'High-volume APIs']
    },
    {
      id: 3,
      title: 'Backend Engineer & Mobile Developer',
      company: 'Digital Solutions Co.',
      location: 'Cebu, Philippines',
      period: '2017 - 2019',
      duration: '2 years',
      type: 'Full-time',
      description: 'Full-stack development focusing on backend APIs and mobile applications. Built end-to-end solutions for diverse client base.',
      achievements: [
        'Developed 15+ mobile apps with combined 500K+ downloads',
        'Built REST APIs serving 50+ client applications',
        'Implemented offline-first mobile architecture achieving 99% uptime',
        'Optimized database queries reducing response time by 60%',
        'Established CI/CD pipelines improving deployment frequency by 300%'
      ],
      technologies: ['Java', 'Spring Boot', 'React Native', 'MySQL', 'Firebase', 'Git'],
      highlights: ['Mobile Development', 'API Design', 'Database Optimization', 'CI/CD Implementation']
    }
  ];

  const milestones = [
    { year: '2017', achievement: 'Started professional career as Backend Engineer' },
    { year: '2018', achievement: 'First mobile app reached 100K+ users' },
    { year: '2019', achievement: 'Transitioned to AI/ML specialization' },
    { year: '2020', achievement: 'Built first production ML model preventing $2M+ losses' },
    { year: '2021', achievement: 'Promoted to Senior Engineer & Tech Lead' },
    { year: '2022', achievement: 'Led team scaling to handle 10M+ daily API calls' },
    { year: '2023', achievement: 'Achieved 99.9% uptime across all systems' },
    { year: '2024', achievement: 'Mentored 12+ engineers, established ML best practices' }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Professional Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              8 Years of 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From backend engineer to AI/ML tech lead, here's how I've grown and the impact I've made
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="overflow-hidden border-border/40 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                          <Badge variant="secondary" className="ml-2">
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3">Core Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Milestones */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Career Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {milestone.achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}