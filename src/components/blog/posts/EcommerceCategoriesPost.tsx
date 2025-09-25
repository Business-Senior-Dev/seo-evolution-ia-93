
import React from "react";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostIntroSection } from "@/components/blog/PostIntroSection";
import { ecommerceCategoriesTableOfContents } from "./ecommerce-categories/tableOfContents";
import { ArticleContent } from "./ecommerce-categories/ArticleContent";

export function EcommerceCategoriesPost() {
  return (
    <BlogLayout>
      <PostHeader
        title="Categorías y fichas de producto perfectas: el secreto SEO de los eCommerce más exitosos en España"
        description="Descubre cómo optimizar las fichas de producto de tu eCommerce para mejorar el SEO y aumentar las conversiones. Guía completa con ejemplos y casos de éxito."
        keywords="SEO eCommerce, fichas de producto, optimización SEO, categorías eCommerce, conversión ventas"
        author="Ángel Ruz"
        canonicalUrl="https://evolucionaseo.es/blog/categorias-fichas-producto-ecommerce"
      />

      <article className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-seo-gradient opacity-80"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <PostIntroSection
              category="SEO eCommerce"
              title="Categorías y fichas de producto perfectas: el secreto SEO de los eCommerce más exitosos en España"
              date="22 abril, 2025"
              author="Ángel Ruz"
              imageUrl="https://cmrznpsgpgduvmxsmfwa.supabase.co/storage/v1/object/public/imagenes-evoluciona//ecommerce-evoluciona-seo-blog.webp"
              imageAlt="SEO para fichas de producto en eCommerce"
              description="Las categorías y fichas de producto son elementos clave en el comercio electrónico. Una ficha bien estructurada no solo informa al cliente, sino que también puede mejorar la visibilidad en los motores de búsqueda. A través de una adecuada optimización, se puede aumentar la tasa de conversión y las ventas. Es fundamental entender cada componente que forma parte de una ficha de producto perfecta para alcanzar el éxito en el eCommerce."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <ArticleContent />
              </div>
              
              <div className="md:col-span-1">
                <TableOfContents items={ecommerceCategoriesTableOfContents} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
}
