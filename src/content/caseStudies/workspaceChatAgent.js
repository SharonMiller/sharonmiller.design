const workspaceChatAgent = {
	slug: "workspace-chat-agent",
	title: "Workspace & Chat Agent",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "0→1 product · Agentic UX",
	status: "Shipping June 23, 2026",
	hook: "0→1 CRM and embedded AI agent shipping June 2026 — one designer, no DS headcount, engineering building from the prototype.",
	metrics: [
		{ value: "June 23", label: "MVP ship date" },
		{ value: "12%", label: "Paywall conversion lift" },
	],
	description:
		"Full CRM plus agentic chat UI shipping June 2026. Engineering builds from the live prototype. Agent UI system spans products.",
	thumbnail: {
		src: "/images/workspace/assistant.png",
		alt: "VSCO Assistant chat interface",
	},
	impact: [
		"Full MVP scope delivered: dashboard, contacts, jobs, invoices, calendar, settings — plus VSCO Assistant embedded in product architecture, not bolted on.",
		"Agentic UI system: interfaces assemble by conversational context — foundation for agent-driven experiences across VSCO.",
		"Engineering uses the Cursor prototype as primary production reference — reduced spec drift and rework.",
		"Three-environment release model (eng-ready / wip / concept-testing) solved the moving-target problem between design iteration and eng build.",
		"Contributed to 12% paywall conversion lift through faster growth experiment cycles on the same operating model.",
	],
	summary: [
		"Workspace is a CRM for creative professionals. The Chat Agent is AI integrated into the product — aware of context, capable of action, surfacing the right UI at the right moment. Both ship June 2026.",
	],
	sections: [
		{
			title: "Product scope delivered",
			list: [
				"Lead → booking → payment MVP across dashboard, contacts, jobs, invoices, and calendar",
				"Kanban and list views with job stages, client documents, invoicing, and scheduling",
				"VSCO Assistant: componentized chat UI that assembles by context across the product",
			],
		},
		{
			title: "Why engineering could move fast",
			paragraphs: [
				"Handoff is a working branch, not a Figma file. Component alignment sessions happen while design is still malleable. Changelog generated on each push so eng always knows what changed.",
				"Live design hours three times per week for synchronous decisions — fewer async spec debates.",
			],
		},
		{
			title: "What we learned before launch",
			paragraphs: [
				"Onboarding sequencing needs more user validation at scale. Agent voice and personality still being shaped. The component system is solid — the conversational layer is the next refinement.",
			],
		},
	],
	footer: "Prototype walkthrough available during an interview.",
};

export default workspaceChatAgent;
