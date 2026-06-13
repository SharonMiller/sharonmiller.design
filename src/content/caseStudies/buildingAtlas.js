const DO = "/images/ai design ops";

const buildingAtlas = {
	slug: "vsco-workspace",
	title: "VSCO Workspace Simplified: AI-Native Design",
	year: "2026",
	role: "Head of Product Design, VSCO",
	type: "Product design · AI-native process · Agentic UX",
	status: "VSCO Workspace launch June 23, 2026",
	hook: "Designer on leave. Full IC load, full management load. Shipped in 12 weeks. This is what AI-native design makes possible.",
	metrics: [
		{ value: "12 weeks", label: "First commit to shipped product" },
		{ value: "272", label: "Commits to the prototype" },
		{ value: "~10 hrs", label: "Time in Figma (rest in Cursor)" },
	],
	description:
		"A legacy CRM rebuilt for creative professionals, designed in Cursor with AI. What it actually took to ship real product while running a design org, and what I learned about working with AI that changed how I think about both.",
	thumbnail: {
		src: "/images/Atlas Workspace/cursor-2-crop.png",
		alt: "VSCO Workspace redesign and Cursor agent side-by-side — the AI-native design workflow in action",
	},
	impact: [
		"VSCO Workspace shipped June 23, 2026. Dashboard, contacts, jobs, invoices, calendar, settings. A redesign and simplified transformation of a legacy CRM into a product creative professionals actually want to use.",
		"Did the IC work as Head of Design with a designer on leave, on top of full management responsibilities. No additional hire. The AI made the difference.",
		"272 commits to the prototype. Engineering used the working branch as the primary production reference, not a Figma file.",
		"Concept-to-spec cycles compressed from months to roughly one week.",
		"No P0 failures in the May 2026 usability test.",
	],
	summary: [
		"When a designer on my team went on leave, I was already running the org full-time: 1:1s, direction-setting, cross-functional work. Adding IC work on top wasn't a clean handoff; it was a judgment call about what mattered and how fast I could learn to work differently.",
		"In practice that meant carrying Workspace design, partial design systems lead work, and all the documentation that usually gets deprioritized (decision logs, usability test scripts, research synthesis), on top of my management responsibilities. AI compressed the overhead enough to make it workable. Not by automating design judgment, but by eliminating the low-value work around it.",
		"The honest framing on AI-native design: it executes exactly what you specify, immediately, without pushback. Vague direction produces fast mediocre work that you now have to unpick. Design expertise isn't optional in this loop; it's the whole point.",
	],
	relatedStudy: {
		slug: "operationalizing-ai-native-design",
		label: "Read next",
		text: "The learnings from building Workspace became the foundation for scaling AI-native design across the full design org.",
		cta: "How I operationalized it across the team →",
	},
	sections: [
		{
			title: "The problem",
			paragraphs: [
				"VSCO acquired Táve, a full-featured CRM for photographers. The backend was genuinely powerful. The frontend was built for a different era and a different audience.",
				"Usability research on the legacy product was specific about where it failed. Users couldn't find a starting point. Terminology didn't map to how photographers think. One user spent over an hour with two support reps and still couldn't figure out how to structure his existing work. That pattern repeated across multiple new users.",
				"The redesign scope was deliberately narrow: Lead to Booking to Payment. Get a photographer from first contact to paid job without requiring them to understand the full CRM.",
			],
			image: {
				src: "/images/Atlas Workspace/workspace-before-after.png",
				alt: "Before and after: legacy Táve CRM interface versus the redesigned VSCO Workspace",
				contain: false,
			},
			imageFullWidth: true,
			beforeAfter: {
				before: {
					src: "/images/Atlas Workspace/contact-form-old.png",
					alt: "Legacy Táve contact form — generic, dated styling",
					caption: "Before: legacy Táve client contact form",
				},
				after: {
					src: "/images/Atlas Workspace/contact-form-new.png",
					alt: "New VSCO Workspace contact form — clean, branded",
					caption: "After: VSCO Workspace contact form",
				},
			},
		},
		{
			title: "Defining the approach",
			pullquote: "No contractor moves at that speed. Taking the IC work myself was faster, cheaper, and proof of process at the same time.",
			paragraphs: [
				"I joke that working with AI is like managing a very eager junior with no taste and infinite energy. The good news: they will do exactly what you ask, immediately, without complaint. The bad news: they will do exactly what you ask, including the things you asked for wrong.",
				"The feedback loop is constant. Every iteration requires a design eye. Every push requires a review. The AI will confidently implement something that is technically correct and visually wrong. If you're not catching it, it compounds.",
				"The biggest shift was learning to front-load the thinking. The AI rewards clarity. A well-specified component takes minutes. An underspecified one takes longer to fix than it would have taken to build manually.",
			],
		},
		{
			title: "Building the solution",
			contentBlocks: [
				{
					type: "paragraphs",
					items: [
						"Because the prototype was in code, I could embed concept testing controls directly into it. Three toggles, visible only in design sessions:",
					],
				},
				{
					type: "list",
					items: [
						"WORKSPACE / FULL: toggle between the free tier and paid roadmap in the same link. PM and leadership could see both products without two separate prototypes.",
						"WITH DATA / NEW USER: flip instantly between a populated account and a zero-state. Research ran new user sessions without resetting anything.",
						"ASSISTANT NUDGES: trigger specific push-in messages to test assistant behavior in context before any production code was written.",
					],
				},
				{
					type: "paragraphs",
					items: [
						"The prototype lived at a stable URL from day one. VSCO has a group of design partners — photographers who opt in to early access and feedback sessions — and because the prototype was a real running app, not a Figma link, we could share it with them the same day a flow was built. No account required, no resetting state between sessions. Real reactions on real flows, weeks before engineering started building.",
					],
				},
				{
					type: "video",
					src: "/videos/workspace-tour-small-1.mov",
					caption: "Dashboard and contacts: real navigation and data states prototyped in Cursor.",
				},
				{
					type: "video",
					src: "/videos/workspace-tour-small-2.mov",
					caption: "Jobs and invoicing: the full lead-to-payment flow.",
				},
			],
		},
		{
			title: "Designing the AI assistant",
			paragraphs: [
				"The assistant is the simple surface on top of a complex system. Designing it required a different approach than designing a flow: we can't map every conversation a photographer might have.",
				"Instead of flows, we designed a component vocabulary: output primitives the assistant can assemble in any order. Option chips for decisions. Structured preview cards before any write action. A confirmation step before anything is committed. Always one tap from a real person.",
				"The human-in-the-loop principle that applied to my design process applied to the product too. The assistant shows its work before it acts. Users stay in control.",
				"I designed Scout as a standalone React component library. Every component in the vocabulary ships as a documented, testable primitive: ScoutOptionChip, ScoutConfirmationStep, ScoutCelebrationState, ScoutHandoffCard, ScoutThinkingIndicator. The library is published with a live playground for testing animation parameters.",
				"My instinct whenever someone proposes a third-party hire: try it myself first. Cursor kept producing hard-edged blobs instead of the soft mesh the design called for. I switched to Claude, which solved the SVG math differently and got there. The head of brand liked it but wanted to tweak it, so it shipped as an interactive playground with parametric controls rather than a hardcoded value.",
			],
			embed: {
				src: "/demos/scout-thinking-playground.html",
				caption: "Thinking indicator exploration: four animation styles as interactive prototypes. Hit Play to animate all four, then select a direction.",
				height: 580,
			},
			video: {
				src: "/videos/scout-ui-2.mp4",
				caption: "@vsco/scout-ui: the component vocabulary that makes Scout composable across any conversation.",
			},
		},
		{
			title: "Cross-functional work",
			paragraphs: [
				"The first version of this workflow was a design-only process. I was moving fast; engineering was trying to keep up with a reference that kept changing. Their concept link moved underneath them mid-sprint. That broke trust.",
				"Fixing it meant treating this as a team process, not a design tool. I updated the PDLC to account for how handoff worked now. Three environments with explicit contracts: eng-ready (stable, what engineering builds from), wip (active design work only), and concept-testing (frozen during active research sessions).",
				"Sometimes you have to go slow to go fast. Building trust with engineering, and building the process scaffolding around the new workflow, took time up front that paid back across every sprint afterward.",
			],
			imageFullWidth: {
				src: `${DO}/IMG_0495.png`,
				alt: "Scout animation playground running in browser alongside Cursor agent conversation — the actual design workflow in action",
				caption: "Scout development in Cursor: the prototype runs in the browser while Claude handles component iteration in the agent panel.",
			},
			beforeAfter: {
				before: {
					src: "/images/Atlas Workspace/contact-form-settings-old-crop.png",
					alt: "Legacy Táve form settings — long scrolling configuration page with many fields",
					caption: "Before: Táve contact form settings",
				},
				after: {
					src: "/images/Atlas Workspace/contact-form-settings-new.png",
					alt: "New VSCO Workspace form settings — clean preview with simple controls",
					caption: "After: VSCO Workspace form settings",
				},
			},
		},
		{
			title: "The outcome",
			stats: [
				{ value: "0", label: "P0 failures in usability test" },
				{ value: "~1 wk", label: "Concept to working spec" },
				{ value: "272", label: "Commits to the prototype" },
			],
			paragraphs: [
				"The May 2026 usability test came back clean. No P0 failures. The object model landed. Empty states were understood. Settings were findable.",
				"Concept testing showed three value props resonating strongly: everything in one place, AI helps me level up, and it will get me business results. Participants called it a virtual assistant and a business buddy. Not a CRM. That is the right framing for this audience.",
				"VSCO Workspace shipped June 23, 2026. Engineering used the working branch as the primary production reference, not a Figma file.",
			],
			image: {
				src: "/images/Atlas Workspace/IMG_5420.png",
				alt: "GitHub contributors graph: SharonMiller #1 with 268 commits, cursoragent #2 with 95 commits",
				caption: "SharonMiller #1 contributor to the prototype repo. cursoragent #2.",
			},
		},
	],
};

export default buildingAtlas;
