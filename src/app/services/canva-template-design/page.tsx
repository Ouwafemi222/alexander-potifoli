import { CanvaTemplatePageContent } from "@/components/sections/CanvaTemplatePageContent";
import { CANVA_TEMPLATE_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${CANVA_TEMPLATE_DESIGN.title} | Alexander Moses`,
  description: CANVA_TEMPLATE_DESIGN.description,
};

export default function CanvaTemplateDesignPage() {
  return <CanvaTemplatePageContent />;
}
