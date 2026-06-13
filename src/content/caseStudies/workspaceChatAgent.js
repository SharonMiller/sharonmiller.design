const workspaceChatAgent = {
	slug: "workspace-chat-agent",
	title: "Workspace & Scout",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Agentic UX · Legacy rebuild",
	status: "Atlas launch June 23, 2026",
	hook: "The UI wasn't the problem. Designing an AI agent users would trust to act on their behalf was.",
	metrics: [
		{ value: "0", label: "P0 failures in usability test" },
		{ value: "June 23", label: "Shipped on schedule" },
	],
	description:
		"A trust-first AI agent designed from first principles: confirmation before every write action, transparent processing states, always-one-tap escape to human support. Built on a component vocabulary that handles any user request — including ones we never anticipated.",
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
		"VSCO acquired Táve, a CRM for professional photographers. The backend was genuinely powerful. Even after simplifying the UI, the underlying complexity remained: photographers still had to navigate a dense product to create a job, send an invoice, or follow up on a lead.",
		"Scout is the answer to that problem. An AI agent embedded in the product that lets users describe what they need in plain language and handles the CRM complexity on their behalf. The design challenge was not the chat interface — it was building the trust architecture that makes handing consequential actions to an AI agent feel safe.",
		"The approach: instead of designing flows, design the system that makes any flow work. A component vocabulary of output primitives the agent can assemble in any order, for any request, including ones we never anticipated.",
	],
	sections: [
		{
			title: "Agentic UX is a different design problem",
			paragraphs: [
				"Designing an AI agent is different from designing a product flow. You cannot map every conversation a user might have — the inputs are too varied and most of them have not happened yet. Traditional flow-based design breaks down immediately. There are too many branches, too many unknowns, and the moment you script a conversation it starts feeling like a decision tree instead of a real assistant.",
				"The shift: stop designing flows and start designing the system that makes any flow work. The investment is in the output primitives — the components the agent assembles at runtime to handle whatever the user asks. Build those right and the flows take care of themselves.",
				"Every component decision was evaluated against one question: does this help a user complete a real task, or does it just make the chat feel more chat-like?",
			],
		},
		{
			title: "The trust architecture",
			paragraphs: [
				"Scout writes to real user data — jobs, invoices, client records. Users need to trust that before they'll let it act. Trust is not a feeling you design for generically. It is built through specific, deliberate patterns at the moments that matter.",
			],
			image: {
				src: "/images/workspace/dashboard-with-assistant.png",
				alt: "Scout AI assistant panel open in VSCO Workspace showing confirmation step before a write action",
				caption: "Scout embedded in the product — the confirmation step before any write action is a non-negotiable trust pattern, not optional polish.",
			},
			subsections: [
				{
					title: "Confirmation before every write action",
					paragraphs: [
						"Before Scout writes anything to the Workspace API, it shows a structured summary of exactly what it is about to do and asks the user to confirm. Non-negotiable. Not a nice-to-have. Users who can see what the agent is about to do before it does it are fundamentally more willing to hand it work. The confirmation step is not friction — it is the trust mechanism.",
					],
				},
				{
					title: "Transparent processing states",
					paragraphs: [
						"The thinking indicator has three states: simple dots for short operations, a listed-steps variant that surfaces what Scout is doing in real time ('Looking up Jamie Lee… Creating job… Attaching invoice…'), and a saving state for write operations. The listed steps are not polish — they make the process legible. Users who can see what the agent is doing are more willing to trust the result.",
					],
				},
				{
					title: "Always one tap from a human",
					paragraphs: [
						"Escape to support is always visible in the header. Not buried. Not conditional. If Scout cannot help or the user is frustrated, the path to a real person is one tap away. An AI agent that doesn't acknowledge its own limits destroys trust faster than any UX failure.",
					],
				},
			],
		},
		{
			title: "The component vocabulary",
			paragraphs: [
				"The Scout UI is a purpose-built component library — @vsco/scout-ui — that extends VSCO's VUI design system. Every component is built for the pattern, not the specific object. A confirmation step that works for creating a job also works for sending an invoice, attaching a contract, or updating a contact — because it is designed for the action type, not the data type.",
			],
			list: [
				"Option chips: when Scout needs a decision, it surfaces 2–4 tappable choices. No typing required. Transient — selecting one sends it as a user message and dismisses the rest.",
				"Confirmation step: before any write action, Scout shows exactly what it is about to do. Users review before anything happens.",
				"Thinking indicator: three states (simple, doing with live step labels, saving) that surface process in real time.",
				"Handoff card: after every completed task, a success signal, direct link to the object in Workspace, and contextual next step chips. Scout creates. Workspace owns. The handoff card bridges them.",
				"Celebration state: emotional punctuation on meaningful completions — finishing onboarding, first job created.",
				"Escape to support: one tap, always visible, routes to a real person when Scout cannot help.",
			],
		},
		{
			title: "The rebuild",
			paragraphs: [
				"The CRM itself needed a full redesign before Scout could sit on top of it. Usability research on the legacy Táve product showed exactly where it was failing: users couldn't find a starting point, terminology didn't match how photographers think, and setup required a support rep.",
				"The MVP scope was deliberately narrow: Lead to Booking to Payment. Get a photographer from first contact to paid job without requiring them to understand the full CRM.",
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
				caption: "Contacts — rebuilt from scratch around how photographers actually think about their clients, not how a legacy CRM structured the data.",
			},
		},
		{
			title: "Research as infrastructure",
			paragraphs: [
				"I built concept testing infrastructure directly into the prototype. Three controls, visible only in design sessions, that let research run without resetting or rebuilding anything:",
			],
			list: [
				"ATLAS / FULL: toggle between the June free tier and the paid roadmap direction in the same link. PM and leadership could see both products without two separate prototypes.",
				"WITH DATA / NEW USER: flip instantly between a populated account and a zero-state onboarding experience.",
				"ASSISTANT NUDGES: trigger specific Scout push-in messages — Getting Started, Site Setup, Set Up Pricing, First Contact — to test agent behavior in context before any production code was written.",
			],
			image: {
				src: "/images/surveymonkey transformation/showing concept testing .png",
				alt: "Prototype concept testing tools panel showing Atlas/Full and With Data/New User toggles",
				caption: "Concept testing controls built into the prototype — toggle between product tiers, user states, and agent nudges without resetting anything.",
			},
		},
		{
			title: "What testing validated",
			paragraphs: [
				"The May 2026 usability test came back clean. No P0 failures. Participants navigated the lead-to-booking workflow without significant breakdown. The object model landed. Empty states were understood. Settings were findable.",
				"Concept testing went further. The trust patterns worked. Participants described Scout as a 'virtual assistant', a 'business buddy', and a 'hub' — not a CRM. That framing was the goal. Three value props resonated strongly: everything in one place, AI helps me level up, and it will get me business results.",
				"The most common request was wanting to send messages to clients directly from the app. That is a demand signal, not a usability failure — it validates the upgrade path.",
			],
		},
		{
			title: "What we're watching post-launch",
			paragraphs: [
				"The biggest unresolved gap is onboarding. Research and support logs both point to users not knowing where to start when first setting up the product. Scout addresses this directly — concept testing validated strong appetite for AI-guided setup, particularly among new users who described it as reducing anxiety around getting it right.",
				"Kanban as a default view flagged unfamiliarity for users without a sales background. Worth monitoring as a fast follow if usage data shows navigation confusion.",
			],
		},
	],
};

export default workspaceChatAgent;
