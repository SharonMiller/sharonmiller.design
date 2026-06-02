import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/lumen";
import PageContainer from "../components/portfolio/PageContainer";
import { PORTFOLIO_NAV } from "../components/portfolio/PortfolioShell";
import SectionHeading from "../components/portfolio/SectionHeading";
import { CASE_STUDY_CARDS } from "../content/caseStudies/index.js";
import CaseStudyThumbnail from "../components/portfolio/CaseStudyThumbnail.jsx";
import "./Home.css";

function CaseStudyCard({ study }) {
	return (
		<article className="case-study-card case-study-card--impact">
			<Link to={study.href} className="group flex gap-5 p-6 md:gap-6 md:p-8">
				<div className="min-w-0 flex-1">
					<p className="text-xs font-semibold uppercase tracking-wider text-lumen-terracotta">
						{study.label}
					</p>
					<h3 className="mt-2 text-xl font-bold text-gray-900 md:text-2xl">
						{study.title}
						<span className="ml-2 text-sm font-normal text-gray-400">{study.year}</span>
					</h3>

					{study.hook ? (
						<p className="mt-4 text-base font-semibold leading-snug text-gray-900 md:text-lg">
							{study.hook}
						</p>
					) : null}

					{study.metrics?.length > 0 && (
						<div className="mt-5 flex flex-wrap gap-6 border-t border-gray-100 pt-5">
							{study.metrics.map((metric) => (
								<div key={metric.label}>
									<span className="block text-xl font-bold text-gray-900">{metric.value}</span>
									<span className="block text-xs text-gray-500">{metric.label}</span>
								</div>
							))}
						</div>
					)}

					<span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-lumen-terracotta">
						Read case study →
					</span>
				</div>

				<CaseStudyThumbnail image={study.thumbnail} variant="card" />
			</Link>
		</article>
	);
}

export default function Home() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="min-h-screen bg-white pb-20 md:pb-0">
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
					<div className="intro-header flex items-start justify-between gap-5 md:gap-10">
						<div className="min-w-0 flex-1">
							<h1 className="text-3xl font-bold tracking-tight text-lumen-ink md:text-5xl">
								Sharon Miller
							</h1>
							<p className="mt-3 text-base font-medium text-gray-900">
								Head of Product Design
							</p>
						</div>

						<div className="profile-photo-frame shrink-0">
							<img
								src="/images/profile-photo-full.png"
								alt="Sharon Miller"
								className="profile-photo-intro"
							/>
						</div>
					</div>

					<div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-gray-700">
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
				</PageContainer>
			</section>

			<section id="work" className="border-t border-gray-100 py-12 md:py-20">
				<PageContainer>
					<SectionHeading>Case studies</SectionHeading>

					<div className="flex flex-col gap-4 md:gap-5">
						{CASE_STUDY_CARDS.map((study) => (
							<CaseStudyCard key={study.slug} study={study} />
						))}
					</div>
				</PageContainer>
			</section>
		</div>
	);
}
