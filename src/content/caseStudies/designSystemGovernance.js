const designSystemGovernance = {
	slug: "design-system-governance",
	title: "Design System Governance with AI",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design Systems, AI Tooling, Process",
	previewImage: "/images/experiment-database.png",
	description:
		"AI-assisted design system governance: audit, fix, and document a production library in hours, not weeks, without dedicated headcount.",
	metrics: [
		{ value: "Hours", label: "Full library audit" },
		{ value: "0", label: "DS headcount added" },
	],
	heroImage: {
		src: "/images/cursor-prototype.png",
		alt: "Cursor and Claude workflow alongside a live product prototype",
		caption: "Design system governance tied directly to prototyping in code",
	},
	summary: [
		"Used Claude to audit, fix, and document a production design system. No dedicated IC. Just a better process.",
		"The design system had grown faster than it could be maintained. Components in Figma were out of sync with code. Token bindings were inconsistent. Documentation was sparse. A full audit would normally require weeks of dedicated design systems work and a specialist to do it.",
		"I built a workflow that did it in hours.",
	],
	sections: [
		{
			title: "The Problem",
			paragraphs: [
				"A design system that designers cannot trust is worse than no design system. Designers work around it. Engineers implement inconsistently. The gap between design and production widens.",
				"The team had this problem. Not because of neglect but because the team was small and moving fast. The system grew organically. By the time I joined, there was meaningful drift between what lived in Figma and what lived in the codebase.",
				"The standard solution: hire a design systems specialist. We did not have that headcount.",
			],
		},
		{
			title: "The Approach",
			subsections: [
				{
					title: "Two Agents, One Workflow",
					paragraphs: [
						"I built a two-agent workflow using Claude with a write-capable Figma MCP execution layer.",
					],
					list: [
						"Agent 1 — Design Governance Agent (Claude): responsible for auditing, analysis, and decision-making. Connected to the Figma file via MCP. Could read component structures, query token bindings, identify gaps between Figma and documented code patterns, and generate structured audit reports.",
						"Agent 2 — Engineering Synchronization Agent (Claude with Plugin API access): responsible for execution. Once the governance agent identified a gap or inconsistency, the engineering agent wrote and executed Figma plugin scripts to fix the component directly — rebuilding auto-layout, rewiring token bindings, creating missing variants, updating component property naming to match code conventions.",
					],
				},
				{
					title: "The Loop",
					list: [
						"Audit — governance agent scans a component or section of the library, identifies issues, generates a structured report",
						"Execute — engineering agent receives the report, writes the plugin script, applies the fix directly in Figma",
						"Validate — governance agent re-scans to confirm the fix landed correctly",
						"Document — governance agent generates updated documentation for the component",
					],
					paragraphs: [
						"This loop replaced what would normally be a manual, multi-week process for a dedicated design systems designer.",
					],
				},
			],
		},
		{
			title: "What the Audit Found",
			list: [
				"Design system was installed and tokens were imported correctly, but component-level adoption was extremely thin — only Button and Modal were being pulled from the library across the entire app",
				"Most UI was built with raw HTML and custom CSS with hardcoded values instead of design tokens",
				"Typography: raw h1-h6 tags throughout instead of the Typography component",
				"Colors: hardcoded hex values instead of semantic tokens — dark mode would not work and brand color updates would not propagate",
				"Icons: third-party icon library used in one section instead of the design system icons, creating visual inconsistency",
				"Large sections of the app had zero token usage",
			],
		},
		{
			title: "What We Fixed",
			list: [
				"Full typography migration to the Typography component with correct variant mapping",
				"Color token replacement: all hardcoded hex values mapped to semantic tokens",
				"Icon library standardized throughout",
				"Component replacement plan created for all custom implementations that had design system equivalents",
				"Rollout order defined by risk level: isolated modals first, shared layout last",
			],
		},
		{
			title: "The Cursor Templates",
			paragraphs: [
				"Alongside the Figma governance work, I built React and React Native GitHub repo templates for the design team. Each template includes CLAUDE.md context files with project-specific skill instructions, component conventions documentation, design system integration patterns, Cursor rules that enforce design system usage, and AI assistant configurations.",
				"The goal: a designer opens a template, reads the MD files, and has the mental model they need to work without a two-hour onboarding call.",
			],
		},
		{
			title: "The Outcomes",
			list: [
				"Full library audit completed in hours, not weeks",
				"Backlog of missing and misaligned components surfaced and documented",
				"Dashboard Card System (Header, Body, Footer, Card) built from scratch with proper auto-layout, token bindings, and Code Connect-ready naming",
				"Design team templates in React and React Native ready for rollout",
				"Zero dedicated design systems headcount added",
			],
		},
		{
			title: "Why This Matters",
			paragraphs: [
				"The standard model for design systems work assumes a dedicated specialist. A staff-level designer whose entire job is maintaining the system.",
				"That model does not scale for small teams. And it creates a single point of failure — when that person leaves, the system drifts.",
				"The model I built distributes design systems governance across the workflow. The audit happens continuously, not quarterly. The fixes happen the same day, not the next sprint. The documentation writes itself.",
				"This is what design systems governance looks like when AI is part of the process.",
			],
		},
	],
	footer: "Full audit documentation and Claude skill files available to review during an interview.",
};

export default designSystemGovernance;
