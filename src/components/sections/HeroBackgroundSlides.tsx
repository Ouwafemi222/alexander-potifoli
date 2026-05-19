"use client";

import type { HeroSlide } from "@/components/sections/HeroCarousel";
import { easeOut } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type HeroBackgroundSlidesProps = {
  slides: HeroSlide[];
  index: number;
};

export function HeroBackgroundSlides({ slides, index }: HeroBackgroundSlidesProps) {
  const slide = slides[index];

  return (
    <motion.div className="absolute inset-0" aria-hidden>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: easeOut }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Light fade on the left for text — right side stays clear */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-bg-primary/75 via-bg-primary/25 to-transparent dark:from-bg-primary/80 dark:via-bg-primary/35" />
      <motion.div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 via-transparent to-transparent dark:from-bg-primary/30" />
    </motion.div>
  );
}
