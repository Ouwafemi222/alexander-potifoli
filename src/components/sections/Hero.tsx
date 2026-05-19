"use client";

import { Button } from "@/components/ui/Button";
import { HeroBackgroundSlides } from "@/components/sections/HeroBackgroundSlides";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { BRAND, HERO } from "@/lib/constants";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";
import { motion } from "framer-motion";

export function Hero() {
  const { index, setPaused, goTo, slides } = useHeroCarousel();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <HeroBackgroundSlides slides={slides} index={index} />

      <motion.div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl border border-border/40 bg-bg-primary/50 p-6 shadow-soft backdrop-blur-md sm:border-transparent sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent drop-shadow-sm">
            {BRAND.name}
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight drop-shadow-sm md:text-5xl lg:text-6xl">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-secondary drop-shadow-sm md:text-xl">
            {HERO.subheadline}
          </p>
          <motion.div className="mt-10 flex flex-wrap gap-4">
            <Button href="#portfolio">{HERO.ctaPortfolio}</Button>
            <Button href="#contact" variant="outline">
              {HERO.ctaHire}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroCarousel slides={slides} index={index} goTo={goTo} />
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-soft backdrop-blur-sm"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-text-muted">Experience</p>
            <p className="font-heading text-lg font-bold text-accent">5+ Years</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
