import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../lumen";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import PageContainer from "./PageContainer";

export const PORTFOLIO_NAV = [
	{ label: "Home", href: "/" },
	{ label: "Work", href: "/#work" },
	{ label: "Work history", href: "/work-history" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export default function PortfolioShell({
	children,
	activePath,
	contactFooter = true,
	mainClassName = "",
}) {
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useScrollReveal();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const links = PORTFOLIO_NAV.map((link) => ({
		...link,
		active: link.href === activePath,
	}));

	return (
		<div className="page-load min-h-screen bg-white">
			<NavBar
				fixed
				floating
				scrolled={scrolled}
				brand="SM"
				brandHref="/"
				brandClassName="text-lumen-terracotta"
				links={links}
			/>

			<main
				key={location.pathname}
				className={`page-route pb-24 pt-28 md:pt-32 ${mainClassName}`.trim()}
			>
				<PageContainer>{children}</PageContainer>
			</main>

			{contactFooter && (
				<section className="lumen-reveal border-t border-gray-100 bg-white py-16">
					<PageContainer innerClassName="max-w-lg mx-auto text-center">
						<h2 className="text-2xl font-bold text-gray-900">Let&apos;s connect:</h2>
						<a
							href="mailto:sharonmillercreative@gmail.com"
							className="lumen-btn-primary mt-8 inline-flex rounded-xl px-5 py-2.5 text-base font-medium text-white"
						>
							sharonmillercreative@gmail.com
						</a>
						<div className="mt-6 flex justify-center gap-6 text-sm">
							<a
								href="https://linkedin.com/in/millersharonk"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/SharonMiller"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
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
			className={`mb-10 inline-block text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900 ${className}`.trim()}
		>
			{children}
		</Link>
	);
}
