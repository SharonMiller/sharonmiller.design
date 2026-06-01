import { Link } from "react-router-dom";
import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import SectionHeading from "../components/portfolio/SectionHeading";
import "./Home.css";

function Section({ title, children }) {
	return (
		<section className="lumen-reveal mt-16">
			<SectionHeading>{title}</SectionHeading>
			<div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">{children}</div>
		</section>
	);
}

function SubSection({ title, children }) {
	return (
		<div className="mt-10">
			<h3 className="text-base font-semibold text-gray-900">{title}</h3>
			<div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">{children}</div>
		</div>
	);
}

const IMPACT_STATS = [
	{ value: "1 wk", label: "Concept validation" },
	{ value: "5+", label: "Team workflows adopted" },
	{ value: "0-1", label: "Initiatives in Cursor" },
];

const IMPACT_ITEMS = [
	"Reduced concept validation cycles from months to approximately one week.",
	"Increased discovery exploration without adding engineering dependency.",
	"Improved cross-functional alignment through more testable, realistic early prototypes.",
	"Established repeatable AI-assisted workflows adopted across the design organization.",
	"Preserved design system coherence while increasing overall velocity.",
];

const RELATED_WORK = [
	{
		title: "Paywall leads to 12% conversion lift",
		year: "2025",
		description:
			"I led the strategic implementation of Superwall at VSCO, enabling my design team's experimentation with value-focused paywall copy and design and contributing to a 12% increase in conversion.",
		image: "/images/paywall-variants.png",
	},
	{
		title: "Simplifying Real Estate Tour Scheduling",
		year: "2019",
		description:
			"A brand new mobile app for realtors. Reduced typical scheduling time by 57%, providing realtors with an intuitive interface for scheduling, viewing, and updating their tours while enabling feedback and connections with other realtors.",
	},
	{
		title: "Cloud Management Platform",
		year: "2020",
		description:
			"Leading the design strategy for an Enterprise SaaS Product for Developers. This platform drove a 43% increase in customer engagement while reducing support tickets by 74%, significantly improving both user experience and operational efficiency.",
	},
];

