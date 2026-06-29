const aiFirst = {
	slug: "operationalizing-ai-native-design",
	title: "Operationalizing AI-Native Design",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Operating model · Platform delivery",
	status: "MVP launch June 23, 2026",
	hook: "Shipped two products. Zero design hires. Here's the operating model.",
	metrics: [
		{ value: "0", label: "Design hires added" },
		{ value: "~1 wk", label: "Concept to working spec" },
		{ value: "June 23", label: "Shipped on schedule" },
	],
	description:
		"AI-native operating model: Cursor as the primary design surface, working branches as engineering handoff, and a Flywheel that made the design system stronger with every prototype.",
	thumbnail: {
		src: "/images/ai design ops/ai-first-process-diagram.svg",
		alt: "Design x AI Flywheel: prototype surfaces gaps, gaps go through the design system, system strengthens the next prototype",
	},
	relatedStudies: [
		{
			slug: "vsco-workspace",
			label: "Read next",
			text: "The operating model only makes sense alongside the product it shipped.",
			cta: "See the product we shipped while building this model →",
		},
		{
			slug: "design-system-governance",
			label: "Go deeper",
			text: "The design system automation, org operations, and everything else AI runs at VSCO.",
			cta: "See AI-Powered Design Ops →",
		},
	],
	sections: [
		{
			title: "The problem",
			paragraphs: [
				"A Figma spec is an approximation. A designer finishes a screen, engineering picks it up, and a week later what ships is close but not exact. Not because anyone did something wrong. A static file cannot communicate behavior, edge cases, or the small decisions that happen in the space between design and code.",
				"At VSCO this played out specifically. Engineering was using Cursor to reference design concepts visually in a separate repo, reading the code as a visual, not a spec. Output came back close but not exact. They wanted Figma redlines. The artifact was the problem, not the people.",
				"There was a second barrier. Getting a React prototype running at VSCO required enough setup that most designers never got there. And the ones who did were starting from scratch each time, with no guardrails to keep things aligned with the design system. The process was not teachable.",
			],
		},
		{
			title: "The approach",
			subsectionColumns: true,
			image: {
				src: "/images/Atlas Workspace/cursor ide.png",
				alt: "Cursor agent making commits to the VSCO design workspace prototype",
				caption: "Cursor iterating on the VSCO Workspace prototype: 272 commits, concept to working spec in roughly one week.",
			},
			subsections: [
				{
					title: "Cursor: the design surface",
					paragraphs: [
						"The prototype was built directly in Cursor — a React app running in the browser, with real state. Engineering handoff became 'here's the branch.' Design office hours ran three times a week so product and engineering could drop in and clarify in real time.",
					],
				},
				{
					title: "Claude: context and strategy",
					paragraphs: [
						"A Claude project connected to Jira, Confluence, and linked PRDs served as a persistent context layer. Rather than writing prompts from scratch, Claude synthesized current product thinking — scope, research, constraints, decisions — into prompts that produced better output.",
					],
				},
				{
					title: "Figma: review surface",
					paragraphs: [
						"Figma didn't go away. When a flow was ready for review, the prototype was pushed to Figma via an HTML-to-Design integration — real layers, ready to polish or contribute back to the design system. Figma as a spec tool is slow. As a component system and review surface, it's irreplaceable.",
					],
				},
			],
		},
		{
			title: "The Flywheel",
			image: {
				src: "/images/ai design ops/ai-first-process-diagram.svg",
				alt: "The Design x AI Flywheel: prototype surfaces gaps, gaps go through the design system, system strengthens the next prototype",
				contain: true,
			},
			paragraphs: [
				"A well-maintained design system makes AI-assisted prototyping possible. AI-assisted prototyping surfaces design system gaps fast. Each cycle makes both stronger.",
				"The Dashboard Card system is the concrete proof point. Building Workspace in Cursor surfaced that the card system did not exist as a proper design system component. That gap went through the Flywheel: audited via the Figma Plugin API, built programmatically in the design system with correct token bindings, published to the library, pulled back into the prototype. The prototype got better. The design system got stronger. Neither required a separate sprint.",
				"The design system stopped being a design artifact. It became the foundation that lets design move at engineering speed.",
			],
			readMore: {
				slug: "design-system-governance",
				title: "AI Across a Design Org",
				text: "The full design system automation workflow: audit, fix, and report via the Figma Plugin API",
			},
		},
		{
			title: "The infrastructure",
			paragraphs: [
				"A process only one person can run is not a process. sandbox-design-starter-web is a VSCO Enterprise GitHub template any designer on the team can fork. Open it in Cursor and the rules and skills are already active. VSCO Gothic fonts are bundled so typography matches Figma from the first dev run. One prompt starts the full setup.",
			],
			subsections: [
				{
					title: "Always-on rules",
					layout: "image-right",
					paragraphs: [
						"Cursor rules run automatically on every prompt. Designers don't have to remember them.",
					],
					list: [
						"Design system rule: typography variants, color tokens, component hierarchy. No raw HTML elements or hex values.",
						"No-override rule: prevents CSS from fighting design system component defaults.",
						"Prototype rule: tells the agent this is a concept, optimize for clarity and testable UX, not production patterns.",
						"Vocabulary rule: translates designer language to git actions in passing. 'Save my changes' becomes a commit. 'Send it to the link' becomes a push and deploy. No lecture required.",
					],
					image: {
						src: "/images/ai design ops/IMG_0471.png",
						alt: "Design Best Practices for Cursor Starter Repos: the always-on rules document that runs on every prompt",
						caption: "The rules file: read by the agent on every prompt. Designers don't configure anything.",
					},
				},
				{
					title: "Skills for every stage",
					paragraphs: [
						"Skills are on-demand workflows triggered by a single prompt in Cursor.",
					],
					list: [
						"Project setup: first-time onboarding. Walks through Node, branches, dev server, and Figma connection.",
						"Prototype to Figma: captures the live prototype into Figma for review, converts hardcoded values to design system tokens, flags what needs a manual swap.",
						"Design system audit: checks whether a prototype pattern maps to an existing component before building a new one.",
						"Eng-ready release: diffs main vs eng-ready, generates a changelog, and can post a summary to Figma via the Figma MCP.",
					],
				},
				{
					title: "Three-stage lifecycle",
					list: [
						"wip: active iteration. Design moves freely, not for testing.",
						"concept-testing: stable enough for user research sessions. Last week's build is available for testing while this week's iteration is already in wip.",
						"eng-ready: polished handoff. Updated on a predictable schedule with a Cursor-generated changelog so engineers always know what changed before they see it.",
					],
				},
			],
		},
		{
			title: "The handoff prompt",
			paragraphs: [
				"Engineering was reading design concepts visually in Cursor and getting output that was close but not exact. They wanted Figma redlines. The handoff prompt is what replaced them.",
				"When design pushes to eng-ready, a Claude skill auto-generates a structured prompt and posts it to Slack. The prompt covers:",
			],
			list: [
				"What the feature is and how it should behave.",
				"Exact specs for anything ambiguous: corner radius, spacing, shadow values, interaction states.",
				"Written descriptions for any components not yet in the design system, precise enough for an agent to build from rather than guess from a visual.",
				"Product context and flow descriptions so the agent understands why the design works the way it does, not just what it looks like.",
			],
			closingParagraphs: [
				"Engineering uses the concept link and the prompt together. The link is the visual reference. The prompt is the instruction set. They add API details and technical constraints on top. Not a redline, not a handoff doc, but a machine-readable instruction set that travels with the code.",
			],
			image: {
				src: "/images/design ops/IMG_2671.png",
				alt: "Claude posting a structured handoff summary in Slack with component specs and design context",
				caption: "The handoff prompt auto-posted to Slack: feature context, exact specs, and agent-ready instructions in one message.",
			},
		},
		{
			title: "Getting the team in",
			paragraphs: [
				"Adoption required removing every excuse not to start. The template repo ships with everything pre-configured. Design system installed, fonts bundled, Cursor rules active, skills for every stage of the workflow.",
				"One designer on the team took it from there and shipped Studio Pro. Much of the concept testing happened in Cursor, even though some high-fidelity design was still detailed in Figma first. Not full adoption yet, but real. The process is transferring and the team is moving toward it.",
				"Presented the methodology at the design org all-hands. AI fluency defined as a required competency at every IC level: working with tools fluently, configuring context, building prompt systems, and designing the infrastructure other designers build on.",
			],
		},
		{
			title: "What didn't work: Figma Make",
			paragraphs: [
				"Figma Make was the obvious starting point. It is in the design tool, designers already live there, and the output is a Figma prototype: the artifact the team had always handed to engineering.",
				"I used it on the VSCO Galleries product experience, which shipped. But the process was frustrating in a specific way: Figma Make had no knowledge of the VSCO design system. Every prompt required correcting tokens, components, and patterns, things Cursor knows from the rules files automatically. The tool built into the design system host had less design system context than a code editor with a markdown file.",
				"The deeper problem: the output lives in Figma. There is no path from a Figma Make prototype to a production codebase that does not require a full rebuild. Cursor's output lives in the codebase. Engineering forked from a working branch. The prototype and the product converged rather than diverged.",
			],
			image: {
				src: "/images/Atlas Workspace/figma-galleries.png",
				alt: "Figma Make concept test output for the VSCO Galleries feature",
				caption: "Figma Make concept test for the Galleries feature: technically functional, but design-system-blind.",
			},
		},
		{
			title: "Overcoming resistance",
			subsections: [
				{
					title: "The trust problem with engineering",
					paragraphs: [
						"The first version of this workflow created a real problem. Design changes were being pushed to the concept link while engineering was actively building against it. Their reference moved underneath them mid-sprint. That was not a workflow failure. It was a trust failure.",
						"The three-environment system fixed it. Once eng-ready was stable and updated on a predictable schedule, engineers stopped worrying about the prototype shifting on them. They became advocates for the workflow instead of resistors to it.",
					],
				},
				{
					title: "The language barrier for designers",
					paragraphs: [
						"Cursor is built for engineers. Before other designers could use it, the mental model gap had to close. They did not know what a push was. What a commit meant. Solving adoption meant solving the language problem first.",
						"The designer-workflows.mdc rule mapped designer vocabulary to git actions in passing so Cursor translated without a lecture. 'Save my changes' becomes a commit. 'Send it to the link' becomes a push and deploy. The goal: open the template, read the files, start working. No two-hour onboarding call.",
					],
				},
			],
		},
		{
			title: "The outcome",
			stats: [
				{ value: "0", label: "Design hires added" },
				{ value: "2", label: "Products shipped" },
				{ value: "~1 wk", label: "Concept to working spec" },
			],
			paragraphs: [
				"Two production MVPs shipped June 23, 2026. Engineering used the working prototype as the primary production reference, with no spec translation required. Scout's component architecture was adopted by engineering as a standalone cross-app repo for production. External validation: the design was sound enough that engineering rebuilt it.",
				"The more important outcome: design stopped being a bottleneck and became infrastructure. the design system gets stronger through the build cycle. Designers have a repeatable process. The system compounds.",
				"Detailed design still matters. Craft is still required, applied more intentionally to the moments where it has the highest impact rather than spread across every screen in a flow. The design system handles the baseline. The designer's eye goes into the decisions that make something feel considered.",
			],
		},
	],
};

export default aiFirst;
