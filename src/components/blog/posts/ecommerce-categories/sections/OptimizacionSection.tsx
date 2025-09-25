
import React from "react";
import { PostSection } from "@/components/blog/PostSection";
import { PostList } from "@/components/blog/PostList";
import { PostQuote } from "@/components/blog/PostQuote";

export function OptimizacionSection() {
  return (
    <PostSection id="optimizacion-seo" title="Optimización SEO para fichas de producto">
      <PostSection id="palabras-clave" title="Uso de palabras clave relevantes">
        <PostList
          items={[
            "Investigar términos y frases relacionadas con el producto",
            "Incluir palabras clave de manera natural en títulos y descripciones",
            "Utilizar herramientas SEO para analizar la competencia"
          ]}
        />
      </PostSection>

      <PostSection id="descripciones" title="Creación de descripciones únicas">
        <PostQuote
          text="Las descripciones de productos deben ser originales y atractivas, evitando copias de otras fuentes. Un contenido único no solo proporciona valor al usuario, sino que también evita penalizaciones por contenido duplicado."
        />
      </PostSection>

      <PostSection id="imagenes" title="Optimización de imágenes">
        <PostList
          items={[
            "Comprimir imágenes sin sacrificar calidad",
            "Utilizar etiquetas ALT descriptivas",
            "Mostrar productos desde diferentes ángulos"
          ]}
        />
      </PostSection>
    </PostSection>
  );
}
