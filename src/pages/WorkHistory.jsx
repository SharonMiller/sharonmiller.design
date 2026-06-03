import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import ContentAsideRow, { SectionDivider } from "../components/portfolio/ContentAsideRow";
import CareerTimeline from "../components/portfolio/CareerTimeline";
import "../components/portfolio/CareerTimeline.css";

const PATH_TO_LEADERSHIP = [
	{
		period: "2017-2020",
		location: "Bend, OR",
		title: "Principal Designer at Five Talent Software",
		description:
			"Led design strategy at a software consultancy, managing a team of four and delivering products across fintech, eCommerce, IoT, and B2B cloud.",
	},
	{
		period: "2020-2021",
		location: "Bend, OR",
		title: "Director of UX & Branding at Effectual",
		description:
			"Led design of an ML-powered cloud service management app, driving a 43% increase in engagement and a 74% reduction in support tickets.",
	},
	{
		period: "2021-2023",
		location: "Bend, OR",
		title: "Lead Designer at SurveyMonkey",
		description:
			"Defined a vision to modernize SurveyMonkey into a user-friendly, AI-powered PLG SaaS product.",
	},
	{
		period: "2023-2025",
		location: "Bend, OR",
		title: "Manager of Growth at SurveyMonkey",
		description:
			"Led the product design team to drive product-led growth, overseeing pricing, in-product growth, and billing, while applying ML and generative AI to improve conversion and simplify survey creation.",
	},
	{
		period: "2025-Present",
		location: "Bend, OR",
		title: "Head of Product Design at VSCO",
		description:
			"Leading the design org, defining strategy and systems, and using AI to increase speed, focus, and impact across the product experience.",
	},
];

const EARLY_CAREER = [
	{
		period: "2000-2004",
		location: "Seattle, WA",
		title: "Head of Customer Engagement at Zango",
		description:
			"Startup employee #5 with diverse roles, including support management and customer engagement. Relocated to Bend, Oregon after Zango acquisition in 2004 to start a family.",
	},
	{
		period: "2007-2020",
		location: "Bend, OR",
		title: "UX/UI Design Principal & Business Owner",
		description:
			"Accumulated over a decade of experience in the UX/UI design industry, managing my own business and freelancing as a UX/UI Designer and web developer.",
	},
	{
		period: "2017",
		location: "Bend, OR",
		title: "Software Developer at Five Talent",
		description:
			"Completed an intensive five-month software development bootcamp and earned an AWS Solutions Architect Associate certificate. Both achievements have been crucial in shaping my approach to working with engineering as a Product Design leader.",
	},
];

const WORK_PHOTOS = [
	{
		src: "/images/sharon-award.png",
		alt: "Sharon Miller holding a SurveyMonkey Innovate Outstanding Achievement Award",
	},
	{
		src: "/images/organizing-growth-jpd-thumbnail.png",
		alt: "Jira Product Discovery board tracking growth experiments at SurveyMonkey",
	},
	{
		src: "/images/growth-experiments.png",
		alt: "Product-led growth experiment outcomes and learnings dashboard",
	},
];

const PHOTO_COLLAGE = (
	<img
		src="/images/family-collage.png"
		alt="Sharon Miller presenting a visual roadmap, with team photos from outings and award events"
		className="w-full rounded-xl object-cover"
	/>
);

const VSCO_PORTRAIT = (
	<img
		src="/images/profile-photo-full.png"
		alt="Sharon Miller smiling outdoors in golden light"
		className="w-full rounded-xl object-cover"
	/>
);

function WorkColumn({ title, children }) {
	return (
		<div className="min-w-0 space-y-4 text-sm leading-relaxed text-gray-600">
			<h3 className="text-base font-semibold text-gray-900">{title}</h3>
			{children}
		</div>
	);
}

