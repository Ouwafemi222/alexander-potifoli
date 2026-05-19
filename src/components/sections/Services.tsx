"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import bookCovers from "@/data/book-covers.json";
import brandIdentity from "@/data/brand-identity.json";
import canvaTemplates from "@/data/canva-templates.json";
import juiceLabels from "@/data/juice-labels.json";
import magazineDesigns from "@/data/magazine-design.json";
import muralDesigns from "@/data/mural-design.json";
import novelBooks from "@/data/novel-books.json";
import powerpointSlides from "@/data/powerpoint-design.json";
import presentationSlides from "@/data/presentation-design.json";
import productLabels from "@/data/product-labels.json";
import socialMediaDesigns from "@/data/social-media-design.json";
import stainedGlass from "@/data/stained-glass.json";
import webinarSlides from "@/data/webinar-slides.json";
import {
  BRAND_IDENTITY_DESIGN,
  CANVA_TEMPLATE_DESIGN,
  EBOOK_DESIGN,
  JUICE_LABEL_DESIGN,
  MAGAZINE_DESIGN,
  MURAL_DESIGN,
  NOVEL_DESIGN,
  POWERPOINT_DESIGN,
  PRESENTATION_DESIGN,
  PRODUCT_LABEL_DESIGN,
  SERVICES,
  SLIDE_WEBINAR,
  SOCIAL_MEDIA_DESIGN,
  STAINED_GLASS_DESIGN,
} from "@/lib/constants";
import { getServiceIcon } from "@/lib/icons";
import { easeOut, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type GalleryItem = { id: string; image: string };

type GalleryConfig = {
  items: GalleryItem[];
  cellAspect: "square" | "cover";
  countLabel: string;
  ctaText: string;
  href?: string;
  showBadge?: boolean;
};

const SERVICE_GALLERIES: Record<string, GalleryConfig> = {
  [CANVA_TEMPLATE_DESIGN.title]: {
    items: canvaTemplates,
    cellAspect: "square",
    countLabel: "sample templates",
    ctaText: "tap to explore",
    href: CANVA_TEMPLATE_DESIGN.href,
    showBadge: true,
  },
  [SLIDE_WEBINAR.title]: {
    items: webinarSlides,
    cellAspect: "square",
    countLabel: "sample slides",
    ctaText: "tap to explore",
    href: SLIDE_WEBINAR.href,
    showBadge: true,
  },
  [EBOOK_DESIGN.title]: {
    items: bookCovers,
    cellAspect: "cover",
    countLabel: "sample covers",
    ctaText: "tap to explore",
    href: EBOOK_DESIGN.href,
    showBadge: true,
  },
  [NOVEL_DESIGN.title]: {
    items: novelBooks,
    cellAspect: "cover",
    countLabel: "sample covers",
    ctaText: "tap to explore",
    href: NOVEL_DESIGN.href,
    showBadge: true,
  },
  [PRODUCT_LABEL_DESIGN.title]: {
    items: productLabels,
    cellAspect: "square",
    countLabel: "sample labels",
    ctaText: "tap to explore",
    href: PRODUCT_LABEL_DESIGN.href,
    showBadge: true,
  },
  [POWERPOINT_DESIGN.title]: {
    items: powerpointSlides,
    cellAspect: "square",
    countLabel: "sample slides",
    ctaText: "tap to explore",
    href: POWERPOINT_DESIGN.href,
    showBadge: true,
  },
  [PRESENTATION_DESIGN.title]: {
    items: presentationSlides,
    cellAspect: "square",
    countLabel: "sample slides",
    ctaText: "tap to explore",
    href: PRESENTATION_DESIGN.href,
    showBadge: true,
  },
  [JUICE_LABEL_DESIGN.title]: {
    items: juiceLabels,
    cellAspect: "square",
    countLabel: "sample labels",
    ctaText: "tap to explore",
    href: JUICE_LABEL_DESIGN.href,
    showBadge: true,
  },
  [MURAL_DESIGN.title]: {
    items: muralDesigns,
    cellAspect: "square",
    countLabel: "sample murals",
    ctaText: "tap to explore",
    href: MURAL_DESIGN.href,
    showBadge: true,
  },
  [STAINED_GLASS_DESIGN.title]: {
    items: stainedGlass,
    cellAspect: "square",
    countLabel: "sample designs",
    ctaText: "tap to explore",
    href: STAINED_GLASS_DESIGN.href,
    showBadge: true,
  },
  [MAGAZINE_DESIGN.title]: {
    items: magazineDesigns,
    cellAspect: "cover",
    countLabel: "sample spreads",
    ctaText: "tap to explore",
    href: MAGAZINE_DESIGN.href,
    showBadge: true,
  },
  [BRAND_IDENTITY_DESIGN.title]: {
    items: brandIdentity,
    cellAspect: "square",
    countLabel: "sample projects",
    ctaText: "tap to explore",
    href: BRAND_IDENTITY_DESIGN.href,
    showBadge: true,
  },
  [SOCIAL_MEDIA_DESIGN.title]: {
    items: socialMediaDesigns,
    cellAspect: "square",
    countLabel: "sample posts",
    ctaText: "tap to explore",
    href: SOCIAL_MEDIA_DESIGN.href,
    showBadge: true,
  },
};

const PREVIEW_COUNT = 4;

function ServiceGalleryPreview({
  items,
  cellAspect = "square",
  showBadge = false,
}: {
  items: GalleryItem[];
  cellAspect?: "square" | "cover";
  showBadge?: boolean;
}) {
  const aspectClass =
    cellAspect === "cover" ? "aspect-[2/3]" : "aspect-square";
  const preview = items.slice(0, PREVIEW_COUNT);

  return (
    <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden border-b border-border">
      <div className="grid grid-cols-4 gap-0.5">
        {preview.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.07,
              duration: 0.45,
              ease: easeOut,
            }}
            whileHover={{ scale: 1.04, zIndex: 10 }}
            className={cn(
              "group/cell relative overflow-hidden bg-bg-secondary",
              i === 0 ? `col-span-2 row-span-2 ${aspectClass}` : aspectClass
            )}
          >
            <Image
              src={item.image}
              alt=""
              fill
              className={cn(
                "transition-transform duration-700 ease-out group-hover/cell:scale-105",
                cellAspect === "cover"
                  ? "object-contain object-center"
                  : "object-cover"
              )}
              sizes="120px"
            />
            <motion.div
              className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover/cell:bg-accent/10"
              aria-hidden
            />
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent transition-opacity duration-500" />
      {showBadge && (
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground shadow-md transition-transform duration-300 group-hover:scale-105">
          View gallery
          <ArrowUpRight className="h-3 w-3" />
        </span>
      )}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Can Create For You"
          description="Premium design services tailored to help your brand stand out and grow."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = getServiceIcon(service.icon);
            const gallery = SERVICE_GALLERIES[service.title];
            const hasGallery = Boolean(gallery);
            const previewItems = gallery?.items.slice(0, PREVIEW_COUNT) ?? [];

            const cardInner = (
              <>
                {hasGallery && gallery && (
                  <ServiceGalleryPreview
                    items={previewItems}
                    cellAspect={gallery.cellAspect}
                    showBadge={gallery.showBadge}
                  />
                )}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                {!hasGallery && (
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg group-hover:shadow-accent/30"
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                )}
                {hasGallery && (
                  <motion.div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground"
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                )}
                <h3 className="font-heading text-lg font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                {hasGallery && gallery && (
                  <p className="mt-3 text-xs font-medium text-accent transition-opacity duration-300">
                    {gallery.items.length} {gallery.countLabel} — {gallery.ctaText}
                  </p>
                )}
              </>
            );

            const cardClass = cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-card p-6",
              "transition-[box-shadow,border-color,transform] duration-500 ease-out",
              "hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10",
              hasGallery && "p-6 pt-0"
            );

            const motionProps = {
              key: service.title,
              variants: {
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              },
            };

            const cardHover = hasGallery
              ? { y: -6, transition: { duration: 0.4, ease: easeOut } }
              : { y: -8, scale: 1.02 };

            if (gallery?.href) {
              return (
                <motion.div {...motionProps} whileHover={cardHover}>
                  <Link href={gallery.href} className={cardClass}>
                    {cardInner}
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.article
                {...motionProps}
                whileHover={cardHover}
                transition={{ duration: 0.4, ease: easeOut }}
                className={cardClass}
              >
                {cardInner}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
