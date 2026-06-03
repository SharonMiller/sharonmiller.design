export default function BackToTop({ className = "" }) {
	const scrollToTop = () => {
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
	};

	return (
		<button
			type="button"
			className={`portfolio-back-to-top ${className}`.trim()}
			onClick={scrollToTop}
			aria-label="Back to top"
		>
			Back to top
		</button>
	);
}
