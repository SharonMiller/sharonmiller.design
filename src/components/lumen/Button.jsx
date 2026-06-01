/**
 * Button — primary interactive control with Lumen variants and sizes.
 * Renders an anchor when `href` is provided.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Button label or content
 * @param {'primary' | 'secondary' | 'ghost' | 'danger'} [props.variant='primary'] - Visual style
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Padding and type scale
 * @param {boolean} [props.disabled=false] - Disables interaction
 * @param {string} [props.className] - Additional Tailwind classes
 * @param {string} [props.href] - When set, renders `<a>` instead of `<button>`
 * @param {string} [props.type='button'] - Button type (ignored when `href` is set)
 */
const variantClasses = {
	primary:
		"bg-lumen-terracotta text-white hover:bg-lumen-terracotta-dark focus-visible:ring-lumen-terracotta",
	secondary:
		"border border-stone-300 bg-white text-lumen-charcoal hover:bg-lumen-stone focus-visible:ring-lumen-muted",
	ghost:
		"border border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-400",
	danger:
		"bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
};

const sizeClasses = {
	sm: "px-3 py-1.5 text-xs",
	md: "px-4 py-2 text-sm",
	lg: "px-5 py-2.5 text-base",
};

export default function Button({
	children,
	variant = "primary",
	size = "md",
	disabled = false,
	className = "",
	type = "button",
	href,
	...rest
}) {
	const classes = `inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-lumen-stone disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

	if (href) {
		return (
			<a href={href} className={classes} {...rest}>
				{children}
			</a>
		);
	}

	return (
		<button type={type} disabled={disabled} className={classes} {...rest}>
			{children}
		</button>
	);
}
