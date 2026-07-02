import designSystemGovernance from "./designSystemGovernance.js";
import buildingAtlas from "./buildingAtlas.js";
import aiFirst from "./aiFirst.js";
import growthDesign from "./growthDesign.js";
import organizingGrowth from "./organizingGrowth.js";

export const GATED_SLUGS = new Set([
	"vsco-workspace",
	"operationalizing-ai-native-design",
	"design-system-governance",
]);

/** Order: lead with IC AI work → ops/org → systems → IC craft → growth */
export const CASE_STUDIES = [
	buildingAtlas,
	aiFirst,
	designSystemGovernance,
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
		gated: GATED_SLUGS.has(slug),
	}),
);

export function getCaseStudy(slug) {
	return CASE_STUDIES.find((study) => study.slug === slug);
}
