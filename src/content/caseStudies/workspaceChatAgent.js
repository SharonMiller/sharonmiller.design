const workspaceChatAgent = {
	slug: "workspace-chat-agent",
	title: "Workspace & Chat Agent",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Product Design, 0-1, AI-Native Workflow",
	status: "Shipping June 23, 2026",
	previewImage: "/images/workspace/dashboard.png",
	description:
		"Agent-driven CRM and chat UI: componentized interfaces that assemble by context, with human-in-the-loop moments built into the product architecture.",
	metrics: [
		{ value: "June 23", label: "MVP launch" },
		{ value: "Agent", label: "UI system" },
	],
	heroImage: {
		src: "/images/workspace/dashboard-with-assistant.png",
		alt: "Workspace dashboard with embedded VSCO Assistant chat agent",
		caption: "Workspace CRM with integrated AI assistant",
	},
	summary: [
		"Two products designed almost entirely in Cursor using a live design system. Figma was for screenshots and design system updates. That's it.",
		"Workspace is a CRM for creative professionals — photographers, videographers, event makers — who need to run a business without the complexity of tools like Dubsado or HoneyBook. The Chat Agent is an AI assistant built into Workspace that helps users navigate the product, automate workflows, and get answers in context.",
		"Both were built with no dedicated design systems headcount. One designer. Engineering used the prototype as the primary reference for production development.",
	],
	sections: [
		{
			title: "The Challenge",
			paragraphs: [
				"VSCO acquired Táve — a legacy CRM product — and needed to rebuild it for a new audience: aspiring creatives who needed business tools that matched how they actually work.",
				"The design scope was large: a full product spanning an MVP (Lead to Booking to Payment) and a one-year vision covering CRM, task management, calendaring, AI-powered workflows, and business dashboards.",
				"The team was small. The timeline was real. My designer was on leave.",
			],
		},
		{
			title: "The Approach",
			subsections: [
				{
					title: "Cursor as the Primary Design Surface",
					paragraphs: [
						"For most of the product I skipped static Figma mocks entirely. I built interactive prototypes directly in Cursor — a React codebase running in the browser, clickable, iterable in real time.",
						"This changed what I was designing. Instead of approximating interactions in a static tool, I was designing with state, real layout behavior, and real component constraints. When the kanban board needed a sheet drawer on card click, I built it. When the dashboard needed a KPI block that conditionally rendered an upsell banner, I designed it in actual code.",
						"The prototype is deployed and live. Engineering handoff stopped being \"here's a Figma file\" and became \"here's a working branch.\"",
					],
					images: [
						{
							src: "/images/workspace/dashboard.png",
							alt: "Workspace dashboard with priorities, insights, and upcoming jobs",
						},
						{
							src: "/images/workspace/contacts.png",
							alt: "Workspace contacts view with notes and job history",
						},
					],
				},
				{
					title: "What Figma Was For",
					paragraphs: [
						"Exactly one thing: the design system.",
						"Every time I needed a component that did not exist, I went to Figma to build it properly. Not to mock screens. To extend the system.",
						"Figma as a specification tool is slow and lossy. Figma as a component system is irreplaceable. I kept it in its lane.",
					],
				},
				{
					title: "The AI-Native Component Workflow",
					paragraphs: [
						"Whenever a pattern in the prototype did not map to an existing component, I used a custom Claude skill to audit the design against the design system before building anything new.",
					],
					list: [
						"Does a close-enough component already exist?",
						"If not, what is the right structural pattern?",
						"What tokens apply?",
						"Once the audit confirmed a gap, I used Claude via the component builder skill to build the component directly in Figma using the Plugin API.",
						"This is a repeatable workflow: pattern identified, audit against design system, build with Claude, publish to library, use in Cursor prototype.",
					],
				},
				{
					title: "Engineering Ceremony Redesign",
					list: [
						"Prototype review: engineers review the live Cursor prototype, not static screens",
						"Component alignment sessions: when a new component is built, engineering gets a brief on the component API before any code is written",
						"Shared codebase: the design prototype lives in a repo that engineering can fork from",
						"Three-environment system: eng-ready / wip / concept-testing — each serving a different purpose",
						"Live design hours: 3x per week, real-time feedback and unblocking",
						"Changelog: Cursor generates a summary of what changed so engineering always knows what updated in the concept link",
					],
				},
			],
		},
		{
			title: "What Was Built",
			subsections: [
				{
					title: "Workspace",
					paragraphs: ["A full CRM product for creative professionals:"],
					list: [
						"Dashboard — priorities, business insights, upcoming jobs, lead management, recent activity",
						"Contacts — full contact management with notes, job history, lead scoring",
						"Jobs — kanban and list views, job stages (Lead, Booked, Fulfillment, Complete), client documents, invoicing",
						"Invoices — invoice creation, sending, tracking, payment status",
						"Calendar — scheduling and availability",
						"Settings — brand, business, forms and templates, pricing and packaging, payments",
						"VSCO Assistant — AI chat agent embedded in the product",
					],
				},
				{
					title: "Chat Agent Component System",
					paragraphs: [
						"A flexible, componentized UI system that dynamically assembles the right interface based on conversational context. The component system spans all products and establishes the foundation for agent-driven experiences.",
						"The agent is not a chatbot layered on top of the product. It is integrated into the product architecture — aware of the user's context, capable of taking actions, and designed to surface the right UI at the right moment.",
					],
					images: [
						{
							src: "/images/workspace/assistant.png",
							alt: "VSCO Assistant chat interface with contextual product actions",
						},
						{
							src: "/images/workspace/new-contact-modal.png",
							alt: "New contact modal in Workspace",
						},
					],
				},
			],
		},
		{
			title: "Key Learnings",
			subsections: [
				{
					title: "The language barrier",
					paragraphs: [
						"Designers did not understand developer concepts. What is a push? What is a commit? What is a branch? The onboarding had to solve this before anything else. I wrote documentation in plain language, built templates with everything pre-configured, and created AI assistants that could answer questions in context.",
					],
				},
				{
					title: "The moving target problem",
					paragraphs: [
						"Engineering was building from the concept link. When I pushed design changes, their reference updated underneath them mid-development. This caused real frustration.",
						"The three-environment system solved it: eng-ready was stable and only updated on a schedule with advance notice. WIP was my sandbox. Concept-testing was for user research. Engineering always knew which environment was safe to build from.",
					],
				},
				{
					title: "The review workflow that actually worked",
					paragraphs: [
						"Share the concept link. Use html.to.design to pull the live UI into Figma. Team leaves comments. Extract elements from Figma layers. Make updates in Cursor or push new components to the design system via MCP. Push to concept link. Repeat.",
						"This created a feedback loop that felt familiar to designers while keeping the source of truth in code.",
					],
				},
				{
					title: "What I would do differently",
					paragraphs: [
						"The onboarding flow needs more user testing before the production launch. Progressive disclosure works in the prototype but the sequencing of setup steps needs validation at scale.",
						"The AI agent personality and voice also needs more definition. The component system is solid but the conversational layer is still being shaped.",
					],
				},
			],
		},
		{
			title: "The Outcomes",
			list: [
				"Full MVP product shipped June 23, 2026",
				"Engineering used the Cursor prototype as the primary reference for production development",
				"Fastest concept-to-spec cycle the team had ever had",
				"New component family built natively in the design system, ready for cross-app publishing",
				"Zero dedicated design systems headcount",
			],
		},
	],
	footer:
		"Full prototype available to walk through during an interview. Video walkthrough available post-launch June 2026.",
};

export default workspaceChatAgent;
