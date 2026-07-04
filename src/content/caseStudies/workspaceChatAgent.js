const workspaceChatAgent = {
	slug: "workspace-chat-agent",
	title: "Workspace & Scout",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Agentic UX · Legacy rebuild",
	status: "Atlas launch June 23, 2026",
	hook: "VSCO acquired a CRM photographers couldn't use. The goal wasn't a better interface. It was making the complexity disappear.",
	metrics: [
		{ value: "~10%", label: "of my time as IC, while leading the full design org" },
		{ value: "0", label: "P0 failures in usability testing" },
	],
	description:
		"When a product is too complex to learn, the answer isn't a better tutorial. It's an experience that handles complexity on the user's behalf — and earns enough trust to do it.",
	thumbnail: {
		src: "/images/workspace/assistant.png",
		alt: "Scout AI assistant embedded in VSCO Workspace",
	},
	impact: [
		"Scout shipped as a task executor with a conversational interface, not a chatbot bolted on top. Architecture adopted by engineering as a standalone cross-app repo for production use.",
		"Component vocabulary designed for agentic UX: output primitives that handle any user request, including ones we never anticipated at design time.",
		"Zero P0 failures in usability testing. Object model landed, trust patterns validated, AI framing confirmed: participants called it a 'virtual assistant' and 'business buddy', not a CRM.",
		"Full Atlas MVP shipped June 23, 2026. Rebuilt from a legacy CRM into a product creative professionals actually want to use.",
		"Engineering used the Cursor prototype as the primary production reference. Fastest concept-to-build cycle the team had seen.",
	],
	summary: [
		"Creative professionals shouldn't have to think like CRM administrators. But that's exactly what VSCO's acquired CRM required. The backend was genuinely powerful. The problem was that photographers had to learn a complex enterprise product before they could do simple things: create a job, send an invoice, follow up on a lead. Usability research was unambiguous — one user spent over an hour with support and still couldn't get started.",
		"The goal wasn't to simplify the interface. It was to make the complexity disappear. Workspace was redesigned so photographers could run their business without learning the product. Scout — an AI assistant embedded in the experience — handles the CRM layer on their behalf. The design challenge: building the trust architecture that makes handing consequential work to an AI feel safe.",
		"I led this as the IC designer while continuing to run the design organization — a deliberate choice to prove the process on a real product, not a side project. The approach: instead of designing flows, design the system that makes any flow work.",
	],
	sections: [
		{
			title: "Designing for what you can't predict",
			paragraphs: [
				"A conversational product doesn't have a fixed flow. You can't map every conversation a user might have — the inputs are too varied and most of them haven't happened yet. Traditional flow-based design breaks down immediately. The moment you script a conversation, it starts feeling like a decision tree instead of a real assistant.",
				"The shift: stop designing flows and start designing the system that makes any flow work. The investment is in the output components — the building blocks the product assembles at runtime to handle whatever the user asks. Build those right and the flows take care of themselves.",
				"Every component decision was evaluated against one question: does this help a user complete a real task, or does it just make the product feel more conversational?",
			],
		},
		{
			title: "The trust architecture",
			paragraphs: [
				"The hardest design problem wasn't the conversation. It was trust. Scout writes to real data — jobs, invoices, client records — and users have to trust it before they'll hand it anything consequential. Trust isn't a feeling you design for generically. It's earned through specific, deliberate decisions at the moments that matter.",
			],
			image: {
				src: "/images/workspace/dashboard-with-assistant.png",
				alt: "Scout AI assistant panel open in VSCO Workspace showing confirmation step before a write action",
				caption: "Scout embedded in the product: the confirmation step before any write action is a non-negotiable trust pattern, not optional polish.",
			},
			subsections: [
				{
					title: "Confirmation before every write action",
					paragraphs: [
						"Before Scout writes anything, it shows exactly what it's about to do and asks the user to confirm. This is non-negotiable — not optional polish. Users who see what will happen before it happens are fundamentally more willing to hand off work. The confirmation step isn't friction. It's the mechanism that makes delegation feel safe.",
					],
				},
				{
					title: "Transparent processing states",
					paragraphs: [
						"Three thinking states: simple for short operations, step-by-step for complex ones ('Looking up Jamie Lee... Creating job... Attaching invoice...'), and a saving state for writes. The step-by-step isn't polish. It makes the process legible. Legibility is what earns trust.",
					],
				},
				{
					title: "Always one tap from a human",
					paragraphs: [
						"Escape to support is always visible. Not buried in a menu, not conditional on an error state. An AI that doesn't acknowledge its own limits destroys trust faster than any UX failure. The path to a real person is part of the design.",
					],
				},
			],
		},
		{
			title: "The component vocabulary",
			paragraphs: [
				"Scout's UI components are built for the pattern, not the specific object. A confirmation step that works for creating a job also works for sending an invoice or updating a contact — because it's designed for the action type, not the data type. That generality is what lets the system handle requests it was never explicitly designed for.",
			],
			list: [
				"Option chips: when Scout needs a decision, it surfaces 2–4 tappable choices. No typing required. Transient: selecting one sends it as a message and dismisses the rest.",
				"Thinking indicator: three states — simple, step-by-step with live labels, and saving — that make the process legible rather than invisible.",
				"Handoff card: after every completed task, a success signal, direct link to the object in Workspace, and contextual next-step chips. Scout creates. Workspace owns. The handoff card bridges them.",
				"Celebration state: emotional punctuation on meaningful completions — finishing onboarding, creating a first job.",
			],
		},
		{
			title: "The rebuild",
			paragraphs: [
				"Scout could only work if the product underneath it worked too. Usability research on the legacy CRM showed exactly where it was failing: no clear starting point, terminology that didn't match how photographers think, setup that required a support rep.",
				"The MVP scope was deliberately narrow: Lead to Booking to Payment. Get a photographer from first contact to paid job without having to understand the full CRM first.",
			],
			list: [
				"Dashboard: priorities, business insights, upcoming jobs, lead management",
				"Contacts: full contact management with notes, job history, lead scoring",
				"Jobs: kanban and list views, job stages (Lead, Booked, Fulfillment, Complete), invoicing",
				"Calendar: scheduling and availability",
				"Settings: brand, business forms, pricing, payments",
			],
			image: {
				src: "/images/workspace/contacts.png",
				alt: "VSCO Workspace contacts view with contact detail panel",
				caption: "Contacts, rebuilt from scratch around how photographers actually think about their clients, not how a legacy CRM structured the data.",
			},
		},
		{
			title: "Research as infrastructure",
			paragraphs: [
				"I built concept testing infrastructure directly into the prototype. Three controls, visible only in design sessions, that let research run without resetting or rebuilding anything:",
			],
			list: [
				"Atlas / Full: toggle between the June free tier and the paid roadmap direction in the same link. PM and leadership could see both products without two separate prototypes.",
				"With Data / New User: flip instantly between a populated account and a zero-state onboarding experience.",
				"Assistant Nudges: trigger specific Scout push-in messages (Getting Started, Site Setup, Set Up Pricing, First Contact) to test agent behavior in context before any production code was written.",
			],
			image: {
				src: "/images/surveymonkey transformation/showing concept testing .png",
				alt: "Prototype concept testing tools panel showing Atlas/Full and With Data/New User toggles",
				caption: "Concept testing controls built into the prototype: toggle between product tiers, user states, and agent nudges without resetting anything.",
			},
		},
		{
			title: "What testing validated",
			paragraphs: [
				"The May 2026 usability test came back clean. No P0 failures. Participants navigated the lead-to-booking workflow without significant breakdown. The object model landed. Empty states were understood. Settings were findable.",
				"Concept testing went further. The trust patterns worked. Participants described Scout as a 'virtual assistant', a 'business buddy', and a 'hub', not a CRM. That framing was the goal. Three value props resonated strongly: everything in one place, AI helps me level up, and it will get me business results.",
				"The most common request was wanting to send messages to clients directly from the app. That is a demand signal, not a usability failure. It validates the upgrade path.",
			],
		},
		{
			title: "What we're watching post-launch",
			paragraphs: [
				"The biggest unresolved gap is onboarding. Research and support logs both point to users not knowing where to start when first setting up the product. Scout addresses this directly. Concept testing validated strong appetite for AI-guided setup, particularly among new users who described it as reducing anxiety around getting it right.",
				"Kanban as a default view flagged unfamiliarity for users without a sales background. Worth monitoring as a fast follow if usage data shows navigation confusion.",
			],
		},
	],
};

export default workspaceChatAgent;
