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
		{ value: "June 23", label: "Shipped on schedule" },
	],
	description:
		"AI-native operating model: Cursor as the primary design surface, working branches as engineering handoff, and a Flywheel that made the design system stronger with every prototype.",
	thumbnail: {
		src: "/images/workspace/dashboard-with-assistant.png",
		alt: "VSCO Workspace prototype — built in Cursor, shipped as the engineering handoff",
	},
	impact: [
		"Two production MVPs designed from working prototypes, not static Figma decks. Engineering forked from a working branch.",
		"Concept-to-spec cycles compressed from months to roughly one week.",
		"272 commits, 177k lines of design-led code. Top contributor to the prototype repo.",
		"Design × AI Flywheel and L3–L5 competency framework adopted across the full design org at All Hands 2026.",
		"No dedicated design systems IC added. Governance distributed through workflow.",
	],
	summary: [
		"VSCO needed to redesign Workspace — a CRM acquired through Táve — for a new audience: aspiring creative professionals who needed business tools that fit how they actually work. My designer went on leave. The timeline did not move.",
		"Engineering was using Cursor to move faster. Design was becoming the bottleneck. The choice was not between speed and quality — it was between a process that was already broken and a new one built around the actual constraints.",
		"The solution was not a tool swap. It was a new operating model: design in code, engineering handoff from a working branch, and a Flywheel connecting the design system to every prototype. I ran the full Head of Design function while owning the end-to-end product design. This is the process that made both possible.",
	],
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
			text: "The Flywheel made our design system stronger with every prototype.",
			cta: "The Flywheel made our design system stronger — read how we govern it →",
		},
	],
	sections: [
		{
			title: "The problem with Figma specs",
			paragraphs: [
				"A Figma spec is an approximation. Interactions are simulated, edge cases are invisible, and a hundred small decisions get made in the gap between design and code — quietly, without the designer in the room. Engineering picks up the file and starts interpreting.",
				"That interpretation gap was costing weeks. With a team under-resourced for the scope, design couldn't afford to be the translation bottleneck. The question was whether the artifact itself could change.",
			],
		},
		{
			title: "The stack",
			image: {
				src: "/images/Atlas Workspace/cursor ide.png",
				alt: "Cursor agent making commits to the VSCO design workspace prototype",
				caption: "Cursor iterating on the VSCO Workspace prototype — 272 commits, concept to working spec in roughly one week.",
			},
			subsections: [
				{
					title: "Claude — strategy and systems",
					paragraphs: [
						"Connected to Figma, GitHub, Confluence, Slack, and Jira. A Claude project synthesized current product thinking — PRDs, user research, eng constraints, decisions from meetings — into Cursor prompts that produced significantly better output than starting from scratch. As scope shifted over four months, the context updated with it. It did not start from zero each session.",
					],
				},
				{
					title: "Cursor — execution",
					paragraphs: [
						"Prototyping directly in VUI component code. When the Kanban board needed a sheet drawer on card click, it got built. When the dashboard needed a KPI block that conditionally surfaced an upgrade, it was designed in actual code. Real state, real layout behavior, real component constraints — not approximated. The prototype became the handoff artifact. Engineering forked from a working branch.",
					],
				},
			],
		},
		{
			title: "The Flywheel",
			paragraphs: [
				"A well-maintained design system makes AI-assisted prototyping possible. AI-assisted prototyping surfaces design system gaps fast. Each cycle makes both stronger.",
				"The Dashboard Card system is the concrete proof point. Building Workspace in Cursor surfaced that the card system didn't exist as a proper VUI component — it lived in the product file as a local build. That gap went through the Flywheel: audited via the Figma Plugin API, built programmatically in the VUI Design System file with correct token bindings, published to the library, pulled back into the prototype. The prototype got better. VUI got stronger. Neither required a separate sprint.",
				"VUI stopped being a design artifact. It became the foundation that lets design move at engineering speed.",
			],
		},
		{
			title: "Three environments, one codebase",
			paragraphs: [
				"Designing in code while engineering builds from the same codebase creates a real coordination problem: a design update can shift the reference engineering is coding against mid-sprint. Three branches solved it.",
			],
			list: [
				"eng-ready: stable, what engineering builds from. Updated on a schedule with advance notice and a Cursor-generated changelog so engineers always knew what changed before they saw it.",
				"wip: active design work only. Design moved freely here without touching anything in-flight.",
				"concept-testing: stable enough for user research sessions. Last week's build was available for testing while this week's iteration was already in wip.",
			],
		},
		{
			title: "The review workflow",
			paragraphs: [
				"Share the concept link. Pull the live UI into Figma via html-to-design. Team leaves comments the way they always have. Updates go back into Cursor, or new components get built in VUI via MCP. Push to the concept link. Repeat.",
				"The loop felt familiar to designers because it used Figma comments. The source of truth stayed in code. Live design hours three times a week replaced the async Slack thread that went nowhere.",
			],
		},
		{
			title: "What didn't work: Figma Make",
			paragraphs: [
				"Figma Make was the obvious starting point. It's in the design tool, designers already live there, and the output is a Figma prototype: the artifact the team had always handed to engineering.",
				"I used it on the VSCO Galleries product experience, which shipped. But the process was frustrating in a specific way: Figma Make had no knowledge of the VSCO design system. Every prompt required correcting tokens, components, and patterns — things Cursor knows from the rules files automatically. The irony wasn't lost on me. The tool built into the design system host had less design system context than a code editor with a markdown file.",
				"The deeper problem: the output lives in Figma. There is no path from a Figma Make prototype to a production codebase that doesn't require a full rebuild. Cursor's output lives in the codebase. Engineering could fork from the working branch. The prototype and the product converged rather than diverged.",
			],
			image: {
				src: "/images/Atlas Workspace/figma-galleries.png",
				alt: "Figma Make concept test output for the VSCO Galleries feature",
				caption: "Figma Make concept test for the Galleries feature — technically functional, but design-system-blind and credit-heavy.",
			},
		},
		{
			title: "Overcoming resistance",
			subsections: [
				{
					title: "The trust problem with engineering",
					paragraphs: [
						"The first version of this workflow created a real problem. Design changes were being pushed to the concept link while engineering was actively building against it. Their reference moved underneath them mid-sprint. That was not a workflow failure — it was a trust failure.",
						"The three-environment system fixed it. Once eng-ready was stable and updated on a predictable schedule, engineers stopped worrying about the prototype shifting on them. They became advocates for the workflow instead of resistors to it.",
					],
				},
				{
					title: "The language barrier for designers",
					paragraphs: [
						"Cursor is built for engineers. Before other designers could use it, the mental model gap had to close. They didn't know what a push was. What a commit meant. Solving adoption meant solving the language problem first.",
						"I built template repos with CLAUDE.md context files and a designer-workflows.mdc Cursor rule that mapped designer vocabulary to git actions in passing — 'save my changes' → commit, 'send it to the link' → push, deploy — so Cursor translated without a lecture. The goal: open the template, read the files, start working. No two-hour onboarding call.",
					],
				},
			],
		},
		{
			title: "Getting the team in",
			paragraphs: [
				"sandbox-design-starter-web is a GitHub template any VSCO designer can fork. VUI pre-installed, VSCO Gothic fonts bundled, Cursor rules active, and skills for every stage of the workflow: first-time setup, prototype-to-Figma capture, VUI auditing, eng-ready releases. One prompt in Cursor starts the full setup.",
				"Presented the methodology at All Hands 2026. Defined AI fluency as a required competency at L3, L4, and L5 — not a bonus skill. L3 means working with AI tools fluently. L4 means configuring context and building prompt systems. L5 means designing the infrastructure other designers build on. That framework changed how the team thought about what the work actually was.",
			],
		},
		{
			title: "The outcome",
			paragraphs: [
				"Two production MVPs shipped June 23, 2026, on schedule. Zero design hires added. Engineering used the prototype as the primary production reference — no spec translation required. Scout's component architecture, designed in the prototype, was adopted by engineering as a standalone cross-app repo for production. That's external validation: the design approach was sound enough that engineering rebuilt it.",
				"The most significant result was not the speed. It was that design stopped being a bottleneck and became infrastructure. VUI got stronger through the build cycle. Designers have a repeatable process. The system compounds.",
			],
		},
	],
};

export default aiFirst;