export default function AiFirstCaseStudy() {
	return (
		<PortfolioShell activePath="/#work">
			<div className="mx-auto max-w-3xl">
				<BackLink to="/#work" />

				<header className="pb-8 pt-16">
					<div className="flex flex-col gap-8 md:flex-row md:items-start">
						<div className="order-2 md:order-none md:flex-1">
							<p className="text-sm text-gray-400">Case study · 2025</p>
							<h1 className="mt-2 text-2xl font-bold tracking-tight text-lumen-ink md:text-4xl lg:text-5xl">
								AI-Enabled Design Process @ VSCO
							</h1>
							<p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
								I led the exploration and operationalization of AI-assisted design workflows
								across VSCO&apos;s product organization. By evaluating model behavior, refining
								structured prompts, and integrating generative tools into Figma Make and Cursor,
								we reduced concept validation time from months to roughly one week while
								preserving craft and system integrity.
							</p>
						</div>
						<div className="order-1 mb-6 md:order-none md:mb-0 md:ml-8 md:shrink-0">
							<img
								src="/images/cursor-prototype.png"
								alt="Cursor AI conversation alongside a mobile gallery prototype in an iPhone frame"
								className="case-study-hero-image"
							/>
							<p className="mt-3 text-xs leading-snug text-gray-400">
								Prototyping in Cursor: prompt iteration next to a testable mobile UI
							</p>
						</div>
					</div>
				</header>

				<Section title="The Problem">
					<p>
						As VSCO expanded into a multi-surface product platform, early concept validation
						cycles often took months. High-fidelity expectations, engineering dependencies,
						and cross-functional alignment created friction before ideas could be tested.
					</p>
					<p>
						At the same time, the design team was focused on delivering against an active
						roadmap. Exploring new AI-assisted workflows felt like going slow to go fast, and
						there was little perceived time or space to experiment with unfamiliar tooling.
					</p>
					<p>
						Without clear guidance on how to use AI-assisted design tools, what worked, what
						did not, how to set up environments, and how to move work between Cursor and
						Figma, experimentation would remain inconsistent and unlikely to scale across the
						team.
					</p>
				</Section>

				<Section title="Why It Mattered">
					<p>
						Engineering teams were already using tools like Cursor to accelerate development
						and prototype workflows more quickly. At the same time, we were shifting toward a
						product development model that prioritized shipping early and iterating in market
						rather than perfecting concepts before release.
					</p>
					<p>
						Velocity across the organization was increasing. If design did not evolve alongside
						engineering, we risked becoming the bottleneck in a faster, iteration-driven
						environment.
					</p>
					<p>
						To remain a strategic partner, design needed to adapt its operating model while
						preserving craft, system integrity, and user trust.
					</p>
				</Section>

				<Section title="My Role">
					<p>
						As Head of Product Design, I led the transition to an AI-enabled design operating
						model.
					</p>
					<p>
						I evaluated tools such as Figma Make and Cursor through real 0-1 initiatives to
						understand their strengths, limitations, and integration points. Based on that
						hands-on exploration, I defined structured prompting standards, integration
						workflows between Cursor and Figma, and clear guardrails to preserve system
						integrity and craft.
					</p>
					<p>
						To reduce friction and accelerate adoption, I created a shared GPT agent configured
						with product context and setup guidance to teach designers how to get started with
						Cursor, establish consistent environments, and move work effectively between tools.
					</p>
					<p>
						I then embedded these practices into concept sprints, design reviews, and
						cross-functional demos to ensure the workflows scaled across the organization rather
						than remaining isolated experiments.
					</p>
				</Section>

				<Section title="Approach">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
						<SubSection title="Hands-On Evaluation">
							<ul className="list-disc space-y-2 pl-5">
								<li>Complex state logic</li>
								<li>Conditional workflows</li>
								<li>Component structure</li>
								<li>Edge cases and system constraints</li>
							</ul>
						</SubSection>

						<SubSection title="Quality and Prompt Optimization">
							<ul className="list-disc space-y-2 pl-5">
								<li>Embedded design system constraints</li>
								<li>Reinforced interaction patterns and layout standards</li>
								<li>Reduced noise and hallucinated components</li>
								<li>Produced cleaner outputs that could move directly into testing</li>
							</ul>
						</SubSection>

						<SubSection title="Operational Integration">
							<ul className="list-disc space-y-2 pl-5">
								<li>Integration workflows between Cursor and Figma</li>
								<li>Clear standards for when AI-assisted design was appropriate</li>
								<li>Review checkpoints to maintain craft and system coherence</li>
								<li>A shared GPT agent to onboard designers and standardize setup</li>
							</ul>
						</SubSection>
					</div>
				</Section>

				<Section title="Impact">
					<p>
						This initiative repositioned design to operate effectively within a faster,
						iteration-driven product development model. By embedding AI-assisted workflows into
						discovery and validation, we accelerated early decision-making without compromising
						system integrity or craft.
					</p>
					<div className="mt-8 flex flex-wrap gap-8">
						{IMPACT_STATS.map((stat) => (
							<div key={stat.label}>
								<span className="block text-2xl font-bold text-gray-900">{stat.value}</span>
								<span className="block text-sm text-gray-500">{stat.label}</span>
							</div>
						))}
					</div>
					<ul className="mt-8 list-disc space-y-3 pl-5">
						{IMPACT_ITEMS.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</Section>

				<section className="lumen-reveal mt-16">
					<SectionHeading>My Work</SectionHeading>
					<div className="mt-10 flex flex-col gap-16">
						{RELATED_WORK.map((project) => (
							<article key={project.title} className="border-t border-gray-100 pt-10">
								{project.image && (
									<img
										src={project.image}
										alt=""
										className="case-study-inline-image my-8"
									/>
								)}
								<h3 className="text-xl font-bold text-gray-900">
									{project.title}{" "}
									<span className="font-normal text-gray-500">({project.year})</span>
								</h3>
								<p className="mt-3 leading-relaxed text-gray-700">{project.description}</p>
							</article>
						))}
					</div>
				</section>

				<p className="lumen-reveal mt-16 text-center">
					<Link
						to="/#work"
						className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-900"
					>
						← All case studies
					</Link>
				</p>
			</div>
		</PortfolioShell>
	);
}
