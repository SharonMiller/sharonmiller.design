const aiFirst = {
	slug: "operationalizing-ai-native-design",
	title: "Operationalizing AI-Native Design",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "The process · Operating model · Platform delivery",
	status: "MVP launch June 23, 2026",
	hook: "Design risked becoming the bottleneck as engineering moved faster. This is how I built an operating model that kept pace without sacrificing craft.",
	cardTitle: "Operationalizing AI-Native Design",
	cardHook: "How I helped design evolve so the org could move at AI speed without sacrificing craft.",
	metrics: [
		{ value: "2 products", label: "shipped without adding design headcount" },
		{ value: "~1 wk", label: "concept to production-ready spec" },
	],
	description:
		"Workspace became the proving ground for a new way of working. What I learned there became the operating model that let the design organization move at engineering speed while maintaining a high bar for craft.",
	thumbnail: {
		src: "/images/ai design ops/ai-first-process-diagram.svg",
		alt: "Design x AI Flywheel: prototype surfaces gaps, gaps go through the design system, system strengthens the next prototype",
		contain: true,
	},
	relatedStudies: [
		{
			slug: "vsco-workspace",
			label: "Read next",
			text: "The process only makes sense alongside the product. This is the product.",
			cta: "See the product we shipped while building this model →",
		},
		{
			slug: "design-system-governance",
			label: "Go deeper",
			text: "The process is one story. How the organization changed to support it is another.",
			cta: "See AI-Powered Design Ops →",
		},
	],
	sections: [
		{
			title: "The challenge",
			paragraphs: [
				"AI changed how products get built almost overnight. Engineering was already building in Cursor, and product teams were beginning to generate concepts with AI. The speed was exciting, but the quality was inconsistent. Good prompts and product requirements weren't enough to produce thoughtful product design.",
				"At the same time, design couldn't afford to become the bottleneck. If we couldn't keep pace, decisions would increasingly be made without us. If we lowered the quality bar to keep up, we risked losing the craft that makes products intuitive, trustworthy, and enjoyable to use.",
				"I wasn't interested in choosing between the two.",
				"I wanted to find the best of both: the speed AI made possible and the craft users expect.",
				"Workspace became the proving ground. Designing directly in Cursor taught me that great results didn't come from AI alone. They came from embedding design judgment into the workflow through systems, constraints, best practices, and continuous feedback.",
				"Everything that follows grew out of those lessons.",
			],
		},
		{
			title: "My role",
			paragraphs: [
				"As Head of Product Design, I wasn't just redesigning Workspace. I was helping the design organization adapt to a fundamental shift in how software was being built.",
				"Workspace became the proving ground for experimenting with AI-native product design. Once I understood what produced high-quality results—and what didn't—I turned those lessons into a repeatable operating model the rest of the design organization could adopt.",
				"My role expanded beyond designing one product. I built the workflows, templates, guardrails, and feedback systems that allowed designers to move faster while maintaining a high bar for craft.",
			],
		},
		{
			title: "The Flywheel",
			image: {
				src: "/images/ai design ops/ai-first-process-diagram.svg",
				alt: "The Design x AI Flywheel: prototype surfaces gaps, gaps go through the design system, system strengthens the next prototype",
				contain: true,
			},
			paragraphs: [
				"The operating model rests on a simple loop: a well-maintained design system makes AI-assisted prototyping possible. Prototyping surfaces design system gaps fast. Each cycle makes both stronger.",
				"The Dashboard Card system became an early proof point for what an AI-native design workflow could look like.",
				"While designing Workspace, I realized our design system didn't include a dashboard card flexible enough to support the CRM experience we were building. Rather than creating a one-off component inside the product, I wanted to strengthen the design system itself.",
				"Using Claude with the Figma MCP, I audited dashboard cards across VSCO to understand the existing patterns, inconsistencies, and opportunities for reuse. Claude then assembled a new component using our existing primitives, applying the correct token bindings, auto layout, variants, and design system conventions. After several rounds of review and refinement, we published the component to our design library.",
				"From there, we pulled the updated library directly into the Workspace prototype through Cursor and continued designing against the production-ready component.",
				"In a single afternoon, we had designed, reviewed, refined, and published a complex, flexible component. We validated it across desktop and mobile, light and dark mode, and then exported it to engineering. What traditionally would have taken days became a matter of hours, while still preserving the design review and judgment that ensured quality.",
				"The design system stopped being a design artifact. It became the foundation that lets design move at engineering speed.",
			],
			readMore: {
				slug: "design-system-governance",
				title: "AI-Powered Design Ops",
				text: "The full design system automation workflow: audit, fix, and report via the Figma Plugin API",
			},
		},
		{
			title: "How the operating model works",
			paragraphs: [
				"The Flywheel defines the principle. What follows is how it works in practice: from design intent to executable spec, with shared context across the team and a clear handoff to engineering.",
			],
			subsectionColumns: true,
			image: {
				src: "/images/Atlas Workspace/cursor ide.png",
				alt: "Cursor agent making commits to the VSCO design workspace prototype",
				caption: "Cursor iterating on the VSCO Workspace prototype: 272 commits, concept to working spec in roughly one week.",
			},
			subsections: [
				{
					title: "From intent to executable spec",
					paragraphs: [
						"The prototype was built as a React app running in the browser — with real state, real interactions, real edge cases. The handoff was the branch.",
					],
					list: [
						"Engineering handoff: 'here's the branch.'",
						"Office hours: design sessions three times a week for PM and eng to clarify in real time.",
						"Commit history: agent and manual work tracked together, no translation required.",
					],
				},
				{
					title: "Shared context across the team",
					paragraphs: [
						"A persistent context layer connected to Jira, Confluence, and linked PRDs — so no one had to reconstruct the current state of thinking from scratch.",
					],
					list: [
						"Context: scope, research, constraints, and decisions synthesized on demand.",
						"Prompts: grounded in current product thinking, not written from scratch.",
						"Routing: design system audits, component generation, and prompt drafting all through the same layer.",
					],
				},
				{
					title: "Review, not spec",
					paragraphs: [
						"Figma didn't go away. Its role changed from primary design surface to review and library surface.",
					],
					list: [
						"Review: prototype pushed to Figma as real layers when ready for stakeholder review.",
						"Library: polished components contributed back to the design system.",
						"Spec tool: replaced. Component system and review surface kept.",
					],
				},
			],
		},
		{
			title: "Making it teachable",
			paragraphs: [
				"A process only one person can run is not a process. The goal was a system any designer could pick up without a two-hour onboarding call — pre-configured templates, bundled fonts, always-on guardrails, and a vocabulary that translated designer language into the actions the tools understand.",
			],
			pullquote: "A process only one person can run is not a process.",
			subsections: [
				{
					title: "Always-on rules",
					layout: "image-right",
					paragraphs: [
						"Cursor rules run automatically on every prompt. Designers don't have to remember them — the agent enforces design system tokens, component hierarchy, and prototype conventions before anything gets built.",
					],
					list: [
						"Design system rule: typography variants, color tokens, component hierarchy. No raw HTML elements or hex values.",
						"No-override rule: prevents CSS from fighting design system component defaults.",
						"Prototype rule: tells the agent this is a concept, optimize for clarity and testable UX, not production patterns.",
						"Vocabulary rule: translates designer language to git actions in passing. 'Save my changes' becomes a commit. 'Send it to the link' becomes a push and deploy.",
					],
					image: {
						src: "/images/ai design ops/IMG_0471.png",
						alt: "Design Best Practices for Cursor Starter Repos: the always-on rules document that runs on every prompt",
						caption: "The rules file: read by the agent on every prompt. Designers don't configure anything.",
					},
				},
				{
					title: "Skills for every stage",
					paragraphs: [
						"Skills are on-demand workflows triggered by a single prompt — setup, review, audit, and handoff without leaving Cursor.",
					],
					list: [
						"Project setup: first-time onboarding — Node, branches, dev server, and Figma connection.",
						"Prototype to Figma: captures the live prototype for review and converts hardcoded values to design system tokens.",
						"Design system audit: checks whether a prototype pattern maps to an existing component before building a new one.",
						"Eng-ready release: diffs main vs eng-ready, generates a changelog, and can post a summary to Figma via the Figma MCP.",
					],
				},
				{
					title: "Three-stage lifecycle",
					paragraphs: [
						"Three environments gave every stakeholder a predictable reference point — and solved the trust problem with engineering when it surfaced mid-rollout.",
					],
					list: [
						"wip: active iteration. Design moves freely, not for testing.",
						"concept-testing: stable enough for user research sessions. Last week's build is available for testing while this week's iteration is already in wip.",
						"eng-ready: polished handoff. Updated on a predictable schedule with a Cursor-generated changelog so engineers always know what changed before they see it.",
					],
				},
			],
		},
		{
			title: "Replacing the redline",
			paragraphs: [
				"The handoff artifact was always the weak link. A static Figma file communicates what something looks like, not how it should behave or why the design works the way it does.",
				"When design pushes to a stable state, a skill auto-generates a structured handoff and posts it to Slack:",
			],
			list: [
				"Feature brief: what it is, how it should behave, and what success looks like.",
				"Exact specs: corner radius, spacing, shadow values, interaction states.",
				"Component descriptions: precise enough for an agent to build from, not guess from a visual.",
				"Product context: why the design works the way it does, not just what it looks like.",
			],
			closingParagraphs: [
				"Engineering uses the concept link and the prompt together. The link is the visual reference. The prompt is the instruction set. They add API details and technical constraints on top — a machine-readable instruction set that travels with the code.",
			],
			image: {
				src: "/images/design ops/IMG_2671.png",
				alt: "Claude posting a structured handoff summary in Slack with component specs and design context",
				caption: "The handoff prompt auto-posted to Slack: feature context, exact specs, and agent-ready instructions in one message.",
			},
		},
		{
			title: "How designers adopted it",
			paragraphs: [
				"With the operating model defined, adoption came down to removing every excuse not to start. The template repo ships with everything pre-configured: design system installed, fonts bundled, Cursor rules active, skills for every stage of the workflow.",
				"Rather than rolling out to everyone at once, the process started with one designer. Studio Pro was the proof of concept that made broader adoption credible — much of the concept testing happened in Cursor, even though some high-fidelity design was still detailed in Figma first.",
				"I presented the methodology at the design org all-hands and defined AI fluency as a required competency at every IC level — working with tools fluently, configuring context, and designing the infrastructure other designers build on.",
			],
		},
		{
			title: "Resistance and lessons learned",
			paragraphs: [
				"The most important insights didn't come from what worked on day one. They came from what didn't — and from the friction that surfaced when other teams tried to adopt the model.",
			],
			subsections: [
				{
					title: "What the tools revealed",
					paragraphs: [
						"Prototyping in Figma produced a Figma artifact. There's no path from a Figma prototype to a production codebase that doesn't require a full rebuild. Every handoff meant starting over. The prototype and the product always diverged.",
						"Prototyping in code produced the opposite: engineering forked from a working branch. The concept link and the production build pointed at the same thing. The prototype and the product converged rather than diverged. That's not a workflow preference. It's a fundamentally different relationship between design and what ships.",
					],
					image: {
						src: "/images/Atlas Workspace/figma-galleries.png",
						alt: "Figma Make concept test output for the VSCO Galleries feature",
						caption: "Figma Make concept test for the Galleries feature: technically functional, but design-system-blind.",
					},
				},
				{
					title: "The trust problem with engineering",
					paragraphs: [
						"The first version of this workflow created a real problem. Design changes were being pushed to the concept link while engineering was actively building against it. Their reference moved underneath them mid-sprint. That was not a workflow failure. It was a trust failure.",
						"The three-stage lifecycle fixed it. Once eng-ready was stable and updated on a predictable schedule, engineers stopped worrying about the prototype shifting on them. They became advocates for the workflow instead of resistors to it.",
					],
				},
				{
					title: "The language barrier for designers",
					paragraphs: [
						"Cursor is built for engineers. Before other designers could use it, the mental model gap had to close — most didn't know what a push or a commit meant.",
						"The vocabulary rule in the always-on rules file solved this without a lecture. Designers could open the template, read the files, and start working. No two-hour onboarding call.",
					],
				},
			],
		},
		{
			title: "The outcome",
			paragraphs: [
				"Two production MVPs shipped June 23, 2026. Engineering used the working prototype as the primary production reference, with no spec translation required. Scout's component architecture was adopted by engineering as a standalone cross-app repo for production. External validation: the design was sound enough that engineering rebuilt it.",
			],
			stats: [
				{ value: "0", label: "Design hires added" },
				{ value: "2", label: "Products shipped" },
				{ value: "~1 wk", label: "Concept to working spec" },
			],
			closingParagraphs: [
				"The design system gets stronger through the build cycle. Designers have a repeatable process. The system compounds. Detailed design still matters — craft applied to the moments where it has the highest impact, with the design system handling the baseline.",
			],
		},
		{
			title: "Reflection",
			paragraphs: [
				"The biggest lesson wasn't that AI replaced design. It was that design had to evolve alongside it.",
				"Craft still matters. Judgment still matters. The difference is where those skills are applied. Rather than spending time manually producing every artifact, designers can focus on the decisions that shape the product while systems and AI handle more of the execution.",
				"That balance between craft and speed became the operating model we introduced across the design organization.",
			],
		},
	],
};

export default aiFirst;
