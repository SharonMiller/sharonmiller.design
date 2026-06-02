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
	({ slug, title, year, href, previewImage, description, metrics }) => ({
		slug,
		label: "Case study",
		title,
		year,
		href: href ?? `/case-study/${slug}`,
		previewImage,
		description,
		metrics,
	}),
);

export function getCaseStudy(slug) {
	return CASE_STUDIES.find((study) => study.slug === slug);
}
