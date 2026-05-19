"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import juiceLabels from "@/data/juice-labels.json";
import { JUICE_LABEL_DESIGN } from "@/lib/constants";

export function JuiceLabelPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...JUICE_LABEL_DESIGN, imageAspect: "square" }}
      images={juiceLabels}
    />
  );
}
