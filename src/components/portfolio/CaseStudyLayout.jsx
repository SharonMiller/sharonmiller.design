import SectionHeading from "./SectionHeading.jsx";

function Paragraphs({ items }) {
	return items.map((text, index) => <p key={index}>{text}</p>);
}

function BulletList({ items }) {
	return (
		<ul className="list-disc space-y-2 pl-5">
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

function SubSection({ title, paragraphs = [], list = [] }) {
	return (
		<div className="mt-10 first:mt-0">
			<h3 className="text-base font-semibold text-gray-900">{title}</h3>
			<div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
				{paragraphs.length > 0 && <Paragraphs items={paragraphs} />}
				{list.length > 0 && <BulletList items={list} />}
			</div>
		</div>
	);
}

function SectionBlock({ section }) {
	return (
		<section className="lumen-reveal mt-16">
			<SectionHeading className="case-study-section-heading">{section.title}</SectionHeading>
			<div className="space-y-4 text-base leading-relaxed text-gray-700">
				{section.paragraphs?.length > 0 && <Paragraphs items={section.paragraphs} />}
				{section.list?.length > 0 && <BulletList items={section.list} />}
				{section.subsections?.map((subsection) => (
					<SubSection key={subsection.title} {...subsection} />
				))}
				{section.stats?.length > 0 && (
					<div className="mt-8 flex flex-wrap gap-8">
						{section.stats.map((stat) => (
							<div key={stat.label}>
								<span className="block text-2xl font-bold text-gray-900">{stat.value}</span>
								<span className="block text-sm text-gray-500">{stat.label}</span>
							</div>
						))}
					</div>
				)}
				{section.table ? (
					<div className="overflow-x-auto rounded-xl border border-gray-200">
						<table className="w-full min-w-[320px] text-left text-sm">
							<thead>
								<tr className="border-b border-gray-200 bg-gray-50">
									{section.table.headers.map((header) => (
										<th
											key={header}
											className="px-4 py-3 font-semibold text-gray-900"
										>
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{section.table.rows.map((row) => (
									<tr key={row[0]} className="border-b border-gray-100 last:border-0">
										{row.map((cell, index) => (
											<td
												key={`${row[0]}-${index}`}
												className={`px-4 py-3 align-top ${index === 0 ? "font-medium text-gray-900" : "text-gray-600"}`}
											>
												{cell}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : null}
				{section.images?.length > 0 && (
					<div
						className={`my-8 grid gap-4 ${section.images.length > 1 ? "md:grid-cols-2" : ""}`}
					>
						{section.images.map((image) => (
							<figure key={image.src}>
								<img
									src={image.src}
									alt={image.alt}
									className="case-study-inline-image w-full"
								/>
								{image.caption ? (
									<figcaption className="mt-2 text-xs text-gray-400">{image.caption}</figcaption>
								) : null}
							</figure>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default function CaseStudyLayout({ study }) {
	return (
		<>
			<header className="lumen-reveal pb-8 pt-16">
				<div className="flex flex-col gap-8 md:flex-row md:items-start">
					<div className="order-2 md:order-none md:flex-1">
						<p className="text-sm text-gray-400">
							Case study · {study.year}
							{study.status ? ` · ${study.status}` : ""}
						</p>
						<h1 className="mt-2 text-2xl font-bold tracking-tight text-lumen-ink md:text-4xl lg:text-5xl">
							{study.title}
						</h1>
						<p className="mt-3 text-sm font-medium text-gray-900">{study.role}</p>
						<p className="mt-1 text-sm text-gray-500">{study.type}</p>
						<div className="mt-4 max-w-xl space-y-4 text-lg leading-relaxed text-gray-600">
							<Paragraphs items={study.summary} />
						</div>
					</div>
					{study.heroImage ? (
						<div className="order-1 mb-6 md:order-none md:mb-0 md:ml-8 md:shrink-0">
							<img
								src={study.heroImage.src}
								alt={study.heroImage.alt}
								className="case-study-hero-image"
							/>
							{study.heroImage.caption ? (
								<p className="mt-3 text-xs leading-snug text-gray-400">
									{study.heroImage.caption}
								</p>
							) : null}
						</div>
					) : null}
				</div>
			</header>

			{study.sections.map((section) => (
				<SectionBlock key={section.title} section={section} />
			))}

			{study.footer ? (
				<p className="lumen-reveal mt-16 border-t border-gray-100 pt-8 text-sm italic text-gray-500">
					{study.footer}
				</p>
			) : null}
		</>
	);
}
