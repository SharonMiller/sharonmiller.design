const SM = "/images/surveymonkey transformation";

const growthDesign = {
	slug: "growth-design",
	title: "Survey Builder Transformation",
	year: "2021–2024",
	role: "Lead Product Designer, Growth and AI/ML",
	type: "Platform design · AI · Legacy modernization",
	hook: "Re-architecting SurveyMonkey's legacy authoring experience without a full rewrite. I defined a three-year modernization vision and phased execution strategy that increased engagement by 8% and conversion by 3.2% while enabling continuous feature delivery.",
	metrics: [
		{ value: "8%", label: "Engagement increase" },
		{ value: "17%", label: "UX score improvement" },
	],
	description:
		"Survey authoring rebuilt from the ground up. AI creation flow designed with a trust model that became the primary creation path. 3-year platform vision presented at exec level.",
	thumbnail: {
		src: `${SM}/redesign.png`,
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
	stack: ["Figma", "React", "User Testing"],
	sections: [
		{
			title: "My role",
			layout: "image-right",
			paragraphs: [
				"Co-led product and UX strategy to define a long-term modernization approach for SurveyMonkey's authoring experience.",
				"Led cross-functional offsites to surface systemic friction, align stakeholders, and translate research into an actionable architectural roadmap.",
				"In 2023, transitioned into design leadership to guide the first phase of implementation, defining foundational interaction patterns and sequencing delivery to preserve product momentum while reducing risk.",
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
						{ value: "90%", label: "of new users couldn't configure basic logic" },
						{ value: "75%", label: "couldn't find foundational settings" },
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
						"Without intervention, friction in early workflows risked suppressing activation, engagement, and downstream monetization.",
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
						"Partnered with executive leadership to define and present a multi-year product design vision connecting platform scalability with AI-assisted workflows. Presented to CTO, SVP Product, and VP Design.",
						"First time the design team had articulated a strategy at the board level. Secured multi-quarter buy-in for phased transformation over a high-risk full rebuild.",
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
				{
					type: "embed",
					src: "https://embed.figma.com/proto/wOm1uVMnnYpiGHUa0gAQO4/Prototypes-for-portfolio?page-id=&node-id=9-6&starting-point-node-id=9%3A6&embed-host=share",
					caption: "Working prototype: survey authoring redesign. Click through the flow.",
					height: 450,
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
				"Shortly after the project was approved, my manager resigned. I took on the management responsibilities while staying IC on the modernization work — 1:1s, direction-setting, cross-functional alignment, plus delivery. Prior leadership experience meant I could move faster than starting from zero.",
			],
			subsectionColumns: true,
			subsections: [
				{
					title: "Stakeholder management",
					paragraphs: [
						"Transitioning the work to the team required resetting expectations on timelines and deliverables. It was a balance of letting them come up to speed while trying to keep positive momentum.",
					],
				},
				{
					title: "Delegation and trust",
					paragraphs: [
						"I quickly refocused on delegation and empowering the team, allowing them to make smaller decisions while I ensured alignment with the broader vision. To foster growth and innovation, I had to let go and give the team autonomy to make decisions, even if it meant making mistakes along the way.",
					],
				},
				{
					title: "Coaching & feedback",
					paragraphs: [
						"I used feedback and coaching to help mentor and guide my team. By guiding the team to find solutions on their own, I was able to help them develop problem-solving skills. This helped increase their confidence and led to more creative and innovative solutions.",
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
						"The logic panel redesign shipped with measurable impact. Engagement up 8%, UX score up 17%, NPS up 4%. Build with AI became the primary survey creation path.",
						"The three-year platform vision secured multi-quarter executive buy-in for phased transformation. The hybrid migration model delivered incremental value without disrupting millions of enterprise users mid-rewrite.",
					],
				},
			],
		},
		{
			title: "Learnings",
			paragraphs: [
				"Transitioning from Lead IC to managing my former peers required a different kind of judgment. The work that mattered most wasn't staying IC on every decision — it was helping the team own the vision themselves. The transition had rough patches; the team's patience through them made it work.",
				"The cross-functional relationships I'd built became the practical advantage when it mattered: growth and core ran coordinated experiments, de-risked shared assumptions, and both teams hit their goals.",
			],
		},
	],
};

export default growthDesign;
