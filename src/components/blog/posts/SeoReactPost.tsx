
import React from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostIntroSection } from "@/components/blog/PostIntroSection";
import { seoReactTableOfContents } from "./seo-react/tableOfContents";
import { ArticleContent } from "./seo-react/ArticleContent";

export function SeoReactPost() {
  return (
    <>
      <PostHeader 
        title="El SEO de una página web en React: Claves para una optimización efectiva | EvolucionaSEO"
        description="Descubre las mejores prácticas y estrategias para optimizar el SEO en tus aplicaciones React. Aprende sobre renderizado, contenido y experiencia de usuario."
        keywords="SEO React, optimización web React, React SEO, posicionamiento React, renderizado SEO, estrategias SEO React"
        author="Ángel Ruz"
        canonicalUrl="https://evolucionaseo.es/blog/seo-react-claves-optimizacion"
      />

      <BlogLayout>
        <article className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-seo-darkBlue to-seo-dark opacity-90"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <PostIntroSection 
                category="SEO TÉCNICO"
                title="El SEO de una página web en React: Claves para una optimización efectiva"
                date="3 Mayo, 2025"
                author="Ángel Ruz"
                imageUrl="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//reactjs.webp"
                imageAlt="SEO en aplicaciones React"
                description="El SEO en aplicaciones React presenta retos específicos debido a su enfoque de renderizado. Comprender estos desafíos es esencial para implementar estrategias efectivas que mejoren la visibilidad en los motores de búsqueda. La elección de la técnica de renderizado adecuada, así como la optimización de contenido y metadatos, son factores clave. A lo largo de este artículo se explorarán las mejores prácticas y herramientas para lograr un SEO exitoso en React."
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-seo-dark/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                  <ArticleContent />
                </div>
                
                <div className="lg:col-span-1">
                  <TableOfContents items={seoReactTableOfContents} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </BlogLayout>
    </>
  );
}
