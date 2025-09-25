
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TableOfContents, TableOfContentsItem } from "@/components/blog/TableOfContents";

type BlogPostProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  author?: string;
};

const BlogPost = ({ title, excerpt, date, category, image, slug, author = "Ángel Ruz" }: BlogPostProps) => {
  return (
    <div className="bg-seo-card rounded-xl overflow-hidden hover-scale transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`Imagen del artículo: ${title}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-seo-blue/80 rounded-full text-xs font-medium text-white">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-400 text-sm">{date}</p>
          <p className="text-gray-400 text-sm">Por: {author}</p>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        <Link 
          to={`/blog${slug}`} 
          className="inline-flex items-center text-seo-bright hover:underline group"
        >
          Leer más
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export function BlogSection() {
  const blogPosts: BlogPostProps[] = [
    {
      title: "Aprovecha la inteligencia artificial: Clave para el éxito de tu negocio hoy",
      excerpt: "Descubre cómo implementar la inteligencia artificial en tu empresa para mejorar la eficiencia, personalizar la experiencia del cliente y potenciar tu crecimiento empresarial.",
      date: "10 Mayo, 2025",
      category: "Inteligencia Artificial",
      author: "Ángel Ruz",
      image: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//blog-negocio.ia.webp",
      slug: "/inteligencia-artificial-negocios"
    },
    {
      title: "El SEO de una página web en React: Claves para una optimización efectiva",
      excerpt: "Descubre las mejores prácticas y técnicas para optimizar el SEO en tus aplicaciones React. Guía completa sobre renderizado, contenido y estrategias para mejorar el posicionamiento.",
      date: "3 Mayo, 2025",
      category: "SEO Técnico",
      author: "Ángel Ruz",
      image: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//reactjs.webp",
      slug: "/seo-react-claves-optimizacion"
    },
    {
      title: "SEO Inteligente: Cómo la IA acelera tu posicionamiento en Google y potencia tus ventas al por mayor",
      excerpt: "Descubre cómo la inteligencia artificial está revolucionando el SEO y acelera el posicionamiento web. Aprende estrategias avanzadas para usar IA en tu marketing digital.",
      date: "26 Abril, 2025",
      category: "SEO Inteligente",
      author: "Ángel Ruz",
      image: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//seo-local-evolucionaseo.webp",
      slug: "/seo-inteligente-ia"
    },
    {
      title: "Categorías y fichas de producto perfectas: el secreto SEO de los eCommerce más exitosos en España",
      excerpt: "Descubre cómo optimizar las fichas de producto de tu eCommerce para mejorar el SEO y aumentar las conversiones. Guía completa con ejemplos y casos de éxito.",
      date: "22 Abril, 2025",
      category: "SEO eCommerce",
      author: "Ángel Ruz",
      image: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//ecommerce-evoluciona-seo-blog.webp",
      slug: "/categorias-fichas-producto-ecommerce"
    },
    {
      title: "El futuro del SEO Local en 2025: Estrategias imprescindibles",
      excerpt: "Descubre las últimas tendencias y estrategias para dominar el SEO local y Google Maps en 2025. Una guía completa para mejorar tu visibilidad local.",
      date: "22 Abril, 2025",
      category: "SEO Local",
      author: "Ángel Ruz",
      image: "https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//blog-evoluciona-seo-ia.webp",
      slug: "/futuro-seo-local-2025"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">          
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
