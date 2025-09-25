
import React from "react";
import { ImportanciaSection } from "./sections/ImportanciaSection";
import { ElementosSection } from "./sections/ElementosSection";
import { OptimizacionSection } from "./sections/OptimizacionSection";
import { EstrategiasSection } from "./sections/EstrategiasSection";
import { CasosExitoSection } from "./sections/CasosExitoSection";
import { ExperienciaUsuarioSection } from "./sections/ExperienciaUsuarioSection";
import { TendenciasSection } from "./sections/TendenciasSection";

export function ArticleContent() {
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <ImportanciaSection />
      <ElementosSection />
      <OptimizacionSection />
      <EstrategiasSection />
      <CasosExitoSection />
      <ExperienciaUsuarioSection />
      <TendenciasSection />
    </div>
  );
}
