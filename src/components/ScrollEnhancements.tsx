"use client";

import { useEffect } from "react";

/** Adds scroll polish without intercepting input or running work on every scroll frame. */
export default function ScrollEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector("main");
    const header = document.querySelector(".header");

    // Observe the main content crossing the header edge to update its appearance.
    // IntersectionObserver is event-driven and does not run a scroll handler.
    let headerObserver: IntersectionObserver | undefined;
    if (main && header && "IntersectionObserver" in window) {
      headerObserver = new IntersectionObserver(
        ([entry]) => {
          root.toggleAttribute("data-page-scrolled", entry.boundingClientRect.top <= header.getBoundingClientRect().height);
        },
        { threshold: 0, rootMargin: "-80px 0px 0px 0px" },
      );
      headerObserver.observe(main);
    }

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section:not(.hero-premium), main .cat-card-new, main .product-card-premium, main .hub-banner",
      ),
    );

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTargets.forEach((element) => element.classList.add("scroll-reveal-visible"));
      return () => headerObserver?.disconnect();
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: "0px 0px -6% 0px" },
    );

    revealTargets.forEach((element) => revealObserver.observe(element));

    return () => {
      headerObserver?.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return null;
}
