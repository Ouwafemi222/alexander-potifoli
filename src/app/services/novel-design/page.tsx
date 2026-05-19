import { NovelPageContent } from "@/components/sections/NovelPageContent";
import { NOVEL_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${NOVEL_DESIGN.title} | Alexander Moses`,
  description: NOVEL_DESIGN.description,
};

export default function NovelDesignPage() {
  return <NovelPageContent />;
}
