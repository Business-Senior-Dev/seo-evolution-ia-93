
import React from "react";
import { PostSection } from "@/components/blog/PostSection";
import { PostList } from "@/components/blog/PostList";
import { PostHighlight } from "@/components/blog/PostHighlight";

export function TendenciasSection() {
  return (
    <PostSection id="tendencias-futuras" title="Futuras tendencias">
      <PostSection id="pim" title="Product information management">
        <PostHighlight type="info">
          La gestión de información de productos (PIM) se volverá cada vez más central en la estrategia de ecommerce, permitiendo centralizar y gestionar toda la información de productos de manera eficiente.
        </PostHighlight>
      </PostSection>

      <PostSection id="innovaciones" title="Innovaciones tecnológicas">
        <PostList
          items={[
            "Inteligencia artificial para personalización",
            "Realidad aumentada para visualización de productos",
            "Chatbots y asistentes virtuales"
          ]}
        />
      </PostSection>
    </PostSection>
  );
}
