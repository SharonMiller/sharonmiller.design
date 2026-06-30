const DO = "/images/ai design ops";

const buildingAtlas = {
	slug: "vsco-workspace",
	title: "VSCO Workspace Simplified: AI-Native Design",
	year: "2026",
	role: "Head of Product Design, VSCO",
	type: "Product design · AI-native process · Agentic UX",
	status: "Shipped June 23, 2026 · VSCO One",
	hook: "VSCO Workspace is live. A legacy CRM rebuilt for creative professionals, shipped in 12 weeks with AI-native design.",
	metrics: [
		{ value: "12 weeks", label: "First commit to shipped product" },
		{ value: "272", label: "Commits to the prototype" },
		{ value: "~10 hrs", label: "Time in Figma (rest in Cursor)" },
	],
	description:
		"A legacy CRM rebuilt for creative professionals, designed in Cursor with AI. What it actually took to ship real product while running a design org, and what I learned about working with AI that changed how I think about both.",
	thumbnail: {
		src: "/images/Atlas Workspace/cursor-2-crop.png",
		alt: "VSCO Workspace redesign and Cursor agent side-by-side, showing the AI-native design workflow in action",
	},
	relatedStudy: {
		slug: "operationalizing-ai-native-design",
		label: "Read next",
		text: "The learnings from building Workspace became the foundation for scaling AI-native design across the full design org.",
		cta: "How I operationalized it across the team →",
	},
	sections: [
		{
			title: "My role",
			paragraphs: [
				"When a designer on my team went on leave, I took on the IC work myself rather than bring in a contractor. Faster, cheaper, and proof of the process at the same time.",
			],
			list: [
				"Cursor: almost everything was built here. The design lived in code from day one.",
				"Figma: opened for two things only — polishing specific components like dashboard cards, and running review sessions for team feedback.",
				"Claude: summarized research, audited the design system, wrote Figma components, and generated Cursor prompts grounded in context from Confluence, Jira, and the PRDs.",
			],
		},
		{
			title: "The problem",
			paragraphs: [
				"VSCO acquired Táve, a full-featured CRM for photographers. The backend was genuinely powerful. The frontend was built for a different era and a different audience.",
				"Usability research on the legacy product was specific about where it failed.",
			],
			list: [
				"UI: overwhelming. Advanced options everywhere, no progressive complexity.",
				"Onboarding: not self-serve. Two 1-hour phone calls required just to get started.",
				"Terminology: didn't map to how photographers think. One user spent over an hour with support and still couldn't structure his existing work.",
			],
			closingParagraphs: [
				"Our ICP was the aspiring pro: a photographer building a client business. The redesign scope matched: Lead to Booking to Payment. First contact to paid job, without needing to understand an enterprise CRM.",
			],
			beforeAfter: {
				before: {
					src: "/images/Atlas Workspace/doashboard old.png",
					alt: "Legacy Táve dashboard: dark sidebar with 15+ navigation items, cluttered widgets, onboarding prompts",
					caption: "Before: legacy Táve dashboard",
				},
				after: {
					src: "/images/Atlas Workspace/dashboard new.png",
					alt: "New VSCO Workspace dashboard: clean layout, 4 navigation items, upcoming jobs and leads at a glance",
					caption: "After: VSCO Workspace dashboard",
				},
			},
		},
		{
			title: "Defining the approach",
			paragraphs: [
				"Working this way required building a new muscle. I learned to front-load the thinking: clear specs, defined constraints, explicit success criteria before any generation. AI rewards that investment. A well-specified component takes minutes. An underspecified one takes longer to fix than it would have taken to build manually. The design eye never turns off.",
			],
			readMore: {
				slug: "operationalizing-ai-native-design",
				title: "Operationalizing AI-Native Design",
				text: "How this approach scaled across the full design org",
			},
		},
		{
			title: "Building the solution",
			contentBlocks: [
				{
					type: "paragraphs",
					items: [
						"Because the prototype was in code, I embedded concept testing controls directly into it. Three toggles, visible only in design sessions:",
					],
				},
				{
					type: "list",
					items: [
						"Workspace / Full: switch between the free tier and paid roadmap in one link so PM and leadership could compare both products without two prototypes.",
						"With Data / New User: flip between a populated account and a zero-state so research could run new-user sessions without resetting anything.",
						"Assistant Nudges: trigger specific push-in messages to test assistant behavior in context before any production code was written.",
					],
				},
				{
					type: "paragraphs",
					items: [
						"The prototype lived at a stable URL from day one. VSCO has a group of design partners, photographers who opt in to early access and feedback sessions, and because the prototype was a real running app, not a Figma link, we could share it with them the same day a flow was built. No account required, no resetting state between sessions. Real reactions on real flows, weeks before engineering started building.",
					],
				},
				{
					type: "video",
					src: "/videos/workspace-tour-small-1.mp4",
					caption: "Dashboard and contacts: real navigation and data states prototyped in Cursor.",
				},
				{
					type: "video",
					src: "/videos/workspace-tour-small-2.mp4",
					caption: "Jobs and invoicing: the full lead-to-payment flow.",
				},
			],
		},
		{
			title: "Designing the AI assistant",
			paragraphs: [
				"VSCO One launched with a simplified experience. Workspace — the full CRM — has capabilities the simplified version doesn't yet. Scout bridges that gap: a conversational agent that helps users navigate the more advanced experience on demand, without needing to know where anything lives.",
				"Designing it required a different approach than designing a flow. A photographer asking Scout for help could be in any state, at any point in their work. You can't map every conversation.",
			],
			list: [
				"Component vocabulary: output primitives Scout assembles in any order, for any request.",
				"Option chips: surface decisions without typing.",
				"Preview cards: show what Scout will do before any write action.",
				"Confirmation step: required before anything is committed.",
				"Human escape: always one tap from a real person.",
			],
			image: {
				src: "/images/ai design ops/IMG_5260.png",
				alt: "Scout thinking animation concepts: four styles — Float + dots, Pulse + dots, Head tilt + dots, Orbit ring",
				caption: "Thinking indicator concepts built as interactive prototypes so the team could feel the motion before committing.",
			},
			video: {
				src: "/videos/scout-ui-2.mp4",
				caption: "@vsco/scout-ui: the component vocabulary that makes Scout composable across any conversation.",
			},
		},
		{
			title: "Testing the API",
			paragraphs: [
				"Before designing what Scout could do, I needed to know what the Workspace API could actually do. So I built an MCP — a small server that connects Claude directly to the Workspace API — and used it to manage a real studio in plain language.",
				"The test: create leads, move jobs through the pipeline, batch-import clients from a pasted list, look up contacts, manage products. All through conversation with Claude. No UI navigation required.",
				"This wasn't a production feature. It was design research through building. The bugs surfaced immediately: price formatting (the API expects cents, the code was passing dollars), job types being guessed instead of fetched from the studio's actual settings, lead status missing so jobs appeared in the pipeline without a state. Fixing those gave a precise picture of where the API was solid and where Scout would need guardrails.",
				"The MCP shipped to a shared Claude Enterprise project so anyone on the team could test it without setup. That's how the trust architecture decisions for Scout got grounded in something real: not hypothetical flows, but actual agent behavior against a live API.",
			],
		},
		{
			title: "Cross-functional work",
			paragraphs: [
				"Moving fast in Cursor created a real problem. Design changes were going out while engineering was actively building against the same reference. Their concept link moved underneath them mid-sprint. That wasn't a workflow failure. It was a trust failure. Once engineering couldn't rely on the reference staying stable, they stopped trusting the process. Fixing it meant building a coordination model so design could keep moving without pulling the floor out from under engineering.",
			],
			readMore: {
				slug: "operationalizing-ai-native-design",
				title: "Operationalizing AI-Native Design",
				text: "The full operating model, including handoff and review workflow",
			},
			imageFullWidth: {
				src: `${DO}/IMG_0495.png`,
				alt: "Scout animation playground running in browser alongside Cursor agent conversation, showing the actual design workflow in action",
				caption: "Scout development in Cursor: the prototype runs in the browser while Claude handles component iteration in the agent panel.",
			},
			beforeAfter: {
				before: {
					src: "/images/Atlas Workspace/contact-form-settings-old-crop.png",
					alt: "Legacy Táve form settings, long scrolling configuration page with many fields",
					caption: "Before: Táve contact form settings",
				},
				after: {
					src: "/images/Atlas Workspace/contact-form-settings-new.png",
					alt: "New VSCO Workspace form settings, clean preview with simple controls",
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
