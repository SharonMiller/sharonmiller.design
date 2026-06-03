const designSystemGovernance = {
	slug: "design-system-governance",
	title: "Design System Governance",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design Systems · AI Tooling · Process",
	hook: "Full design system audit in hours. Zero new headcount.",
	metrics: [
		{ value: "< 1 day", label: "Full library audit" },
		{ value: "0", label: "New headcount" },
	],
	description:
		"Full VUI library audit in hours, not weeks. Remediation backlog cleared. Workspace components ready to ship. No headcount added.",
	thumbnail: {
		src: "/images/cursor 2.png",
		alt: "Cursor agent running commits on VSCO design system components",
	},
	impact: [
		"Full VUI library audit completed in hours. Typography, tokens, icons, and component adoption gaps surfaced and documented across the entire app.",
		"Dashboard Card System built from scratch with proper auto-layout, token bindings, and Code Connect-ready naming.",
		"Zero dedicated design systems headcount added. Governance distributed into the workflow rather than concentrated in a specialist role.",
		"React and React Native repo templates rolled out so design team adoption scales without per-project onboarding overhead.",
		"Unblocked two product lines shipping June 2026.",
	],
	summary: [
		"The design system had grown faster than the team could maintain it. Figma and code were diverging. Designers were working around the library. Engineers were hardcoding values. The standard fix was to hire a dedicated design systems IC. We did not have that headcount.",
		"Most of what a design systems designer does is systematic. Audit, identify gaps, execute fixes, validate, document, repeat. That loop is automatable.",
	],
	team: {
		columns: [
			{
				title: "Role",
				items: [
					"Head of Product Design",
					"Design systems owner",
					"No dedicated DS IC hire",
				],
			},
			{
				title: "Stack",
				items: ["Figma + Plugin API", "Claude skills", "Cursor", "Slack"],
			},
			{
				title: "Skills",
				items: [
					"Automated audit",
					"Token governance",
					"Code Connect",
					"Component architecture",
				],
			},
		],
	},
	sections: [
		{
			title: "The problem",
			layout: "image-right",
			paragraphs: [
				"The findings were specific. More specific than any manual review would have caught quickly.",
			],
			list: [
				"Component adoption was near zero. Across the entire app, only Button and Modal were being pulled from the VUI library. Everything else was custom.",
				"Typography was raw h1–h6 tags throughout, not the Typography component. Brand type updates would not propagate.",
				"Colors were hardcoded hex values, not semantic tokens. Dark mode would not work. Brand color changes would require a manual find-and-replace across the codebase.",
				"A third-party icon library had crept into one section, breaking visual consistency.",
				"Large sections of the app had zero token usage at all.",
			],
			image: {
				src: "/images/cursor 2.png",
				alt: "Cursor agent running commits on VSCO design system components",
				caption: "The gap between Figma and code had grown faster than the team could manually audit.",
			},
		},
		{
			title: "Defining the approach",
			paragraphs: [
				"The governance workflow runs as a Claude skill with a write-capable Figma execution layer. Not advisory AI. Operational AI that inspects and modifies the live file.",
			],
			subsections: [
				{
					title: "Session Preflight",
					paragraphs: [
						"Before any design work begins, the skill verifies the Figma MCP connection, confirms access to the VUI file, and runs a live script that loads a Token Map from the actual VUI variables and styles. Claude builds a session-scoped index of every token by scope: fill, text, spacing, radius. It looks up real IDs rather than guessing.",
					],
				},
				{
					title: "Audit",
					paragraphs: [
						"Inspects every component against a full structural checklist: variant and property structure, boolean vs. variant usage, auto-layout, sizing modes, token bindings, layer naming, and component descriptions. Output is a tiered report with specific fix instructions per node. Passing, issues, blockers.",
					],
				},
				{
					title: "Execute and validate",
					paragraphs: [
						"A second agent executes fixes directly in the Figma file via the Plugin API: rebuilding auto-layout, rewiring token bindings, creating missing variants, correcting property naming to match code conventions. After every write, a verification script runs against all modified node IDs. Progress is blocked until every node passes.",
					],
				},
				{
					title: "The differentiator",
					paragraphs: [
						"Most Figma MCP integrations are read-only. This workflow uses a write-capable execution layer. Claude generates and runs plugin scripts directly inside the live Figma environment. That is the difference between AI that flags design system problems and AI that fixes them.",
					],
				},
			],
		},
		{
			title: "Building the solution",
			paragraphs: [
				"Governance is one capability. The other is using the same workflow to build net-new components that didn't exist yet.",
				"The Dashboard Card System was built from scratch directly in Figma via Claude and the Plugin API. Auto-layout, variant properties, token bindings, and Code Connect-ready naming all handled programmatically. Two product teams were blocked waiting for this component. It shipped the same week the workflow was set up.",
			],
			list: [
				"Full typography migration to the Typography component with correct variant mapping",
				"All hardcoded hex values replaced with semantic VUI tokens",
				"Icon library standardized. Third-party library removed.",
				"Component replacement plan created for every custom implementation with a VUI equivalent, sequenced by risk",
			],
			image: {
				src: "/images/IMG_9072.png",
				alt: "Figma Dashboard Card System: Component Inventory and card variants for review",
				caption:
					"Dashboard Card System built from scratch via Claude + Plugin API. Component inventory, auto-layout, token bindings, Code Connect naming: all generated programmatically.",
			},
			imageFullWidth: true,
		},
		{
			title: "Cross-functional work",
			layout: "image-right",
			paragraphs: [
				"After each audit or build session, Claude posts a structured summary to the design Slack channel: what was reviewed, what changed, what still needs attention. Engineers get a notification when their components are updated. The loop closes without a meeting.",
				"Cursor prototypes imported into Figma via html-to-design look visually correct but are completely disconnected from VUI. A companion skill reads a color map, font map, and spacing map specific to VSCO's Cursor prototype output and generates a plugin script that replaces all hardcoded values with VUI token bindings.",
				"This is what makes the Cursor prototype loop viable at the design system level. Prototypes built fast in code can be brought into VUI compliance without manual rework.",
			],
			image: {
				src: "/images/IMG_2671.png",
				alt: "Claude posting a VUI design review summary in Slack with component changes and token updates",
				caption:
					"Claude's design review post in Slack: structured, specific, actionable. No meeting required.",
			},
		},
		{
			title: "The outcome",
			stats: [
				{ value: "< 1 day", label: "Full library audit" },
				{ value: "0", label: "New headcount" },
			],
			paragraphs: [
				"The standard model assumes a dedicated design systems specialist. One person whose job is maintaining the system, running quarterly audits, keeping Figma and code aligned. When that person leaves, the system drifts.",
				"This workflow distributes governance into the design process itself. Audits happen when something changes, not on a quarterly schedule. Fixes happen the same day. Documentation writes itself. The system stays current because the process does not require a dedicated person to run it.",
				"React and React Native repo templates rolled out so design team adoption scales without per-project onboarding overhead. Two product lines unblocked for June 2026 ship dates.",
			],
			image: {
				src: "/images/IMG_1792.png",
				alt: "Dashboard Card component variants in Figma: Row, Header-Body-Footer, and Card layouts",
				caption:
					"The completed Dashboard Card System: three layout variants, token-bound, Code Connect-ready.",
			},
		},
	],
	footer:
		"Full audit documentation, skill files, and plugin scripts available to review during an interview.",
};

export default designSystemGovernance;
