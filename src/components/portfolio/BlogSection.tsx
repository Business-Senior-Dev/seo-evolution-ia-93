import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Designing Low-Latency AI Inference with FastAPI',
      excerpt: 'Learn how to build high-performance AI APIs that can handle thousands of requests per second while maintaining sub-100ms response times.',
      category: 'AI/ML',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      tags: ['FastAPI', 'Machine Learning', 'Performance', 'Python']
    },
    {
      id: 2,
      title: 'Time-Series Forecasting That Scales',
      excerpt: 'A comprehensive guide to building production-ready forecasting systems using LSTM networks and handling millions of data points.',
      category: 'AI/ML',
      readTime: '12 min read',
      publishDate: '2024-01-08',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['LSTM', 'Time Series', 'TensorFlow', 'Scalability']
    },
    {
      id: 3,
      title: 'Building Offline-First Android Apps',
      excerpt: 'Master the art of creating mobile apps that work flawlessly even without internet connection using modern offline-first patterns.',
      category: 'Mobile',
      readTime: '10 min read',
      publishDate: '2024-01-01',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      tags: ['Android', 'SQLite', 'Offline-First', 'Mobile Architecture']
    },
    {
      id: 4,
      title: 'Microservices Authentication at Scale',
      excerpt: 'Implement secure, scalable authentication across microservices using JWT, OAuth2, and distributed session management.',
      category: 'Backend',
      readTime: '15 min read',
      publishDate: '2023-12-28',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      tags: ['Microservices', 'Authentication', 'JWT', 'Security']
    },
    {
      id: 5,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how AI is transforming software development workflows and what it means for engineers in the next decade.',
      category: 'Insights',
      readTime: '6 min read',
      publishDate: '2023-12-20',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      tags: ['AI', 'Future Tech', 'Software Development', 'Industry Trends']
    },
    {
      id: 6,
      title: 'Optimizing Database Queries for High Traffic',
      excerpt: 'Advanced techniques for database optimization that helped reduce query times by 80% in production systems.',
      category: 'Backend',
      readTime: '11 min read',
      publishDate: '2023-12-15',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
      tags: ['Database', 'PostgreSQL', 'Performance', 'Optimization']
    }
  ];

  const categories = ['All', 'AI/ML', 'Backend', 'Mobile', 'Insights'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <Card className="group overflow-hidden border-border/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {post.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.publishDate)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </div>
        </div>
        
        <CardTitle className="group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
        >
          Read Article
          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="blog" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Technical Blog
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Insights & 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Tutorials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge about AI/ML, backend engineering, mobile development, and industry insights
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-primary/10 hover:border-primary transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden border-border/40 hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(blogPosts[0].publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-fit bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}