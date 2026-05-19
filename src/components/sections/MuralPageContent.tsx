"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import muralDesigns from "@/data/mural-design.json";
import { MURAL_DESIGN } from "@/lib/constants";

export function MuralPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...MURAL_DESIGN, imageAspect: "video" }}
      images={muralDesigns}
    />
  );
}
