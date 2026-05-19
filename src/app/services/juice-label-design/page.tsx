import { JuiceLabelPageContent } from "@/components/sections/JuiceLabelPageContent";
import { JUICE_LABEL_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${JUICE_LABEL_DESIGN.title} | Alexander Moses`,
  description: JUICE_LABEL_DESIGN.description,
};

export default function JuiceLabelDesignPage() {
  return <JuiceLabelPageContent />;
}
