"use client";

import heroSlides from "@/data/hero-carousel.json";
import { useCallback, useEffect, useState } from "react";

export const HERO_AUTO_PLAY_MS = 4500;

export function useHeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused || heroSlides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, HERO_AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return {
    index,
    paused,
    setPaused,
    goTo,
    slides: heroSlides,
  };
}
