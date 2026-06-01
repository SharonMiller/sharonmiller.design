/**
 * Horizontal career timeline with alternating milestones above/below the axis.
 */
export default function CareerTimeline({ title, items, graphicSrc, graphicAlt }) {
	return (
		<div className="lumen-reveal mt-12 first:mt-0">
			<h2 className="text-xl font-bold text-lumen-ink md:text-2xl">{title}</h2>

			{graphicSrc ? (
				<img
					src={graphicSrc}
					alt={graphicAlt ?? title}
					className="mt-12 hidden w-full md:block"
				/>
			) : (
				<div
					className="timeline mt-12 hidden md:block"
					style={{ "--timeline-count": items.length }}
					role="list"
				>
					<div className="timeline-axis" aria-hidden="true" />
					<div className="timeline-track">
						{items.map((item, index) => (
							<div
								key={`${item.period}-${item.title}`}
								className={`timeline-node ${index % 2 === 0 ? "timeline-node--above" : "timeline-node--below"}`}
								role="listitem"
							>
								<div className="timeline-connector" aria-hidden="true" />
								<div className="timeline-card">
									<p className="text-sm font-semibold text-lumen-ink">
										{item.period}
										<span className="font-normal text-lumen-secondary">
											{" "}
											| {item.location}
										</span>
									</p>
									<p className="mt-2 font-semibold text-lumen-ink">{item.title}</p>
									<p className="mt-2 text-sm leading-relaxed text-lumen-secondary">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Stacked layout on small screens */}
			<ul className="mt-10 space-y-10 md:hidden">
				{items.map((item) => (
					<li
						key={`${item.period}-mobile-${item.title}`}
						className="border-l-2 border-lumen-terracotta/50 pl-5"
					>
						<p className="text-sm font-semibold text-lumen-ink">
							{item.period}
							<span className="font-normal text-lumen-secondary">
								{" "}
								| {item.location}
							</span>
						</p>
						<p className="mt-2 font-semibold text-lumen-ink">{item.title}</p>
						<p className="mt-2 text-sm leading-relaxed text-lumen-secondary">
							{item.description}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
