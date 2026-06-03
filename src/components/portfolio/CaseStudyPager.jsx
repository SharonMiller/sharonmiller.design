import { useRef } from "react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../content/caseStudies/index.js";
import { scrollPageToTop } from "../../utils/scrollPageToTop.js";
import CaseStudyThumbnail from "./CaseStudyThumbnail.jsx";

function scrollTrack(track, direction) {
	if (!track) return;
	const card = track.querySelector(".case-study-pager__card");
	const gap = 12;
	const amount = (card?.offsetWidth ?? 240) + gap;
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	track.scrollBy({
		left: direction * amount,
		behavior: reduceMotion ? "auto" : "smooth",
	});
}

export default function CaseStudyPager({ slug }) {
	const trackRef = useRef(null);
	const others = CASE_STUDIES.filter((s) => s.slug !== slug);
	if (others.length === 0) return null;

	return (
		<nav className="case-study-pager" aria-label="More case studies">
			<div className="case-study-pager__header">
				<p className="case-study-pager__label">More case studies</p>
				<div className="case-study-pager__controls">
					<button
						type="button"
						className="case-study-pager__control"
						aria-label="Scroll to previous case studies"
						onClick={() => scrollTrack(trackRef.current, -1)}
					>
						<span aria-hidden>←</span>
					</button>
					<button
						type="button"
						className="case-study-pager__control"
						aria-label="Scroll to next case studies"
						onClick={() => scrollTrack(trackRef.current, 1)}
					>
						<span aria-hidden>→</span>
					</button>
				</div>
			</div>
			<div
				ref={trackRef}
				className="case-study-pager__track"
				role="list"
				tabIndex={0}
				aria-label="Other case studies"
			>
				{others.map((study) => (
					<Link
						key={study.slug}
						to={`/case-study/${study.slug}`}
						role="listitem"
						className="case-study-pager__card group"
						onClick={scrollPageToTop}
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
