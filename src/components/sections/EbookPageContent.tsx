"use client";

import { ServiceGalleryPageContent } from "@/components/sections/ServiceGalleryPageContent";
import bookCovers from "@/data/book-covers.json";
import { EBOOK_DESIGN } from "@/lib/constants";

export function EbookPageContent() {
  return (
    <ServiceGalleryPageContent
      service={{ ...EBOOK_DESIGN, imageAspect: "cover" }}
      images={bookCovers}
    />
  );
}
