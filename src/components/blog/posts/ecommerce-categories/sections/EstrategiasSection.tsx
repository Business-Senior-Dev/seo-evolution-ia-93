
import React from "react";
import { PostSection } from "@/components/blog/PostSection";
import { PostList } from "@/components/blog/PostList";

export function EstrategiasSection() {
  return (
    <PostSection id="estrategias-marketing" title="Estrategias de ecommerce marketing">
      <PostSection id="redes-sociales" title="Integración con redes sociales">
        <PostList
          items={[
            "Publicaciones atractivas con imágenes de calidad",
            "Uso de hashtags relevantes",
            "Interacción activa con usuarios"
          ]}
        />
      </PostSection>

      <PostSection id="email-marketing" title="Email marketing y contenidos">
        <PostList
          items={[
            "Newsletters informativas con novedades",
            "Segmentación de listas de correo",
            "Contenido educativo y guías"
          ]}
        />
      </PostSection>
    </PostSection>
  );
}
