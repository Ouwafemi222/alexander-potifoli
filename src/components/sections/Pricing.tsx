"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRICING_PACKAGES } from "@/lib/constants";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Pricing"
          title="Packages For Every Project"
          description="Transparent pricing with clear deliverables. Contact me for a custom quote."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {PRICING_PACKAGES.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: easeOut }}
              whileHover={pkg.popular ? { y: -6 } : { y: -4 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-[box-shadow,border-color] duration-300",
                pkg.popular
                  ? "z-10 border-accent bg-card shadow-soft ring-1 ring-accent/20 lg:scale-105"
                  : "border-border bg-card hover:border-accent/40 hover:shadow-lg"
              )}
            >
              {pkg.popular && (
                <>
                  <motion.span
                    className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 to-transparent opacity-60"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground shadow-md shadow-accent/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Most Popular
                  </motion.span>
                </>
              )}
              <h3 className="relative font-heading text-xl font-bold text-text-primary">
                {pkg.name}
              </h3>
              <p className="relative mt-2 font-heading text-3xl font-bold text-accent">
                {pkg.price}
              </p>
              <p className="relative mt-1 text-sm text-text-muted">{pkg.delivery}</p>
              <ul className="relative mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#contact"
                variant={pkg.popular ? "primary" : "outline"}
                className="relative mt-8 w-full"
              >
                Get Started
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
