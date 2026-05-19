import { MuralPageContent } from "@/components/sections/MuralPageContent";
import { MURAL_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${MURAL_DESIGN.title} | Alexander Moses`,
  description: MURAL_DESIGN.description,
};

export default function MuralDesignPage() {
  return <MuralPageContent />;
}
