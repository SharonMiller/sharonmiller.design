/** Scroll window to top; instant when user prefers reduced motion. */
export function scrollPageToTop() {
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: reduceMotion ? "instant" : "auto",
	});
}
