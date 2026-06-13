const DS = "/images/design ops";

const designSystemGovernance = {
	slug: "design-system-governance",
	title: "Distributed Building, Centralized Quality",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design Systems · AI Tooling · Process",
	hook: "Four surfaces, four libraries, zero shared source of truth. Fixed it in less than a day — no dedicated hire, no reorg.",
	metrics: [
		{ value: "< 1 day", label: "Audit to fix cycle" },
		{ value: "0", label: "New headcount" },
	],
	description:
		"Web, React Native, iOS, and Android each had their own Figma library. Built the governance workflow that unified them and keeps them in sync.",
	thumbnail: {
		src: `${DS}/IMG_9072.png`,
		alt: "Figma Dashboard Card System for review: component inventory, variants, and auto-layout built programmatically",
	},
	beforeImage: {
		src: `${DS}/ds-audit-problem.png`,
		alt: "Account page and Workspace Atlas screens showing design drift across surfaces in the same sprint",
		caption:
			"Account page (left) and Workspace Atlas (center, right). The center version is how engineering started building without a shared source of truth. Same sprint, already drifting.",
	},
	impact: [
		"38 components audited, 18 compliance issues found and fixed. Components that looked correct but weren't token-linked. Visually right, system wrong.",
		"Unified design library across web, React Native, iOS, and Android, replacing surface-specific libraries that had grown independently and diverged.",
		"Dashboard Card System built from scratch, the foundation that unblocked two product lines shipping June 2026.",
		"Solid primitive foundation now enables the team to design interactions at the component level and scale them across surfaces using Cursor.",
	],
	summary: [
		"At VSCO, every platform had its own Figma library. Web, React Native, iOS, and Android had drifted apart.",
		"The solution wasn't to centralize who builds. It was to centralize quality. I owned the standard. The team built to it. An AI-assisted audit workflow became the quality gate.",
		"Less than a day to audit the full library. Zero new headcount.",
	],
	team: {
		columns: [
			{
				title: "Role",
				items: [
					"Head of Product Design, owns and approves the system",
					"Design Team contributes to design system",
					"No dedicated design systems IC",
				],
			},
			{
				title: "Stack",
				items: ["MCP", "Claude Cowork", "Claude skills", "Slack"],
			},
			{
				title: "Model",
				items: [
					"Distributed contribution",
					"Automated compliance gate",
					"Approval-based governance",
					"Code Connect handoff",
				],
			},
		],
	},
	relatedStudy: {
		slug: "operationalizing-ai-native-design",
		label: "Read next",
		text: "The governance workflow runs on the same AI-native model that built the products it governs.",
		cta: "See how AI-native prototyping fed this system →",
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
				src: `${DS}/IMG_1792.png`,
				alt: "Dashboard Card component variants in Figma showing the Figma library composite components",
				caption: "The Figma library has composite components designers use to work fast. The code design system has primitives. The workflow has to know the difference.",
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
					title: "Post for review and iterate",
					paragraphs: [
						"After fixes are applied, the workflow posts a structured summary to the design Slack channel: what was audited, what changed, what needs human review. A reusable skill generates these posts in the team's established review format automatically. Designers and leads review in Figma and leave comments. Claude reads those comments, incorporates the feedback, and re-runs validation.",
					],
				},
				{
					title: "Engineering notification",
					paragraphs: [
						"Once the Figma component passes review, the workflow posts to the engineering channel with a specific message: which components were updated, what changed in the token bindings or naming, and what they need to update in Code Connect. Engineers know exactly what to do without a meeting or a Loom.",
					],
				},
				{
					title: "The differentiator",
					paragraphs: [
						"Most Figma MCP integrations are read-only. This workflow uses a write-capable execution layer built in Claude Cowork. Claude generates and runs plugin scripts directly inside the live Figma environment. That is the difference between AI that flags design system problems and AI that fixes them, posts them for review, and closes the loop with engineering.",
					],
				},
			],
		},
		{
			title: "Building the solution",
			paragraphs: [
				"Governance is one capability. The other is using the same workflow to build net-new components that didn't exist yet.",
				"The Dashboard Card System was built from scratch using Claude as a Figma agent via the Figma MCP. The architecture uses a slot-based composition model: a single card organism made from interchangeable header, body, and footer molecules. Rather than one card per use case, the system is combinatorially flexible: a small library of slots covers a large range of layouts. That decision was deliberate and documented for engineering, because auto-layout in Figma doesn't support CSS-style stretch across sibling cards the way code does. The implementation note went with the component.",
				"The audit pass across 38 Dashboard components found 18 unlinked style nodes: components where VSCO Gothic was visually correct but not token-linked to the library. Visually correct is not the same as system correct. A component that looks right but isn't bound to the token breaks when the design system updates. The audit catches that. A manual review often doesn't.",
			],
			list: [
				"Full typography migration to the Typography component with correct variant mapping",
				"All hardcoded hex values replaced with semantic VUI tokens",
				"Icon library standardized. Third-party library removed.",
				"Component replacement plan created for every custom implementation with a VUI equivalent, sequenced by risk",
				"Naming convention decision surfaced: Dashboard/ prefix vs Workspace/, flagged in the review brief rather than decided unilaterally. Governance means surfacing the right decisions, not just fixing things.",
			],
			image: {
				src: `${DS}/IMG_9072.png`,
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
				src: `${DS}/IMG_2671.png`,
				alt: "Claude posting a VUI design review summary in Slack with component changes and token updates",
				caption:
					"Claude's design review post in Slack: structured, specific, actionable. No meeting required.",
			},
		},
		{
			title: "The outcome",
			stats: [
				{ value: "< 1 day", label: "Audit to fix cycle" },
				{ value: "4", label: "Surfaces on one library" },
				{ value: "0", label: "New headcount" },
			],
			paragraphs: [
				"The standard model assumes a dedicated design systems specialist: one person running quarterly audits, keeping Figma and code aligned across surfaces. When that person leaves, the system drifts. And across four surfaces (web, React Native, iOS, Android) the maintenance burden multiplied.",
				"A unified library with an automated governance loop changes that. Audits happen when something changes, not on a quarterly schedule. Fixes happen the same day. Documentation writes itself. The system stays current because the process doesn't require a dedicated person.",
				"The more important outcome: a reliable primitive foundation means designers can focus on great interactions at the component level and scale them across surfaces using Cursor. The design system is no longer just a style guide; it's the infrastructure that makes AI-native design work.",
			],
			image: {
				src: `${DS}/IMG_1792.png`,
				alt: "Dashboard Card component variants in Figma: Row, Header-Body-Footer, and Card layouts",
				caption:
					"The completed Dashboard Card System: three layout variants, token-bound, Code Connect-ready.",
			},
		},
	],
};

export default designSystemGovernance;
