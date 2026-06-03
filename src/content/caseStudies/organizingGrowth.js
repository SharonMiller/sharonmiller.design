const organizingGrowth = {
	slug: "organizing-growth",
	title: "Organizing Growth",
	year: "2022–2023",
	role: "Product Design Manager, Growth — reporting to CTO",
	type: "Design leadership · Systems thinking · Cross-functional influence",
	hook: "Our experiment tracking system was fundamentally broken — repeated failures, overlapping tests, no shared memory across the team. Fixing it wasn't my mandate. I fixed it anyway.",
	metrics: [
		{ value: "24%", label: "Increase in team delivery velocity" },
		{ value: "12%", label: "Team morale improvement (eNPS)" },
	],
	description:
		"No direct authority. Cross-functional resistance. A broken experiment tracking system causing repeated failures and wasted work. Fixed through influence, systems thinking, and a roadshow to every stakeholder who needed to say yes.",
	thumbnail: {
		src: "/images/experiment-database.png",
		alt: "SurveyMonkey growth experiment tracking database in Jira Product Discovery",
	},
	impact: [
		"Team delivery velocity increased 24% after implementing structured experiment tracking.",
		"Growth team eNPS up 12% within a quarter. Less chaos, more clarity.",
		"Searchable database of all experiments with outcomes, conflict detection, and longer-tail result tracking.",
		"Automations published experiment results to Slack, giving adjacent teams visibility without additional process overhead.",
		"Onboarding and offboarding no longer dependent on individual tribal knowledge.",
	],
	summary: [
		"When I joined the growth team, there was no reliable system for tracking experiments. Tests were overlapping, past results couldn't be found, and the team spent more time managing confusion than running good experiments. The problem wasn't a lack of effort — it was a lack of shared infrastructure.",
		"This wasn't a design problem by definition — it touched product, engineering, analytics, and ops, and was primarily a product responsibility. But it was clearly a systems problem, and systems thinking is where design leadership adds disproportionate value. I led it because I could see it most clearly, not because it was mine to own.",
	],
	sections: [
		{
			title: "The problem",
			paragraphs: [
				"Documentation was siloed and disorganized. Teams were keeping notes in personal files and apps. When someone left, the knowledge left with them. There was no way to learn from past experiments, check for conflicts, or track longer-tail results.",
				"The growth team spent more time managing chaos than planning. Onboarding was a nightmare. Cross-functional visibility was near zero. The experiment database was a spreadsheet that nobody trusted.",
			],
			image: {
				src: "/images/experiment-database.png",
				alt: "Jira Product Discovery delivery board showing experiments with status, metrics, and outcome tracking",
				caption: "The experiment database in Jira Product Discovery: consistent fields, conflict detection, and outcome tracking across every experiment.",
			},
		},
		{
			title: "Building the system",
			paragraphs: [
				"The first step was understanding what we actually needed to track. I worked with the data science team to define the required fields for detecting conflicts between concurrent experiments and assessing impact on business metrics.",
				"From there: evaluated tools that could handle the workflow without creating redundant work for product teams. Jira Product Discovery fit. I created templates so every experiment ticket captured the same data from day one.",
				"The structure wasn't just about tracking. It was about making the work legible to stakeholders who needed to prioritize, to adjacent teams who needed visibility, and to future team members who would inherit the work.",
			],
		},
		{
			title: "Influence without authority",
			paragraphs: [
				"This was primarily a product responsibility. I was the design manager. To make it happen, I needed approval from the CTO, SVP of Product, VP of Engineering, and product leads across the company.",
				"Some leaders were hesitant. The standard resistance: more process, more overhead, more meetings. I ran a roadshow using storytelling rather than slide decks. The case was simple: we are spending more time managing failed experiments than running good ones. Here is the cost. Here is the fix.",
				"The lesson I came back to throughout: influence without agency is hard, but the results belong to everyone. Keeping a united front with my product partner was what made the difference. We presented as one team, not as design lobbying for a design solution.",
			],
			image: {
				src: "/images/pug stubborn.png",
				alt: "A stubborn-looking pug on a sidewalk",
				caption: "Some stakeholders were hesitant towards change. The pug understands.",
			},
		},
		{
			title: "The outcome",
			paragraphs: [
				"Team delivery velocity up 24%. eNPS up 12%. Those are real numbers from real measurement — not estimated.",
				"The less visible wins mattered too. Adjacent teams could filter past experiments by date, impact, team, or surface area. Quarterly planning got easier. Design and content could plan proactively instead of reacting to what engineering was already building.",
				"Automations pushed experiment results to Slack as they published. Visibility without meetings. The system ran itself.",
			],
			stats: [
				{ value: "24%", label: "Delivery velocity increase" },
				{ value: "12%", label: "Team morale (eNPS)" },
			],
		},
	],
	footer: "Full case study walkthrough available during an interview.",
};

export default organizingGrowth;
