const aiFirst = {
	slug: "ai-first",
	title: "Designing at the Speed of Thought",
	year: "2026",
	role: "Design Lead, VSCO",
	type: "VSCO Workspace · AI-first product design · MVP June 23, 2026",
	status: "MVP launch June 23, 2026",
	previewImage: "/images/workspace/dashboard-with-assistant.png",
	description:
		"Built the AI-native operating model: governance, human-in-the-loop patterns, and design-engineering integration that makes AI trustworthy at scale.",
	metrics: [
		{ value: "1 wk", label: "Concept cycles" },
		{ value: "Flywheel", label: "DS + AI loop" },
	],
	heroImage: {
		src: "/images/workspace/dashboard-with-assistant.png",
		alt: "VSCO Workspace dashboard with embedded assistant, built as a live Cursor prototype",
		caption: "Workspace CRM prototype — designed in code, not static mocks",
	},
	summary: [
		"VSCO Workspace is a CRM for creative professionals — photographers, videographers, event makers — rebuilt from a legacy acquisition for an audience that needed business tools without the complexity of Dubsado or HoneyBook.",
		"The design scope was enormous: a full product atlas spanning an MVP (Lead to Booking to Payment) and a one-year vision covering CRM, task management, calendaring, AI-powered workflows, and business dashboards. The team was small. The timeline was real.",
		"I made a deliberate choice: design this product almost entirely in code, using Cursor as my primary design tool — not Figma.",
	],
	sections: [
		{
			title: "The Challenge",
			paragraphs: [
				"VSCO acquired Táve — a legacy CRM product — and needed to rebuild it from scratch for a new audience: aspiring creatives who needed to run a business but could not stomach the complexity of tools like Dubsado or HoneyBook.",
				"The design scope was enormous: a full product atlas spanning an MVP (Lead to Booking to Payment) and a one-year vision covering CRM, task management, calendaring, AI-powered workflows, and business dashboards. The team was small. The timeline was real.",
			],
		},
		{
			title: "The Approach: Code as Design Surface",
			subsections: [
				{
					title: "Cursor-First Prototyping",
					paragraphs: [
						"For most of the product, I skipped static Figma mocks entirely. Instead, I built interactive prototypes directly in Cursor — a React-based codebase that I could run in the browser, click through, and iterate on in real time.",
						"This was not just faster. It fundamentally changed what I was designing. Instead of approximating interactions in a static tool, I was designing with state, real layout behavior, and real component constraints. When the Kanban board needed a sheet drawer on card click, I built it. When the dashboard needed a KPI block that conditionally rendered an upsell banner, I designed it in the actual code.",
						"The prototype is deployed and live. Engineering handoff stopped being \"here's a Figma file\" and started being \"here's a working branch.\" This single change collapsed the design-to-engineering gap in a way that static specs never could.",
					],
					images: [
						{
							src: "/images/workspace/dashboard.png",
							alt: "Workspace dashboard with priorities, business insights, and upcoming jobs",
						},
						{
							src: "/images/cursor-prototype.png",
							alt: "Cursor AI conversation alongside a live product prototype",
							caption: "Iterating on interaction behavior directly in Cursor",
						},
					],
				},
				{
					title: "What Figma Was (and Wasn't) For",
					paragraphs: [
						"I used Figma for exactly one thing: the VUI design system.",
						"VSCO has a mature component library — VUI — and every time I needed a component that did not exist, I went to Figma to build it properly. Not to mock up screens. To extend the system.",
						"This distinction matters. Figma as a specification tool is slow and lossy. Figma as a component system is irreplaceable. I kept it in its lane.",
					],
				},
			],
		},
		{
			title: "The AI-Native Component Workflow",
			subsections: [
				{
					title: "Auditing Before Building",
					paragraphs: [
						"Whenever I encountered a pattern in the prototype that did not map to an existing VUI component, I used a custom Claude skill to audit the design against the VUI system before building anything new.",
						"The audit answered three questions: Does a close-enough component already exist? If not, what is the right structural pattern (slot/card/variant vs. boolean property)? What VUI tokens apply?",
						"This step alone prevented dozens of redundant or inconsistent components from entering the system.",
					],
				},
				{
					title: "Building New Components with Claude",
					paragraphs: [
						"Once the audit confirmed a gap, I used Claude to build the component directly in Figma using the Plugin API. Claude would write the plugin script, import the correct VUI primitives by key, construct the component set with proper auto-layout, and wire up component properties — boolean toggles, variant sets, text overrides.",
						"For example, the Workspace/Card and Workspace/Slot component family — which powers the entire dashboard card system — was built this way. Claude pulled in VUI Button, Action Icon, Badge, and Icon components by key, assembled the slot variants (Header, Body, Footer), and structured the component set so designers could swap surface treatments and right-element types without breaking the layout.",
						"This is a repeatable workflow: Pattern → audit against VUI → build with Claude → publish to library → use in Cursor prototype.",
					],
				},
			],
		},
		{
			title: "Teaching the Team",
			subsections: [
				{
					title: "Template Repos with MD Files",
					paragraphs: [
						"Speed without transferability is a dead end. From the beginning, I built this process to be teachable.",
						"I created template repositories that any designer on the team can spin up — preloaded with CLAUDE.md context files, project-specific skill instructions, and component conventions. The goal: a designer opens a template, reads the MD files, and has the mental model they need to work the same way I do without a two-hour onboarding call.",
						"The MD files document things that do not live in the codebase or the Figma file: why a pattern was chosen, what was audited and ruled out, where the component lives in the design system, and what the VUI token mapping is.",
					],
				},
				{
					title: "Engineering Ceremony Design",
					paragraphs: [
						"I worked with engineering to redesign our handoff and review ceremonies around this workflow. Instead of \"design review of Figma specs,\" we moved to:",
						"This reduced the \"lost in translation\" surface area dramatically. Decisions that used to turn into Jira comments or Slack threads happened synchronously in the code.",
					],
					list: [
						"Prototype review: engineers review the live Cursor prototype, not static screens",
						"Component alignment sessions: when I build a new VUI component, engineering gets a brief on the component API before any code is written — aligning on props, states, and edge cases while the design is still malleable",
						"Shared codebase: the design prototype lives in a repo that engineering can fork from, which means implementation starts from working code, not a mental translation of a spec",
					],
				},
			],
		},
		{
			title: "What We Built",
			paragraphs: ["In a compressed timeline, this process produced:"],
			list: [
				"A full MVP product atlas: Lead capture → Job creation → Contract/invoice send → Payment tracking",
				"A one-year vision: CRM, Kanban (job-status level, four columns), task management, calendaring, AI-powered workflows, business dashboards — scoped and sequenced across the crawl/walk/run/fly framework",
				"A new component family (Workspace/Card and Workspace/Slot) built natively in VUI, ready for cross-app publishing",
				"A live, interactive prototype that engineering used as the primary handoff artifact",
			],
			subsections: [
				{
					title: "Key product decisions from the prototype",
					list: [
						"Leads are not a separate nav item; jobs filtered by status covers the same need",
						"Onboarding uses embedded progressive disclosure, not a checklist modal",
						"Dashboard KPI blocks show Leads and Jobs; the year-to-date income block becomes an upsell banner for free tier users",
						"The upgrade UX regression (clean free UI → legacy paid UI) was caught and flagged during prototype review, leading to a theming fix roadmap",
					],
				},
			],
			images: [
				{
					src: "/images/workspace/contacts.png",
					alt: "Workspace contacts view with notes and job history",
				},
				{
					src: "/images/workspace/assistant.png",
					alt: "VSCO Assistant chat interface with contextual product actions",
				},
			],
		},
		{
			title: "The Bigger Shift",
			paragraphs: [
				"This case study is really about a question of leadership: what does it mean to model an AI-first design process for your team?",
				"It does not mean replacing designers with AI. It means changing what designers do with their time.",
				"The hours I would have spent making pixel-perfect Figma screens went into the prototype — into real UX decisions, interaction behavior, and component architecture. The hours I would have spent in component build sessions with a Figma expert went into Claude skill workflows that any designer can run.",
				"The result is a design practice that scales better, moves faster, and produces artifacts that engineering can actually use — without sacrificing craft or system coherence.",
				"I did not stop being a designer. I changed what being a designer looks like.",
			],
		},
		{
			title: "Toolchain Summary",
			table: {
				headers: ["Tool", "Role"],
				rows: [
					["Cursor", "Primary design surface — all screens, flows, interactions"],
					["Claude (Cowork)", "Design partner, decision support, component building"],
					["Component audit skill", "Component auditing against VUI before building"],
					["Component builder skill", "Building new VUI components via Figma Plugin API"],
					["Figma", "VUI design system only — no static screen specs"],
					["Template repos + MD files", "Team onboarding and process transfer"],
					["Live prototype", "Engineering handoff artifact"],
				],
			},
		},
	],
	footer:
		"Case study written May 2026. Product launches June 23, 2026. Full prototype available to walk through during an interview.",
};

export default aiFirst;
