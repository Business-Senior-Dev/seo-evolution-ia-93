
import React from "react";
import { OportunidadesSection } from "./sections/OportunidadesSection";
import { IntegracionSection } from "./sections/IntegracionSection";
import { AreasClaveSection } from "./sections/AreasClaveSection";
import { VentajasSection } from "./sections/VentajasSection";
import { DesafiosSection } from "./sections/DesafiosSection";
import { EstrategiasSection } from "./sections/EstrategiasSection";

export function ArticleContent() {
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <OportunidadesSection />
      <IntegracionSection />
      <AreasClaveSection />
      <VentajasSection />
      <DesafiosSection />
      <EstrategiasSection />
    </div>
  );
}
