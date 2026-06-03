const SM = "/images/surveymonkey transformation";

const growthDesign = {
	slug: "growth-design",
	title: "Survey Builder Transformation",
	year: "2021–2024",
	role: "Lead Product Designer, Growth and AI/ML",
	type: "Platform design · AI · Legacy modernization",
	hook: "90% of new users couldn't configure basic logic. 75% couldn't find foundational settings. The core of the product hadn't kept up — and a full rebuild wasn't an option.",
	metrics: [
		{ value: "8%", label: "Engagement increase" },
		{ value: "17%", label: "UX score improvement" },
	],
	description:
		"Survey authoring rebuilt from the ground up. AI creation flow designed with a trust model that became the primary creation path. 3-year platform vision presented at exec level.",
	thumbnail: {
		src: `${SM}/growth-authoring-thumbnail.png`,
		alt: "SurveyMonkey product transformation: AI Chat and smart recommendations in the authoring experience",
	},
	impact: [
		"Led ground-up modernization of SurveyMonkey's survey authoring platform. Phased migration for millions of enterprise users, no hard cutover.",
		"Designed Build with AI with a generate-review-edit trust model. It became the primary survey creation path.",
		"Defined a three-year platform vision presented to CTO, SVP Product, and VP Design. First multi-year design strategy at the board level.",
		"8% increase in engagement, 17% improvement in UX score, 4% NPS increase after the logic panel redesign shipped.",
	],
	summary: [
		"Three years at SurveyMonkey as Lead Product Designer. The work spanned the full arc of the product: authoring, AI features, and platform vision.",
		"Survey authoring was the core of the product and it hadn't kept up. 90% of new users couldn't configure basic logic. 75% failed to find foundational customization settings. The platform was mid-rewrite from Python to React, millions of enterprise users couldn't be disrupted, and a high-risk full rebuild wasn't an option.",
		"The solution was a hybrid approach: React components injected into the existing Python UI, enabling incremental value delivery without disrupting active users or the ongoing roadmap.",
	],
	team: {
		columns: [
			{
				title: "Role",
				items: [
					"Lead Product Designer, Growth and AI/ML",
					"Acting design manager (leadership transition)",
					"Platform vision lead",
				],
			},
			{
				title: "Stack",
				items: [
					"React + Python hybrid UI",
					"Figma",
					"UserTesting",
					"Amplitude",
				],
			},
			{
				title: "Skills",
				items: [
					"Legacy modernization",
					"AI trust patterns",
					"Platform vision",
					"Design leadership",
				],
			},
		],
	},
	sections: [
		{
			title: "The problem",
			layout: "image-right",
			stats: [
				{ value: "90%", label: "of new users couldn't configure basic logic" },
				{ value: "75%", label: "failed to find customization settings" },
			],
			paragraphs: [
				"SurveyMonkey had shifted from sales-led to product-led growth, which exposed structural friction in the core authoring experience. Foundational workflows were difficult to discover and configure, limiting activation and perceived product value.",
				"Internal research confirmed it. Users found the product outdated and hard to navigate. Simple tasks were needlessly complicated. Many features were impossible to find. Legacy code made modernization feel like a multi-year undertaking.",
			],
			image: {
				src: `${SM}/Vplm6tlEwTNnWy2K.png`,
				alt: "The current SurveyMonkey survey authoring experience — legacy interface",
				caption:
					"The legacy authoring experience. Functional but dated, with buried features and high cognitive load.",
			},
		},
		{
			title: "Defining the approach",
			paragraphs: [
				"Three options were on the table. Build with AI: a modern, AI-first experience built from scratch. Focus on the 80%: redesign around the most-used features, add the rest incrementally. Basic experience: a clean new UI for free users, with legacy preserved for paid.",
				"Each had real tradeoffs. Build with AI risked a bifurcated experience and unknown time to parity. Focus on 80% could take years and risk losing paid customers mid-transition. Basic experience would downgrade paid users on upgrade.",
				"After a week working with engineering, I proposed a hybrid: React components injected into the Python UI. Incremental value delivery, no disruption to active users, manageable risk. The Staff architect and I aligned on this as the path forward.",
			],
			subsections: [
				{
					title: "Page frameworks",
					paragraphs: [
						"Before touching individual features, we established the structural foundation. I partnered with design leads on admin, core, and navigation to define page frameworks — consistent layout patterns validated with users before any feature work built on them.",
					],
				},
				{
					title: "Guiding principles",
					paragraphs: [
						"Six guiding principles defined the product direction and became guardrails for every design decision: cohesive, simple-to-complex, survey excellence, built for everybody, trust before delight, and easy collaboration.",
					],
				},
			],
			image: {
				src: `${SM}/mLpQh08sxeTODaxu.png`,
				alt: "Page framework diagram showing outline side sheet, main content, and contextual actions layout",
				caption:
					"Page frameworks defined consistent layout patterns across the product before feature work began.",
			},
		},
		{
			title: "Building the solution",
			paragraphs: [
				"We ran divergent concept explorations at every major decision point: WYSIWYG vs Document view, dynamic toolbar modes vs static menus, contextual tooling options. Each was tested with users before committing.",
			],
			subsections: [
				{
					title: "Build with AI",
					paragraphs: [
						"I designed the first AI-powered feature in the core product. The design challenge wasn't just the interface — it was the trust model. How do you introduce AI generation in a way users trust, can verify, and can correct?",
						"The answer was generate-review-edit: AI generates a draft, user reviews it in context, user edits before committing. That sequence became the pattern. The flow became the primary creation path.",
					],
				},
				{
					title: "Logic panel redesign",
					paragraphs: [
						"90% of users couldn't configure basic logic. The legacy logic panel buried the information users needed and made skip logic feel like an advanced feature.",
						"The redesign put logic inline with survey overview. Users could now see at a glance where logic was applied, fix it without scanning through every question, and add it in context as they built.",
					],
				},
				{
					title: "Three-year platform vision",
					paragraphs: [
						"Partnered with executive leadership to define and present a multi-year product design vision connecting platform scalability with AI-assisted workflows. Presented to CTO, SVP Product, and VP Design.",
						"First time the design team had articulated a strategy at the board level. Secured multi-quarter buy-in for phased transformation over a high-risk full rebuild.",
					],
				},
			],
			image: {
				src: `${SM}/73IpchFn8kAg3eFq.png`,
				alt: "Divergent concepts: WYSIWYG vs Document view",
				caption:
					"Divergent concept exploration: WYSIWYG vs Document view. Testing mental models before committing to a direction.",
			},
			embed: {
				src: "https://embed.figma.com/proto/wOm1uVMnnYpiGHUa0gAQO4/Prototypes-for-portfolio?page-id=&node-id=9-6&starting-point-node-id=9%3A6&embed-host=share",
				caption: "Working prototype — survey authoring redesign. Click through the flow.",
				height: 450,
			},
		},
		{
			title: "Cross-functional work",
			layout: "image-right",
			paragraphs: [
				"Shortly after the project was approved, my manager resigned. I was asked to manage the team until a new director could be hired. Minimal ramp time — I hit the ground running.",
				"The transition required resetting timelines and expectations while keeping momentum. I shifted focus to delegation and empowering the team to make decisions, coaching rather than directing. My past leadership experience compressed the learning curve.",
				"Throughout the transformation, alignment with engineering was non-negotiable. The hybrid React-in-Python approach only worked because design and engineering shared ownership of the migration path and shipped incrementally rather than betting on a big bang.",
			],
			image: {
				src: `${SM}/PSE2tJgmg3qnUxDL.png`,
				alt: "SurveyMonkey Build with AI: survey authoring with AI generation panel open",
				caption:
					"Build with AI. Generate, review, edit — a trust model that kept users in control of what the AI produced.",
			},
		},
		{
			title: "The outcome",
			stats: [
				{ value: "8%", label: "Engagement increase" },
				{ value: "17%", label: "UX score improvement" },
				{ value: "4%", label: "NPS increase" },
			],
			paragraphs: [
				"The logic panel redesign shipped with measurable impact. Engagement up 8%, UX score up 17%, NPS up 4%. Build with AI became the primary survey creation path.",
				"The three-year platform vision secured multi-quarter executive buy-in for phased transformation. The hybrid migration model delivered incremental value without disrupting millions of enterprise users mid-rewrite.",
			],
			image: {
				src: `${SM}/axJUOZsbRERUd3fk.png`,
				alt: "Legacy logic panel vs revised logic panel side by side",
				caption:
					"Before and after: logic panel redesign. Survey overview with inline logic visibility replaced the opaque legacy view.",
			},
		},
	],
	footer: "Full walkthrough available during an interview.",
};

export default growthDesign;
