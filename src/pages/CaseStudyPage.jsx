import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { scrollPageToTop } from "../utils/scrollPageToTop.js";
import CaseStudyLayout from "../components/portfolio/CaseStudyLayout.jsx";
import CaseStudyPager from "../components/portfolio/CaseStudyPager.jsx";
import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import { getCaseStudy, GATED_SLUGS } from "../content/caseStudies/index.js";
import "../pages/Home.css";

function hasClientAuthCookie() {
	return document.cookie.split(";").some((c) => c.trim().startsWith("site_auth_client="));
}

export default function CaseStudyPage() {
	const { slug } = useParams();
	const navigate = useNavigate();
	const study = getCaseStudy(slug);
	const isGated = GATED_SLUGS.has(slug);
	const [authReady, setAuthReady] = useState(!isGated);

	useEffect(() => {
		scrollPageToTop();
	}, [slug]);

	useEffect(() => {
		if (!isGated) return;
		if (hasClientAuthCookie()) {
			setAuthReady(true);
		} else {
			navigate(`/login?returnTo=/case-study/${slug}`, { replace: true });
		}
	}, [slug, isGated, navigate]);

	if (!study) {
		return <Navigate to="/#work" replace />;
	}

	// Prevent flash of content while auth check runs
	if (!authReady) return null;

	return (
		<PortfolioShell activePath="/#work">
			<BackLink to="/#work">← All case studies</BackLink>
			<CaseStudyLayout study={study} />
			<CaseStudyPager slug={slug} />
		</PortfolioShell>
	);
}
