"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ABOUT, BRAND } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function AboutPageContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg-secondary py-16 md:py-24">
        <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <ScrollReveal variant="fadeRight">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-soft">
                <Image
                  src={ABOUT.portrait}
                  alt={`${BRAND.designerName}, ${ABOUT.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/25 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-card px-5 py-3 shadow-lg">
                <p className="font-heading text-3xl font-bold text-accent">
                  {ABOUT.yearsExperience}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Years Experience
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeLeft" delay={0.1}>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              About Me
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
              {BRAND.designerName}
            </h1>
            <p className="mt-2 text-lg font-medium text-text-secondary">
              {ABOUT.role}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              {ABOUT.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/#contact">Work With Me</Button>
              <Button href="/#portfolio" variant="outline">
                View Portfolio
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
              {ABOUT.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              {ABOUT.bio}
            </p>
            {ABOUT.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-lg leading-relaxed text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Specialties & strengths */}
      <section className="border-t border-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
                What I Specialize In
              </h2>
              <ul className="mt-6 space-y-3">
                {ABOUT.specialties.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
                Creative Strengths
              </h2>
              <ul className="mt-6 space-y-3">
                {ABOUT.strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="mt-8 border-l-2 border-accent pl-4 text-text-secondary italic">
                {ABOUT.trustStatement}
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16 md:py-20">
        <ScrollReveal className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
            Ready to bring your vision to life?
          </h2>
          <p className="mt-4 text-text-secondary">
            Let&apos;s create something amazing together — from a single flyer to a
            full brand package.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/#contact">Get In Touch</Button>
            <Button href="/" variant="outline">
              Back to Home
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
