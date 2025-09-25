
import React from "react";
import { EvolucionSection } from "./sections/EvolucionSection";
import { PosicionamientoSection } from "./sections/PosicionamientoSection";
import { EstrategiasSection } from "./sections/EstrategiasSection";
import { TendenciasSection } from "./sections/TendenciasSection";
import { HerramientasSection } from "./sections/HerramientasSection";

export function ArticleContent() {
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <EvolucionSection />
      <PosicionamientoSection />
      <EstrategiasSection />
      <TendenciasSection />
      <HerramientasSection />
    </div>
  );
}
