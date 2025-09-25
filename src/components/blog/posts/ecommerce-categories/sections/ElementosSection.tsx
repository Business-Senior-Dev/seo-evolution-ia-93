
import React from "react";
import { PostSection } from "@/components/blog/PostSection";
import { PostList } from "@/components/blog/PostList";
import { PostHighlight } from "@/components/blog/PostHighlight";

export function ElementosSection() {
  return (
    <PostSection id="elementos-fundamentales" title="Elementos fundamentales de una ficha de producto perfecta">
      <PostHighlight type="info">
        Una ficha de producto óptima debe integrar distintos elementos que contribuyen a una experiencia de usuario satisfactoria y a la conversión efectiva.
      </PostHighlight>

      <PostSection id="elementos-descriptivos" title="Elementos descriptivos">
        <PostList
          items={[
            "Fotografías de producto de alta calidad desde múltiples ángulos",
            "Nombre del producto claro y conciso",
            "Descripción detallada y características técnicas"
          ]}
          type="ordered"
        />
      </PostSection>

      <PostSection id="elementos-comerciales" title="Elementos comerciales">
        <PostList
          items={[
            "Precio visible y botón de compra destacado",
            "Reseñas de usuarios y valoraciones",
            "Estrategias de cross-selling y venta cruzada"
          ]}
          type="ordered"
        />
      </PostSection>

      <PostSection id="elementos-logisticos" title="Elementos logísticos">
        <PostList
          items={[
            "Información de stock y disponibilidad",
            "Tiempos de entrega estimados",
            "Gastos de envío y condiciones"
          ]}
        />
      </PostSection>
    </PostSection>
  );
}
