"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import marketingMaterials from "@/data/marketing-materials.json";
import { MARKETING_MATERIALS_DESIGN } from "@/lib/constants";

export function MarketingMaterialsPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...MARKETING_MATERIALS_DESIGN, imageAspect: "square" }}
      images={marketingMaterials}
    />
  );
}
