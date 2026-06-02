import { useEffect } from "react";

/**
 * Observes `.lumen-reveal` elements and adds `lumen-reveal-visible` when they enter the viewport.
 * Call once at the top of a page that uses scroll-reveal sections.
 */
export function useScrollReveal() {
	useEffect(() => {
		const elements = document.querySelectorAll(".lumen-reveal");
		if (elements.length === 0) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("lumen-reveal-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);
}
