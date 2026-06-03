import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../lumen";
import PageContainer from "./PageContainer";
import BackToTop from "./BackToTop";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useScrollToTopOnNavigate } from "../../hooks/useScrollToTopOnNavigate";
import "../../pages/Home.css";

export const PORTFOLIO_NAV = [
	{ label: "Home", href: "/" },
	{ label: "Case studies", href: "/#work" },
	{ label: "About", href: "/about" },
	{ label: "Reach out", href: "/contact" },
];

export const FOOTER_SOCIAL = [
	{ label: "LinkedIn", href: "https://linkedin.com/in/millersharonk" },
	{ label: "GitHub", href: "https://github.com/SharonMiller" },
];

const FOOTER_EMAIL = "sharonmillercreative@gmail.com";

export default function PortfolioShell({
	children,
	activePath,
	contactFooter = true,
	mainClassName = "",
}) {
	const location = useLocation();
	useScrollToTopOnNavigate();
	useScrollReveal([location.pathname]);
	const year = new Date().getFullYear();

	const links = PORTFOLIO_NAV.map((link) => ({
		...link,
		active: link.href === activePath,
	}));

	return (
		<div className="min-h-screen bg-white">
			<NavBar brand="SM" brandHref="/" links={links} />

			<main
				key={location.pathname}
				className={`page-route pb-24 pt-[88px] ${mainClassName}`.trim()}
			>
				<PageContainer>{children}</PageContainer>
			</main>

			{contactFooter && (
				<footer className="portfolio-site-footer">
					<div className="portfolio-site-footer__connect">
						<PageContainer innerClassName="portfolio-site-footer__connect-inner">
							<h2 className="portfolio-site-footer__heading">Let&apos;s connect</h2>
							<p className="portfolio-site-footer__lede">
								Open to senior roles and consulting with design teams on AI workflow and process.
							</p>
							<a
								href={`mailto:${FOOTER_EMAIL}`}
								className="portfolio-site-footer__email"
							>
								{FOOTER_EMAIL}
							</a>
							<ul className="portfolio-site-footer__social" aria-label="Social profiles">
								{FOOTER_SOCIAL.map(({ label, href }) => (
									<li key={label}>
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="portfolio-site-footer__link"
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</PageContainer>
					</div>

					<div className="portfolio-site-footer__bar">
						<PageContainer innerClassName="portfolio-site-footer__bar-inner">
							<nav className="portfolio-site-footer__nav" aria-label="Site">
								{PORTFOLIO_NAV.map(({ label, href }) => (
									<Link key={href} to={href} className="portfolio-site-footer__nav-link">
										{label}
									</Link>
								))}
							</nav>
							<p className="portfolio-site-footer__meta">
								<span className="portfolio-site-footer__copyright">
									&copy; {year} Sharon Miller
								</span>
								<BackToTop className="portfolio-site-footer__back-top" />
							</p>
						</PageContainer>
					</div>
				</footer>
			)}
		</div>
	);
}

export function BackLink({ to = "/", children = "← Back to home", className = "" }) {
	return (
		<Link
			to={to}
			className={`portfolio-back-link mb-10 inline-block ${className}`.trim()}
		>
			{children}
		</Link>
	);
}
