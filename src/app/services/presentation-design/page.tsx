import { PresentationPageContent } from "@/components/sections/PresentationPageContent";
import { PRESENTATION_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${PRESENTATION_DESIGN.title} | Alexander Moses`,
  description: PRESENTATION_DESIGN.description,
};

export default function PresentationDesignPage() {
  return <PresentationPageContent />;
}
