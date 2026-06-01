import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/lumen";
import PageContainer from "../components/portfolio/PageContainer";
import { PORTFOLIO_NAV } from "../components/portfolio/PortfolioShell";
import SectionHeading from "../components/portfolio/SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Home.css";

const CASE_STUDIES = [
	{
		label: "Case study",
		title: "AI-first design process",
		year: "2025",
		href: "/case-study/ai-first",
		previewImage: "/images/paywall-variants.png",
		description:
			"I stopped designing in Figma and started building in Cursor. Two MVPs shipping June 2026. One designer carrying full output, with no new design system headcount added.",
		metrics: [
			{ value: "2", label: "MVPs in build" },
			{ value: "1 wk", label: "Concept cycles" },
		],
	},
	{
		label: "Case study",
		title: "Workspace & Chat Agent",
		year: "2026",
		href: "/contact", // TODO: case study page
		previewImage: "/images/workspace/dashboard.png",
		description:
			"Two products designed almost entirely in Cursor. Figma was for screenshots and design system updates. That's it.",
		metrics: [
			{ value: "2", label: "Products shipped" },
			{ value: "0-1", label: "In Cursor" },
		],
	},
	{
		label: "Case study",
		title: "Design system governance with AI",
		year: "2025",
		href: "/contact", // TODO: case study page
		previewImage: "/images/cursor-prototype.png",
		description:
			"Used Claude to audit, fix, and document a production design system. No dedicated IC. Just a better process.",
		metrics: [
			{ value: "1", label: "Design system" },
			{ value: "AI", label: "Governance model" },
		],
	},
];

function CaseStudyCard({ study }) {
	const content = (
		<>
			<div className="case-study-card__image-wrap aspect-video">
				<img
					src={study.previewImage}
					alt=""
					className="case-study-card__image h-full w-full object-cover object-top"
				/>
			</div>
			<div className="p-6">
				<p className="mb-2 text-xs font-semibold uppercase tracking-wider text-lumen-terracotta">
					{study.label}
				</p>
				<h3 className="text-xl font-bold text-gray-900">
					{study.title}
					<span className="ml-2 text-sm font-normal text-gray-400">{study.year}</span>
				</h3>
				<p className="mt-2 max-w-prose text-sm leading-relaxed text-gray-600">
					{study.description}
				</p>
				{study.metrics?.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-6">
						{study.metrics.map((metric) => (
							<div key={metric.label}>
								<span className="block text-base font-bold text-gray-900">
									{metric.value}
								</span>
								<span className="block text-xs text-gray-500">{metric.label}</span>
							</div>
						))}
					</div>
				)}
				<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lumen-terracotta transition-all duration-200 group-hover:gap-2">
					View case study →
				</span>
			</div>
		</>
	);

	return (
		<article className="case-study-card lumen-reveal">
			<Link to={study.href} className="group block">
				{content}
			</Link>
		</article>
	);
}

export default function Home() {
	const [scrolled, setScrolled] = useState(false);

	useScrollReveal();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="page-load min-h-screen bg-white">
			<NavBar
				fixed
				floating
				scrolled={scrolled}
				brand="SM"
				brandHref="/"
				brandClassName="text-lumen-terracotta"
				links={PORTFOLIO_NAV.map((link) => ({
					...link,
					active: link.href === "/",
				}))}
			/>

			<section id="intro" className="bg-white pb-12 pt-28 md:pb-20 md:pt-32">
				<PageContainer>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12">
						<div className="order-2 md:order-none md:col-span-3">
							<h1 className="text-3xl font-bold tracking-tight text-lumen-ink md:text-5xl">
								Sharon Miller
							</h1>
							<p className="mt-3 text-base font-medium text-gray-900">
								Product Design Leader
							</p>

							<div className="mt-8 space-y-4 text-base leading-relaxed text-gray-700">
								<p>
									I operate at the strategy level, care about craft, and build the AI
									workflows that help design teams amplify their impact without compromising
									quality. I&apos;ve navigated every major platform shift in this industry.
									This one is the most important, and I know exactly how to help teams make
									it.
								</p>
								<p>
									My process is built around AI. I prototype in Cursor, use Claude for design
									system governance, and built Lumen to keep up with how fast things move now.
								</p>
								<p>
									Head of Product Design at VSCO. Open to senior IC and design lead roles where
									the work is real and the team cares about shipping.
								</p>
							</div>

							<a
								href="https://linkedin.com/in/millersharonk"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-8 inline-block text-sm font-medium text-gray-600 transition-opacity duration-200 hover:opacity-80"
							>
								LinkedIn
							</a>
						</div>

						<div className="order-1 mx-auto mb-6 md:order-none md:col-span-2 md:mx-0 md:mb-0 md:flex md:justify-end">
							<img
								src="/images/portfolio-assets/photos/profile-photo.png"
								alt="Sharon Miller smiling in a white sleeveless top, outdoor portrait"
								className="profile-photo-intro shadow-sm"
							/>
						</div>
					</div>
				</PageContainer>
			</section>

			<section id="work" className="bg-white py-12 md:py-20">
				<PageContainer>
					<SectionHeading>Case studies</SectionHeading>

					<div className="flex flex-col gap-6">
						{CASE_STUDIES.map((study) => (
							<CaseStudyCard key={study.title} study={study} />
						))}
					</div>
				</PageContainer>
			</section>
		</div>
	);
}
