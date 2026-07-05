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

const COMPANY_BY_SLUG = {
	"vsco-workspace": "VSCO",
	"operationalizing-ai-native-design": "VSCO",
	"design-system-governance": "VSCO",
	"survey-builder-transformation": "SurveyMonkey",
	"organizing-growth": "SurveyMonkey",
};

/** Order: lead with IC AI work → ops/org → systems → IC craft → growth */
export const CASE_STUDIES = [
	buildingAtlas,
	aiFirst,
	designSystemGovernance,
	growthDesign,
	organizingGrowth,
];

export const CASE_STUDY_CARDS = CASE_STUDIES.map(
	({
		slug,
		title,
		cardTitle,
		cardSubtitle,
		year,
		role,
		href,
		hook,
		cardHook,
		description,
		metrics,
		cardMetrics,
		thumbnail,
	}) => ({
		slug,
		label: "Case study",
		title,
		cardTitle: cardTitle ?? title,
		cardSubtitle,
		year,
		role,
		hook: cardHook ?? hook,
		href: href ?? `/case-study/${slug}`,
		description,
		metrics: cardMetrics ?? metrics,
		thumbnail,
		company: COMPANY_BY_SLUG[slug],
		gated: GATED_SLUGS.has(slug),
	}),
);

export function getCaseStudy(slug) {
	return CASE_STUDIES.find((study) => study.slug === slug);
}
