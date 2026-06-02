export default function CaseStudyMeta({ study }) {
	return (
		<div className="case-study-meta">
			<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
				<span>{study.year}</span>
				{study.status ? (
					<>
						<span aria-hidden className="text-gray-300">
							·
						</span>
						<span className="font-medium text-lumen-terracotta">{study.status}</span>
					</>
				) : null}
			</div>

			{study.metrics?.length > 0 && (
				<div className="mt-6 flex flex-wrap gap-3">
					{study.metrics.map((metric) => (
						<div
							key={metric.label}
							className="case-study-metric-pill rounded-xl border border-gray-200 bg-white px-4 py-3"
						>
							<span className="block text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
								{metric.value}
							</span>
							<span className="mt-0.5 block text-xs text-gray-500">{metric.label}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
