"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import canvaTemplates from "@/data/canva-templates.json";
import { CANVA_TEMPLATE_DESIGN } from "@/lib/constants";

export function CanvaTemplatePageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...CANVA_TEMPLATE_DESIGN, imageAspect: "square" }}
      images={canvaTemplates}
    />
  );
}
