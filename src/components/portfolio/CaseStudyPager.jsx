import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../content/caseStudies/index.js";

export default function CaseStudyPager({ slug }) {
	const index = CASE_STUDIES.findIndex((study) => study.slug === slug);
	if (index === -1) return null;

	const prev = CASE_STUDIES[index - 1];
	const next = CASE_STUDIES[index + 1];

	if (!prev && !next) return null;

	return (
		<nav
			className="mt-20 grid gap-4 border-t border-gray-100 pt-10 sm:grid-cols-2"
			aria-label="More case studies"
		>
			{prev ? (
				<Link
					to={`/case-study/${prev.slug}`}
					className="case-study-pager-link group rounded-xl border border-gray-200 p-5 transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
				>
					<span className="text-xs font-medium uppercase tracking-wider text-gray-400">
						Previous
					</span>
					<span className="mt-2 block text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-lumen-terracotta">
						{prev.title}
					</span>
				</Link>
			) : (
				<div />
			)}

			{next ? (
				<Link
					to={`/case-study/${next.slug}`}
					className="case-study-pager-link group rounded-xl border border-gray-200 p-5 text-left transition-all duration-200 hover:border-gray-300 hover:shadow-sm sm:text-right"
				>
					<span className="text-xs font-medium uppercase tracking-wider text-gray-400">
						Next
					</span>
					<span className="mt-2 block text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-lumen-terracotta">
						{next.title}
					</span>
				</Link>
			) : null}
		</nav>
	);
}
