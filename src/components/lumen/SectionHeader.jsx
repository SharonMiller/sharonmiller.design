/**
 * SectionHeader — titles a content region with optional label, subtitle, and action.
 *
 * @param {object} props
 * @param {string} [props.label] - Small label above the title
 * @param {string} props.title - Section heading (rendered as `<h2>`)
 * @param {string} [props.subtitle] - Supporting line below the title
 * @param {React.ReactNode} [props.action] - Right slot (button, link, toggle)
 * @param {string} [props.className] - Additional Tailwind classes on the wrapper
 * @param {boolean} [props.centered=false] - Center-align text (contact sections)
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Title type scale
 */
const titleSizeClasses = {
	sm: "text-base",
	md: "text-lg",
	lg: "text-2xl md:text-3xl",
	xl: "text-3xl md:text-4xl",
};

export default function SectionHeader({
	label,
	title,
	subtitle,
	action,
	className = "",
	centered = false,
	size = "md",
}) {
	return (
		<div
			className={`flex flex-col gap-2 ${centered ? "items-center text-center" : ""} ${action && !centered ? "sm:flex-row sm:items-start sm:justify-between sm:gap-4" : ""} ${className}`.trim()}
		>
			<div className={`min-w-0 ${centered ? "flex flex-col items-center" : ""}`}>
				{label && <p className="lumen-section-label mb-2">{label}</p>}
				<h2
					className={`font-semibold tracking-tight text-lumen-ink ${titleSizeClasses[size]}`}
				>
					{title}
				</h2>
				{subtitle && (
					<p
						className={`mt-3 text-base leading-relaxed text-lumen-secondary ${centered ? "max-w-xl" : "max-w-2xl"}`}
					>
						{subtitle}
					</p>
				)}
			</div>
			{action && (
				<div className={`flex shrink-0 items-center ${centered ? "mt-2" : ""}`}>
					{action}
				</div>
			)}
		</div>
	);
}
