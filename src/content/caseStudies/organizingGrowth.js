const OG = "/images/surveymonkey organizing growth";

const organizingGrowth = {
	slug: "organizing-growth",
	title: "Order From Chaos",
	year: "2023–2024",
	role: "Product Design Manager, Growth (reporting to CTO)",
	type: "Design leadership · Systems thinking · Cross-functional influence",
	hook: "Every team I've been on has had some version of chaos that everyone accepted as normal. I can't work that way. At SurveyMonkey I inherited a growth team with no experiment tracking, no shared memory, and no accountability. I built the system that changed that — without the authority to make anyone use it.",
	metrics: [
		{ value: "24%", label: "Increase in team delivery velocity" },
		{ value: "12%", label: "Team morale improvement (eNPS)" },
	],
	description:
		"No direct authority. Cross-functional resistance. A broken experiment tracking system causing repeated failures and wasted work. Fixed through influence, systems thinking, and a roadshow to every stakeholder who needed to say yes.",
	thumbnail: {
		src: `${OG}/organizing-growth-jpd-thumbnail.png`,
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
		"When I joined the growth team, there was no reliable system for tracking experiments. Tests were overlapping, past results couldn't be found, and the team spent more time managing confusion than running good experiments. The problem wasn't a lack of effort; it was a lack of shared infrastructure.",
		"This wasn't a design problem by definition: it touched product, engineering, analytics, and ops, and was primarily a product responsibility. But it was clearly a systems problem, and systems thinking is where design leadership adds disproportionate value. I led it because I could see it most clearly, not because it was mine to own.",
	],
	team: {
		columns: [
			{
				title: "The team",
				items: [
					"Myself",
					"Director, Product, Growth",
					"Director, Engineering, Growth",
					"Director, Product Analytics",
				],
			},
			{
				title: "Stakeholders",
				items: [
					"Chief Technology Officer",
					"Senior VP, Product",
					"VP Engineering",
					"Sr. Director, Systems Engineering",
					"Product leads across the company",
				],
			},
			{
				title: "Skills",
				items: ["Leadership", "Influence", "Systems Thinking", "Organization"],
			},
		],
	},
	sections: [
		{
			title: "My role",
			paragraphs: [
				"Reporting directly to the Chief Technology Officer, I spearheaded this initiative as Product Design Manager for growth and personalization.",
				"I collaborated closely with my counterparts, the Product Director and Engineering Director. We had all recently joined the growth team with a shared goal of improving workflows, fostering a supportive environment, and achieving impactful outcomes.",
			],
		},
		{
			title: "The problem",
			layout: "image-right",
			paragraphs: [
				"Our experiment tracking system was inadequate and fundamentally broken. This inefficiency led to:",
			],
			list: [
				"repeating failed experiments",
				"difficulty in measuring our impact",
				"frequent experiment overlaps compromising quality",
			],
			closingParagraphs: [
				"Instead of planning, we spent our time putting out fires and trying to keep the teams on track.",
			],
			image: {
				src: `${OG}/gif-this-is-fine.webp`,
				alt: "The 'this is fine' meme — a dog sitting calmly in a room on fire",
				caption: "Lack of tracking led to being reactive.",
			},
		},
		{
			title: "Digging deeper",
			layout: "image-left",
			image: {
				src: `${OG}/apps used.png`,
				alt: "Tools used by the growth team: Jira, Confluence, Google Docs, Google Sheets, Notion, Figma",
				caption: "Apps being used to document work.",
			},
			list: [
				"Documentation was disorganized and siloed",
				"We could not learn from past mistakes",
				"Employees kept documentation in personal files — lost when they left",
				"Employee onboarding and offboarding was a nightmare",
			],
		},
		{
			title: "Creating structure",
			layout: "image-right",
			paragraphs: [
				"I documented all the necessary fields to track and analyze the impact of experiments on business metrics.",
				"Collaborated with our data science team to determine the required fields for detecting potential conflicts in ongoing experiments.",
			],
			image: {
				src: `${OG}/JPD with templage.png`,
				alt: "Jira Product Discovery experiment template with structured fields for hypothesis, metrics, and conflict detection",
				caption: "Experiment template: consistent fields across every ticket from day one.",
			},
		},
		{
			title: "Aligning on a solution",
			layout: "image-right",
			paragraphs: [
				"Explored tools that could streamline the process without adding redundant work for the product team.",
				"Coordinated with product delivery leads to gain approval for Jira Product Discovery.",
				"Created templates so all experiment tickets captured the same data: hypothesis, surface area, metrics, conflict flags, and outcome fields.",
			],
			image: {
				src: `${OG}/growth-experiments.png`,
				alt: "Growth experiments view in Jira Product Discovery showing grouped experiments by theme",
				caption: "Experiments organized by theme, owner, and status in a single source of truth.",
			},
		},
		{
			title: "Delivering the solution",
			imageFullWidth: true,
			paragraphs: [
				"The structure wasn't just about tracking. It was about making the work legible to stakeholders who needed to prioritize, adjacent teams who needed visibility, and future team members who would inherit it.",
				"Automations pushed experiment results to Slack as they published. Visibility without meetings. The system ran itself once the templates and workflows were in place.",
			],
			image: {
				src: `${OG}/experiment-database.png`,
				alt: "Full experiment database in Jira Product Discovery showing all growth experiments with status, metrics, and outcomes",
				caption: "The full experiment database: searchable, filterable, and automatically updated.",
			},
		},
		{
			title: "The benefit",
			layout: "image-right",
			list: [
				"New ideas documented for easy prioritization on the roadmap",
				"Improved team morale",
				"Searchable database of experiments and results",
				"Stakeholders can track impact on business metrics",
			],
			image: {
				src: `${OG}/organizing-growth-jpd-thumbnail.png`,
				alt: "Jira Product Discovery roadmap view showing prioritized experiment ideas",
				caption: "Easy prioritization.",
			},
		},
		{
			title: "Overcoming resistance",
			layout: "image-left",
			image: {
				src: `${OG}/pug stubborn.png`,
				alt: "A stubborn-looking pug on a sidewalk",
				caption: "Getting alignment with change resistors.",
			},
			subsections: [
				{
					title: "Influence without agency",
					paragraphs: [
						"With support from my product partner, I led the initiative. It was essential to keep a united front since this was primarily a product responsibility.",
					],
				},
				{
					title: "Stakeholder management",
					paragraphs: [
						"To achieve alignment across the company, I needed approval from the CTO, SVP of Product, VP of Engineering, and product leads across the company.",
						"Some leaders were hesitant. I ran a roadshow using storytelling rather than slide decks. The case was simple: we're spending more time managing failed experiments than running good ones. Here's the cost. Here's the fix.",
					],
				},
			],
		},
		{
			title: "The outcome",
			stats: [
				{ value: "24%", label: "Delivery velocity increase" },
				{ value: "12%", label: "Team morale (eNPS)" },
			],
			subsectionColumns: true,
			subsections: [
				{
					title: "Improved metrics tracking",
					list: [
						"Reduced experiments on hold due to assignment issues",
						"Process to validate success and guardrail metrics with data science",
						"Easier to track longer-tail results linked to specific experiments",
					],
				},
				{
					title: "Transparency and visibility",
					list: [
						"Automations publish experiment results to Slack as they ship",
						"Adjacent teams can learn at scale",
						"Past experiments filterable by date, impact, team, or surface area",
					],
				},
				{
					title: "Enhanced team dynamics",
					list: [
						"Improved cross-functional communication",
						"Enabled proactive planning for design and content",
						"Quarterly planning and roadmap simplified",
					],
				},
			],
		},
	],
};

export default organizingGrowth;
