import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { scrollToHash } from "../../utils/smoothScroll.js";
import LockIcon from "../portfolio/LockIcon.jsx";

function NavDropdown({ link, mobile = false, onClose }) {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	const closeTimer = useRef(null);

	const scheduleClose = () => {
		closeTimer.current = setTimeout(() => setOpen(false), 150);
	};
	const cancelClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
	};

	useEffect(() => {
		if (!open) return;
		function handleClick(e) {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		}
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [open]);

	if (mobile) {
		return (
			<div className="portfolio-nav-dropdown-mobile">
				<button
					className={`portfolio-nav-link portfolio-nav-link--mobile portfolio-nav-dropdown-trigger${open ? " is-open" : ""}`}
					onClick={() => setOpen((v) => !v)}
					aria-expanded={open}
				>
					{link.label}
					<svg className="portfolio-nav-dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
						<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
				{open && (
					<div className="portfolio-nav-dropdown-panel portfolio-nav-dropdown-panel--mobile">
						{link.children.map((child) => (
							<Link
								key={child.href}
								to={child.href}
								className="portfolio-nav-dropdown-item"
								onClick={() => { setOpen(false); onClose?.(); }}
							>
								{child.label}
								{child.gated && (
									<span className="portfolio-nav-dropdown-lock" aria-label="Password required">
										<LockIcon size={11} />
									</span>
								)}
							</Link>
						))}
					</div>
				)}
			</div>
		);
	}

	return (
		<div
			className="portfolio-nav-dropdown"
			ref={ref}
			onMouseEnter={() => { cancelClose(); setOpen(true); }}
			onMouseLeave={scheduleClose}
		>
			<button
				className={`portfolio-nav-link portfolio-nav-dropdown-trigger${link.active ? " portfolio-nav-link--active" : ""}${open ? " is-open" : ""}`}
				aria-expanded={open}
				onClick={() => setOpen((v) => !v)}
			>
				{link.label}
				<svg className="portfolio-nav-dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
					<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			{open && (
				<div
					className="portfolio-nav-dropdown-panel"
					onMouseEnter={cancelClose}
					onMouseLeave={scheduleClose}
				>
					{link.children.map((child) => (
						<Link
							key={child.href}
							to={child.href}
							className="portfolio-nav-dropdown-item"
							onClick={() => setOpen(false)}
						>
							{child.label}
							{child.gated && (
								<span className="portfolio-nav-dropdown-lock" aria-label="Password required">
									<LockIcon size={11} />
								</span>
							)}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

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
 * Desktop: inline links in a top pill
 * Mobile: bottom dock toolbar → case studies open an upward bottom sheet
 */
export default function NavBar({
	brand = null,
	brandHref = "/",
	links = [],
	actions,
	className = "",
	onNavigate,
}) {
	const [sheetOpen, setSheetOpen] = useState(false);
	const navRef = useRef(null);

	// Lock body scroll + close on Escape while the bottom sheet is open
	useEffect(() => {
		if (!sheetOpen) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const handleKey = (e) => {
			if (e.key === "Escape") setSheetOpen(false);
		};
		document.addEventListener("keydown", handleKey);
		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKey);
		};
	}, [sheetOpen]);

	// Close on route change
	const closeMenu = () => {
		setSheetOpen(false);
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
		if (link.children?.length) {
			return <NavDropdown key={link.label} link={link} mobile={mobile} onClose={closeMenu} />;
		}

		const isHash = link.href?.includes("#");
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

	// Mobile dock: drop the "Reach out" / contact link (covered by footer)
	const dockLinks = links.filter((link) => link.href !== "/contact");
	const sheetLink = links.find((link) => link.children?.length);

	return (
		<>
			{/* Desktop floating pill */}
			<header className={`portfolio-nav-shell ${className}`.trim()} ref={navRef}>
				<div className="portfolio-nav-pill">
					{brand && <BrandMark href={brandHref} label={brand} onClick={closeMenu} />}

					{links.length > 0 && (
						<nav className="portfolio-nav-links portfolio-nav-links--desktop" aria-label="Primary">
							{links.map((link) => renderLink(link))}
						</nav>
					)}

					{actions && (
						<div className="portfolio-nav-right">
							<div className="portfolio-nav-actions">{actions}</div>
						</div>
					)}
				</div>
			</header>

			{/* Mobile bottom dock */}
			{dockLinks.length > 0 && (
				<nav className="portfolio-nav-dock" aria-label="Primary">
					{dockLinks.map((link) => {
						if (link.children?.length) {
							return (
								<button
									key={link.label}
									type="button"
									className={`portfolio-nav-dock__item portfolio-nav-dock__item--trigger${sheetOpen ? " is-open" : ""}`}
									aria-expanded={sheetOpen}
									aria-controls="portfolio-nav-sheet"
									onClick={() => setSheetOpen((v) => !v)}
								>
									{link.label}
									<svg className="portfolio-nav-dock__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
										<path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</button>
							);
						}

						const isHash = link.href?.includes("#");
						const itemClass = `portfolio-nav-dock__item${link.active ? " is-active" : ""}`;

						if (isHash) {
							return (
								<a
									key={link.href}
									href={link.href}
									className={itemClass}
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
								className={itemClass}
								aria-current={link.active ? "page" : undefined}
								onClick={closeMenu}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>
			)}

			{/* Mobile bottom sheet (case studies) */}
			{sheetLink && (
				<>
					<div
						className={`portfolio-nav-scrim${sheetOpen ? " is-open" : ""}`}
						onClick={() => setSheetOpen(false)}
						aria-hidden="true"
					/>
					<div
						id="portfolio-nav-sheet"
						className={`portfolio-nav-sheet${sheetOpen ? " is-open" : ""}`}
						role="dialog"
						aria-modal="true"
						aria-label={sheetLink.label}
						aria-hidden={!sheetOpen}
					>
						<div className="portfolio-nav-sheet__grabber" aria-hidden="true" />
						<div className="portfolio-nav-sheet__header">
							<span className="portfolio-nav-sheet__title">{sheetLink.label}</span>
							<button
								type="button"
								className="portfolio-nav-sheet__close"
								aria-label="Close"
								onClick={() => setSheetOpen(false)}
							>
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
									<line x1="3.5" y1="3.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
									<line x1="14.5" y1="3.5" x2="3.5" y2="14.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
								</svg>
							</button>
						</div>
						<div className="portfolio-nav-sheet__links">
							{sheetLink.children.map((child) => (
								<Link
									key={child.href}
									to={child.href}
									className="portfolio-nav-sheet__item"
									onClick={closeMenu}
								>
									<span>{child.label}</span>
									{child.gated && (
										<span className="portfolio-nav-dropdown-lock" aria-label="Password required">
											<LockIcon size={12} />
										</span>
									)}
								</Link>
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
}
