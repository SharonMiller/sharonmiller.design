import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../lumen";
import PageContainer from "./PageContainer";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const PORTFOLIO_NAV = [
	{ label: "Work", href: "/#work" },
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
				<section className="border-t border-gray-100 bg-white py-16">
					<PageContainer innerClassName="max-w-lg mx-auto text-center">
						<h2 className="text-xl font-semibold text-gray-900">Let&apos;s connect:</h2>
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
