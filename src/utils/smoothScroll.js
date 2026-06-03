/** @type {import('lenis').Lenis | null} */
let lenisInstance = null;

/** @param {import('lenis').Lenis | null} instance */
export function setLenisInstance(instance) {
	lenisInstance = instance;
}

export function getLenisInstance() {
	return lenisInstance;
}

export function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isLenisActive() {
	return lenisInstance != null && !prefersReducedMotion();
}

/** Scroll window to top; instant when user prefers reduced motion. */
export function scrollPageToTop() {
	const immediate = prefersReducedMotion();

	if (isLenisActive()) {
		lenisInstance.scrollTo(0, { immediate });
		return;
	}

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: immediate ? "instant" : "auto",
	});
}

/** Smooth scroll to top (Back to top control). */
export function scrollToTopSmooth() {
	const immediate = prefersReducedMotion();

	if (isLenisActive()) {
		lenisInstance.scrollTo(0, { immediate });
		return;
	}

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: immediate ? "auto" : "smooth",
	});
}

/**
 * Scroll to a hash target (#work, etc.).
 * @param {string} hash — e.g. "#work"
 * @param {{ immediate?: boolean; offset?: number }} [options]
 */
export function scrollToHash(hash, options = {}) {
	const id = hash.startsWith("#") ? hash.slice(1) : hash;
	const el = document.getElementById(id);
	if (!el) return;

	const immediate = options.immediate ?? prefersReducedMotion();
	const offset = options.offset ?? -88;

	if (isLenisActive()) {
		lenisInstance.scrollTo(el, { immediate, offset });
		return;
	}

	el.scrollIntoView({ behavior: immediate ? "auto" : "smooth", block: "start" });
}
