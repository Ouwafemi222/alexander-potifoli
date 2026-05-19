"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import socialMediaDesigns from "@/data/social-media-design.json";
import { SOCIAL_MEDIA_DESIGN } from "@/lib/constants";

export function SocialMediaPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...SOCIAL_MEDIA_DESIGN, imageAspect: "square" }}
      images={socialMediaDesigns}
    />
  );
}
