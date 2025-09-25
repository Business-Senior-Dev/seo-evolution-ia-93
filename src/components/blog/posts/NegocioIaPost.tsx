
import React from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostIntroSection } from "@/components/blog/PostIntroSection";
import { negocioIaTableOfContents } from "./negocio-ia/tableOfContents";
import { ArticleContent } from "./negocio-ia/ArticleContent";

export function NegocioIaPost() {
  return (
    <>
      <PostHeader 
        title="Aprovecha la inteligencia artificial: Clave para el éxito de tu negocio | EvolucionaSEO"
        description="Descubre cómo implementar la inteligencia artificial en tu empresa para mejorar la eficiencia, personalizar la experiencia del cliente y potenciar tu crecimiento empresarial."
        keywords="inteligencia artificial negocios, IA empresas, implementación IA, ventajas inteligencia artificial, automatización empresarial, IA marketing, innovación empresarial"
        author="Ángel Ruz"
        canonicalUrl="https://evolucionaseo.es/blog/inteligencia-artificial-negocios"
      />

      <BlogLayout>
        <article className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-seo-darkBlue to-seo-dark opacity-90"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <PostIntroSection 
                category="INTELIGENCIA ARTIFICIAL"
                title="Aprovecha la inteligencia artificial: Clave para el éxito de tu negocio hoy"
                date="10 Mayo, 2025"
                author="Ángel Ruz"
                imageUrl="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//blog-negocio.ia.webp"
                imageAlt="Inteligencia artificial en los negocios"
                description="La inteligencia artificial se ha convertido en un elemento clave para el éxito empresarial. Su correcta implementación puede transformar las operaciones, mejorar la eficiencia y abrir nuevas oportunidades de negocio. Las empresas de todos los tamaños están comenzando a adoptarla. Este artículo explorará las múltiples formas en que la inteligencia artificial se puede integrar en un negocio. Se abordarán oportunidades, herramientas y estrategias que permiten maximizar su potencial y mejorar los resultados empresariales."
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-seo-dark/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                  <ArticleContent />
                </div>
                
                <div className="lg:col-span-1">
                  <TableOfContents items={negocioIaTableOfContents} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </BlogLayout>
    </>
  );
}
