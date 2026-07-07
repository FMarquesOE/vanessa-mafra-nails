import { useEffect } from "react";

/**
 * Apply IntersectionObserver to all `.reveal` elements within the page.
 * When an element enters the viewport, it gets the `in` class.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
