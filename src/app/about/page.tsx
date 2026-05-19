import { AboutPageContent } from "@/components/sections/AboutPageContent";
import { BRAND } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${BRAND.designerName} | Graphic Designer`,
  description: `Meet ${BRAND.name} — premium graphic designer. Book covers, presentations, labels, brand identity, and marketing design.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
