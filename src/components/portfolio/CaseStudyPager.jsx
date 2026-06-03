import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../content/caseStudies/index.js";
import CaseStudyThumbnail from "./CaseStudyThumbnail.jsx";

export default function CaseStudyPager({ slug }) {
	const others = CASE_STUDIES.filter((s) => s.slug !== slug);
	if (others.length === 0) return null;

	return (
		<nav className="case-study-pager" aria-label="More case studies">
			<p className="case-study-pager__label">More case studies</p>
			<div className="case-study-pager__grid">
				{others.map((study) => (
					<Link
						key={study.slug}
						to={`/case-study/${study.slug}`}
						className="case-study-pager__card group"
					>
						<div className="case-study-pager__thumb">
							<CaseStudyThumbnail image={study.thumbnail} variant="pager" />
						</div>
						<div className="case-study-pager__info">
							<span className="case-study-pager__eyebrow">Case study</span>
							<span className="case-study-pager__title">{study.title}</span>
							{study.hook && (
								<span className="case-study-pager__hook">{study.hook}</span>
							)}
						</div>
					</Link>
				))}
			</div>
		</nav>
	);
}