export default function WorkHistory() {
	return (
		<PortfolioShell activePath="/work-history">
			<BackLink />

			<SectionDivider label="My current role" />

			<ContentAsideRow
				aside={VSCO_PORTRAIT}
				asideCaption="Head of Product Design at VSCO"
			>
				<h2 className="text-xl font-bold text-lumen-ink md:text-2xl">
					Head of Product Design @ VSCO
				</h2>
				<div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700">
					<p>
						Leading Product Design at VSCO, I shape strategy, vision, and systems that unify
						the end-to-end product experience for creators. I focus on raising the bar on
						craft, upleveling designers, and building a team that operates as true thought
						partners with Product and Engineering.
					</p>
					<p>
						I am deeply invested in understanding creators, how they work, what motivates them,
						and where they get stuck. That understanding guides how we design products that
						feel expressive, intuitive, and cohesive at scale.
					</p>
					<p>
						I am also leaning into AI as a practical way to help the team move faster, from
						early exploration through execution, while staying grounded in quality, taste, and
						intention.
					</p>
				</div>
			</ContentAsideRow>

			<SectionDivider label="Leading growth design at SurveyMonkey" />

			<div className="lumen-reveal mb-10">
				{PHOTO_COLLAGE}
				<p className="mt-3 text-xs leading-snug text-gray-400">
					Presenting the Q1 2024 visual roadmap with the growth design team
				</p>
			</div>

			<div className="lumen-reveal grid gap-10 md:grid-cols-3 md:gap-8">
				<WorkColumn title="Principal product designer">
					<p>
						As Principal Product Designer, I led UX initiatives in multiple industries,
						including serving as lead UX on an application development discovery team at a
						software consultancy. My work included facilitating design thinking workshops and
						using qualitative research to deliver insights.
					</p>
					<p>
						At SurveyMonkey, I partnered with executives to shape a three-year design vision. I
						transformed the product&apos;s logic visualization feature, resulting in an 8%
						increase in engagement on the preview page.
					</p>
					<p>
						I led the redesign of the survey-building experience, from the MVP for an
						AI-powered feature to advancing the overall authoring experience. Collaborating with
						product and engineering, I aligned design with business goals for scalability, and
						my MVP design for Build with AI became the top survey creation method, boosting
						engagement and conversions.
					</p>
				</WorkColumn>

				<WorkColumn title="Product design leader">
					<p>
						As Head of Growth Design at SurveyMonkey, I led the team focused on growth and
						personalization, shaping design strategy and delivering measurable business impact.
						My priorities were understanding user needs, reducing friction in the user journey,
						and creating scalable, experimentation-driven solutions.
					</p>
					<p>
						With a software development background, I brought a technical perspective to design
						leadership and partnered closely with product and engineering.
					</p>
					<p>
						I spearheaded growth initiatives that increased team velocity by 24 percent,
						improved monetization, and advanced AI/ML-driven personalization.
					</p>
					<p>
						As Director of Product Design at an AWS Premier partner, I established UX/UI best
						practices and promoted Lean UX and Agile methods. I led the design of a B2B SaaS
						platform for AWS service monitoring, working closely with cross-functional teams.
					</p>
					<p>
						My consulting experience and action-oriented approach fostered a results-driven
						culture, boosting team velocity and encouraging rapid learning.
					</p>
				</WorkColumn>

				<WorkColumn title="Product management and engineering experience">
					<p>
						I served as Product Owner for an internal SaaS platform, leading A/B testing to
						improve conversion, engagement, and retention, and collaborating on product vision
						and roadmap. My work included user research, crafting user stories, and training
						sales teams on product value.
					</p>
					<p>
						After a software development bootcamp with Apprenti and Code Fellows, I spent a year
						building in React at a consultancy before returning to design. I also hold an AWS
						Solutions Architect Associate certification and have experience in AWS architecture.
					</p>
					<p>
						This blend of design, product management, and technical skills enables me to lead
						design teams with a clear understanding of how design choices impact business and
						technical outcomes.
					</p>
				</WorkColumn>
			</div>

			<div className="lumen-reveal mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
				{WORK_PHOTOS.map((photo) => (
					<img
						key={photo.src}
						src={photo.src}
						alt={photo.alt}
						className="aspect-[4/3] w-full rounded-xl object-cover object-top"
					/>
				))}
			</div>

			<SectionDivider label="Career timeline" />

			<CareerTimeline
				title="Path to leadership"
				items={PATH_TO_LEADERSHIP}
				graphicSrc="/images/timeline-leadership.png"
				graphicAlt="Career timeline from Principal Designer at Five Talent through Head of Product Design at VSCO"
			/>
			<CareerTimeline
				title="Early Career timeline"
				items={EARLY_CAREER}
				graphicSrc="/images/timeline-early-career.png"
				graphicAlt="Early career timeline from Zango through UX consulting and software development at Five Talent"
			/>
		</PortfolioShell>
	);
}
