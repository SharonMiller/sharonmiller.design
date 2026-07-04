const SM = "/images/surveymonkey transformation";

const growthDesign = {
	slug: "survey-builder-transformation",
	title: "Survey Builder Transformation",
	year: "2021–2024",
	role: "Lead Product Designer, Growth and AI/ML",
	type: "Platform design · AI · Legacy modernization",
	hook: "SurveyMonkey's core authoring platform served millions of enterprise users on a codebase deemed too complex to rebuild. I led the phased transformation strategy that modernized it without disrupting anyone. Engagement +8%, conversion +3.2%.",
	cardHook: "Modernizing a mature enterprise platform without disrupting millions of active users. Phased transformation, measurable lift.",
	metrics: [
		{ value: "+8%", label: "Engagement lift" },
		{ value: "+3.2%", label: "Conversion lift" },
	],
	description:
		"Survey authoring rebuilt from the ground up. AI creation flow designed with a trust model that became the primary creation path. 3-year platform vision presented at exec level.",
	thumbnail: {
		src: `${SM}/redesign.png`,
		alt: "SurveyMonkey product transformation: AI Chat and smart recommendations in the authoring experience",
	},
	stack: ["Figma", "React", "User Testing"],
	team: {
		title: "My contributions",
		columns: [
			{
				title: "Design leadership",
				items: [
					"Co-led product and UX strategy with the Sr. Manager of Product to define a three-year modernization vision for SurveyMonkey's core authoring experience",
					"Shaped architectural direction in partnership with the Engineering Director",
					"Defined foundational UX patterns to guide phased system evolution and long-term consistency",
				],
			},
			{
				title: "Executive alignment",
				items: [
					"Presented modernization strategy to the CTO, SVP Product, and VP Design",
					"Secured multi-quarter buy-in for phased transformation instead of a high-risk full rebuild",
					"Aligned cross-functional leadership around sequencing, investment, and success metrics",
				],
			},
			{
				title: "Delivery model",
				items: [
					"Sequenced phased rollout to minimize revenue risk while maintaining feature velocity",
					"Introduced modular system patterns progressively adopted across feature teams",
					"Balanced experimentation with architectural evolution to avoid disrupting active roadmap work",
				],
			},
		],
	},
	sections: [
		{
			title: "My role",
			layout: "image-right",
			paragraphs: [
				"I co-led product and UX strategy for SurveyMonkey's authoring modernization: how to ship incrementally without breaking millions of enterprise users.",
				"I ran cross-functional offsites to surface systemic friction, align stakeholders, and translate research into an architectural roadmap.",
				"In 2023 I moved into design leadership to guide the first implementation phase, defining foundational interaction patterns and sequencing delivery to preserve product momentum while reducing risk.",
			],
			image: {
				src: `${SM}/workshop-stickies.jpeg`,
				alt: "Facilitating a cross-functional strategy offsite to align on systemic friction and the modernization approach",
				caption: "Facilitating cross-functional strategy offsite to align on systemic friction and long-term modernization approach.",
			},
		},
		{
			title: "The problem",
			contentBlocks: [
				{
					type: "stats",
					columns: 2,
					items: [
						{ value: "90%", label: "of new users couldn't configure basic logic", negative: true },
						{ value: "75%", label: "couldn't find foundational settings", negative: true },
					],
				},
				{
					type: "image",
					src: `${SM}/current-experience.png`,
					alt: "The existing SurveyMonkey authoring experience",
					caption: "the current survey authoring experience",
					contain: true,
				},
				{
					type: "paragraphs",
					items: [
						"SurveyMonkey had shifted from sales-led to product-led growth, which exposed structural friction in the core authoring experience. While freemium accelerated acquisition, foundational workflows were difficult to discover and configure, limiting activation and perceived product value.",
						"New users hit that friction early and often never activated. That showed up in weak engagement and missed conversion downstream.",
					],
				},
				{
					type: "subsection",
					title: "Key findings",
					list: [
						"Perceived as outdated and difficult to navigate.",
						"Simple tasks were needlessly complicated.",
						"Many features were impossible to find.",
						"Legacy code meant modernization was deemed a multi-year effort.",
					],
				},
			],
		},
		{
			title: "Defining the approach",
			contentBlocks: [
				{
					type: "paragraphs",
					items: [
						"Three options were on the table. Build with AI: a modern, AI-first experience built from scratch. Focus on the 80%: redesign around the most-used features, add the rest incrementally. Basic experience: a clean new UI for free users, with legacy preserved for paid.",
						"Each had real tradeoffs. Build with AI risked a bifurcated experience and unknown time to parity. Focus on 80% could take years and risk losing paid customers mid-transition. Basic experience would downgrade paid users on upgrade.",
						"After a week working with engineering, I proposed a hybrid: React components injected into the Python UI. Incremental value delivery, no disruption to active users, manageable risk. The Staff architect and I aligned on this as the path forward.",
					],
				},
				{
					type: "image",
					src: `${SM}/how-we-get-there.png`,
					alt: "React components injected into the existing Python UI",
					caption: "How we get there: React components injected into the existing Python UI",
					contain: true,
				},
				{
					type: "subsection",
					title: "Page frameworks",
					paragraphs: [
						"Before touching individual features, we established the structural foundation. I partnered with design leads on admin, core, and navigation to define page frameworks: consistent layout patterns validated with users before any feature work built on them.",
					],
				},
				{
					type: "image",
					src: `${SM}/page-frameworks.png`,
					alt: "Page framework blueprint showing consistent structure across surfaces",
					caption: "Page framework blueprint: establishing consistent structure across surfaces",
					contain: true,
				},
				{
					type: "subsection",
					title: "Guiding principles",
					paragraphs: [
						"Six guiding principles defined the product direction and became guardrails for every design decision: cohesive, simple-to-complex, survey excellence, built for everybody, trust before delight, and easy collaboration.",
					],
				},
				{
					type: "image",
					src: `${SM}/guiding-principles.png`,
					alt: "Six guiding principles for the SurveyMonkey platform transformation",
					caption: "The six guiding principles that became guardrails for every design decision.",
					contain: true,
				},
			],
		},
		{
			title: "Building the solution",
			contentBlocks: [
				{
					type: "paragraphs",
					items: [
						"We ran divergent concept explorations at every major decision point: WYSIWYG vs Document view, dynamic toolbar modes vs static menus, contextual tooling options. Each was tested with users before committing.",
					],
				},
				{
					type: "divider",
					text: "Testing concepts with users to align on mental models",
				},
				{
					type: "image",
					src: `${SM}/dynamic-vs-static-modes.png`,
					alt: "Divergent concepts: Dynamic modes vs Static menu",
					caption: "Divergent concepts: Dynamic modes vs Static menu",
					contain: true,
				},
				{
					type: "divider",
					text: "Learning how users expect to interact with survey building",
				},
				{
					type: "image",
					src: `${SM}/wysiwyg-vs-document-view.png`,
					alt: "Divergent concepts: WYSIWYG vs Document view",
					caption: "exploring divergent preview options",
					contain: true,
				},
				{
					type: "divider",
					text: "Testing the best method of contextual editing",
				},
				{
					type: "image",
					src: `${SM}/tooling.png`,
					alt: "Divergent concepts: Tooling",
					caption: "exploring divergent tooling with a focus on contextual toolbars",
					contain: true,
				},
				{
					type: "subsection",
					title: "Three-year platform vision",
					paragraphs: [
						"Worked with executive leadership on a multi-year product vision: platform scalability plus AI-assisted workflows. Presented to CTO, SVP Product, and VP Design.",
						"First time the design team had articulated a strategy at the board level. Got multi-quarter exec buy-in for the phased approach over a full rebuild.",
					],
				},
				{
					type: "divider",
					text: "Multi-year vision to guide decisions and align stakeholders",
				},
				{
					type: "image",
					src: `${SM}/product-transformation-vision.png`,
					alt: "Multi-year product transformation vision: AI/ML-assisted survey creation and smart recommendations",
					caption: "putting it all together to create a modern survey editing and building experience",
					contain: true,
				},
				{
					type: "divider",
					text: "Personalize the experience to drive conversion & engagement",
				},
				{
					type: "image",
					src: `${SM}/personalization.png`,
					alt: "Personalization features driving conversion and engagement",
					caption: "Personalizing the experience to drive conversion, engagement, and retention.",
					contain: true,
				},
				{
					type: "divider",
					text: "Building in AI/ML features that drive value",
				},
				{
					type: "image",
					src: `${SM}/product-transformation-moder-style.png`,
					alt: "A modern style experience: branding and customization",
					caption: "making surveys simple to brand and customize, saving time and increasing conversion, engagement and retention metrics",
					contain: true,
				},
				{
					type: "divider",
					text: "Testing into the vision to ensure we are delivering value",
				},
				{
					type: "image",
					src: `${SM}/testing-into-changes.png`,
					alt: "Testing into changes starting with the survey build menu",
					caption: "testing concepts with users to ensure they align with mental models",
					contain: true,
				},
			],
		},
		{
			title: "Releasing incremental value",
			layout: "image-right",
			list: [
				"Updated logic panel led to increased confidence in sending surveys and an 8% lift in engagement.",
				"Users can clearly see where logic is added without going through every question, resulting in positive feedback and a 17% increase in the UX score on this page.",
				"The new survey preview scrolls with the overview panel and allows for easier navigation of the survey review and logic validation.",
			],
			image: {
				src: `${SM}/logic-panel-before-after.png`,
				alt: "Logic panel before and after: legacy panel vs inline survey overview",
				caption: "Comparison of the old vs new experience.",
			},
		},
		{
			title: "Leadership transition: design lead to management",
			paragraphs: [
				"Shortly after the project was approved, my manager resigned. I took on the management responsibilities while staying IC on the modernization work: 1:1s, direction-setting, cross-functional alignment, plus delivery. Prior leadership experience meant I could move faster than starting from zero.",
			],
			subsectionColumns: true,
			subsections: [
				{
					title: "Resetting expectations with the team",
					paragraphs: [
						"Transitioning the work to the team required resetting expectations on timelines and deliverables. It was a balance of letting them come up to speed while trying to keep positive momentum.",
					],
				},
				{
					title: "Delegation and trust",
					paragraphs: [
						"I refocused on delegation: smaller decisions stayed with the team while I held alignment to the broader vision. That meant letting go, even when mistakes happened along the way.",
					],
				},
				{
					title: "Getting the team to own it",
					paragraphs: [
						"I coached by asking questions instead of handing down answers. The team built problem-solving muscle and confidence by finding their own solutions.",
					],
				},
			],
		},
		{
			title: "The outcome",
			contentBlocks: [
				{
					type: "stats",
					items: [
						{ value: "8%", label: "Engagement increase" },
						{ value: "17%", label: "UX score improvement" },
						{ value: "4%", label: "NPS increase" },
					],
				},
				{
					type: "paragraphs",
					items: [
						"The logic panel redesign shipped with measurable impact. Engagement up 8%, UX score up 17%, NPS up 4%. The AI-assisted 'Build with AI' experience became the primary survey creation path, validating many of the concepts behind the original modernization strategy.",
						"The three-year platform vision got multi-quarter exec buy-in for the phased approach. The hybrid migration model delivered incremental value without disrupting millions of enterprise users mid-rewrite.",
					],
				},
			],
		},
		{
			title: "Learnings",
			paragraphs: [
				"Transitioning from Lead IC to managing my former peers required a different kind of judgment. The work that mattered most wasn't staying IC on every decision. It was helping the team own the vision themselves. The transition had rough patches; the team's patience through them made it work.",
				"The cross-functional relationships I'd built became the practical advantage when it mattered: growth and core ran coordinated experiments, de-risked shared assumptions, and both teams hit their goals.",
			],
		},
	],
};

export default growthDesign;
