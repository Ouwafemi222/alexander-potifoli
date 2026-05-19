"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import brandIdentity from "@/data/brand-identity.json";
import { BRAND_IDENTITY_DESIGN } from "@/lib/constants";

export function BrandIdentityPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...BRAND_IDENTITY_DESIGN, imageAspect: "square" }}
      images={brandIdentity}
    />
  );
}
