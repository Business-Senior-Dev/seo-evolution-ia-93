
import React from "react";
import { PostSection } from "@/components/blog/PostSection";
import { PostQuote } from "@/components/blog/PostQuote";

export function ExperienciaUsuarioSection() {
  return (
    <PostSection id="experiencia-usuario" title="Experiencia de usuario">
      <PostSection id="diseno-web" title="Diseño de página web y navegabilidad">
        <p className="text-gray-300 mb-6">
          Un diseño efectivo y una buena navegabilidad son esenciales para facilitar la interacción del usuario con la página.
        </p>
      </PostSection>

      <PostSection id="online-vs-fisica" title="Experiencia online vs física">
        <PostQuote
          text="La clave radica en ofrecer una experiencia que simule lo mejor de la compra física, pero con la comodidad y la rapidez que proporciona internet."
        />
      </PostSection>
    </PostSection>
  );
}
