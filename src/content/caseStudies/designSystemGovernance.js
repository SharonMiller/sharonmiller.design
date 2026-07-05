const DS = "/images/design ops";

const designSystemGovernance = {
	slug: "design-system-governance",
	title: "AI-Powered Design Ops",
	year: "2025–2026",
	role: "Head of Product Design, VSCO",
	type: "Design leadership · Organizational capability · People development",
	hook: "AI changed how software gets designed and built. My job wasn't just adopting new tools. It was helping my team grow into a fundamentally different way of working without losing the expertise that made design valuable.",
	cardTitle: "AI-Powered Design Ops",
	cardHook: "The definition of a great designer changed. How I updated our competency framework and operating model to match.",
	metrics: [
		{ value: "0", label: "specialist hires as org capability scaled" },
		{ value: "4", label: "platforms kept in sync without a dedicated DS role" },
	],
	description:
		"The definition of a great designer changed as AI changed how software gets built. I updated our competency framework and operating model so the design organization could develop expertise, maintain quality, and lead through the transition.",
	thumbnail: {
		src: `${DS}/IMG_9072.png`,
		alt: "Figma Dashboard Card System: component inventory and variants built programmatically with Claude",
	},
	relatedStudies: [
		{
			slug: "operationalizing-ai-native-design",
			label: "Related",
			text: "The org story only makes sense alongside the process. This is the process.",
			cta: "See the AI-native design process →",
		},
		{
			slug: "vsco-workspace",
			label: "The product",
			text: "The org story and the product story are different. This is the product.",
			cta: "See VSCO Workspace →",
		},
	],
	sections: [
		{
			title: "Building an AI-native design organization",
			paragraphs: [
				"As AI changed how software was designed and built, I realized the challenge wasn't teaching designers another tool. The role itself was changing.",
				"Engineering had already embraced AI-assisted development. AI also made it possible for product managers, designers, and engineers to generate concepts, prototypes, and working software faster than ever before. The boundaries between disciplines became more fluid, but expertise didn't automatically transfer with the tools.",
				"AI lowered the cost of execution. It didn't lower the need for expertise. If anything, deep expertise became even more valuable because the quality of AI output increasingly reflected the quality of the people directing it.",
				"Design couldn't continue working the same way. We needed a new operating model, and designers needed new expectations for what great looked like.",
				"Rather than creating a separate AI program, I updated our design competency framework to redefine what great designers should know in an AI-native organization.",
				"AI wasn't treated as another software skill. It became part of design craft, product thinking, technical fluency, systems thinking, and leadership.",
				"The framework wasn't updated to add AI as another competency. It was updated because the definition of a great designer had changed. AI became integrated into career growth alongside craft, product thinking, influence, and technical fluency.",
			],
			image: {
				src: "/images/ai design ops/IMG_7153.png",
				alt: "Updated design competency framework reflecting how AI became part of design excellence across every career level",
				caption:
					"Updated design competency framework reflecting how AI became part of design excellence across every career level.",
				featured: true,
			},
			imageFullWidth: true,
		},
		{
			title: "What changed",
			paragraphs: [
				"This wasn't about adding AI to the career ladder. It was about redefining excellence. As execution became cheaper, judgment, craft, systems thinking, and technical fluency became more important, not less. The competency framework made those expectations explicit across every level.",
			],
			subsections: [
				{
					title: "AI fluency became part of design fluency",
					paragraphs: [
						"Rather than creating a separate AI role, I integrated AI expectations into our existing career framework. Designers were expected to understand where AI belonged within product thinking, interaction design, systems, and implementation—and where human expertise still had to lead.",
					],
				},
				{
					title: "Craft became more important—not less",
					paragraphs: [
						"The framework intentionally reinforced that AI accelerates exploration, but designers remain responsible for judgment, interaction quality, motion, accessibility, refinement, and trust. AI output is a starting point, not finished design—and the bar for finished design didn't move down.",
					],
				},
				{
					title: "Designers became systems builders",
					paragraphs: [
						"Senior designers were expected to move beyond creating screens. The role expanded to include building reusable workflows, shared context, guardrails, and operating models that raised the capability of the entire organization—not just their own output.",
					],
				},
			],
			closingParagraphs: [
				"This framework became the foundation for coaching, onboarding, hiring, performance conversations, and career growth. It wasn't created in isolation—it reflected what we learned while shipping Workspace, operationalizing AI-native design, and building more than forty workflows in production.",
			],
		},
		{
			title: "Scaling quality across four platforms",
			paragraphs: [
				"As execution got cheaper, scaling quality across four diverging platforms required expert judgment made reusable—not more people doing manual work. At VSCO, web, React Native, iOS, and Android each had their own Figma library. They had grown independently and diverged. The standard fix requires a dedicated design systems specialist. That wasn't an option—and the leadership challenge wasn't finding a workaround. It was building organizational capability to scale quality across four platforms without one.",
			],
			subsections: [
				{
					title: "Design system quality at scale",
					layout: "image-right",
					paragraphs: [
						"To scale design quality without adding a specialist hire, I built an automated audit workflow that encodes our component standards—making expert judgment about what good looks like reusable across the library.",
					],
					list: [
						"Component check: reads every component against a structural checklist. Variant structure, auto-layout, token bindings, layer naming, descriptions.",
						"Tiered report: passing, issues, blockers, with specific fix instructions per node.",
						"Direct fixes: rebuilds auto-layout, rewires token bindings, creates missing variants, corrects property naming.",
						"Verified: every change confirmed before moving on. Progress blocked until every modified node passes.",
						"Slack summary: what was audited, what changed, what needs human review. Engineers notified when their components update.",
					],
					image: {
						src: `${DS}/IMG_5693.png`,
						alt: "Component inventory output: atomic design breakdown of Dashboard Card System with atoms, molecules, and organisms",
						caption: "The audit output: component inventory with atomic breakdown, library candidacy, and code priority.",
					},
				},
				{
					title: "Keeping design and engineering aligned",
					layout: "spec-left",
					paragraphs: [
						"As both teams moved faster, keeping Figma and code in sync required encoding design expertise into guidance both humans and agents could follow—so quality didn't depend on one person holding the standard in their head. The React and React Native design libraries now include written guidance that engineering agents read when expanding components. Instead of pre-building every variant, the docs describe what configurations are valid. Consistency at scale without pre-building every permutation.",
						"This extended the design system to serve a third consumer alongside designers and engineers: the agents both teams now work with—still directed by the standards designers defined.",
					],
					specBlock: {
						title: "modal.md",
						sections: [
							{
								heading: "Structure",
								lines: [
									"  sections: header · body · footer (optional)",
									"  radius: radius.standard (4px)",
									"  backdrop: color.overlay.scrim · 40% opacity",
								],
							},
							{
								heading: "Header",
								lines: [
									"  font: vsco-gothic · 17/semibold · caps",
									"  color: color.text.primary",
									"  close icon: optional — omit if footer has dismiss button",
									"  padding: 24 24 16",
								],
							},
							{
								heading: "Body",
								lines: [
									"  font: 16/medium desktop · 13/medium mobile",
									"  content: text | rows | form | image",
									"  ...",
								],
							},
						],
					},
				},
			],
			beforeImage: {
				src: `${DS}/ds-audit-problem.png`,
				alt: "Account page and Workspace Atlas screens showing design drift across surfaces in the same sprint",
				caption: "Same sprint, already drifting. Account page left, Workspace Atlas center and right, built without a shared source of truth.",
			},
		},
		{
			title: "Organizational visibility",
			paragraphs: [
				"As disciplines blurred and output accelerated, leadership needed better visibility to make informed decisions—not more meetings. Updates live in Confluence pages, Jira boards, PDF briefs, and Google Sheets. No one has time to read all of them—and without visibility, leadership can't remove blockers or redirect effort where it matters.",
			],
			subsections: [
				{
					title: "VSCO Design Project Tracker",
					paragraphs: [
						"To give leadership a single view of organizational health without adding management overhead, I built a daily dashboard that reads initiative pages across every squad and renders current status in one place: what each team is working on, whether they are on track, and direct links to Figma files, Jira boards, and source documents.",
						"One view instead of fifteen tabs. Better decisions without a status meeting.",
					],
					image: {
						src: "/images/ai design ops/IMG_4301.png",
						alt: "VSCO Design Project Tracker dashboard: all active design initiatives with status chips, owners, and key dates",
						caption: "All active VSCO design initiatives in one view. Status, key dates, links — no status meeting required.",
						fade: true,
					},
				},
				{
					title: "Daily brief",
					paragraphs: [
						"To keep the team aligned and preserve design time for judgment work, I built a morning brief that pulls from calendar and Slack context and posts priorities, blockers, upcoming design reviews, and anything needing attention that day—so expertise went into decisions, not status updates.",
					],
				},
			],
		},
		{
			title: "Raising the quality bar without specialists",
			paragraphs: [
				"As execution got cheaper, craft gaps became more visible—not less important to address. Complex problems—animation, conversion design, interaction research—traditionally stall without specialists or outside help. The goal was raising the quality floor so the team could meet a higher bar without waiting for capacity that wasn't coming.",
			],
			subsections: [
				{
					title: "Animation",
					paragraphs: [
						"When celebration animation quality fell below our bar, I built an interactive playground with parametric controls so brand could adjust without a code change—expertise about motion and feel encoded into a tool the team could reuse. The same approach applied to the Scout thinking indicator: six animation styles built as interactive prototypes, both shipping as live playgrounds rather than hardcoded values.",
					],
					image: {
						src: "/images/ai design ops/animation-screenshot.png",
						alt: "Scout celebration animation playground: soft mesh blob with parametric sliders for speed, turbulence, blur, and color",
						caption: "Celebration animation: shipped as a parametric playground so brand can adjust without a code change.",
					},
				},
				{
					title: "Paywall and conversion design",
					layout: "image-left",
					paragraphs: [
						"To raise conversion design quality without a dedicated research sprint, I built a live playground for iterating on paywall layout, copy, and patterns against actual product context—applying conversion expertise at a pace that would have required a specialist pass. Existing paywalls were audited against conversion best practices, gaps identified, and variants generated in the same environment.",
						"Once the direction was right, the designs moved into Figma where Superwall could leverage them for implementation. Research, iteration, and handoff in a single workflow.",
					],
					image: {
						src: "/images/paywall-variants.png",
						alt: "VSCO paywall variants generated with Claude: conversion audit and design options in one session",
						caption: "Paywall audit and variants: research and design in a single session.",
					},
				},
			],
		},
		{
			title: "Scaling how designers work",
			paragraphs: [
				"A competency framework only matters if other designers can succeed under it. One designer moving fast doesn't change an organization. The risk with any new process is that it stays siloed—one person's skill, not the org's capability. To scale expertise across the team, I needed proof that other designers could succeed independently, not just follow a demo.",
				"One designer on the team built and shipped Studio Pro largely using the workflows and guardrails from our competency framework. Their independent delivery was the proof of concept the team needed before broader adoption. I partnered with them directly before stepping back.",
				"The operating model—rules, skills, handoff workflow, and onboarding—that made this possible is documented separately.",
			],
			readMore: {
				slug: "operationalizing-ai-native-design",
				title: "Operationalizing AI-Native Design",
				text: "The full operating model: rules, skills, handoff workflow, and how the team adopted it",
			},
		},
		{
			title: "The operating rhythm",
			paragraphs: [
				"Running a design organization includes work that rarely shows up in case studies: synthesizing long PRDs into decision-ready briefs, structuring hypotheses before committing to a direction, preparing research sessions and design reviews, writing scope pushback, keeping engineering informed when the design system changes.",
				"Each of these became a repeatable workflow—freeing designers to spend their expertise on judgment rather than manual production. PRDs get summarized. Research sessions get prepped and debriefed. Design system changes travel to engineering with context instead of just a Figma update.",
			],
		},
		{
			title: "Learning through practice",
			paragraphs: [
				"Our design team was lean, and expectations continued to grow. I couldn't rely on adding specialists every time a new challenge emerged, so I leaned into AI across nearly every aspect of design leadership. I wanted firsthand experience with where it genuinely improved quality, where it created new risks, and where deep expertise remained the differentiator.",
				"That meant applying AI across design systems, prototyping, research, design critique, engineering collaboration, hiring, coaching, documentation, project management, organizational visibility, and team operations. Some of those explorations became production workflows. Others fundamentally changed how I coached designers, evaluated growth, evolved our competency framework, and built the operating model that guided the team.",
				"I wasn't exploring AI for experimentation's sake. I was building the experience needed to lead through a fundamental shift in how software gets designed and built. Those lessons shaped the systems, workflows, and leadership decisions throughout this case study.",
			],
			closingParagraphs: [
				"The goal was never individual productivity. It was organizational capability. AI amplified what every discipline could accomplish, but only when guided by deep product judgment, design craft, and engineering expertise. My role was to help the design organization evolve so it could lead in that environment rather than react to it.",
			],
		},
	],
};

export default designSystemGovernance;
