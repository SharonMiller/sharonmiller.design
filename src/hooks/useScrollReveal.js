import { useEffect, useRef } from "react";

/**
 * Fades in `.lumen-reveal` elements when they enter the viewport.
 * Opacity-only (no transform) to keep scrolling smooth.
 */
export function useScrollReveal(deps = []) {
	const observerRef = useRef(null);

	useEffect(() => {
		const elements = document.querySelectorAll(".lumen-reveal:not(.lumen-reveal-visible)");
		if (elements.length === 0) return undefined;

		observerRef.current?.disconnect();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("lumen-reveal-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
		);

		elements.forEach((el) => observer.observe(el));
		observerRef.current = observer;

		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
}
