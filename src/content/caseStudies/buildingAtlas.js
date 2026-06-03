const buildingAtlas = {
	slug: "building-atlas",
	title: "Shipping Atlas",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Product design · AI-native process · Agentic UX",
	status: "Atlas launch June 23, 2026",
	hook: "When a designer on my team went on leave, I stepped back into IC work rather than slow down or hire a contractor, shipping Atlas in Cursor while running the org. This is what designing with AI actually looks like.",
	metrics: [
		{ value: "0", label: "P0 failures in usability test" },
		{ value: "272", label: "Commits to the prototype" },
	],
	description:
		"A legacy CRM rebuilt for creative professionals, designed in Cursor with AI. What it actually took to ship real product while running a design org, and what I learned about working with AI that changed how I think about both.",
	thumbnail: {
		src: "/images/workspace/assistant.png",
		alt: "VSCO Atlas workspace with assistant panel",
	},
	impact: [
		"Full Atlas MVP shipped June 23, 2026. Dashboard, contacts, jobs, invoices, calendar, settings. Rebuilt from a legacy CRM into a product creative professionals actually want to use.",
		"Did the IC work as Head of Design with a designer on leave, on top of full management responsibilities. No additional hire. The AI made the difference.",
		"272 commits to the prototype. Engineering used the working branch as the primary production reference, not a Figma file.",
		"Concept-to-spec cycles compressed from months to roughly one week.",
		"No P0 failures in the May 2026 usability test.",
		"Three-environment release model contributed to 12% paywall conversion lift through faster experiment cycles.",
	],
	summary: [
		"When a designer on my team went on leave, I was already running the org full-time: 1:1s, direction-setting, cross-functional work. Adding IC work on top wasn't a clean handoff; it was a judgment call about what mattered and how fast I could learn to work differently.",
		"In practice that meant carrying Atlas design, partial design systems lead work, and all the documentation that usually gets deprioritized — decision logs, usability test scripts, research synthesis, on top of my management responsibilities. AI compressed the overhead enough to make it workable. Not by automating design judgment, but by eliminating the low-value work around it.",
		"The honest framing on AI-native design: it's like working with a very capable junior who has no taste and infinite energy. They execute exactly what you specify, immediately, without pushback, which means vague direction produces fast mediocre work that you now have to unpick. Design expertise isn't optional in this loop; it's the whole point.",
	],
	team: {
		columns: [
			{
				title: "Role",
				items: [
					"Head of Product Design (IC + management)",
					"Atlas product designer",
					"Prototype owner",
				],
			},
			{
				title: "Stack",
				items: ["Cursor", "VUI components", "Figma Make (evaluated)", "GitHub"],
			},
			{
				title: "Skills",
				items: [
					"AI-native IC work",
					"Human-in-the-loop UX",
					"Research-in-code",
					"Eng handoff design",
				],
			},
		],
	},
	sections: [
		{
			title: "The problem",
			layout: "image-right",
			paragraphs: [
				"VSCO acquired Táve, a full-featured CRM for photographers. The backend was genuinely powerful. The frontend was built for a different era and a different audience.",
				"Usability research on the legacy product was specific about where it failed. Users couldn't find a starting point. Terminology didn't map to how photographers think. One user spent over an hour with two support reps and still couldn't figure out how to structure his existing work. That pattern repeated across multiple new users.",
				"The redesign scope was deliberately narrow: Lead to Booking to Payment. Get a photographer from first contact to paid job without requiring them to understand the full CRM.",
			],
			image: {
				src: "/images/workspace/assistant.png",
				alt: "VSCO Atlas workspace with assistant panel",
				caption: "Atlas: a CRM rebuilt for how creative professionals actually work.",
			},
		},
		{
			title: "Defining the approach",
			paragraphs: [
				"I joke that working with AI is like managing a very eager junior with no taste and infinite energy. The good news: they will do exactly what you ask, immediately, without complaint. The bad news: they will do exactly what you ask, including the things you asked for wrong.",
				"The feedback loop is constant. Every iteration requires a design eye. Every push requires a review. The AI will confidently implement something that is technically correct and visually wrong. If you're not catching it, it compounds.",
				"The biggest shift was learning to front-load the thinking. The AI rewards clarity. A well-specified component takes minutes. An underspecified one takes longer to fix than it would have taken to build manually.",
			],
			subsections: [
				{
					title: "Figma Make vs. Cursor",
					paragraphs: [
						"Figma Make was the obvious starting point. It's in the design tool, designers already live there, and the output is a Figma prototype: the artifact the team had always handed to engineering.",
						"The problem: the output lives in Figma. There is no path from a Figma Make prototype to a production codebase that doesn't require a full rebuild. Cursor's output lives in the codebase. Engineering could fork from the working branch. The prototype and the product converged rather than diverged.",
					],
				},
			],
		},
		{
			title: "Building the solution",
			paragraphs: [
				"Because the prototype was in code, I could build concept testing infrastructure directly into it. Three controls, visible only in design sessions:",
			],
			list: [
				"ATLAS / FULL: toggle between the free tier and paid roadmap in the same link. PM and leadership could see both products without two separate prototypes.",
				"WITH DATA / NEW USER: flip instantly between a populated account and a zero-state. Research ran new user sessions without resetting anything.",
				"ASSISTANT NUDGES: trigger specific push-in messages to test assistant behavior in context before any production code was written.",
			],
			subsections: [
				{
					title: "Designing the AI assistant",
					paragraphs: [
						"The assistant is the simple surface on top of a complex system. Designing it required a different approach than designing a flow: we can't map every conversation a photographer might have.",
						"Instead of flows, we designed a component vocabulary: output primitives the assistant can assemble in any order. Option chips for decisions. Structured preview cards before any write action. A confirmation step before anything is committed. Always one tap from a real person.",
						"The human-in-the-loop principle that applied to my design process applied to the product too. The assistant shows its work before it acts. Users stay in control.",
					],
				},
			],
			video: {
				src: "/videos/workspace-demo.mp4",
				caption:
					"Working prototype: real navigation, states, and data. Built in Cursor using VUI components.",
			},
		},
		{
			title: "Cross-functional work",
			layout: "image-right",
			paragraphs: [
				"The first version of this workflow was a design-only process. I was moving fast; engineering was trying to keep up with a reference that kept changing. Their concept link moved underneath them mid-sprint. That broke trust.",
				"Fixing it meant treating this as a team process, not a design tool. I updated the PDLC to account for how handoff worked now. Three environments with explicit contracts: eng-ready (stable, what engineering builds from), wip (active design work only), and concept-testing (frozen during active research sessions).",
				"Sometimes you have to go slow to go fast. Building trust with engineering, and building the process scaffolding around the new workflow, took time up front that paid back across every sprint afterward.",
			],
			image: {
				src: "/images/IMG_5420.png",
				alt: "GitHub contributors graph: SharonMiller #1 with 268 commits, cursoragent #2 with 95 commits",
				caption:
					"SharonMiller #1 contributor to the prototype repo. cursoragent #2. What AI-native IC work looks like in the commit graph.",
			},
		},
		{
			title: "The outcome",
			stats: [
				{ value: "0", label: "P0 failures in usability test" },
				{ value: "3", label: "Value props resonating strongly" },
				{ value: "272", label: "Commits to the prototype" },
			],
			paragraphs: [
				"The May 2026 usability test came back clean. No P0 failures. The object model landed. Empty states were understood. Settings were findable.",
				"Concept testing showed three value props resonating strongly: everything in one place, AI helps me level up, and it will get me business results. Participants called it a virtual assistant and a business buddy. Not a CRM. That is the right framing for this audience.",
				"Atlas MVP shipped June 23, 2026. Engineering used the working branch as the primary production reference, not a Figma file.",
			],
		},
	],
	footer: "Atlas launched June 23, 2026. Prototype walkthrough available during an interview.",
};

export default buildingAtlas;
