"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { easeOut } from "@/lib/motion";
import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, PenTool, Rocket } from "lucide-react";

const STEP_ICONS = [MessageSquare, Lightbulb, PenTool, Rocket];

export function Process() {
  return (
    <section id="process" className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="How We Work Together"
          description="A simple, transparent workflow from idea to final delivery."
        />

        <div className="relative">
          <motion.div
            className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-0.5 origin-left bg-gradient-to-r from-transparent via-accent to-transparent lg:block"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeOut }}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index] ?? MessageSquare;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5, ease: easeOut }}
                  whileHover={{ y: -4 }}
                  className="group relative text-center"
                >
                  <motion.div
                    className="relative z-10 mx-auto flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-heading text-2xl font-bold text-accent">
                      {step.step}
                    </span>
                    <Icon className="mt-1 h-5 w-5 text-text-muted transition-colors group-hover:text-accent" />
                  </motion.div>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
