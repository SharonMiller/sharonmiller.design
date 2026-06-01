/**
 * GlassCard — content surface; default is clean white card (editorial).
 * Use `glass` variant only for special featured moments.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Content inside the card
 * @param {string} [props.className] - Additional Tailwind classes
 * @param {'solid' | 'glass' | 'strong' | 'panel'} [props.variant='solid'] - `solid` = white card; others use blur
 * @param {string} [props.as='div'] - HTML element for the wrapper
 */
const variantClasses = {
	solid:
		"bg-white border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md",
	glass: "glass",
	strong: "glass-strong",
	panel: "glass-panel",
};

export default function GlassCard({
	children,
	className = "",
	variant = "solid",
	as: Component = "div",
	...rest
}) {
	const surfaceClass = variantClasses[variant] ?? variantClasses.solid;

	return (
		<Component
			className={`rounded-2xl p-6 ${surfaceClass} ${className}`.trim()}
			{...rest}
		>
			{children}
		</Component>
	);
}
