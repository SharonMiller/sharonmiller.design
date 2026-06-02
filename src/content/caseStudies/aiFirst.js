const aiFirst = {
	slug: "ai-first",
	title: "Designing at the Speed of Thought",
	year: "2026",
	role: "Head of Product Design, VSCO",
	type: "Operating model · Platform delivery",
	status: "MVP launch June 23, 2026",
	hook: "Compressed concept-to-production cycles on two MVPs — without adding design systems headcount — by changing how the design org works, not just what it ships.",
	metrics: [
		{ value: "2", label: "MVPs in production build" },
		{ value: "1 wk", label: "Concept cycles" },
	],
	description:
		"AI-native operating model: two MVPs in production build, engineering handoff from working code, design org Flywheel adopted company-wide.",
	thumbnail: {
		src: "/images/workspace/dashboard-with-assistant.png",
		alt: "VSCO Workspace prototype with assistant panel",
	},
	impact: [
		"Two production MVPs (Workspace and Chat Agent) in build for June 2026 launch — designed and specified from working prototypes, not static Figma decks.",
		"Engineering handoff shifted from spec translation to forkable branches — fastest concept-to-build cycle the team had seen.",
		"Design × AI methodology rolled out to the full design org at All Hands 2026 with L3–L5 competency framework.",
		"Flywheel model adopted: design system → AI-assisted prototyping → production → system improvement.",
		"No dedicated design systems IC added — governance distributed through workflow.",
	],
	summary: [
		"VSCO needed to rebuild an acquired CRM for a new audience, on a small team, on a real deadline. The win was not which tool I used — it was that one design leader could carry platform vision, systems governance, and two 0→1 products without the org adding headcount.",
	],
	sections: [
		{
			title: "What the company needed",
			paragraphs: [
				"Post-acquisition rebuild of Táve into Workspace for aspiring creatives — a full MVP (lead to payment) plus a one-year vision — with a team that was already stretched.",
			],
		},
		{
			title: "What changed",
			list: [
				"Concept cycles compressed to roughly one week — decisions made in working UI, not review meetings about static mocks",
				"Prototype became the handoff artifact; engineering builds from code that already behaves correctly",
				"New Workspace/Card component family published to the design system, ready for cross-app use",
				"Template repos and MD context files so other designers can operate the same way without 1:1 onboarding every time",
				"Caught upgrade UX regression during prototype review before it reached production",
			],
		},
		{
			title: "Org-level impact",
			paragraphs: [
				"Presented the operating model to the full design organization. Defined AI competency by level. Configured shared Claude and GPT tools with design system constraints and research context embedded — institutional knowledge accessible to the whole team, not locked in one person's workflow.",
			],
		},
	],
	footer: "Product launches June 23, 2026. Prototype walkthrough available during an interview.",
};

export default aiFirst;
