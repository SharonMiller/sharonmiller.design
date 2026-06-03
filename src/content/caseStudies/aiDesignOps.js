const aiDesignOps = {
	slug: "ai-design-ops",
	title: "AI Design Operations",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design leadership · Operating model · AI tooling",
	hook: "Anyone can adopt a new tool. Building the infrastructure that makes AI-native work the default across a design org is a different problem entirely.",
	metrics: [
		{ value: "~1 wk", label: "Concept to working spec" },
		{ value: "4", label: "Squads with AI context projects" },
	],
	description:
		"Competency frameworks, starter repos, automated design review, a roadmap tracker pulling live from Jira and Confluence: the infrastructure that makes AI-native design work at the org level.",
	thumbnail: {
		src: "/images/workspace/dashboard-with-assistant.png",
		alt: "VSCO design operations dashboard",
	},
	impact: [
		"Wrote the Design × AI Flywheel model and competency framework, presented to the full design org at All Hands 2026. AI defined as a core competency at every level, not a bonus skill for senior designers.",
		"Template repos with CLAUDE.md context files rolled out to four squads. Designers working in Cursor from day one with context already loaded.",
		"Automated design feedback skill running before design reviews: catches token drift, accessibility gaps, and component naming issues before a human looks at it.",
		"Roadmap tracker pulling live from Jira, Confluence, Google Docs, Sheets, and Slack. PM and design leadership no longer manually maintaining a separate planning doc.",
		"Concept-to-spec cycles compressed from months to roughly one week.",
		"No dedicated AI tooling role added. The infrastructure runs as part of the design workflow.",
	],
	summary: [
		"When my IC designer went on leave, the pressure to move faster without adding headcount forced a real reckoning with how the design org was operating. Engineering had already shifted to AI-assisted workflows. Design hadn't, and the gap was showing.",
		"The answer wasn't a tool swap. Individual designers adopting Cursor changes their own output; it doesn't change how a design org operates. What changes the org is building the infrastructure that makes AI-native work the default for everyone — not the exception for whoever figured it out on their own.",
		"This is the work that does not show up in a product launch. It shows up in how fast the team moves six months later.",
	],
	team: {
		columns: [
			{
				title: "Role",
				items: [
					"Head of Product Design",
					"Org operating model lead",
					"No dedicated AI tooling hire",
				],
			},
			{
				title: "Stack",
				items: ["Cursor", "Claude skills", "Jira", "Confluence", "Slack"],
			},
			{
				title: "Skills",
				items: [
					"Competency frameworks",
					"Design ops automation",
					"Cross-squad rollout",
					"Process design",
				],
			},
		],
	},
	sections: [
		{
			title: "The problem",
			layout: "image-right",
			paragraphs: [
				"When my IC designer went on leave, the pressure to move faster without adding headcount forced a real reckoning with how the design org was operating. Engineering had already shifted to AI-assisted workflows. Design hadn't, and the gap was showing.",
				"Individual designers adopting Cursor changes their own output. It doesn't change how a design org operates. Without shared infrastructure, adoption stayed uneven. Senior designers moved fast. Everyone else started from zero on every project.",
			],
			image: {
				src: "/images/workspace/dashboard-with-assistant.png",
				alt: "VSCO design operations dashboard",
				caption: "The gap wasn't tools — it was the operating model around them.",
			},
		},
		{
			title: "Defining the approach",
			paragraphs: [
				"The core insight: a well-maintained design system makes AI-assisted prototyping possible. AI-assisted prototyping surfaces design system gaps fast. Each cycle makes both stronger.",
				"This is not a metaphor. It is a literal feedback loop: prototype in Cursor → import to Figma → Claude reads gaps → fix in VUI → prototype faster next cycle. VUI stopped being a design artifact maintained by a specialist. It became the foundation that lets design move at engineering speed.",
			],
			subsections: [
				{
					title: "The competency framework",
					paragraphs: [
						"The first barrier to adoption was linguistic, not technical. Designers did not know what a push was. What a commit was. Asking them to adopt Cursor without solving the mental model first was setting them up to fail.",
						"I wrote the Design × AI Flywheel model and competency framework and presented it to the full design org at All Hands 2026. AI was defined as a core competency at every level: not a specialist track, not an optional interest.",
					],
				},
			],
		},
		{
			title: "Building the solution",
			paragraphs: [
				"The second barrier was friction at the start of every project. Every designer working in Cursor was starting from zero: no design system context, no component conventions, no understanding of which patterns to use.",
			],
			subsections: [
				{
					title: "Starter repos and context files",
					paragraphs: [
						"Template repos with pre-loaded CLAUDE.md context files: written for designers, not developers. Each file explains the design system, the component vocabulary, the token naming conventions, and the prototype patterns we use. Open the repo, start working. The AI already knows what VUI is.",
						"Four squads have these context projects running. The difference in first-session output is significant.",
					],
				},
				{
					title: "Automated design feedback",
					paragraphs: [
						"I built a design review skill that runs before the human review. It checks token bindings against VUI, component naming against Code Connect conventions, auto-layout validity, accessibility annotations, and whether imported assets from Cursor prototypes have been bridged to VUI.",
						"Human review now starts from a cleaner baseline. Senior designers spend their review time on the things that actually require judgment.",
					],
				},
				{
					title: "The roadmap tracker",
					paragraphs: [
						"The tracker pulls live from Jira, Confluence, Google Docs, Sheets, and Slack. It synthesizes them into a single view: what is in flight, what is blocked, what shipped, what changed this week.",
						"PM and design leadership no longer maintain a separate planning document. When something changes in Jira, the tracker knows.",
					],
				},
			],
			image: {
				src: "/images/roadmap-tracker.jpg",
				alt: "Roadmap tracker pulling live data from Jira, Confluence, and Slack",
				caption: "Live roadmap tracker: one view synthesized from primary sources.",
			},
		},
		{
			title: "Cross-functional work",
			paragraphs: [
				"Shipping AI features is visible. It shows up in a product launch, a press release, a case study metric. Building the operating model that makes an org AI-native is invisible. Until you look at how fast the team moves six months later.",
				"The standard model for AI adoption in design orgs: one senior person figures it out, does impressive work, and everyone else watches. The operating model approach inverts that. The infrastructure makes the capability available to everyone.",
				"Presenting the Flywheel model at All Hands 2026 was a formal org-level commitment: AI competency is part of how we evaluate and develop every designer here. Not a lunch-and-learn.",
			],
		},
		{
			title: "The outcome",
			stats: [
				{ value: "~1 wk", label: "Concept to working spec" },
				{ value: "4", label: "Squads with AI context projects" },
			],
			paragraphs: [
				"Concept-to-spec cycles compressed from months to roughly one week. Four squads running template repos with pre-loaded design system context.",
				"That is the compounding effect. Not one designer working faster. A whole org that raises its floor. The junior designer on their second project has the same starting context as the person who built the system.",
				"No dedicated AI tooling role added. The infrastructure runs as part of the design workflow.",
			],
		},
	],
	footer:
		"Competency framework, starter repos, and skill files available to review during an interview.",
};

export default aiDesignOps;
