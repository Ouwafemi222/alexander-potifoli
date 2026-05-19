"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import presentationSlides from "@/data/presentation-design.json";
import { PRESENTATION_DESIGN } from "@/lib/constants";

export function PresentationPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...PRESENTATION_DESIGN, imageAspect: "video" }}
      images={presentationSlides}
    />
  );
}
