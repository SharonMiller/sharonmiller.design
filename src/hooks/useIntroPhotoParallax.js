import { useEffect } from "react";

/** Max vertical shift (px). Tune in Home.css `--intro-parallax-max` comment or here. */
const PARALLAX_MAX_PX = 14;
/** How strongly viewport position affects offset (lower = subtler). */
const PARALLAX_FACTOR = 0.1;

/**
 * Subtle scroll parallax for the home intro portrait (image only, not the frame).
 * Disabled when prefers-reduced-motion is set.
 */
export function useIntroPhotoParallax(frameRef, sectionRef) {
	useEffect(() => {
		const frame = frameRef.current;
		const section = sectionRef?.current ?? frame?.closest("#intro");
		const img = frame?.querySelector(".profile-photo-intro");
		if (!frame || !img) return undefined;

		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

		let raf = 0;

		const clear = () => {
			img.style.removeProperty("transform");
		};

		const update = () => {
			if (reducedMotion.matches) {
				clear();
				return;
			}

			const rect = section?.getBoundingClientRect() ?? frame.getBoundingClientRect();
			const vh = window.innerHeight;

			if (rect.bottom <= 0 || rect.top >= vh) {
				clear();
				return;
			}

			const centerY = rect.top + rect.height * 0.5;
			const delta = (centerY - vh * 0.5) * PARALLAX_FACTOR;
			const y = Math.max(-PARALLAX_MAX_PX, Math.min(PARALLAX_MAX_PX, delta));
			img.style.transform = `translate3d(0, ${y}px, 0)`;
		};

		const schedule = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(update);
		};

		const onMotionPreferenceChange = () => schedule();

		reducedMotion.addEventListener("change", onMotionPreferenceChange);
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule, { passive: true });
		schedule();

		return () => {
			cancelAnimationFrame(raf);
			reducedMotion.removeEventListener("change", onMotionPreferenceChange);
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			clear();
		};
	}, [frameRef, sectionRef]);
}
