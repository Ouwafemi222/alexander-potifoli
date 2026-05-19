import { MagazinePageContent } from "@/components/sections/MagazinePageContent";
import { MAGAZINE_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${MAGAZINE_DESIGN.title} | Alexander Moses`,
  description: MAGAZINE_DESIGN.description,
};

export default function MagazineDesignPage() {
  return <MagazinePageContent />;
}
