const workspaceChatAgent = {
	slug: "workspace-chat-agent",
	title: "Workspace & Chat Agent",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Legacy rebuild · Agentic UX",
	status: "Atlas launch June 23, 2026",
	hook: "Powerful backend, unusable frontend. Rebuilt from scratch and added an AI agent as the simple surface on top.",
	metrics: [
		{ value: "0", label: "P0 failures in usability test" },
		{ value: "June 23", label: "Atlas launch" },
	],
	description:
		"Legacy CRM rebuilt from scratch for creative professionals, plus an embedded AI agent that handles the complexity so users don't have to.",
	thumbnail: {
		src: "/images/workspace/assistant.png",
		alt: "VSCO Assistant chat interface",
	},
	impact: [
		"Full Atlas MVP shipped June 23, 2026. Dashboard, contacts, jobs, invoices, calendar, settings. Rebuilt from a legacy CRM into a product creative professionals actually want to use.",
		"VSCO Assistant embedded in the product architecture. A task executor with a conversational interface, not a chatbot bolted on top.",
		"Component vocabulary designed for agentic UX: output primitives that handle any user request, including ones we never anticipated.",
		"Engineering used the Cursor prototype as the primary production reference. Fastest concept-to-build cycle the team had seen.",
		"Three-environment release model contributed to 12% paywall conversion lift through faster experiment cycles.",
	],
	summary: [
		"VSCO acquired Táve, a full-featured CRM for creative professionals. The backend was genuinely powerful. The frontend was built for a different era and a different audience.",
		"Usability research on the legacy product showed exactly where it was failing: users couldn't find a starting point, terminology didn't match how photographers think, and setup required a support rep. The redesign started there.",
		"The AI assistant came from the same insight. Even a simplified UI doesn't make underlying complexity disappear. The assistant is the simple surface on top of the complex system. Concept testing validated the framing: participants called it a virtual assistant and a business buddy, not a CRM.",
	],
	sections: [
		{
			title: "What the research showed",
			paragraphs: [
				"Before redesigning anything, we studied where the legacy product was failing. The findings were specific.",
				"Users consistently didn't know where to start. There was no clear path from sign-up to first value. Terminology created confusion for people coming from tools like HoneyBook or Dubsado. One user spent over an hour with two support reps and still couldn't figure out how to structure his existing work into Workspace jobs. That pattern repeated across multiple new users.",
				"Key gaps: no guided migration path, no clear starting point, high cognitive load during setup, and language that didn't map to how photographers think about their work.",
			],
		},
		{
			title: "The rebuild",
			paragraphs: [
				"The MVP scope was deliberately narrow. Lead to Booking to Payment. Get a photographer from first contact to paid job without requiring them to understand the full CRM.",
			],
			list: [
				"Dashboard: priorities, business insights, upcoming jobs, lead management",
				"Contacts: full contact management with notes, job history, lead scoring",
				"Jobs: kanban and list views, job stages (Lead, Booked, Fulfillment, Complete), invoicing",
				"Calendar: scheduling and availability",
				"Settings: brand, business forms, pricing, payments — simplified to what a new user actually needs",
			],
			image: {
				src: "/images/workspace/contacts.png",
				alt: "VSCO Workspace contacts view with contact detail panel",
				caption: "Contacts — full contact management with notes, job history, and lead scoring.",
			},
		},
		{
			title: "Designing the AI assistant",
			paragraphs: [
				"Designing an AI assistant is different from designing a product flow. We cannot map every conversation a photographer might have. The inputs are too varied and most of them have not happened yet.",
				"The approach: instead of designing flows, design the system that makes any flow work. A component vocabulary of output primitives the assistant can assemble in any order.",
			],
			image: {
				src: "/images/workspace/dashboard-with-assistant.png",
				alt: "VSCO Workspace dashboard with AI assistant panel open showing quick actions",
				caption: "VSCO Assistant embedded in the product — quick actions, prompt suggestions, and a conversational interface on top of the full CRM.",
			},
			subsections: [
				{
					title: "The component vocabulary",
					list: [
						"Option chips: when the assistant needs a decision, it surfaces 2–4 tappable choices. No typing required.",
						"Structured preview card: a read-only summary of a job, invoice, or contact rendered in the chat thread before any write action.",
						"Inline form fields: lightweight data entry for quick edits without leaving the conversation.",
						"Confirmation step: before any write action, the assistant shows exactly what it is about to do. The assistant writes to the Workspace API. Users review before it happens.",
						"Escape to support: always one tap away from a real person.",
					],
				},
			],
		},
		{
			title: "The prototype as a research tool",
			paragraphs: [
				"I built concept testing infrastructure directly into the prototype. Three controls, visible only in design sessions:",
			],
			list: [
				"ATLAS / FULL: toggle between the June free tier and the paid roadmap direction in the same link. PM and leadership could see both products without two separate prototypes.",
				"WITH DATA / NEW USER: flip instantly between a populated account and a zero-state onboarding experience. Research ran new user sessions without resetting or rebuilding anything.",
				"ASSISTANT NUDGES: trigger specific push-in messages — Getting Started, Site Setup, Set Up Pricing, First Contact — to test assistant behavior in context before any production code was written.",
			],
			image: {
				src: "/images/showing concept testing .png",
				alt: "Prototype concept testing tools panel showing Atlas/Full and With Data/New User toggles",
				caption: "Concept testing controls built into the prototype — toggle between product tiers, user states, and assistant nudges without resetting anything.",
			},
		},
		{
			title: "Why engineering could move fast",
			paragraphs: [
				"Handoff was a working branch, not a Figma file. Component alignment sessions happened while design was still malleable. A changelog generated on each push so engineering always knew what changed.",
				"Live design hours three times per week replaced async Slack threads. Faster decisions, less rework.",
			],
			video: {
				src: "/videos/workspace-demo.mp4",
				caption: "Working prototype — real navigation, states, and data. Built in Cursor using VUI components.",
			},
		},
		{
			title: "What testing validated",
			paragraphs: [
				"The May 2026 usability test came back positive. Participants navigated the lead-to-booking workflow without significant breakdown. No P0 failures. The object model landed. Empty states were understood. Settings were findable.",
				"Concept testing went further. Three value props resonated strongly across both aspiring pros and working professionals: everything in one place, AI helps me level up, and it will get me business results. Participants described the product as a virtual assistant, a business buddy, and a hub. Not a CRM. That is the right framing for this audience.",
				"The most common request was wanting to send messages to clients directly from the app. That is a demand signal, not a usability failure. In-app messaging lives in the paid roadmap.",
			],
		},
		{
			title: "What we're watching post-launch",
			paragraphs: [
				"Kanban as a default view: concept testing flagged unfamiliarity for users without a sales background. Worth monitoring as a fast follow if usage data shows navigation confusion. The Fulfilled status label caused some uncertainty. A language check is queued.",
				"The biggest unresolved gap is onboarding. Research and support logs both point to users not knowing where to start. The AI assistant addresses this directly. Concept testing validated strong appetite for AI-guided setup, particularly among aspiring pros who described it as reducing anxiety around getting it right.",
			],
		},
	],
	footer: "Atlas launched June 23, 2026. Prototype walkthrough available during an interview.",
};

export default workspaceChatAgent;
