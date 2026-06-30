const DS = "/images/design ops";

const designSystemGovernance = {
	slug: "design-system-governance",
	title: "AI-Powered Design Ops",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design leadership · AI tooling · Operations",
	hook: "Head of Design. Zero specialist hires. Here's what AI handles.",
	metrics: [
		{ value: "0", label: "Specialist hires added" },
		{ value: "< 1 day", label: "Audit to fix cycle" },
		{ value: "10+", label: "Automated workflows running" },
	],
	description:
		"How AI extended what one Head of Design can do across every dimension of the role: design system governance, org operations, specialist craft work, and team capability building.",
	thumbnail: {
		src: `${DS}/IMG_9072.png`,
		alt: "Figma Dashboard Card System: component inventory and variants built programmatically with Claude",
	},
	relatedStudies: [
		{
			slug: "operationalizing-ai-native-design",
			label: "Related",
			text: "The operating model that lets one designer own all of this.",
			cta: "See the AI-native design process →",
		},
		{
			slug: "vsco-workspace",
			label: "The product",
			text: "The product that was built while all of this infrastructure was being created.",
			cta: "See VSCO Workspace →",
		},
	],
	sections: [
		{
			title: "Design system at scale",
			paragraphs: [
				"At VSCO, web, React Native, iOS, and Android each had their own Figma library. They had grown independently and diverged. The standard fix requires a dedicated design systems specialist. That was not an option.",
				"Instead: a Claude skill with write access to the live Figma file via the Plugin API. Not advisory AI. Operational AI that inspects, fixes, and reports.",
			],
			subsections: [
				{
					title: "What the workflow does",
					layout: "image-right",
					list: [
						"Component check: reads every component against a structural checklist. Variant structure, auto-layout, token bindings, layer naming, descriptions.",
						"Tiered report: passing, issues, blockers, with specific fix instructions per node.",
						"Direct fixes: rebuilds auto-layout, rewires token bindings, creates missing variants, corrects property naming.",
						"Verified: every change confirmed before moving on. Progress blocked until every modified node passes.",
						"Slack summary: what was audited, what changed, what needs human review. Engineers notified when their components update.",
					],
					image: {
						src: `${DS}/IMG_5693.png`,
						alt: "Component inventory output: atomic design breakdown of Dashboard Card System with atoms, molecules, and organisms",
						caption: "The audit output: component inventory with atomic breakdown, library candidacy, and code priority.",
					},
				},
				{
					title: "Engineering-side guardrails",
					layout: "spec-left",
					paragraphs: [
						"The Figma library has composite components designers use to work fast. The code design system has primitives. Getting them to stay in sync required more than governance of Figma files.",
						"The React and React Native design libraries now include written guidance documents that engineering's Cursor agents read when expanding components. Instead of pre-building every variant, the docs describe what configurations are valid. The agent checks its output against the guidelines rather than guessing from a visual. Consistency at scale without pre-building every permutation.",
					],
					specBlock: {
						title: "modal.md",
						sections: [
							{
								heading: "Structure",
								lines: [
									"  sections: header · body · footer (optional)",
									"  radius: radius.standard (4px)",
									"  backdrop: color.overlay.scrim · 40% opacity",
								],
							},
							{
								heading: "Header",
								lines: [
									"  font: vsco-gothic · 17/semibold · caps",
									"  color: color.text.primary",
									"  close icon: optional — omit if footer has dismiss button",
									"  padding: 24 24 16",
								],
							},
							{
								heading: "Body",
								lines: [
									"  font: 16/medium desktop · 13/medium mobile",
									"  content: text | rows | form | image",
									"  ...",
								],
							},
						],
					},
				},
			],
			beforeImage: {
				src: `${DS}/ds-audit-problem.png`,
				alt: "Account page and Workspace Atlas screens showing design drift across surfaces in the same sprint",
				caption: "Same sprint, already drifting. Account page left, Workspace Atlas center and right, built without a shared source of truth.",
			},
		},
		{
			title: "Running the org",
			paragraphs: [
				"The hardest part of leading a design team across multiple squads is staying current. Updates live in Confluence pages, Jira boards, PDF briefs, and Google Sheets. No one has time to read all of them.",
			],
			subsections: [
				{
					title: "VSCO Design Project Tracker",
					paragraphs: [
						"A scheduled Claude artifact that runs every day without being triggered. It reads Confluence initiative pages across every squad, pulls current status, and renders a live dashboard: what each team is working on, whether they are on track, and direct links to Figma files, Jira boards, and source documents.",
						"One view instead of fifteen tabs. Leadership visibility without a status meeting.",
					],
					image: {
						src: "/images/ai design ops/IMG_4301.png",
						alt: "VSCO Design Project Tracker dashboard: all active design initiatives with status chips, owners, and key dates",
						caption: "All active VSCO design initiatives in one view. Status, key dates, links — no status meeting required.",
						fade: true,
					},
				},
				{
					title: "Daily brief",
					paragraphs: [
						"Each morning, a scheduled Claude skill pulls from calendar and Slack context and generates a design team brief: priorities, blockers, upcoming reviews, anything that needs attention that day. Formatted and posted to Slack automatically.",
					],
				},
			],
		},
		{
			title: "Complex work without specialist hires",
			paragraphs: [
				"The instinct whenever something complex comes up: try Claude before proposing a hire.",
			],
			subsections: [
				{
					title: "Animation",
					paragraphs: [
						"Cursor could not get the celebration animation right — hard-edged blobs instead of the soft mesh the design called for. Switched to Claude, which approached the SVG math differently and got there. The head of brand wanted to tweak parameters, so it shipped as an interactive playground with parametric controls.",
						"Same story with the Scout thinking indicator: six animation styles built as interactive prototypes. Both ship as live playgrounds, not hardcoded values.",
					],
					image: {
						src: "/images/ai design ops/animation-screenshot.png",
						alt: "Scout celebration animation playground: soft mesh blob with parametric sliders for speed, turbulence, blur, and color",
						caption: "Celebration animation: Cursor couldn't get the soft mesh right. Claude could. Shipped as a parametric playground so brand can adjust without a code change.",
					},
				},
				{
					title: "Paywall and conversion design",
					layout: "image-left",
					paragraphs: [
						"I built a Cursor playground for designing VSCO paywalls: a live environment where I could iterate on layout, copy, and conversion patterns in real time against actual product context. Claude audited existing paywalls against conversion best practices, identified gaps, and generated variants directly in the playground.",
						"Once the direction was right, the designs moved into Figma where Superwall could leverage them for implementation. Research, iteration, and handoff in a single workflow, without a specialist research pass or a separate design sprint.",
					],
					image: {
						src: "/images/paywall-variants.png",
						alt: "VSCO paywall variants generated with Claude: conversion audit and design options in one session",
						caption: "Paywall audit and variants: research and design in a single session.",
					},
				},
			],
		},
		{
			title: "Building team capability",
			paragraphs: [
				"The leverage in AI-first design is not one person moving faster. It is a whole team moving faster together. One designer on the team built and shipped Studio Pro largely in Cursor. AI fluency is now defined as a required competency at every IC level.",
				"The custom skills, always-on rules, template repo, and onboarding system that made this possible are documented separately.",
			],
			readMore: {
				slug: "operationalizing-ai-native-design",
				title: "Operationalizing AI-Native Design",
				text: "The full operating model: rules, skills, handoff workflow, and how the team adopted it",
			},
		},
		{
			title: "Also using Claude for...",
			paragraphs: [
				"These are lighter use cases — things I reach for regularly that are harder to show than to describe. Happy to go deeper on any of them.",
			],
			list: [
				"PRD summarization: Product writes them long. Design needs them short.",
				"Flow thinking: working through flows and edge cases before committing, pulling in competitor patterns and research as we go.",
				"AI practice tracking: how other teams are figuring out AI-first design. What's working, what's worth trying, what to skip.",
				"Hypothesis development: structuring design and product hypotheses in a consistent, testable format.",
				"JDs and panel comms: job descriptions and interview panel communications.",
				"PRD responses: scope pushback, clarifying questions, design rationale.",
				"Design critique and research: summarizing sessions, prepping what to look for and why, and writing post-session takeaways.",
				"Figma comments-to-code: design feedback informing the next Cursor iteration automatically.",
				"Change context: design system updates and change summaries posted to engineering.",
			],
			closingParagraphs: [
				"I love talking about this. Reach out at sharonmillercreative@gmail.com if you want to go deeper on any of them.",
			],
		},
	],
};

export default designSystemGovernance;
