"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND } from "@/lib/constants";
import { easeOut, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

export type GalleryImage = {
  id: string;
  image: string;
  title: string;
};

export type ServiceGalleryConfig = {
  title: string;
  headline: string;
  description: string;
  intro: string;
  features: readonly string[];
  cta: string;
  galleryTitle: string;
  galleryDescription: string;
  galleryItemLabel: string;
  ctaHeadline: string;
  /** Hero preview + lightbox framing */
  imageAspect?: "video" | "cover" | "square";
};

type ServiceGalleryPageContentProps = {
  service: ServiceGalleryConfig;
  images: GalleryImage[];
};

const ASPECT = {
  video: {
    previewLarge: "aspect-video",
    previewSmall: "aspect-video",
    grid: "aspect-video",
    lightbox: "aspect-video",
    objectFit: "object-contain",
  },
  cover: {
    previewLarge: "aspect-[2/3]",
    previewSmall: "aspect-[2/3]",
    grid: "aspect-[2/3]",
    lightbox: "aspect-[3/4]",
    objectFit: "object-contain",
  },
  square: {
    previewLarge: "aspect-square",
    previewSmall: "aspect-square",
    grid: "aspect-square",
    lightbox: "aspect-square",
    objectFit: "object-contain",
  },
} as const;

function GalleryLightbox({
  images,
  service,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  service: ServiceGalleryConfig;
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = images[index];
  const aspect = ASPECT[service.imageAspect ?? "video"];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(index - 1);
  }, [hasPrev, index, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(index + 1);
  }, [hasNext, index, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, goPrev, goNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay p-4 backdrop-blur-md"
      onClick={onClose}
    >
      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground md:left-8"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground md:right-8"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <motion.div
          className={cn("relative w-full bg-bg-secondary", aspect.lightbox)}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={aspect.objectFit}
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </motion.div>
        <motion.div className="border-t border-border px-6 py-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {service.title}
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-text-primary">
            {item.title}
          </p>
          <p className="mt-2 text-xs text-text-muted">
            {index + 1} / {images.length} — use arrow keys to navigate
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function ServiceGalleryPageContent({
  service,
  images,
}: ServiceGalleryPageContentProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const previewItems = useMemo(() => images.slice(0, 4), [images]);
  const aspect = ASPECT[service.imageAspect ?? "video"];
  const isCover = service.imageAspect === "cover";
  const imageFit = isCover
    ? "object-contain object-center"
    : "object-cover";

  return (
    <motion.div className="pt-24">
      <section className="relative overflow-hidden border-b border-border bg-bg-secondary py-16 md:py-24">
        <motion.div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="fadeRight">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Service
              </p>
              <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
                {service.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                {service.intro}
              </p>
              <ul className="mt-8 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.div className="mt-8 flex flex-wrap gap-4">
                <Button href="/#contact">{service.cta}</Button>
                <Button href="/#portfolio" variant="outline">
                  View Portfolio
                </Button>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.1}>
              <motion.div className="grid grid-cols-2 gap-3">
                {previewItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className={cn(
                      "relative overflow-hidden rounded-xl border border-border bg-bg-secondary shadow-lg",
                      i === 0
                        ? `col-span-2 ${aspect.previewLarge}`
                        : aspect.previewSmall
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={cn(
                        imageFit,
                        "transition-transform duration-500 hover:scale-105"
                      )}
                      sizes="(max-width: 1024px) 50vw, 400px"
                    />
                  </motion.button>
                ))}
              </motion.div>
            </ScrollReveal>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24">
        <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Gallery"
            title={service.galleryTitle}
            description={`${images.length} ${service.galleryDescription} by ${BRAND.designerName}. Click any item to view full size.`}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: easeOut }}
                onClick={() => setLightboxIndex(index)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-bg-secondary text-left transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10",
                  aspect.grid
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={cn(
                    imageFit,
                    "transition-transform duration-500 group-hover:scale-105"
                  )}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-text-primary/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-text-primary/40 px-3 py-1 text-xs text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                  View {service.galleryItemLabel}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-border bg-bg-secondary py-16 md:py-20">
        <ScrollReveal className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
            {service.ctaHeadline}
          </h2>
          <p className="mt-4 text-text-secondary">{service.description}</p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/#contact">{service.cta}</Button>
            <Button href="/" variant="outline">
              Back to Home
            </Button>
          </motion.div>
        </ScrollReveal>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            images={images}
            service={service}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
