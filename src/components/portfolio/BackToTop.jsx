import { scrollToTopSmooth } from "../../utils/smoothScroll.js";

export default function BackToTop({ className = "" }) {
	return (
		<button
			type="button"
			className={`portfolio-back-to-top ${className}`.trim()}
			onClick={() => scrollToTopSmooth()}
			aria-label="Back to top"
		>
			Back to top
		</button>
	);
}
