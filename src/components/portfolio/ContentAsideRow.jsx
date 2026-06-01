/**
 * Text on the left, supporting visual on the right — common portfolio section pattern.
 * Stacks on small screens; image column stays narrow on md+.
 */
export function SectionDivider({ label }) {
	return (
		<div
			className="lumen-reveal flex items-center gap-4 py-6 md:gap-6 md:py-8"
			aria-hidden={!label}
		>
			<div className="h-px flex-1 bg-gray-200" />
			{label ? (
				<span className="shrink-0 text-center text-sm font-medium text-gray-600">
					{label}
				</span>
			) : null}
			<div className="h-px flex-1 bg-gray-200" />
		</div>
	);
}

export default function ContentAsideRow({
	children,
	aside,
	asideCaption,
	className = "",
	asideClassName = "",
}) {
	return (
		<div
			className={`lumen-reveal flex flex-col gap-8 md:flex-row md:items-start md:gap-10 ${className}`}
		>
			<div className="min-w-0 flex-1">{children}</div>
			<aside className={`mx-auto w-full max-w-sm shrink-0 md:mx-0 ${asideClassName}`}>
				{aside}
				{asideCaption ? (
					<p className="mt-3 text-center text-xs leading-snug text-gray-400 md:text-left">
						{asideCaption}
					</p>
				) : null}
			</aside>
		</div>
	);
}
