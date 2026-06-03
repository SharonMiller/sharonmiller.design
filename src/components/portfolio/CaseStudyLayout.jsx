import { useRef, useEffect } from "react";
import CaseStudyMeta from "./CaseStudyMeta.jsx";
import SectionHeading from "./SectionHeading.jsx";

function DemoVideo({ src, caption }) {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ threshold: 0.25 }
		);
		observer.observe(video);
		return () => observer.disconnect();
	}, []);

	return (
		<figure className="case-study-video">
			<video
				ref={videoRef}
				src={src}
				muted
				loop
				playsInline
				preload="metadata"
				className="case-study-video__player"
			/>
			{caption && <figcaption className="case-study-video__caption">{caption}</figcaption>}
		</figure>
	);
}

function Paragraphs({ items }) {
	return items.map((text, index) => (
		<p key={index} className="case-study-paragraph">{text}</p>
	));
}

function BulletList({ items }) {
	return (
		<ul className="case-study-bullets">
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

function SubSection({ title, paragraphs = [], list = [] }) {
	return (
		<div className="case-study-subsection">
			<h3 className="case-study-subsection__title">{title}</h3>
			<div className="case-study-section__content">
				{paragraphs.length > 0 && <Paragraphs items={paragraphs} />}
				{list.length > 0 && <BulletList items={list} />}
			</div>
		</div>
	);
}

function StatGrid({ stats }) {
	return (
		<div className="case-study-stat-grid">
			{stats.map((stat) => (
				<div key={stat.label} className="case-study-stat-card">
					<span className="case-study-stat-card__value">{stat.value}</span>
					<span className="case-study-stat-card__label">{stat.label}</span>
				</div>
			))}
		</div>
	);
}

function FigmaEmbed({ src, caption, height = 450 }) {
	return (
		<figure className="case-study-embed">
			<div className="case-study-embed__frame">
				<iframe
					src={src}
					height={height}
					width="100%"
					frameBorder="0"
					allowTransparency="true"
					allowFullScreen
					title={caption ?? "Figma prototype"}
					loading="lazy"
				/>
			</div>
			{caption && <figcaption className="case-study-image__caption">{caption}</figcaption>}
		</figure>
	);
}

function SectionImage({ src, alt, caption, fullWidth = false }) {
	return (
		<figure className={`case-study-image${fullWidth ? " case-study-image--full" : ""}`}>
			<img src={src} alt={alt ?? ""} loading="lazy" className="case-study-image__img" />
			{caption && <figcaption className="case-study-image__caption">{caption}</figcaption>}
		</figure>
	);
}

function TeamGrid({ team }) {
	if (!team?.columns?.length) return null;

	return (
		<section className="case-study-team" aria-label="Project team">
			<SectionHeading className="case-study-section-heading">The team</SectionHeading>
			<div className="case-study-team__grid">
				{team.columns.map((column) => (
					<div key={column.title} className="case-study-team__column">
						<h3 className="case-study-team__title">{column.title}</h3>
						<ul className="case-study-team__list">
							{column.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}

/** Sections with layout="image-left" or layout="image-right" render 2-col */
function SectionBlock({ section, index }) {
	const hasImage = !!section.image;
	const layout = section.layout; // "image-left" | "image-right" | undefined

	const textContent = (
		<div className="case-study-section__content">
			{section.stats?.length > 0 && <StatGrid stats={section.stats} />}
			{section.paragraphs?.length > 0 && <Paragraphs items={section.paragraphs} />}
			{section.list?.length > 0 && <BulletList items={section.list} />}
			{section.closingParagraphs?.length > 0 && <Paragraphs items={section.closingParagraphs} />}
			{section.subsections?.map((sub) => (
				<SubSection key={sub.title} {...sub} />
			))}
			{!layout && hasImage && (
				<SectionImage
					src={section.image.src}
					alt={section.image.alt}
					caption={section.image.caption}
					fullWidth={section.imageFullWidth}
				/>
			)}
			{section.video && <DemoVideo src={section.video.src} caption={section.video.caption} />}
			{section.embed && (
				<FigmaEmbed src={section.embed.src} caption={section.embed.caption} height={section.embed.height} />
			)}
		</div>
	);

	if (layout && hasImage) {
		return (
			<section className="case-study-section">
				<SectionHeading className="case-study-section-heading">{section.title}</SectionHeading>
				<div className={`case-study-split case-study-split--${layout}`}>
					{layout === "image-right" ? (
						<>
							{textContent}
							<figure className="case-study-split__image">
								<img src={section.image.src} alt={section.image.alt ?? ""} loading="lazy" />
								{section.image.caption && (
									<figcaption className="case-study-image__caption">{section.image.caption}</figcaption>
								)}
							</figure>
						</>
					) : (
						<>
							<figure className="case-study-split__image">
								<img src={section.image.src} alt={section.image.alt ?? ""} loading="lazy" />
								{section.image.caption && (
									<figcaption className="case-study-image__caption">{section.image.caption}</figcaption>
								)}
							</figure>
							{textContent}
						</>
					)}
				</div>
			</section>
		);
	}

	return (
		<section className="case-study-section">
			<SectionHeading className="case-study-section-heading">{section.title}</SectionHeading>
			{textContent}
		</section>
	);
}

export default function CaseStudyLayout({ study }) {
	return (
		<article className="case-study-article">
			<header className="case-study-header">
				{/* Title block */}
				<div className="case-study-header__title-block">
					<p className="lumen-section-label">Case study</p>
					<h1 className="case-study-title">{study.title}</h1>
					<p className="case-study-header__role">{study.role}</p>
					<p className="case-study-header__type">{study.type}</p>
				</div>

				{/* Hero image — full width */}
				{study.thumbnail && (
					<div className="case-study-hero">
						<img
							src={study.thumbnail.src}
							alt={study.thumbnail.alt ?? study.title}
							className="case-study-hero__img"
						/>
					</div>
				)}

				{study.hook && (
					<p className="case-study-hook">{study.hook}</p>
				)}

				<CaseStudyMeta study={study} />

				{study.impact?.length > 0 && (
					<div className="case-study-impact">
						<p className="case-study-impact__label">Company impact</p>
						<ul className="case-study-impact-list">
							{study.impact.map((item) => (
								<li key={item} className="case-study-impact-list__item">
									<span aria-hidden className="case-study-impact-list__dot" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{study.summary?.length > 0 && (
					<div className="case-study-summary">
						<Paragraphs items={study.summary} />
					</div>
				)}
			</header>

			{study.team ? <TeamGrid team={study.team} /> : null}

			<div className="case-study-body">
				{study.sections.map((section, i) => (
					<SectionBlock key={section.title} section={section} index={i} />
				))}
			</div>

			{study.footer && (
				<p className="case-study-footer">{study.footer}</p>
			)}
		</article>
	);
}
