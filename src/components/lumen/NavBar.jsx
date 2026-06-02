import { Link } from "react-router-dom";

function BrandMark({ href, label = "SM", onClick }) {
	const mark = <span className="portfolio-nav-brand">{label}</span>;

	if (href.startsWith("/") && !href.includes("#")) {
		return (
			<Link to={href} className="portfolio-nav-brand-link" aria-label="Home" onClick={onClick}>
				{mark}
			</Link>
		);
	}

	return (
		<a href={href} className="portfolio-nav-brand-link" aria-label="Home" onClick={onClick}>
			{mark}
		</a>
	);
}

/**
 * NavBar — floating glass pill navigation
 */
export default function NavBar({
	brand = "SM",
	brandHref = "/",
	links = [],
	actions,
	className = "",
	onNavigate,
}) {
	const closeMenu = () => {
		onNavigate?.();
	};

	const renderLink = (link) => {
		const isHash = link.href.includes("#");
		const className = `portfolio-nav-link${link.active ? " portfolio-nav-link--active" : ""}`;

		if (isHash) {
			return (
				<a
					key={link.href}
					href={link.href}
					className={className}
					aria-current={link.active ? "page" : undefined}
					onClick={closeMenu}
				>
					{link.label}
				</a>
			);
		}

		return (
			<Link
				key={link.href}
				to={link.href}
				className={className}
				aria-current={link.active ? "page" : undefined}
				onClick={closeMenu}
			>
				{link.label}
			</Link>
		);
	};

	return (
		<header className={`portfolio-nav-shell ${className}`.trim()}>
			<div className="portfolio-nav-pill">
				<BrandMark href={brandHref} label={brand} onClick={closeMenu} />

				{links.length > 0 && (
					<nav className="portfolio-nav-links" aria-label="Primary">
						{links.map((link) => renderLink(link))}
					</nav>
				)}

				{actions && <div className="portfolio-nav-actions">{actions}</div>}
			</div>
		</header>
	);
}
