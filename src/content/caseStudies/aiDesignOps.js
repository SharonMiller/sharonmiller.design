const AW = "/images/Atlas Workspace";
const SC = "/images/scout";
const DO = "/images/ai design ops";

const aiDesignOps = {
	slug: "ai-design-ops",
	title: "AI-First Design at VSCO",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design leadership · Process · AI tooling",
	hook: "One designer moving faster is a personal win. A whole team changing how they work is a design leadership problem. I rebuilt VSCO's design process from the artifact up: code prototypes as the handoff artifact, with the infrastructure to make it the default for every designer.",
	metrics: [
		{ value: "4", label: "Cursor skills, zero setup" },
		{ value: "1 template", label: "Use it. Open in Cursor. Done." },
		{ value: "40+", label: "Team workflows documented" },
		{ value: "0", label: "Additional headcount" },
	],
	description:
		"Code prototypes as the design and handoff artifact. A template repo any designer can fork and run. A published component library for Scout. The org-level work that turns individual AI fluency into a team capability.",
	thumbnail: {
		src: `${DO}/IMG_0495.png`,
		alt: "Scout animation playground running in the browser alongside a Cursor agent conversation — the AI-native design workflow",
	},
	impact: [
		"Engineering handoff changed from a Figma file to a working branch. No translation layer. No back-and-forth on what behaviors mean.",
		"@vsco/scout-ui shipped: a modular, cross-product React component library for the Scout AI assistant, designed in code and contributed back to VUI.",
		"sandbox-design-starter-web template repo: any VSCO designer can fork it, open in Cursor, and start with VUI, rules, and skills pre-loaded. Full setup in one Cursor prompt.",
		"Four skills encoding workflows that previously required engineering help: project setup, prototype-to-Figma, VUI audit, and eng-ready release.",
		"40+ documented team workflows across design system quality, prototyping, research, critique, operations, and AI automation.",
	],
	summary: [
		"Figma specs have a translation problem. A designer finishes a screen, engineering picks it up, and what ships is a close approximation: a static file can't communicate behavior, edge cases, or the small decisions made between design and code.",
		"There was also a practical barrier. Getting a React prototype running at VSCO required enough technical setup that most designers never got there. The ones who did were starting from scratch each time, with no guardrails and no shared context.",
		"The goal was to fix both. Change what the design artifact is. And make the process easy enough that any designer on the team can run it.",
	],
	sections: [
		{
			title: "The problem",
			paragraphs: [
				"Figma handoffs break at the boundary. A spec communicates a finished state. It cannot communicate the click behavior, the loading state, the error message, the decision about whether this modal is dismissible. Engineering fills in the gaps, and design reviews the result and marks up a list of corrections. The cycle repeats until both sides give up or ship.",
				"The technical barrier compounded it. Learning Cursor means going slow to go fast. Getting a React app running at VSCO required Node version management, token setup, branch selection, Figma MCP configuration: enough friction that most designers never got started. The ones who did had no guardrails: no VUI rules, no shared context, no way to scale what they figured out.",
			],
		},
		{
			title: "Code as the design surface",
			image: {
				src: `${DO}/ai-first-process-diagram.svg`,
				alt: "AI-first design process diagram: Context → Cursor Prototype → Feedback Loop → VUI Audit → Eng-Ready Branch",
				caption: "The full workflow: context in, branch out. Designer owns judgment; AI handles execution.",
			},
			imageFullWidth: true,
			paragraphs: [
				"For Workspace Atlas, static Figma was skipped entirely. The prototype was built directly in Cursor: a React app, running in the browser, with real state and clickable flows. Behavior, edge cases, and conditional logic were designed in actual code, not approximated in a static file.",
				"A Claude project connected to Jira, Confluence, and the PRD serves as a persistent context layer. Claude synthesizes current product thinking into Cursor prompts rather than starting from scratch each time. The context updates as scope changes.",
				"Engineering handoff becomes 'here's the branch.' Design office hours let product and engineering QA in real time. Changes push to eng-ready once per sprint so nothing disrupts in-flight work.",
				"Because the prototype is a live URL, design partners — photographers available for early feedback — can test flows same day. No Figma account required, no resetting state. Drop the link, get real reactions, iterate before engineering touches it.",
			],
		},
		{
			title: "Scaling the design system with Claude Skills",
			paragraphs: [
				"Figma did not go away. When a flow was ready for review or needed to feed back into the design system, the prototype was pushed to Figma automatically using an HTML-to-Design integration built into the Cursor workflow. Real layers, easy to polish, ready to contribute components to VUI.",
				"When an audit confirmed a real gap in VUI, Claude built the component directly in Figma via the Plugin API. Claude writes the plugin script, imports VUI primitives by node key, sets up auto-layout, and wires component properties. The Workspace/Card and Workspace/Slot component families were built this way.",
			],
			subsections: [
				{
					title: "The repeatable pattern",
					paragraphs: [
						"When a prototype surface establishes a pattern with no VUI equivalent: audit with the cursor-to-figma-vui skill, build in Figma with Claude writing a plugin script against VUI primitives, publish to the library, then use it as a real component back in Cursor.",
						"Every new component that goes through this cycle makes the next cycle faster. VUI stops being a design artifact maintained by a specialist and becomes the foundation that lets design move at engineering speed.",
					],
				},
			],
		},
		{
			title: "The infrastructure",
			imageFullWidth: true,
			pullquote: "A personal workflow isn't a process. The template repo is what makes this teachable to anyone on the team.",
			paragraphs: [
				"sandbox-design-starter-web is a VSCO Enterprise GitHub template. Start from the template in GitHub, open in Cursor, and rules and skills are already active. VSCO Gothic fonts are bundled so typography matches Figma from the first dev server start.",
			],
			image: {
				src: `${DO}/IMG_0471-crop.png`,
				alt: "Design Best Practices for Cursor Starter Repos — the always-on rules file loaded into every designer's Cursor session",
				caption: "The always-on rules file: design system tokens, VUI conventions, prototype vs. production mode. Every designer gets this context automatically.",
			},
			subsections: [
				{
					title: "Cursor rules",
					paragraphs: [
						"Four always-on rules ship with every repo. They enforce VUI tokens and component hierarchy, prevent CSS from fighting component defaults, set prototype context (clarity over production patterns), and translate designer vocabulary to git terms. Every designer starts with the same guardrails automatically.",
					],
				},
				{
					title: "Skills",
					paragraphs: [
						"Five skills encode workflows that previously required engineering help:",
					],
					list: [
						"project-setup: first-time onboarding. Node, pnpm, tokens, branches, Figma MCP. Cursor walks through it conversationally. No terminal knowledge required.",
						"prototype-to-figma: captures a running prototype screen into Figma via MCP, converts hardcoded values to VUI tokens, flags manual follow-ups. A screen ready for design crit in minutes.",
						"cursor-to-figma-vui: deeper VUI audit for component contribution or engineering handoff. Checks token bindings, naming, auto-layout, accessibility annotations.",
						"eng-ready-release: diffs working branch against eng-ready, generates a changelog entry, posts to Figma via MCP. Maps to the engineering handoff moment with no git knowledge required.",
						"design-contribution: when a prototype pattern is ready to become a VUI component. Runs the audit, builds in Figma, publishes.",
					],
				},
				{
					title: "Three-stage lifecycle",
					paragraphs: [
						"wip: active iteration. concept-testing: stable for research. eng-ready: polished handoff with changelog and Figma link. The branch name tells engineering what stage work is in.",
					],
				},
			],
		},
		{
			title: "Scout: designing for agentic UX",
			paragraphs: [
				"Designing for an AI agent is not a flow problem. There are no screens to sequence. The agent needs to communicate different things: thinking, asking, confirming, completing, handing off, celebrating. Any combination, any order, depending on what the user says. The design system has to be modular: a vocabulary of output primitives the system composes at runtime, not a sequence it steps through.",
				"The work started inside the Workspace Atlas prototype in Cursor. When it was ready to move to Figma, the cursor-to-figma-vui skill converted hardcoded values to VUI tokens and flagged what needed manual swaps. A product designer then did the detailed design work: polishing the UI, refining interactions, bringing the screens to the quality bar needed before anything went back to code.",
				"Once screens were solid, Claude audited them against VUI, identified gaps, and built the component system. 17 primitives covering every moment in a Scout conversation: ScoutPanel, MessageBubble, ThinkingIndicator, OptionChip, ConfirmationStep, HandoffCard, CelebrationState, FeedbackRow, TextComposer, SmartPrompts, ZeroState, and onboarding stages. That work became @vsco/scout-ui, a cross-product React library any VSCO surface can pull from rather than rebuilding the same states from scratch.",
			],
			embed: {
				src: "/demos/scout-celebration-playground.html",
				caption: "The celebration animation shipped as a parametric playground. The head of brand wanted to tweak it, so instead of a hardcoded value it shipped with sliders.",
				height: 580,
			},
		},
		{
			title: "How this changed the team",
			image: {
				src: `${DO}/IMG_7153-crop.png`,
				alt: "VSCO Design × AI competency framework — defining AI fluency across every design level from L2 to L6",
				caption: "The Design × AI competency framework: AI defined as a core skill at every level, not a specialist track.",
			},
			imageFullWidth: true,
			paragraphs: [
				"The process validated something. Once the workflow, skills, and template repo existed, the team's use of Claude expanded to cover every area of design practice, not by mandate, but because the infrastructure made it easy.",
				"Forty-plus documented team workflows now exist across eight practice areas: design system quality, prototyping and coding, team operations, research and strategy, design review and critique, hiring and people management, communication, and AI systems and automation.",
			],
			subsections: [
				{
					title: "Design system quality",
					paragraphs: [
						"VUI design system audits via Figma MCP: Claude reads Figma files directly to check component token usage, spacing, and naming without manual screenshot comparison. Atlas VUI header audit. Dashboard card component standardization. VUI best practice review before critique or handoff. The audit that used to take days runs in hours.",
					],
				},
				{
					title: "Operations and research",
					paragraphs: [
						"A design project tracker that pulls live from Confluence initiative pages daily, replacing a manually updated doc that was always out of date. Daily brief automation pulling from calendar and Slack context. Hypothesis development, paywall optimization research, competitor identification, unmoderated user testing scripts: research and strategy work that used to take a full day now happens in an hour with VSCO-specific context built in.",
					],
				},
				{
					title: "Review, critique, and communication",
					paragraphs: [
						"A Figma comments-to-code pipeline where design comments automatically inform Cursor iterations. Design critique support: Claude flags inconsistencies and missing states before the session, so critique time focuses on hierarchy, flow, and edge cases. Automated Slack posts after review sessions and tracker syncs, formatted to the team's established conventions. Responses to PRDs and briefs drafted with full cross-functional context.",
					],
				},
			],
		},
		{
			title: "The outcome",
			stats: [
				{ value: "4", label: "Cursor skills, no engineering help needed" },
				{ value: "1 template", label: "Use it. Open in Cursor. Done." },
				{ value: "40+", label: "Team workflows documented" },
				{ value: "0", label: "Additional headcount added" },
			],
			paragraphs: [
				"The compounding effect is not one designer working faster. It is an org that raises its floor. The designer on their second project has the same starting context as the person who built the system. A prototype built by anyone on the team is grounded in VUI from the first Cursor session.",
				"Detailed design still matters. Pixel-level craft is still required, applied to the moments where it has the highest impact rather than spread across every screen in a flow. The design system handles the baseline. The designer's judgment goes into the flourishes and decisions that make something feel considered.",
				"The question worth sitting with: what does it mean to lead a design team into an AI-first way of working? This is the answer I built.",
			],
			image: {
				src: `${DO}/IMG_4301.png`,
				alt: "VSCO Design Project Tracker — live dashboard pulling initiative status from Confluence, showing all active design work in one view",
				caption: "The design project tracker: live initiative status, risks, and blockers pulled from Jira, Confluence, and docs. No manual updates.",
			},
		},
	],
};

export default aiDesignOps;
