import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/lumen";
import PageContainer from "../components/portfolio/PageContainer";
import { PORTFOLIO_NAV } from "../components/portfolio/PortfolioShell";
import SectionHeading from "../components/portfolio/SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CASE_STUDY_CARDS } from "../content/caseStudies/index.js";
import "./Home.css";

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
				<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lumen-terracotta transition-colors duration-200 group-hover:text-lumen-terracotta-dark">
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
									Most designers work on AI features. I do that and build the operating model
									around them: governance, human-in-the-loop patterns, and design-engineering
									integration that makes AI trustworthy at scale.
								</p>
								<p>
									Head of Product Design at VSCO. Previously led growth and core product design
									at SurveyMonkey. Twenty years in platform and systems work; AI just made it
									more urgent.
								</p>
								<p>
									Open to senior platform design roles where complex workflows, trustworthy AI,
									and systems thinking are the mission.
								</p>
							</div>

							<a
								href="https://linkedin.com/in/millersharonk"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-8 inline-block text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
							>
								LinkedIn
							</a>
						</div>

						<div className="order-1 mx-auto mb-6 md:order-none md:col-span-2 md:mx-0 md:mb-0 md:flex md:justify-end">
							<img
								src="/images/about-portrait.png"
								alt="Sharon Miller smiling outdoors in golden light"
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
						{CASE_STUDY_CARDS.map((study) => (
							<CaseStudyCard key={study.title} study={study} />
						))}
					</div>
				</PageContainer>
			</section>
		</div>
	);
}
