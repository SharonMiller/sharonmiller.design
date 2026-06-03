const aiFirst = {
	slug: "ai-first",
	title: "AI-First Design Process",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Operating model · Platform delivery",
	status: "MVP launch June 23, 2026",
	hook: "Stopped designing in Figma. Started building in Cursor. Two MVPs shipped.",
	metrics: [
		{ value: "272", label: "Commits to the prototype" },
		{ value: "~1 wk", label: "Concept to working spec" },
	],
	description:
		"AI-native operating model: two MVPs in production build, engineering handoff from working code, design org Flywheel adopted company-wide.",
	thumbnail: {
		src: "/images/workspace/dashboard-with-assistant.png",
		alt: "VSCO Workspace prototype with assistant panel",
	},
	impact: [
		"Two production MVPs designed from working prototypes, not static Figma decks. Engineering forks from a working branch.",
		"Concept-to-spec cycles compressed from months to roughly one week.",
		"272 commits, 177k lines of design-led code. SharonMiller is the #1 contributor to the prototype repo. cursoragent is #2.",
		"Design × AI Flywheel model and L3–L5 competency framework presented to the full design org at All Hands 2026.",
		"No dedicated design systems IC added. Governance distributed through workflow.",
	],
	summary: [
		"When my designer went on leave, I had a choice: slow down or find a faster way to work. Engineering was already using Cursor to move faster. Design was becoming the bottleneck.",
		"The solution was not a tool swap. It was a new operating model: the design system, AI-assisted prototyping, and engineering handoff form a self-reinforcing loop. Each cycle makes all three stronger.",
	],
	sections: [
		{
			title: "The stack",
			subsections: [
				{
					title: "Claude — strategy and systems",
					paragraphs: [
						"Research synthesis, design strategy, Figma auditing via MCP, design system gap analysis, decision documentation, UX writing. Connected to Figma, GitHub, Confluence, Slack, and Jira. Accumulates context across sessions. Does not start from zero.",
					],
				},
				{
					title: "Cursor — execution",
					paragraphs: [
						"Prototyping directly in VUI component code. High-fidelity concepts in hours, not days. The prototype is the handoff artifact. Engineering forks from a working branch, not a Figma file.",
					],
				},
			],
		},
		{
			title: "The Flywheel",
			paragraphs: [
				"A well-maintained design system makes AI-assisted prototyping possible. AI-assisted prototyping surfaces design system gaps fast. Each cycle makes both stronger.",
				"VUI stopped being a design artifact. It became the foundation that lets design move at engineering speed.",
			],
		},
		{
			title: "The trust problem with engineering",
			paragraphs: [
				"The first version of this workflow created a real problem. I was pushing changes to the concept link while engineering was actively building against it. Their reference moved underneath them. That broke trust.",
				"The fix was three environments:",
			],
			list: [
				"eng-ready: stable, what engineering builds from, updated on a schedule with advance notice",
				"wip: active design work only",
				"concept-testing: stable for user research sessions",
			],
		},
		{
			title: "The review workflow",
			paragraphs: [
				"Share the concept link. Pull the live UI into Figma via html-to-design. Team leaves comments. Updates go back into Cursor, or new components go into VUI via MCP. Push to the concept link. Repeat.",
				"The loop felt familiar to designers because it used Figma comments. The source of truth stayed in code. Live design hours three times a week replaced the async Slack thread that went nowhere.",
			],
		},
		{
			title: "Getting the team in",
			paragraphs: [
				"The first barrier was linguistic, not technical. Designers did not know what a push was. What a commit was. Solving adoption meant solving the mental model first.",
				"I built template repos with CLAUDE.md context files and instructions written for designers, not developers. Presented the full methodology at All Hands 2026. Defined AI as a core competency across L3–L5. Not a bonus skill.",
			],
		},
	],
	footer: "Product launched June 23, 2026. Prototype walkthrough available during an interview.",
};

export default aiFirst;
