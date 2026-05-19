"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import magazineDesigns from "@/data/magazine-design.json";
import { MAGAZINE_DESIGN } from "@/lib/constants";

export function MagazinePageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...MAGAZINE_DESIGN, imageAspect: "cover" }}
      images={magazineDesigns}
    />
  );
}
