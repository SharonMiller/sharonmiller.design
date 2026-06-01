/**
 * Section heading with horizontal rule dividers (UXfolio-style).
 */
export default function SectionHeading({ children, className = "" }) {
	return (
		<div className={`section-heading-divider ${className}`.trim()}>
			<h2>{children}</h2>
		</div>
	);
}
