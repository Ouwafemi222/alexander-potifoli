"use client";

import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
  index: number;
  goTo: (next: number) => void;
};

export function HeroCarousel({ slides, index, goTo }: HeroCarouselProps) {
  const slide = slides[index];

  return (
    <motion.div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/80 bg-bg-secondary shadow-soft ring-1 ring-border/50">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-text-primary/30 via-transparent to-transparent" />

      <motion.div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}`}
            className={cn(
              "pointer-events-auto h-2 rounded-full transition-all duration-300",
              i === index
                ? "w-7 bg-accent"
                : "w-2 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </motion.div>

      <motion.div className="absolute right-3 top-3 rounded-full border border-white/25 bg-text-primary/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
        {index + 1} / {slides.length}
      </motion.div>
    </motion.div>
  );
}
