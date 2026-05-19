"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import webinarSlides from "@/data/webinar-slides.json";
import { SLIDE_WEBINAR } from "@/lib/constants";

export function WebinarPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...SLIDE_WEBINAR, imageAspect: "video" }}
      images={webinarSlides}
    />
  );
}
