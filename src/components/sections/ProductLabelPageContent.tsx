"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import productLabels from "@/data/product-labels.json";
import { PRODUCT_LABEL_DESIGN } from "@/lib/constants";

export function ProductLabelPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...PRODUCT_LABEL_DESIGN, imageAspect: "square" }}
      images={productLabels}
    />
  );
}
