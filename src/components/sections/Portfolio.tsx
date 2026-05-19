"use client";

import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import portfolioData from "@/data/portfolio.json";

const CATEGORY_GRADIENTS: Record<string, string> = {
  slides: "from-blue-500/30 to-cyan-500/20",
  labels: "from-emerald-500/30 to-lime-500/20",
  books: "from-amber-500/30 to-orange-500/20",
  art: "from-violet-500/30 to-fuchsia-500/20",
};

function PortfolioCard({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const gradient =
    CATEGORY_GRADIENTS[item.category] ?? "from-accent/20 to-bg-secondary";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-shadow duration-300 hover:border-accent/25 hover:shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {!imgError ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full flex-col items-center justify-center bg-gradient-to-br p-6",
              gradient
            )}
          >
            <span className="font-heading text-lg font-semibold text-text-primary">
              {item.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/5" />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-text-primary/65 via-text-primary/20 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <p className="translate-y-2 text-xs font-medium uppercase tracking-wider text-accent transition-transform duration-300 group-hover:translate-y-0">
            {item.service}
          </p>
          <h3 className="translate-y-2 font-heading text-lg font-semibold text-white transition-transform delay-75 duration-300 group-hover:translate-y-0">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-2 translate-y-2 text-sm text-white/80 transition-transform delay-100 duration-300 group-hover:translate-y-0">
            {item.description}
          </p>
          <span className="mt-3 inline-flex w-fit rounded-full border border-white/30 px-3 py-1 text-xs text-white/90 opacity-0 transition-opacity delay-150 group-hover:opacity-100">
            View project
          </span>
        </div>
      </div>
    </motion.button>
  );
}

export function Portfolio() {
  const items = portfolioData as PortfolioItem[];
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <section id="portfolio" className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Selected Creative Work"
          description="A curated pick from each service — presentations, book covers, labels, murals, stained glass, and more."
        />

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                activeCategory === cat.id
                  ? "text-accent-foreground"
                  : "border border-border text-text-secondary hover:border-accent hover:text-accent"
              )}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="portfolio-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: easeOut }}
                className="mb-6 break-inside-avoid"
              >
                <PortfolioCard
                  item={item}
                  onClick={() => setLightboxItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted">
            No projects in this category yet. Add items in{" "}
            <code className="text-accent">src/data/portfolio.json</code>.
          </p>
        )}
      </div>

      <Lightbox
        item={lightboxItem}
        items={filtered}
        onClose={() => setLightboxItem(null)}
        onNavigate={setLightboxItem}
      />
    </section>
  );
}
