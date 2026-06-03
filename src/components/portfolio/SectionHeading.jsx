/**
 * Section heading with horizontal rule dividers (UXfolio-style).
 */
export default function SectionHeading({ children, className = "", reveal = false }) {
	return (
		<div
			className={`section-heading-divider${reveal ? " lumen-reveal lumen-reveal--lift" : ""} ${className}`.trim()}
		>
			<h2>{children}</h2>
		</div>
	);
}
