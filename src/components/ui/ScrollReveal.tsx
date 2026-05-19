"use client";

import {
  easeOut,
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
} as const;

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      variants={variants[variant]}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
