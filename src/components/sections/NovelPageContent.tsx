"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import novelBooks from "@/data/novel-books.json";
import { NOVEL_DESIGN } from "@/lib/constants";

export function NovelPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...NOVEL_DESIGN, imageAspect: "cover" }}
      images={novelBooks}
    />
  );
}
