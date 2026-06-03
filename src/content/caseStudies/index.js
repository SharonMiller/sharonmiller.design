import designSystemGovernance from "./designSystemGovernance.js";
import buildingAtlas from "./buildingAtlas.js";
import aiDesignOps from "./aiDesignOps.js";
import growthDesign from "./growthDesign.js";
import organizingGrowth from "./organizingGrowth.js";

/** Order: most technically differentiated → product + process → org-level ops → IC craft → systems/leadership */
export const CASE_STUDIES = [
	designSystemGovernance,
	buildingAtlas,
	aiDesignOps,
	growthDesign,
	organizingGrowth,
];

export const CASE_STUDY_CARDS = CASE_STUDIES.map(
	({ slug, title, year, role, href, hook, description, metrics, thumbnail }) => ({
		slug,
		label: "Case study",
		title,
		year,
		role,
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
