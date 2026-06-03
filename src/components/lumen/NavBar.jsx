import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { scrollToHash } from "../../utils/smoothScroll.js";

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

function HamburgerIcon({ open }) {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{open ? (
				<>
					<line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
					<line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
				</>
			) : (
				<>
					<line x1="3" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
					<line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
					<line x1="3" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
				</>
			)}
		</svg>
	);
}

/**
 * NavBar — floating glass pill navigation
 * Desktop: inline links in pill
 * Mobile: hamburger button → dropdown panel
 */
export default function NavBar({
	brand = "SM",
	brandHref = "/",
	links = [],
	actions,
	className = "",
	onNavigate,
}) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const navRef = useRef(null);

	// Close on outside click
	useEffect(() => {
		if (!mobileOpen) return;
		function handleClick(e) {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setMobileOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [mobileOpen]);

	// Close on route change
	const closeMenu = () => {
		setMobileOpen(false);
		onNavigate?.();
	};

	const handleHashClick = (e, href) => {
		closeMenu();
		const hashIndex = href.indexOf("#");
		if (hashIndex === -1) return;

		const path = href.slice(0, hashIndex) || "/";
		const hash = href.slice(hashIndex);

		if (window.location.pathname === path) {
			e.preventDefault();
			scrollToHash(hash);
		}
	};

	const renderLink = (link, mobile = false) => {
		const isHash = link.href.includes("#");
		const linkClass = `portfolio-nav-link${link.active ? " portfolio-nav-link--active" : ""}${mobile ? " portfolio-nav-link--mobile" : ""}`;

		if (isHash) {
			return (
				<a
					key={link.href}
					href={link.href}
					className={linkClass}
					aria-current={link.active ? "page" : undefined}
					onClick={(e) => handleHashClick(e, link.href)}
				>
					{link.label}
				</a>
			);
		}

		return (
			<Link
				key={link.href}
				to={link.href}
				className={linkClass}
				aria-current={link.active ? "page" : undefined}
				onClick={closeMenu}
			>
				{link.label}
			</Link>
		);
	};

	return (
		<header className={`portfolio-nav-shell ${className}`.trim()} ref={navRef}>
			<div className="portfolio-nav-pill">
				<BrandMark href={brandHref} label={brand} onClick={closeMenu} />

				{/* Desktop links */}
				{links.length > 0 && (
					<nav className="portfolio-nav-links portfolio-nav-links--desktop" aria-label="Primary">
						{links.map((link) => renderLink(link))}
					</nav>
				)}

				<div className="portfolio-nav-right">
					{actions && <div className="portfolio-nav-actions">{actions}</div>}

					{/* Mobile hamburger */}
					{links.length > 0 && (
						<button
							className="portfolio-nav-hamburger"
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
							aria-expanded={mobileOpen}
							onClick={() => setMobileOpen((v) => !v)}
						>
							<HamburgerIcon open={mobileOpen} />
						</button>
					)}
				</div>
			</div>

			{/* Mobile dropdown */}
			{mobileOpen && links.length > 0 && (
				<nav className="portfolio-nav-mobile-menu" aria-label="Primary mobile">
					{links.map((link) => renderLink(link, true))}
				</nav>
			)}
		</header>
	);
}
