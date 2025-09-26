import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  image?: string;
}

export function EnhancedBlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 'low-latency-ai-inference',
      title: 'Designing Low-Latency AI Inference with FastAPI',
      excerpt: 'Deep dive into optimizing ML model serving for production with sub-400ms response times. Covers async processing, connection pooling, and caching strategies.',
      category: 'AI/ML',
      date: '2024-01-15',
      readTime: '8 min',
      featured: true,
      tags: ['FastAPI', 'ML Serving', 'Performance', 'Production']
    },
    {
      id: 'mlops-that-scales',
      title: 'From Research to Production: MLOps That Scales',
      excerpt: 'Building robust ML pipelines that handle model versioning, A/B testing, and continuous deployment. Real-world lessons from scaling to 1M+ predictions daily.',
      category: 'MLOps',
      date: '2023-12-08',
      readTime: '12 min',
      featured: true,
      tags: ['MLOps', 'CI/CD', 'Model Deployment', 'Scalability']
    },
    {
      id: 'ai-forecasting-2023',
      title: 'AI Forecasting in 2023: Lessons That Cut MAE by 18%',
      excerpt: 'How we improved forecasting accuracy through feature engineering, ensemble methods, and real-time model updates in a production restaurant chain.',
      category: 'AI/ML',
      date: '2023-11-20',
      readTime: '10 min',
      featured: true,
      tags: ['Forecasting', 'Time Series', 'Feature Engineering', 'Production']
    },
    {
      id: 'voice-ai-architecture',
      title: 'Building Voice AI That Actually Works',
      excerpt: 'Architecture patterns for reliable voice AI systems using Twilio, real-time inference, and fault-tolerant design.',
      category: 'AI/ML',
      date: '2023-10-12',
      readTime: '9 min',
      featured: false,
      tags: ['Voice AI', 'Architecture', 'Twilio', 'Real-time']
    },
    {
      id: 'mobile-ml-integration',
      title: 'Integrating ML Models in React Native Apps',
      excerpt: 'Best practices for mobile ML integration including on-device inference, offline capabilities, and performance optimization.',
      category: 'Mobile',
      date: '2023-09-05',
      readTime: '7 min',
      featured: false,
      tags: ['React Native', 'ML Integration', 'Mobile', 'Performance']
    },
    {
      id: 'kubernetes-ml-serving',
      title: 'ML Model Serving with Kubernetes at Scale',
      excerpt: 'Production-ready strategies for deploying and scaling ML models using Kubernetes, including auto-scaling and resource management.',
      category: 'DevOps',
      date: '2023-08-18',
      readTime: '11 min',
      featured: false,
      tags: ['Kubernetes', 'ML Serving', 'DevOps', 'Scaling']
    }
  ];

  const categories = ['All', 'AI/ML', 'MLOps', 'Mobile', 'DevOps'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'bg-primary/10 text-primary border-primary/20';
      case 'MLOps': return 'bg-accent/10 text-accent border-accent/20';
      case 'Mobile': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'DevOps': return 'bg-green-500/10 text-green-500 border-green-500/20';
      default: return 'bg-muted text-muted-foreground border-muted-foreground/20';
    }
  };

  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog & Insights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
              Technical Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives into AI/ML, backend architecture, and lessons learned from production deployments
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Featured Articles</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group bg-muted/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden cursor-pointer"
                  data-magnetic
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Post Image/Header */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <Badge variant="secondary" className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                    
                    {/* Article icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-10">
                      <BookOpen />
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Meta info */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group/button text-primary hover:text-primary/80 p-0"
                        data-magnetic
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/button:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-foreground">Recent Posts</h3>
              <Button variant="outline" data-magnetic>
                View All Articles
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="group bg-muted/20 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 cursor-pointer"
                  data-magnetic
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className={`text-xs ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt.slice(0, 120)}...
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs p-0 text-primary">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 p-8 inline-block">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Want to collaborate or discuss ideas?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  I'm always interested in discussing AI/ML projects, architecture challenges, 
                  and sharing knowledge with the community.
                </p>
                <Button 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105"
                  data-magnetic
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}