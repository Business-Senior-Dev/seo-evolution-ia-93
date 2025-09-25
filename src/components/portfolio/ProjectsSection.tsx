import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AssistMind Voice AI',
      category: 'ai-ml',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      description: 'Intelligent voice assistant with natural language processing and real-time conversation capabilities.',
      problem: 'Businesses needed 24/7 intelligent customer voice agents that could handle complex inquiries naturally.',
      solution: 'Built FastAPI backend with Twilio voice APIs, integrated custom AI/ML pipeline with speech-to-text, NLP processing, and text-to-speech.',
      result: 'Production deployment serving 1,000+ daily calls with 95% customer satisfaction rate and 60% reduction in human agent workload.',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'Twilio', 'PostgreSQL', 'Docker'],
      links: {
        demo: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 2,
      title: 'TradingBot Pro',
      category: 'ai-ml',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
      description: 'AI-powered cryptocurrency trading bot with predictive analytics and risk management.',
      problem: 'Manual trading required constant market monitoring and emotional decision-making led to losses.',
      solution: 'Developed ML models for price prediction using LSTM networks, integrated with multiple exchange APIs, implemented automated risk management.',
      result: 'Achieved 34% ROI over 6 months with automated trading, managing $2M+ in trading volume with 78% win rate.',
      tech: ['Python', 'PyTorch', 'LSTM', 'Binance API', 'Redis', 'Celery'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'HealthTracker Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      description: 'Comprehensive health tracking app with AI-powered insights and offline-first architecture.',
      problem: 'Users needed a reliable health tracking solution that worked without internet connectivity.',
      solution: 'Built React Native app with offline-first architecture, local SQLite database, and cloud sync when connected.',
      result: '100K+ downloads, 4.8-star rating, 99.2% crash-free rate, featured on both App Store and Play Store.',
      tech: ['React Native', 'SQLite', 'Firebase', 'TypeScript', 'Redux'],
      links: {
        demo: '#',
        live: '#'
      }
    },
    {
      id: 4,
      title: 'E-commerce Analytics Platform',
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      description: 'Real-time analytics platform processing millions of e-commerce transactions with ML insights.',
      problem: 'E-commerce businesses needed real-time insights from massive transaction data for decision making.',
      solution: 'Built scalable microservices architecture with Kafka for real-time streaming, ML models for customer segmentation and sales forecasting.',
      result: 'Processing 5M+ transactions daily, 99.9% uptime, 40% improvement in conversion rates for clients using ML recommendations.',
      tech: ['Node.js', 'Kafka', 'MongoDB', 'Redis', 'Kubernetes', 'TensorFlow'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 5,
      title: 'Smart Document Processing',
      category: 'ai-ml',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop',
      description: 'OCR and NLP system for automated document processing and data extraction.',
      problem: 'Manual document processing was time-consuming and error-prone for insurance companies.',
      solution: 'Developed computer vision models for document classification, OCR for text extraction, and NLP for structured data extraction.',
      result: '95% accuracy in data extraction, 80% reduction in processing time, handling 10K+ documents daily.',
      tech: ['Python', 'OpenCV', 'Tesseract', 'spaCy', 'FastAPI', 'AWS S3'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 6,
      title: 'IoT Sensor Dashboard',
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop',
      description: 'Real-time IoT data visualization platform with predictive maintenance alerts.',
      problem: 'Manufacturing facilities needed real-time monitoring of equipment with predictive maintenance capabilities.',
      solution: 'Built real-time data pipeline with MQTT, time-series database, and ML models for anomaly detection and predictive maintenance.',
      result: '30% reduction in downtime, early detection of 85% of potential failures, monitoring 500+ sensors across 3 facilities.',
      tech: ['Python', 'MQTT', 'InfluxDB', 'Grafana', 'Scikit-learn', 'Docker'],
      links: {
        demo: '#',
        live: '#'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="group overflow-hidden border-border/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            {project.links.demo && (
              <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                <Play className="h-4 w-4 mr-2" />
                Demo
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/20">
                <Github className="h-4 w-4" />
              </Button>
            )}
            {project.links.live && (
              <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/20">
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {project.category.toUpperCase().replace('-', '/')}
          </Badge>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Problem-Solution-Result */}
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-red-500">Problem:</span>
            <p className="text-muted-foreground mt-1">{project.problem}</p>
          </div>
          <div>
            <span className="font-semibold text-blue-500">Solution:</span>
            <p className="text-muted-foreground mt-1">{project.solution}</p>
          </div>
          <div>
            <span className="font-semibold text-green-500">Result:</span>
            <p className="text-muted-foreground mt-1">{project.result}</p>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Real-World 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my favorite projects that showcase the intersection of AI, backend engineering, and mobile development
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}