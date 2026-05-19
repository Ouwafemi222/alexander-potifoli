import { PowerPointPageContent } from "@/components/sections/PowerPointPageContent";
import { POWERPOINT_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${POWERPOINT_DESIGN.title} | Alexander Moses`,
  description: POWERPOINT_DESIGN.description,
};

export default function PowerPointDesignPage() {
  return <PowerPointPageContent />;
}
