
import React from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostIntroSection } from "@/components/blog/PostIntroSection";
import { localSeoTableOfContents } from "./local-seo-2025/tableOfContents";
import { ArticleContent } from "./local-seo-2025/ArticleContent";

export function LocalSEO2025Post() {
  return (
    <>
      <PostHeader 
        title="El futuro del SEO Local en 2025 | EvolucionaSEO"
        description="Descubre las últimas tendencias y estrategias para dominar el SEO local y Google Maps en 2025. Una guía completa para mejorar tu visibilidad local."
        keywords="SEO local, Google Maps, estrategias SEO 2025, posicionamiento local, visibilidad online"
        author="Ángel Ruz"
        canonicalUrl="https://evolucionaseo.es/blog/futuro-seo-local-2025"
      />

      <BlogLayout>
        <article className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <PostIntroSection 
                category="SEO LOCAL"
                title="El futuro del SEO Local en 2025: Estrategias imprescindibles"
                date="22 Abril, 2025"
                author="Ángel Ruz"
                imageUrl="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//blog-evoluciona-seo-ia.webp"
                imageAlt="El futuro del SEO Local en 2025"
                description="El SEO local es fundamental para los negocios que buscan destacar en su área geográfica. En 2025, las estrategias de SEO local deben adaptarse a los cambios en el comportamiento de los consumidores y las nuevas tecnologías de búsqueda. Dominar Google Maps se vuelve esencial para mejorar la visibilidad y atraer clientes. La optimización de perfiles y el uso de herramientas adecuadas son claves para el éxito en este ámbito en constante evolución."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <ArticleContent />
                </div>
                
                <div className="md:col-span-1">
                  <TableOfContents items={localSeoTableOfContents} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </BlogLayout>
    </>
  );
}
