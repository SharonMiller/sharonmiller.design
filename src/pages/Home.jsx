import { useRef } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/lumen";
import PageContainer from "../components/portfolio/PageContainer";
import { PORTFOLIO_NAV } from "../components/portfolio/PortfolioShell";
import SectionHeading from "../components/portfolio/SectionHeading";
import { CASE_STUDY_CARDS } from "../content/caseStudies/index.js";
import CaseStudyThumbnail from "../components/portfolio/CaseStudyThumbnail.jsx";
import { useIntroPhotoParallax } from "../hooks/useIntroPhotoParallax";
import "./Home.css";

function CaseStudyCard({ study }) {
	return (
		<article className="case-study-card">
			<Link to={study.href} className="case-study-card__link group">
				<div className="case-study-card__content">
					<p className="case-study-card__label">{study.label}</p>
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

	return (
		<div className="portfolio-page">
			<NavBar
				brand="SM"
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

						<div className="intro-body-row">
							<div className="intro-body">
								<div className="home-body-copy">
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

								<Link to="/about" className="home-linkedin">
									Learn More
								</Link>
							</div>

							<div ref={photoFrameRef} className="profile-photo-frame">
								<img
									src="/images/profile-photo-full.png"
									alt="Sharon Miller"
									className="profile-photo-intro"
								/>
							</div>
						</div>
					</div>
				</PageContainer>
			</section>

			<section id="work" className="home-work">
				<PageContainer>
					<SectionHeading className="case-studies-section-heading">Case studies</SectionHeading>

					<div className="case-study-card-list">
						{CASE_STUDY_CARDS.map((study) => (
							<CaseStudyCard key={study.slug} study={study} />
						))}
					</div>
				</PageContainer>
			</section>
		</div>
	);
}
