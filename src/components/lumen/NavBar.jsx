import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * NavBar — portfolio navigation per docs/layout-guidelines.md
 */
export default function NavBar({
	brand = "SM",
	brandHref = "/",
	brandClassName = "",
	links = [],
	actions,
	className = "",
	sticky = false,
	fixed = false,
	floating = false,
	scrolled = false,
	onNavigate,
}) {
	const [menuOpen, setMenuOpen] = useState(false);
	const positionClass = fixed || floating ? "fixed left-0 right-0 top-0 z-50" : "";
	const stickyClass = sticky && !fixed && !floating ? "sticky top-0 z-50" : "";

	const shellClass =
		floating && !scrolled
			? "border-transparent bg-transparent"
			: "border-b border-gray-100 bg-white/90 backdrop-blur-sm";

	const closeMenu = () => {
		setMenuOpen(false);
		onNavigate?.();
	};

	const linkClass = (active) =>
		active
			? "text-sm font-medium text-lumen-terracotta"
			: "text-sm font-medium text-gray-600 transition-colors duration-200 hover:opacity-80";

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

	return (
		<header
			className={`transition-all duration-200 ${positionClass} ${stickyClass} ${shellClass} ${className}`.trim()}
		>
			<div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-6 px-5 md:px-8">
				{brandHref.startsWith("/") && !brandHref.includes("#") ? (
					<Link
						to={brandHref}
						className={`text-sm font-bold tracking-tight ${brandClassName || "text-lumen-terracotta"}`.trim()}
						onClick={closeMenu}
					>
						{brand}
					</Link>
				) : (
					<a
						href={brandHref}
						className={`text-sm font-bold tracking-tight ${brandClassName || "text-lumen-terracotta"}`.trim()}
					>
						{brand}
					</a>
				)}

				{links.length > 0 && (
					<nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
						{links.map((link) => renderLink(link, "", closeMenu))}
					</nav>
				)}

				<div className="flex items-center gap-2">
					{actions}
					{links.length > 0 && (
						<button
							type="button"
							className="inline-flex flex-col justify-center gap-1.5 p-2 md:hidden"
							aria-expanded={menuOpen}
							aria-controls="mobile-nav"
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							onClick={() => setMenuOpen((open) => !open)}
						>
							<span className="block h-0.5 w-5 bg-gray-700" />
							<span className="block h-0.5 w-5 bg-gray-700" />
							<span className="block h-0.5 w-5 bg-gray-700" />
						</button>
					)}
				</div>
			</div>

			{menuOpen && links.length > 0 && (
				<nav
					id="mobile-nav"
					className="border-b border-gray-100 bg-white md:hidden"
					aria-label="Mobile"
				>
					{links.map((link) =>
						renderLink(link, "block py-3 px-5 text-base", closeMenu),
					)}
				</nav>
			)}
		</header>
	);
}
