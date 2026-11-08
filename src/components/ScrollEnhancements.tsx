"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Adds scroll polish without intercepting input or running work on every scroll frame. */
export default function ScrollEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector("main");
    const header = document.querySelector(".header");
    let headerObserver: IntersectionObserver | undefined;
    let sentinel: HTMLSpanElement | undefined;

    if (main && header && "IntersectionObserver" in window) {
      sentinel = document.createElement("span");
      sentinel.setAttribute("aria-hidden", "true");
      sentinel.style.cssText = "display:block;height:1px;width:1px;pointer-events:none;";
      main.before(sentinel);
      headerObserver = new IntersectionObserver(([entry]) => {
        root.toggleAttribute("data-page-scrolled", !entry.isIntersecting);
      }, { threshold: 0 });
      headerObserver.observe(sentinel);
    }

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section:not(.hero-premium), main .cat-card-new, main .product-card-premium, main .hub-banner",
      ),
    );
    revealTargets.forEach((element) => element.classList.add("scroll-reveal"));

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTargets.forEach((element) => element.classList.add("scroll-reveal-visible"));
      return () => {
        headerObserver?.disconnect();
        sentinel?.remove();
        root.removeAttribute("data-page-scrolled");
      };
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04, rootMargin: "0px 0px -6% 0px" });

    revealTargets.forEach((element) => revealObserver.observe(element));

    return () => {
      headerObserver?.disconnect();
      revealObserver.disconnect();
      sentinel?.remove();
      root.removeAttribute("data-page-scrolled");
    };
  }, [pathname]);

  return null;
}
