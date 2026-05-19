import { WebinarPageContent } from "@/components/sections/WebinarPageContent";
import { SLIDE_WEBINAR } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SLIDE_WEBINAR.title} | Alexander Moses`,
  description: SLIDE_WEBINAR.description,
};

export default function SlideWebinarDesignPage() {
  return <WebinarPageContent />;
}
