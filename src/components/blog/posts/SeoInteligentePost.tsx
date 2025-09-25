
import React from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostIntroSection } from "@/components/blog/PostIntroSection";
import { seoInteligenteTableOfContents } from "./seo-inteligente/tableOfContents";
import { ArticleContent } from "./seo-inteligente/ArticleContent";

export function SeoInteligentePost() {
  return (
    <>
      <PostHeader 
        title="SEO Inteligente: Cómo la IA acelera tu posicionamiento | EvolucionaSEO"
        description="Descubre cómo la inteligencia artificial está transformando el SEO y mejorando el posicionamiento en Google. Aprende las últimas estrategias de IA para potenciar tus ventas."
        keywords="SEO inteligente, IA SEO, posicionamiento web, inteligencia artificial SEO, optimización web IA"
        author="Ángel Ruz"
        canonicalUrl="https://evolucionaseo.es/blog/seo-inteligente-ia"
      />

      <BlogLayout>
        <article className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <PostIntroSection 
                category="SEO INTELIGENTE"
                title="SEO Inteligente: Cómo la IA acelera tu posicionamiento en Google y potencia tus ventas al por mayor"
                date="26 Abril, 2025"
                author="Ángel Ruz"
                imageUrl="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//seo-local-evolucionaseo.webp"
                imageAlt="SEO Inteligente con IA"
                description="La inteligencia artificial está transformando el SEO, facilitando la optimización de sitios web y mejorando la clasificación en Google. Este avance permite un análisis más preciso y una personalización más profunda en las estrategias de posicionamiento."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <ArticleContent />
                </div>
                
                <div className="md:col-span-1">
                  <TableOfContents items={seoInteligenteTableOfContents} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </BlogLayout>
    </>
  );
}
