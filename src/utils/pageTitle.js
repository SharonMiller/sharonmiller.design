import { getCaseStudy } from "../content/caseStudies/index.js";

const SITE_NAME = "Sharon Miller";

/** Human-readable title for analytics and the browser tab. */
export function getPageTitle(pathname) {
	if (pathname === "/") return `${SITE_NAME} — Product Designer`;
	if (pathname === "/about") return `About — ${SITE_NAME}`;
	if (pathname === "/contact") return `Contact — ${SITE_NAME}`;
	if (pathname === "/login") return `Portfolio Access — ${SITE_NAME}`;

	if (pathname.startsWith("/case-study/")) {
		const slug = pathname.replace("/case-study/", "").split("/")[0];
		const study = getCaseStudy(slug);
		if (study) return `${study.title} — ${SITE_NAME}`;
	}

	return `${SITE_NAME} — Product Designer`;
}
