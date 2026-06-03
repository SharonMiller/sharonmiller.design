import { useEffect } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "../utils/smoothScroll.js";

const DESKTOP_MIN_WIDTH = 768;

/**
 * Desktop-only Lenis smooth scroll. Disabled on mobile and when prefers-reduced-motion.
 */
export function useLenisScroll() {
	useEffect(() => {
		let lenis = null;
		let raf = 0;
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

		const destroy = () => {
			cancelAnimationFrame(raf);
			if (lenis) {
				lenis.destroy();
				lenis = null;
				setLenisInstance(null);
			}
		};

		const shouldEnable = () =>
			window.innerWidth >= DESKTOP_MIN_WIDTH && !reducedMotion.matches;

		const init = () => {
			destroy();
			if (!shouldEnable()) return;

			lenis = new Lenis({
				duration: 1.1,
				easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				smoothWheel: true,
			});
			setLenisInstance(lenis);

			const loop = (time) => {
				lenis.raf(time);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		};

		init();
		window.addEventListener("resize", init);
		reducedMotion.addEventListener("change", init);

		return () => {
			window.removeEventListener("resize", init);
			reducedMotion.removeEventListener("change", init);
			destroy();
		};
	}, []);
}
