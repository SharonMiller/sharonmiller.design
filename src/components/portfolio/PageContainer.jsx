/**
 * Standard page width and horizontal padding per docs/layout-guidelines.md
 */
export default function PageContainer({ children, className = "", innerClassName = "" }) {
	return (
		<div className={`portfolio-container mx-auto max-w-4xl px-5 md:px-8 ${className}`.trim()}>
			{innerClassName ? <div className={innerClassName}>{children}</div> : children}
		</div>
	);
}
