import { StainedGlassPageContent } from "@/components/sections/StainedGlassPageContent";
import { STAINED_GLASS_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${STAINED_GLASS_DESIGN.title} | Alexander Moses`,
  description: STAINED_GLASS_DESIGN.description,
};

export default function StainedGlassDesignPage() {
  return <StainedGlassPageContent />;
}
