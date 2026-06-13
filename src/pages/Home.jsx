import { useRef } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/lumen";
import PageContainer from "../components/portfolio/PageContainer";
import { PORTFOLIO_NAV } from "../components/portfolio/PortfolioShell";
import SectionHeading from "../components/portfolio/SectionHeading";
import { CASE_STUDY_CARDS } from "../content/caseStudies/index.js";
import CaseStudyThumbnail from "../components/portfolio/CaseStudyThumbnail.jsx";
import { useIntroPhotoParallax } from "../hooks/useIntroPhotoParallax";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useScrollToTopOnNavigate } from "../hooks/useScrollToTopOnNavigate";
import "./Home.css";

function CaseStudyCard({ study, revealIndex }) {
	return (
		<article
			className="case-study-card lumen-reveal lumen-reveal--lift"
			data-reveal-index={revealIndex}
		>
			<Link to={study.href} className="case-study-card__link group">
				<div className="case-study-card__content">
					<h3 className="case-study-card__title">{study.title}</h3>
					<p className="case-study-card__year-line">
						{study.year}
						{study.role ? ` · ${study.role}` : ""}
					</p>

					{study.hook ? <p className="case-study-card__description">{study.hook}</p> : null}

					<span className="case-study-card__cta">Read case study →</span>
				</div>

				<CaseStudyThumbnail image={study.thumbnail} title={study.title} variant="card" />
			</Link>
		</article>
	);
}

export default function Home() {
	const introRef = useRef(null);
	const photoFrameRef = useRef(null);
	useIntroPhotoParallax(photoFrameRef, introRef);
	useScrollToTopOnNavigate();
	useScrollReveal(["home"]);

	return (
		<div className="portfolio-page page-load" style={{ background: "#ffffff" }}>
			<NavBar
				brandHref="/"
				links={PORTFOLIO_NAV.map((link) => ({
					...link,
					active: link.href === "/",
				}))}
			/>

			<section id="intro" ref={introRef} className="home-intro">
				<PageContainer>
					<div className="intro-layout">
						<div className="intro-header">
							<h1 className="home-hero-name">Sharon Miller</h1>
							<p className="home-hero-title">Head of Product Design</p>
						</div>

						<div ref={photoFrameRef} className="profile-photo-frame">
							<img
								src="/images/about and career/profile-photo-full.png"
								alt="Sharon Miller"
								className="profile-photo-intro"
							/>
						</div>

						<div className="intro-body">
							<div className="home-body-copy">
								<p>
									Most design teams are adopting AI tools. Fewer have figured out how to make
									that adoption work at the org level: the processes, the guardrails, the
									handoff patterns, and the infrastructure that lets every designer move faster
									without compromising craft or trust.
								</p>
								<p>
									That gap is where I work. Design leader at VSCO, where I built the
									AI-native operating model alongside shipping product. Previously at SurveyMonkey
									leading platform design and AI features. Twenty years bridging design, engineering,
									and product strategy.
								</p>
								<p>
									Looking for senior IC, staff, and leadership roles where the design challenge is as much about how the team works as what they ship.
								</p>
							</div>

							<Link to="/about" className="home-linkedin">
								My story →
							</Link>
						</div>
					</div>
				</PageContainer>
			</section>

			<section id="work" className="home-work">
				<PageContainer>
					<SectionHeading className="case-studies-section-heading" reveal>
						Case studies
					</SectionHeading>

					<div className="case-study-card-list">
						{CASE_STUDY_CARDS.map((study, index) => (
							<CaseStudyCard key={study.slug} study={study} revealIndex={index} />
						))}
					</div>
				</PageContainer>
			</section>
		</div>
	);
}
