import { BlogSection } from "@/components/sections/BlogSection";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog de SEO y Marketing Digital | EvolucionaSEO</title>
        <meta 
          name="description" 
          content="Descubre las últimas tendencias en SEO, marketing digital y estrategias de posicionamiento web con IA. Artículos y guías prácticas."
        />
        <meta 
          name="keywords" 
          content="blog SEO, marketing digital, posicionamiento web, tendencias SEO, IA marketing"
        />
        <meta name="author" content="EvolucionaSEO" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://evolucionaseo.es/blog" />
      </Helmet>

      <BlogLayout>
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 mb-4">
                <span className="text-xs font-medium text-seo-bright">RECURSOS SEO</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Nuestro <span className="text-gradient">Blog</span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-6">
                Descubre las últimas tendencias en SEO, estrategias de posicionamiento web y consejos para potenciar tu presencia digital.
              </p>
            </div>
          </div>
        </section>
        
        <BlogSection />
      </BlogLayout>
    </>
  );
};

export default Blog;
