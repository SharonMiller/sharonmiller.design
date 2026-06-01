/**
 * StatPill — highlights a single metric with value and label.
 *
 * @param {object} props
 * @param {string} props.label - Metric description (e.g. "years experience")
 * @param {string | number} props.value - Primary number or short text (e.g. "20+")
 * @param {'default' | 'hero'} [props.variant='default'] - `hero` for homepage stats
 * @param {'up' | 'down' | 'neutral'} [props.trend] - Optional change indicator
 * @param {string} [props.trendLabel] - Accessible text for trend
 * @param {string} [props.className] - Additional Tailwind classes
 */
const trendClasses = {
	up: "text-emerald-700",
	down: "text-red-600",
	neutral: "text-gray-500",
};

const trendSymbols = {
	up: "↑",
	down: "↓",
	neutral: "•",
};

const shellClasses = {
	default: "border border-gray-200 bg-gray-50",
	hero: "border border-gray-200 bg-gray-50",
};

const valueClasses = {
	default: "text-2xl font-semibold tabular-nums text-lumen-ink",
	hero: "text-2xl font-bold tabular-nums text-lumen-terracotta",
};

export default function StatPill({
	label,
	value,
	variant = "default",
	trend,
	trendLabel,
	className = "",
}) {
	return (
		<div
			className={`inline-flex min-w-[8rem] flex-col rounded-xl px-4 py-3 ${shellClasses[variant]} ${className}`.trim()}
		>
			<span className={valueClasses[variant]}>{value}</span>
			<span className="mt-1 text-xs font-medium text-gray-500">{label}</span>
			{trend && (
				<span
					className={`mt-1 text-xs font-medium ${trendClasses[trend]}`}
					aria-label={trendLabel}
					title={trendLabel}
				>
					<span aria-hidden="true">{trendSymbols[trend]} </span>
					{trendLabel ?? trend}
				</span>
			)}
		</div>
	);
}
