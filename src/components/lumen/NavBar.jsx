import { Link } from "react-router-dom";

function BrandMark({ href, className = "", onClick, label = "SM" }) {
	const mark = (
		<span
			className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-lumen-terracotta text-xs font-bold tracking-tight text-white shadow-md ring-2 ring-lumen-terracotta/25 ring-offset-2 ring-offset-white transition-transform duration-200 hover:scale-105 ${className}`.trim()}
		>
			{label}
		</span>
	);

	if (href.startsWith("/") && !href.includes("#")) {
		return (
			<Link to={href} aria-label="Home" onClick={onClick}>
				{mark}
			</Link>
		);
	}

	return (
		<a href={href} aria-label="Home" onClick={onClick}>
			{mark}
		</a>
	);
}

/**
 * NavBar — portfolio navigation per docs/layout-guidelines.md
 */
export default function NavBar({
	brand = "SM",
	brandHref = "/",
	links = [],
	actions,
	className = "",
	sticky = false,
	fixed = false,
	floating = false,
	scrolled = false,
	onNavigate,
}) {
	const positionClass = fixed || floating ? "fixed left-0 right-0 top-0 z-50" : "";
	const stickyClass = sticky && !fixed && !floating ? "sticky top-0 z-50" : "";

	const shellClass =
		floating && !scrolled
			? "border-transparent bg-transparent"
			: "border-b border-gray-100 bg-white/90 backdrop-blur-sm";

	const closeMenu = () => {
		onNavigate?.();
	};

	const linkClass = (active) =>
		active
			? "text-sm font-medium text-lumen-terracotta"
			: "text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900";

	const mobileLinkClass = (active) =>
		active
			? "bg-lumen-terracotta/10 text-lumen-terracotta"
			: "text-gray-600 hover:bg-stone-100 hover:text-gray-900";

	const renderLink = (link, className, onClick) => {
		const isHash = link.href.includes("#");
		const props = {
			className: `${linkClass(link.active)} ${className}`.trim(),
			"aria-current": link.active ? "page" : undefined,
			onClick,
		};

		if (isHash) {
			return (
				<a key={link.href} href={link.href} {...props}>
					{link.label}
				</a>
			);
		}

		return (
			<Link key={link.href} to={link.href} {...props}>
				{link.label}
			</Link>
		);
	};

	const renderMobileLink = (link) => {
		const shortLabel =
			link.mobileLabel ??
			(link.label === "Work history" ? "History" : link.label);
		const isHash = link.href.includes("#");
		const props = {
			className: `shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors duration-200 ${mobileLinkClass(link.active)}`.trim(),
			"aria-current": link.active ? "page" : undefined,
			onClick: closeMenu,
		};

		if (isHash) {
			return (
				<a key={link.href} href={link.href} {...props}>
					{shortLabel}
				</a>
			);
		}

		return (
			<Link key={link.href} to={link.href} {...props}>
				{shortLabel}
			</Link>
		);
	};

	return (
		<>
			<header
				className={`transition-all duration-300 ${positionClass} ${stickyClass} ${shellClass} ${className}`.trim()}
			>
				<div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-6 px-5 md:px-8">
					<BrandMark href={brandHref} onClick={closeMenu} label={brand} />

					{links.length > 0 && (
						<nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
							{links.map((link) => renderLink(link, "", closeMenu))}
						</nav>
					)}

					{actions && <div className="hidden items-center gap-2 md:flex">{actions}</div>}
				</div>
			</header>

			{links.length > 0 && (
				<nav
					className="glass-strong fixed bottom-4 left-1/2 z-50 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full border border-white/40 px-2 py-2 shadow-lg md:hidden"
					aria-label="Mobile"
				>
					{links.map((link) => renderMobileLink(link))}
				</nav>
			)}
		</>
	);
}
