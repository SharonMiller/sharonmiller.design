export default function CaseStudyMeta({ study }) {
	return (
		<div className="case-study-meta">
			<p className="case-study-meta__line">
				<span>{study.year}</span>
				{study.status ? (
					<>
						<span aria-hidden className="case-study-meta__sep">
							·
						</span>
						<span className="case-study-meta__status">{study.status}</span>
					</>
				) : null}
			</p>

			{study.metrics?.length > 0 && (
				<div className="case-study-meta__metrics">
					{study.metrics.map((metric) => (
						<div key={metric.label} className="case-study-meta__metric">
							<span className="case-study-meta__metric-value">{metric.value}</span>
							<span className="case-study-meta__metric-label">{metric.label}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
