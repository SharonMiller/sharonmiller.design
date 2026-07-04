import { useRef } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/portfolio/PageContainer";
import PortfolioShell from "../components/portfolio/PortfolioShell";
import SectionHeading from "../components/portfolio/SectionHeading";
import { CASE_STUDY_CARDS } from "../content/caseStudies/index.js";
import CaseStudyThumbnail from "../components/portfolio/CaseStudyThumbnail.jsx";
import LockIcon from "../components/portfolio/LockIcon.jsx";
import { useIntroPhotoParallax } from "../hooks/useIntroPhotoParallax";
import "./Home.css";

const CARD_METRICS_MAX = 2;

function CaseStudyCard({ study, revealIndex, featured = false }) {
	const cardMetrics = study.metrics?.slice(0, CARD_METRICS_MAX) ?? [];

	return (
		<article
			className={`case-study-card lumen-reveal lumen-reveal--lift${featured ? " case-study-card--featured" : ""}`}
			data-reveal-index={revealIndex}
		>
			<Link to={study.href} className="case-study-card__link group">
				<div className="case-study-card__content">
					{study.company && (
						<p className="case-study-card__eyebrow">
							Case study · {study.company}
						</p>
					)}

					<h3 className="case-study-card__title">{study.title}</h3>

					<p className="case-study-card__meta">
						<span>{study.year}</span>
						{study.role ? <span> · {study.role}</span> : null}
						{study.gated && (
							<span className="case-study-card__meta-lock">
								{" · "}
								<LockIcon size={10} />
								Password required
							</span>
						)}
					</p>

					{study.hook ? <p className="case-study-card__description">{study.hook}</p> : null}

					{cardMetrics.length > 0 && (
						<div className="case-study-card__stats">
							{cardMetrics.map((m) => (
								<div key={m.label}>
									<span className="case-study-card__stat-value">{m.value}</span>
									<span className="case-study-card__stat-label">{m.label}</span>
								</div>
							))}
						</div>
					)}

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
		<PortfolioShell activePath="/" rawChildren wrapperClassName="page-load">
			<section id="intro" ref={introRef} className="home-intro">
				<PageContainer>
					<div className="intro-layout">
						<div className="intro-header">
							<h1 className="home-hero-name">Sharon Miller</h1>
							<p className="home-hero-title">Head of Product Design</p>
						</div>

						<div ref={photoFrameRef} className="profile-photo-frame">
							<div className="profile-photo-intro__track" aria-hidden="true">
								<img
									src="/images/about and career/profile-photo-full.png"
									alt="Sharon Miller"
									className="profile-photo-intro"
								/>
							</div>
						</div>

						<div className="intro-body">
							<div className="home-body-copy">
								<p>Complex products don&apos;t have to feel complicated.</p>
								<p>
									That&apos;s the design problem I keep coming back to: powerful systems that
									overwhelm the people they&apos;re meant to serve. Workflows that make sense in
									a spec but fail in practice. Organizations moving slowly not because of the
									people, but because of how the work is structured.
								</p>
								<p>
									AI is the biggest opportunity I&apos;ve seen to close that gap. Not as a feature
									to add, but as a way to redesign how complex work gets done.
								</p>
								<p>
									Head of Product Design at VSCO, where I led both. Previously at SurveyMonkey,
									redesigning complex enterprise experiences.
								</p>
								<p>
									One designer working this way is useful. A whole team working this way changes
									what&apos;s possible.
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

					<p className="case-studies-section-intro">
						VSCO studies are password-protected.{" "}
						<a href="mailto:sharonmillercreative@gmail.com">Email me for access</a>.
					</p>

					<div className="case-study-card-list">
						{CASE_STUDY_CARDS.map((study, index) => (
							<CaseStudyCard
								key={study.slug}
								study={study}
								revealIndex={index}
								featured={index === 0}
							/>
						))}
					</div>
				</PageContainer>
			</section>
		</PortfolioShell>
	);
}
