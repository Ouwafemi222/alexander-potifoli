import { MarketingMaterialsPageContent } from "@/components/sections/MarketingMaterialsPageContent";
import { MARKETING_MATERIALS_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${MARKETING_MATERIALS_DESIGN.title} | Alexander Moses`,
  description: MARKETING_MATERIALS_DESIGN.description,
};

export default function MarketingMaterialsPage() {
  return <MarketingMaterialsPageContent />;
}
