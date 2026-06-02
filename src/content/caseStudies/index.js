import aiFirst from "./aiFirst.js";
import designSystemGovernance from "./designSystemGovernance.js";
import growthDesign from "./growthDesign.js";
import workspaceChatAgent from "./workspaceChatAgent.js";

/** Workiva-first order on home: systems → enterprise proof → operating model → product depth */
export const CASE_STUDIES = [
	designSystemGovernance,
	growthDesign,
	aiFirst,
	workspaceChatAgent,
];

export const CASE_STUDY_CARDS = CASE_STUDIES.map(
	({ slug, title, year, href, hook, description, metrics, thumbnail }) => ({
		slug,
		label: "Case study",
		title,
		year,
		hook,
		href: href ?? `/case-study/${slug}`,
		description,
		metrics,
		thumbnail,
	}),
);

export function getCaseStudy(slug) {
	return CASE_STUDIES.find((study) => study.slug === slug);
}
