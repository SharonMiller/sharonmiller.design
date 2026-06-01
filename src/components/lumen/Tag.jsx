/**
 * Tag — compact label for status, categories, or metadata.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Tag text
 * @param {'neutral' | 'skill' | 'terracotta' | 'success' | 'warning'} [props.tone='neutral'] - Color emphasis
 * @param {string} [props.className] - Additional Tailwind classes
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - Standard span attributes
 */
const toneClasses = {
	neutral: "border border-gray-200 bg-gray-100 text-gray-700",
	skill: "border border-gray-200 bg-gray-100 text-gray-700",
	terracotta:
		"border border-lumen-terracotta/20 bg-lumen-terracotta/10 text-lumen-terracotta",
	success: "bg-emerald-100 text-emerald-800",
	warning: "bg-amber-100 text-amber-900",
};

export default function Tag({
	children,
	tone = "neutral",
	className = "",
	...rest
}) {
	return (
		<span
			className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${toneClasses[tone]} ${className}`.trim()}
			{...rest}
		>
			{children}
		</span>
	);
}
