"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import stainedGlass from "@/data/stained-glass.json";
import { STAINED_GLASS_DESIGN } from "@/lib/constants";

export function StainedGlassPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...STAINED_GLASS_DESIGN, imageAspect: "square" }}
      images={stainedGlass}
    />
  );
}
