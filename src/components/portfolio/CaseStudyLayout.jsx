import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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

function PullQuote({ text }) {
	return <p className="case-study-pullquote">{text}</p>;
}

function SectionDivider({ text }) {
	return (
		<div className="case-study-divider">
			<span className="case-study-divider__text">{text}</span>
		</div>
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

function SubSection({ title, paragraphs = [], list = [], image }) {
	return (
		<div className="case-study-subsection">
			<h3 className="case-study-subsection__title">{title}</h3>
			<div className="case-study-section__content">
				{paragraphs.length > 0 && <Paragraphs items={paragraphs} />}
				{list.length > 0 && <BulletList items={list} />}
				{image && (
					<SectionImage
						src={image.src}
						alt={image.alt}
						caption={image.caption}
						fullWidth={image.fullWidth ?? true}
						contain={image.contain ?? true}
					/>
				)}
			</div>
		</div>
	);
}

function StatGrid({ stats, columns }) {
	const isPair = columns === 2 || stats.length === 2;
	return (
		<div className={`case-study-stat-grid${isPair ? " case-study-stat-grid--pair" : ""}`}>
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

function SectionImage({ src, alt, caption, fullWidth = false, contain = true }) {
	return (
		<figure className={`case-study-image${fullWidth ? " case-study-image--full" : ""}`}>
			<div className={`case-study-image__frame${contain ? " case-study-image__frame--contain" : ""}`}>
				<img src={src} alt={alt ?? ""} loading="lazy" className="case-study-image__img" />
			</div>
			{caption && <figcaption className="case-study-image__caption">{caption}</figcaption>}
		</figure>
	);
}

function SplitSectionImage({ src, alt, caption }) {
	return (
		<figure className="case-study-split__image">
			<div className="case-study-image__frame case-study-image__frame--contain">
				<img src={src} alt={alt ?? ""} loading="lazy" className="case-study-image__img" />
			</div>
			{caption && <figcaption className="case-study-image__caption">{caption}</figcaption>}
		</figure>
	);
}

function BeforeAfterImages({ before, after }) {
	return (
		<div className="case-study-before-after">
			<figure className="case-study-before-after__item">
				<p className="case-study-before-after__label">Before</p>
				<div className="case-study-image__frame case-study-image__frame--contain">
					<img src={before.src} alt={before.alt ?? "Before"} loading="lazy" className="case-study-image__img" />
				</div>
				{before.caption && <figcaption className="case-study-image__caption">{before.caption}</figcaption>}
			</figure>
			<figure className="case-study-before-after__item">
				<p className="case-study-before-after__label">After</p>
				<div className="case-study-image__frame case-study-image__frame--contain">
					<img src={after.src} alt={after.alt ?? "After"} loading="lazy" className="case-study-image__img" />
				</div>
				{after.caption && <figcaption className="case-study-image__caption">{after.caption}</figcaption>}
			</figure>
		</div>
	);
}

function TeamGrid({ team }) {
	if (!team?.columns?.length) return null;

	return (
		<section className="case-study-team lumen-reveal lumen-reveal--lift" aria-label="Project team">
			<SectionHeading className="case-study-section-heading">{team.title ?? "The team"}</SectionHeading>
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

/** Render ordered content blocks when a section defines them */
function ContentBlocks({ blocks }) {
	return blocks.map((block, blockIndex) => {
		switch (block.type) {
			case "stats":
				return <StatGrid key={blockIndex} stats={block.items} columns={block.columns} />;
			case "paragraphs":
				return <Paragraphs key={blockIndex} items={block.items} />;
			case "list":
				return <BulletList key={blockIndex} items={block.items} />;
			case "subsection":
				return <SubSection key={block.title} title={block.title} paragraphs={block.paragraphs} list={block.list} />;
			case "image":
				return (
					<SectionImage
						key={blockIndex}
						src={block.src}
						alt={block.alt}
						caption={block.caption}
						fullWidth={block.fullWidth ?? true}
						contain={block.contain ?? true}
					/>
				);
			case "beforeAfter":
				return (
					<BeforeAfterImages
						key={blockIndex}
						before={block.before}
						after={block.after}
					/>
				);
			case "embed":
				return (
					<FigmaEmbed
						key={blockIndex}
						src={block.src}
						caption={block.caption}
						height={block.height}
					/>
				);
			case "video":
				return <DemoVideo key={blockIndex} src={block.src} caption={block.caption} />;
			case "pullquote":
				return <PullQuote key={blockIndex} text={block.text} />;
			case "divider":
				return <SectionDivider key={blockIndex} text={block.text} />;
			default:
				return null;
		}
	});
}

/** Sections with layout="image-left" or layout="image-right" render 2-col */
function SectionBlock({ section, index }) {
	if (section.contentBlocks?.length) {
		return (
			<section className="case-study-section lumen-reveal lumen-reveal--lift" data-reveal-index={index}>
				<SectionHeading className="case-study-section-heading">{section.title}</SectionHeading>
				<div className="case-study-section__content">
					<ContentBlocks blocks={section.contentBlocks} />
				</div>
			</section>
		);
	}

	const hasImage = !!section.image;
	const layout = section.layout; // "image-left" | "image-right" | undefined

	const textContent = (
		<div className="case-study-section__content">
			{section.stats?.length > 0 && <StatGrid stats={section.stats} />}
			{section.paragraphs?.length > 0 && <Paragraphs items={section.paragraphs} />}
			{section.list?.length > 0 && <BulletList items={section.list} />}
			{section.closingParagraphs?.length > 0 && <Paragraphs items={section.closingParagraphs} />}
			{section.subsections?.length > 0 && (
				section.subsectionColumns ? (
					<div className="case-study-subsections-grid">
						{section.subsections.map((sub) => (
							<SubSection key={sub.title} {...sub} />
						))}
					</div>
				) : (
					section.subsections.map((sub) => (
						<SubSection key={sub.title} {...sub} />
					))
				)
			)}
			{!layout && hasImage && (
				<SectionImage
					src={section.image.src}
					alt={section.image.alt}
					caption={section.image.caption}
					fullWidth={section.imageFullWidth}
					contain={section.image.contain ?? true}
				/>
			)}
			{section.pullquote && <PullQuote text={section.pullquote} />}
		{section.beforeAfter && (
			<BeforeAfterImages before={section.beforeAfter.before} after={section.beforeAfter.after} />
		)}
		{section.video && <DemoVideo src={section.video.src} caption={section.video.caption} />}
			{section.embed && (
				<FigmaEmbed src={section.embed.src} caption={section.embed.caption} height={section.embed.height} />
			)}
		</div>
	);

	if (layout && hasImage) {
		return (
			<section className="case-study-section lumen-reveal lumen-reveal--lift" data-reveal-index={index}>
				<SectionHeading className="case-study-section-heading">{section.title}</SectionHeading>
				<div className={`case-study-split case-study-split--${layout}`}>
					{layout === "image-right" ? (
						<>
							{textContent}
							<SplitSectionImage
								src={section.image.src}
								alt={section.image.alt}
								caption={section.image.caption}
							/>
						</>
					) : (
						<>
							<SplitSectionImage
								src={section.image.src}
								alt={section.image.alt}
								caption={section.image.caption}
							/>
							{textContent}
						</>
					)}
				</div>
			</section>
		);
	}

	return (
		<section className="case-study-section lumen-reveal lumen-reveal--lift" data-reveal-index={index}>
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
					<h1 className="case-study-title">{study.title}</h1>
					<p className="case-study-header__role">
						{study.role}{study.year ? ` · ${study.year}` : ""}
					</p>
					{study.type && <p className="case-study-header__type">{study.type}</p>}
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

				{study.beforeImage && (
					<SectionImage
						src={study.beforeImage.src}
						alt={study.beforeImage.alt}
						caption={study.beforeImage.caption}
						fullWidth
						contain
					/>
				)}

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

			{study.relatedStudy && (
				<Link to={`/case-study/${study.relatedStudy.slug}`} className="case-study-related">
					<span className="case-study-related__label">{study.relatedStudy.label}</span>
					<p className="case-study-related__text">{study.relatedStudy.text}</p>
					<span className="case-study-related__cta">{study.relatedStudy.cta}</span>
				</Link>
			)}

			{study.relatedStudies?.length > 0 && (
				<div className="case-study-related-list">
					{study.relatedStudies.map((rs) => (
						<Link key={rs.slug} to={`/case-study/${rs.slug}`} className="case-study-related">
							<span className="case-study-related__label">{rs.label}</span>
							<p className="case-study-related__text">{rs.text}</p>
							<span className="case-study-related__cta">{rs.cta}</span>
						</Link>
					))}
				</div>
			)}
		</article>
	);
}
