
import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function CtaButton() {
  return (
    <Button asChild size="lg" className="bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90 transition-opacity">
      <a href="/agenda-consultoria">
        <Rocket className="mr-2" />
        <span>Quiero mejorar mi posicionamiento local</span>
      </a>
    </Button>
  );
}
