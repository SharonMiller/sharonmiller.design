const designSystemGovernance = {
	slug: "design-system-governance",
	title: "Design System Governance with AI",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design Systems · Platform risk",
	hook: "Restored design-system trust without adding headcount — and unblocked two product lines shipping June 2026.",
	metrics: [
		{ value: "0", label: "New DS hires" },
		{ value: "4", label: "Full audit vs. weeks" },
	],
	description:
		"Restored a drifting design system without headcount — full audit in hours, remediation backlog cleared, Workspace components ready to ship.",
	thumbnail: {
		placeholder: true,
	},
	impact: [
		"Avoided a dedicated design systems hire while the team was already at capacity on two MVPs.",
		"Surfaced and documented the full remediation backlog — typography, tokens, icons, component adoption — in hours instead of a multi-week specialist engagement.",
		"Shipped a Dashboard Card System (Header, Body, Footer, Card) with proper token bindings, ready for production and Code Connect.",
		"Rolled out React and React Native repo templates so the broader design team could adopt the system without per-project onboarding overhead.",
	],
	summary: [
		"The design system had grown faster than the team could maintain it. Figma and code were diverging. Designers were working around the library. The standard fix was a dedicated IC — headcount we did not have.",
	],
	sections: [
		{
			title: "What was at stake",
			paragraphs: [
				"A design system nobody trusts becomes shelfware. Engineers hardcode values. Brand updates do not propagate. Dark mode and consistency break. Two major product initiatives depended on a system that could not carry the load.",
			],
		},
		{
			title: "What the company got",
			list: [
				"Full library audit and prioritized fix list — completed in hours, not weeks",
				"Production-ready Dashboard Card System for Workspace, built with auto-layout and semantic tokens",
				"Documented component replacement plan sequenced by risk — modals first, shared layout last",
				"Team-wide templates and AI assistant configs so adoption scales beyond one person",
				"No incremental design systems headcount",
			],
		},
		{
			title: "How it worked (brief)",
			paragraphs: [
				"I built a governance loop: Claude audits the Figma library via MCP, identifies drift against code patterns, and generates structured reports. A second agent executes fixes through the Figma Plugin API — token bindings, variants, naming — then re-validates and documents.",
				"The workflow replaced what would normally require a dedicated design systems designer running quarterly audits. Audit, fix, validate, and document happen in the same cycle.",
			],
		},
	],
	footer: "Audit documentation and skill files available to review during an interview.",
};

export default designSystemGovernance;
