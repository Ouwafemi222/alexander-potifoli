import { SocialMediaPageContent } from "@/components/sections/SocialMediaPageContent";
import { SOCIAL_MEDIA_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SOCIAL_MEDIA_DESIGN.title} | Alexander Moses`,
  description: SOCIAL_MEDIA_DESIGN.description,
};

export default function SocialMediaDesignPage() {
  return <SocialMediaPageContent />;
}
