
import React from "react";
import { FundamentosSection } from "./sections/FundamentosSection";
import { ImportanciaSection } from "./sections/ImportanciaSection";
import { EstrategiasSection } from "./sections/EstrategiasSection";
import { OptimizacionSection } from "./sections/OptimizacionSection";
import { ExperienciaUsuarioSection } from "./sections/ExperienciaUsuarioSection";
import { SupervisionSection } from "./sections/SupervisionSection";

export function ArticleContent() {
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <FundamentosSection />
      <ImportanciaSection />
      <EstrategiasSection />
      <OptimizacionSection />
      <ExperienciaUsuarioSection />
      <SupervisionSection />
    </div>
  );
}
