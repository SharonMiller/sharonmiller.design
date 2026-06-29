const OG = "/images/surveymonkey organizing growth";

const organizingGrowth = {
	slug: "organizing-growth",
	title: "Order From Chaos",
	year: "2023–2024",
	role: "Product Design Manager, Growth (reporting to CTO)",
	type: "Design leadership · Systems thinking · Cross-functional influence",
	hook: "Grew growth team delivery velocity 24%. Four distributed squads, no shared experiment tracking, no institutional memory, no accountability across teams. I built the system that fixed it, without the authority to make anyone use it.",
	description:
		"No direct authority. Cross-functional resistance. A broken experiment tracking system causing repeated failures and wasted work. Fixed through influence, systems thinking, and a roadshow to every stakeholder who needed to say yes.",
	thumbnail: {
		src: `${OG}/organizing-growth-jpd-thumbnail.png`,
		alt: "SurveyMonkey growth experiment tracking database in Jira Product Discovery",
	},
	team: {
		columns: [
			{
				title: "The team",
				items: [
					"5 Product Designers (US, Toronto, Amsterdam, Bengaluru)",
					"4–5 Product Managers",
					"Engineering (Dublin + US)",
					"Director, Product, Growth",
					"Director, Engineering, Growth",
				],
			},
			{
				title: "Stakeholders",
				items: [
					"Chief Technology Officer",
					"Senior VP, Product",
					"VP Engineering",
				],
			},
			{
				title: "Skills",
				items: [
					"Leadership",
					"Influence",
					"Systems Thinking",
					"Organization",
				],
			},
		],
	},
	sections: [
		{
			title: "My role",
			paragraphs: [
				"Reporting directly to the Chief Technology Officer, I led this initiative as Product Design Manager for Growth and Personalization.",
				"I partnered closely with my counterparts, the Product Director and Engineering Director.",
				"We had all recently joined the growth team with a shared goal of improving how the org worked.",
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
				alt: "The 'this is fine' meme, a dog sitting calmly in a room on fire",
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
				"Employees kept documentation in personal files, lost when they left",
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
			title: "Navigating to a solution",
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
					title: "Stakeholder Management",
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
				{ value: "12%", label: "Increase in team morale (eNPS)" },
				{ value: "24%", label: "Increase in team velocity (delivery)" },
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
						"Design and content could plan ahead instead of reacting",
						"Cross-functional teams had shared visibility on what was running and why",
						"Quarterly planning got simpler once the data was trustworthy",
					],
				},
			],
		},
	],
};

export default organizingGrowth;
