"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ABOUT, BRAND } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

/** Short teaser on the homepage — full story lives on /about */
export function AboutPreview() {
  return (
    <section className="border-y border-border bg-bg-secondary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <ScrollReveal variant="scaleIn">
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-accent/40 shadow-lg shadow-accent/10 sm:h-40 sm:w-40">
              <Image
                src={ABOUT.portrait}
                alt={BRAND.designerName}
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              About Me
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-text-primary md:text-3xl">
              Meet {BRAND.designerName}
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">{ABOUT.intro}</p>
            <Button href="/about" className="mt-6">
              Read My Story
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
