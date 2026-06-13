import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { scrollPageToTop } from "../utils/scrollPageToTop.js";
import CaseStudyLayout from "../components/portfolio/CaseStudyLayout.jsx";
import CaseStudyPager from "../components/portfolio/CaseStudyPager.jsx";
import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import { getCaseStudy } from "../content/caseStudies/index.js";
import "../pages/Home.css";

export default function CaseStudyPage() {
	const { slug } = useParams();
	const study = getCaseStudy(slug);

	useEffect(() => {
		scrollPageToTop();
	}, [slug]);

	if (!study) {
		return <Navigate to="/#work" replace />;
	}

	return (
		<PortfolioShell activePath="/#work" background="#ffffff">
			<div className="mx-auto max-w-3xl">
				<BackLink to="/#work">← All case studies</BackLink>
				<CaseStudyLayout study={study} />
				<CaseStudyPager slug={slug} />
			</div>
		</PortfolioShell>
	);
}
