import { EbookPageContent } from "@/components/sections/EbookPageContent";
import { EBOOK_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${EBOOK_DESIGN.title} | Alexander Moses`,
  description: EBOOK_DESIGN.description,
};

export default function EbookDesignPage() {
  return <EbookPageContent />;
}
