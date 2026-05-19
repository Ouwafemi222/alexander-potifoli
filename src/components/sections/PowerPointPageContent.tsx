"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import powerpointSlides from "@/data/powerpoint-design.json";
import { POWERPOINT_DESIGN } from "@/lib/constants";

export function PowerPointPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...POWERPOINT_DESIGN, imageAspect: "video" }}
      images={powerpointSlides}
    />
  );
}
