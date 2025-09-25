
import { useParams, Link } from "react-router-dom";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { LocalSEO2025Post } from "@/components/blog/posts/LocalSEO2025Post";
import { EcommerceCategoriesPost } from "@/components/blog/posts/EcommerceCategoriesPost";
import { SeoInteligentePost } from "@/components/blog/posts/SeoInteligentePost";
import { SeoReactPost } from "@/components/blog/posts/SeoReactPost";
import { NegocioIaPost } from "@/components/blog/posts/NegocioIaPost";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (slug === "futuro-seo-local-2025") {
    return <LocalSEO2025Post />;
  }
  
  if (slug === "categorias-fichas-producto-ecommerce") {
    return <EcommerceCategoriesPost />;
  }

  if (slug === "seo-inteligente-ia") {
    return <SeoInteligentePost />;
  }

  if (slug === "seo-react-claves-optimizacion") {
    return <SeoReactPost />;
  }
  
  if (slug === "inteligencia-artificial-negocios") {
    return <NegocioIaPost />;
  }
  
  return (
    <BlogLayout>
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold mb-4">Blog no encontrado</h1>
        <p className="mb-8">Lo sentimos, el artículo que buscas no existe.</p>
        <Link to="/blog" className="bg-seo-blue px-6 py-3 rounded-md text-white hover:bg-seo-blue/80 transition-colors">
          Volver al blog
        </Link>
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
