import CaseStudyMeta from "./CaseStudyMeta.jsx";
import CaseStudyThumbnail from "./CaseStudyThumbnail.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Paragraphs({ items }) {
	return items.map((text, index) => <p key={index}>{text}</p>);
}

function BulletList({ items }) {
	return (
		<ul className="case-study-list list-disc space-y-2.5 pl-5">
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

function SubSection({ title, paragraphs = [], list = [] }) {
	return (
		<div className="mt-8 first:mt-0">
			<h3 className="text-base font-semibold text-gray-900">{title}</h3>
			<div className="mt-3 space-y-4 text-base leading-relaxed text-gray-600">
				{paragraphs.length > 0 && <Paragraphs items={paragraphs} />}
				{list.length > 0 && <BulletList items={list} />}
			</div>
		</div>
	);
}

function SectionBlock({ section }) {
	return (
		<section className="case-study-section">
			<SectionHeading className="case-study-section-heading">{section.title}</SectionHeading>
			<div className="space-y-4 text-base leading-relaxed text-gray-700">
				{section.paragraphs?.length > 0 && <Paragraphs items={section.paragraphs} />}
				{section.list?.length > 0 && <BulletList items={section.list} />}
				{section.subsections?.map((subsection) => (
					<SubSection key={subsection.title} {...subsection} />
				))}
			</div>
		</section>
	);
}

export default function CaseStudyLayout({ study }) {
	return (
		<article className="case-study-article">
			<header className="case-study-header">
				<div className="case-study-header__top">
					<div className="min-w-0 flex-1">
						<p className="lumen-section-label">Case study</p>
						<h1 className="mt-3 text-3xl font-bold tracking-tight text-lumen-ink md:text-4xl lg:text-5xl">
							{study.title}
						</h1>
						<p className="mt-4 text-sm font-medium text-gray-900">{study.role}</p>
						<p className="mt-1 text-sm text-gray-500">{study.type}</p>
					</div>
					<CaseStudyThumbnail image={study.thumbnail} variant="page" />
				</div>

				{study.hook ? (
					<p className="case-study-hook mt-8 text-xl font-semibold leading-snug text-gray-900 md:text-2xl">
						{study.hook}
					</p>
				) : null}

				<CaseStudyMeta study={study} />

				{study.impact?.length > 0 && (
					<div className="case-study-impact mt-8 rounded-xl border border-gray-200 bg-stone-50 p-5 md:p-6">
						<p className="text-xs font-semibold uppercase tracking-wider text-lumen-terracotta">
							Company impact
						</p>
						<ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-800">
							{study.impact.map((item) => (
								<li key={item} className="flex gap-3">
									<span
										aria-hidden
										className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lumen-terracotta"
									/>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{study.summary?.length > 0 && (
					<div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-gray-600">
						<Paragraphs items={study.summary} />
					</div>
				)}
			</header>

			<div className="case-study-body">
				{study.sections.map((section) => (
					<SectionBlock key={section.title} section={section} />
				))}
			</div>

			{study.footer ? (
				<p className="mt-16 border-t border-gray-100 pt-8 text-sm text-gray-500">
					{study.footer}
				</p>
			) : null}
		</article>
	);
}
