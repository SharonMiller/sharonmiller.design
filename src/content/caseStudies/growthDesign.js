const growthDesign = {
	slug: "growth-design",
	title: "Growth Design at SurveyMonkey",
	year: "2021–2024",
	role: "Lead Product Designer, then Product Design Manager — Growth and AI/ML",
	type: "Growth Design, PLG, Experimentation",
	previewImage: "/images/growth-experiments.png",
	description:
		"Three years on the growth team. A 600% lift in Team Plan purchases in one experiment, 24% faster delivery, and the AI survey creation flow that became the primary creation path.",
	metrics: [
		{ value: "600%", label: "Team Plan lift" },
		{ value: "24%", label: "Velocity gain" },
	],
	heroImage: {
		src: "/images/experiment-database.png",
		alt: "Experiment database repo tracking growth tests, decisions, and learnings",
		caption: "Structured experiment tracking adopted company-wide",
	},
	summary: [
		"Three years on the growth team at SurveyMonkey. Led the design that drove a 600% lift in Team Plan purchases in a single experiment. Rebuilt the experiment tracking system and improved delivery velocity by 24%. Designed the initial AI-assisted survey creation flow that became the primary creation path.",
	],
	sections: [
		{
			title: "Pricing and Paywall Redesign",
			paragraphs: [
				"SurveyMonkey's pricing page and upgrade modals had accumulated years of inconsistency. Different teams had shipped different upgrade experiences. The pricing page itself did not work on mobile. Brand consistency was poor.",
				"I led the redesign — not just visual cleanup, but a systems-level rethink of how pricing, paywall, and checkout worked together as a cohesive experience.",
				"The first major experiment on the redesigned pricing page drove a 600% increase in Team Plan purchases. One experiment.",
			],
		},
		{
			title: "Experiment Tracking System",
			paragraphs: [
				"The growth team's experiment tracking was broken. Documentation was siloed in personal files and apps. Failed experiments were being repeated. Overlapping experiments were compromising results. The team spent more time managing chaos than planning.",
				"I diagnosed the problem, proposed a solution, and led the implementation. Working with the Product Director and Engineering Director, we built a structured experiment tracking framework using Jira Product Discovery — documenting required fields, defining success metrics, creating templates that standardized every experiment ticket.",
				"Adoption spread company-wide. Team delivery velocity improved by 24%. Team morale improved measurably.",
			],
			images: [
				{
					src: "/images/experiment-database.png",
					alt: "Experiment database repo tracking growth and personalization tests",
				},
				{
					src: "/images/growth-experiments.png",
					alt: "Product-led growth experiment board showing outcomes and metric impact",
				},
			],
		},
		{
			title: "Survey Authoring Modernization",
			paragraphs: [
				"SurveyMonkey's survey authoring experience was the core of the product and it was showing its age. Complex workflows, dated interaction patterns, a feeling that the platform had not kept up.",
				"I joined as a senior IC to lead the ground-up transformation. The challenge: modernize a legacy system used by millions of enterprise customers without disrupting active users.",
				"I defined a three-year vision and a phased execution strategy. The approach was additive — new patterns introduced alongside existing ones, with gradual migration rather than hard cutover. Preview-page engagement increased by 8%.",
			],
			images: [
				{
					src: "/images/photo-collage.png",
					alt: "Sharon Miller presenting the Q1 2024 visual roadmap with the growth design team",
					caption: "Presenting the visual roadmap for create, analyze, and navigation",
				},
			],
		},
		{
			title: "AI-Assisted Survey Creation",
			paragraphs: [
				"I designed the initial Build with AI survey creation flow — the first AI-powered feature in the core product. The design challenge was not just the UI but the trust model: how do you introduce AI generation in a way that users trust, can verify, and can correct?",
				"The flow became the primary creation path. Conversions improved.",
			],
		},
		{
			title: "Three-Year Platform Vision",
			paragraphs: [
				"I partnered with executive leadership to define and present a three-year product design vision — connecting long-term platform scalability with AI-assisted workflows and agent-driven experiences. This was the first time the design team had articulated a multi-year strategy at the board level.",
			],
		},
		{
			title: "What I Learned",
			paragraphs: [
				"Growth design done well is not about conversion tricks. It is about understanding what is actually getting in the way of users getting value. The pricing redesign worked not because we changed colors but because we understood what information users needed at the moment of decision and gave it to them clearly.",
				"The experiment tracking work was not glamorous. It was organizational design. But it had more impact on team output than any single product initiative I shipped.",
			],
		},
	],
	footer: "Full walkthrough available during an interview.",
};

export default growthDesign;
