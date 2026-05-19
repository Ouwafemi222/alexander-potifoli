import { BrandIdentityPageContent } from "@/components/sections/BrandIdentityPageContent";
import { BRAND_IDENTITY_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${BRAND_IDENTITY_DESIGN.title} | Alexander Moses`,
  description: BRAND_IDENTITY_DESIGN.description,
};

export default function BrandIdentityDesignPage() {
  return <BrandIdentityPageContent />;
}
