import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../lumen";
import PageContainer from "./PageContainer";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const PORTFOLIO_NAV = [
	{ label: "Case studies", href: "/#work" },
	{ label: "About", href: "/about" },
	{ label: "Reach out", href: "/contact" },
];

export default function PortfolioShell({
	children,
	activePath,
	contactFooter = true,
	mainClassName = "",
}) {
	const location = useLocation();
	useScrollReveal([location.pathname]);

	const links = PORTFOLIO_NAV.map((link) => ({
		...link,
		active: link.href === activePath,
	}));

	return (
		<div className="min-h-screen bg-white">
			<NavBar brand="SM" brandHref="/" links={links} />

			<main
				key={location.pathname}
				className={`pb-24 pt-[88px] ${mainClassName}`.trim()}
			>
				<PageContainer>{children}</PageContainer>
			</main>

			{contactFooter && (
				<section className="portfolio-site-footer border-t border-stone-200 bg-white">
					<PageContainer innerClassName="max-w-lg mx-auto text-center">
						<h2 className="portfolio-site-footer__heading">Let&apos;s connect:</h2>
						<a
							href="mailto:sharonmillercreative@gmail.com"
							className="lumen-btn-primary mt-8 inline-flex max-w-full rounded-xl px-5 py-2.5 text-sm font-medium text-white break-all sm:text-base"
						>
							sharonmillercreative@gmail.com
						</a>
						<div className="mt-6 flex justify-center gap-6 text-sm">
							<a
								href="https://linkedin.com/in/millersharonk"
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-site-footer__link"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/SharonMiller"
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-site-footer__link"
							>
								GitHub
							</a>
						</div>
					</PageContainer>
				</section>
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
