import { ProductLabelPageContent } from "@/components/sections/ProductLabelPageContent";
import { PRODUCT_LABEL_DESIGN } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${PRODUCT_LABEL_DESIGN.title} | Alexander Moses`,
  description: PRODUCT_LABEL_DESIGN.description,
};

export default function ProductLabelDesignPage() {
  return <ProductLabelPageContent />;
}
