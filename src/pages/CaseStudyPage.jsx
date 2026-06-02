import { Link, Navigate, useParams } from "react-router-dom";
import CaseStudyLayout from "../components/portfolio/CaseStudyLayout.jsx";
import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import { getCaseStudy } from "../content/caseStudies/index.js";
import "../pages/Home.css";

export default function CaseStudyPage() {
	const { slug } = useParams();
	const study = getCaseStudy(slug);

	if (!study) {
		return <Navigate to="/#work" replace />;
	}

	return (
		<PortfolioShell activePath="/#work">
			<div className="mx-auto max-w-3xl">
				<BackLink to="/#work" />
				<CaseStudyLayout study={study} />
				<p className="lumen-reveal mt-16 text-center">
					<Link
						to="/#work"
						className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
					>
						← All case studies
					</Link>
				</p>
			</div>
		</PortfolioShell>
	);
}
