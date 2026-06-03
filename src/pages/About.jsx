import { Link } from "react-router-dom";
import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import "./Home.css";

// ─── Personal ───────────────────────────────────────────────────────────────

const ABOUT_PHOTOS = [
	{
		src: "/images/family-collage.png",
		alt: "Sharon with family on the beach, plus skiing, lakeside with French Bulldogs, and son's track meet at George Fox University",
		caption: "Family in Bend — beach trips, ski days, and two very opinionated Frenchies",
	},
	{
		src: "/images/teamcollage.png",
		alt: "Sharon presenting Visual Roadmap at a conference, team selfie at Millennium Park Chicago, group at a design conference, and full team photo",
		caption: "Speaking, building teams, and trying to escape escape rooms",
	},
];

// ─── Work capabilities ───────────────────────────────────────────────────────

const CAPABILITIES = [
	{
		title: "Design",
		description:
			"Platform and systems design across growth, AI, and 0→1 products. Human-in-the-loop patterns, agentic UI, design systems governance, and the full arc from strategy to shipped product.",
		proof: [
			"600% lift in Team Plan purchases, single experiment",
			"Two MVPs shipped from concept to working code branch",
			"AI competency framework written and presented org-wide",
		],
	},
	{
		title: "Engineering",
		description:
			"Full-stack background from a year building in React at a software consultancy. Prototype in Cursor, build component systems, wire Figma Code Connect, and deploy to production environments.",
		proof: [
			"React and React Native component systems",
			"Cursor prototyping directly in VUI codebase",
			"Figma Code Connect: component naming to code convention alignment",
		],
	},
	{
		title: "Product",
		description:
			"Served as Product Owner for a production SaaS platform. Defined three-year vision presented at executive and board level. Shaped roadmap, wrote user stories, and ran experiment strategy.",
		proof: [
			"3-year platform vision presented to exec leadership at SurveyMonkey",
			"Experiment tracking system → 24% team delivery velocity improvement",
			"A/B testing, user stories, sprint planning as PO",
		],
	},
	{
		title: "DevOps & Operations",
		description:
			"AWS Solutions Architect certified. Led UX for an AWS Premier Partner cloud management platform. Built a three-environment deployment system for design-to-engineering handoff.",
		proof: [
			"AWS Certified Solutions Architect, Associate",
			"Enterprise cloud platform UX at Effectual (AWS Premier Partner)",
			"Three-environment handoff system: eng-ready, wip, concept-testing",
		],
	},
];

// ─── Career arc ──────────────────────────────────────────────────────────────

const CAREER_ARC = [
	{ period: "2025–Now", role: "Head of Product Design", company: "VSCO" },
	{ period: "2021–2025", role: "Lead Designer → Design Manager, Growth & AI", company: "SurveyMonkey" },
	{ period: "2017–2021", role: "Director of UX & Brand", company: "Effectual (AWS Premier Partner)" },
	{ period: "2007–2020", role: "Principal Designer & Founder", company: "Sharon Miller Creative" },
	{ period: "2000–2004", role: "Early Career", company: "Zango (startup, employee #5)" },
];

// ─── Tools ───────────────────────────────────────────────────────────────────

const TOOL_GROUPS = [
	{
		label: "Daily workflow",
		tools: ["Claude", "Cursor", "Figma", "GitHub", "Vercel"],
	},
	{
		label: "Design & systems",
		tools: ["React", "Figma Code Connect", "TypeScript"],
	},
	{
		label: "Data & platform",
		tools: ["Snowflake", "Python", "AWS", "Jira", "Confluence"],
	},
];

// ─── Components ──────────────────────────────────────────────────────────────

function Tag({ children }) {
	return (
		<span className="about-tag">
			{children}
		</span>
	);
}

function CapabilityCard({ title, description, proof }) {
	return (
		<div className="capability-card">
			<h3 className="capability-card__title">{title}</h3>
			<p className="capability-card__description">{description}</p>
			<ul className="capability-card__proof">
				{proof.map((item) => (
					<li key={item} className="capability-card__proof-item">
						<span className="capability-card__dot" aria-hidden="true" />
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

function CareerRow({ period, role, company, companyHref }) {
	return (
		<div className="career-row">
			<span className="career-row__period">{period}</span>
			<span className="career-row__role">{role}</span>
			<span className="career-row__company">
				{companyHref ? (
					<a
						href={companyHref}
						target="_blank"
						rel="noopener noreferrer"
						className="career-row__link"
					>
						{company}
					</a>
				) : (
					company
				)}
			</span>
		</div>
	);
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function About() {
	return (
		<PortfolioShell activePath="/about" contactFooter={false} mainClassName="py-20">
			<BackLink />

			{/* ── PERSONAL SECTION ─────────────────────────────── */}
			<section className="about-section" aria-labelledby="about-personal-heading">
				<p className="lumen-section-label">About</p>

				{/* Name + circle photo */}
				<div className="about-identity">
					<img
						src="/images/profile-photo-full.png"
						alt="Sharon Miller"
						className="about-avatar"
					/>
					<div>
						<h1 className="home-hero-name mt-2" id="about-personal-heading">
							Sharon Miller
						</h1>
						<p className="home-hero-title">Head of Product Design</p>
					</div>
				</div>

				{/* Bio + family collage */}
				<div className="about-personal-row">
					<div className="intro-body">
						<div className="home-body-copy">
							<p>
								I work at the intersection of design leadership, AI tooling, and engineering
								process. My job is to make sure design teams can actually use AI well: not
								just adopt the tools, but build the workflows, guardrails, and shared
								infrastructure that make it sustainable and scalable across a whole org.
							</p>
							<p>
								Based in Bend, Oregon, working fully remote. Outside work: family,
								hiking, skiing, and two French Bulldogs who have very strong opinions about
								everything. I mentor early-career designers and have run community art
								workshops with local youth for years.
							</p>
							<p>
								I care about the people on the teams I work with as much as I care about
								the work. Good culture and hard problems are not a trade-off.
							</p>
						</div>
						<a
							href="https://linkedin.com/in/millersharonk"
							target="_blank"
							rel="noopener noreferrer"
							className="home-linkedin"
						>
							LinkedIn
						</a>
					</div>

					<figure className="about-collage-frame">
						<img
							src="/images/family-collage.png"
							alt="Sharon with family on the beach, skiing with kids, lakeside with French Bulldogs, and son's track meet at George Fox University"
							className="about-collage-img"
						/>
						<figcaption className="about-photo-caption">
							Family in Bend — beach trips, ski days, and two very opinionated Frenchies
						</figcaption>
					</figure>
				</div>

				{/* Availability */}
				<div className="about-availability">
					<p>
						<span className="about-availability__status">
							<span aria-hidden="true">● </span>Available
						</span>
						<span>
							Open to senior IC and staff roles. Also consulting with design teams on
							AI-powered process and workflow transformation.
						</span>
					</p>
				</div>
			</section>

			{/* ── SECTION DIVIDER ──────────────────────────────── */}
			<div className="about-divider" aria-hidden="true">
				<div className="about-divider__line" />
				<span className="about-divider__label">The work</span>
				<div className="about-divider__line" />
			</div>

			{/* ── WORK SECTION ─────────────────────────────────── */}
			<section className="about-section" aria-labelledby="about-work-heading">
				<div className="about-work-row">
					<div className="about-work-content">
						<div className="about-work-intro">
							<h2 className="about-work-heading" id="about-work-heading">
								Design, engineering, product, and operations: not as separate tracks, but as one practice.
							</h2>
							<p className="about-work-subhead">
								Twenty years across platform UX, growth design, SaaS product ownership, and cloud
								infrastructure. The range is intentional.
							</p>
						</div>

						{/* Capability cards */}
						<div className="capability-grid">
							{CAPABILITIES.map((cap) => (
								<CapabilityCard key={cap.title} {...cap} />
							))}
						</div>
					</div>

					<figure className="about-team-frame">
						<img
							src="/images/teamcollage.png"
							alt="Sharon presenting at a conference, team selfie at Millennium Park Chicago, and group photos"
							className="about-collage-img"
						/>
						<figcaption className="about-photo-caption">
							Speaking, building teams, and trying to escape escape rooms
						</figcaption>
					</figure>
				</div>

				{/* Career arc */}
				<div className="career-arc">
					<h3 className="career-arc__heading">Career arc</h3>
					<div className="career-arc__list">
						{CAREER_ARC.map((item) => (
							<CareerRow key={item.period} {...item} />
						))}
					</div>
					<div className="about-history-links">
						<Link to="/work-history" className="about-work-history-link">
							Full work history →
						</Link>
						<a
							href="https://sharonmillercreative.com"
							target="_blank"
							rel="noopener noreferrer"
							className="about-work-history-link"
						>
							sharonmillercreative.com →
						</a>
					</div>
				</div>

				{/* Speaking */}
				<div className="career-arc">
					<h3 className="career-arc__heading">Speaking</h3>
					<div className="career-arc__list">
						<CareerRow
							period="June 2026"
							role="Speaker"
							company="AI Snack Club"
							companyHref="https://luma.com/aisnackclub"
						/>
						<CareerRow
							period="2024–2025"
							role="Attendee & participant"
							company="Artificiality Summit"
							companyHref="https://www.artificialityinstitute.org/summit"
						/>
						<CareerRow
							period="Oct 2025"
							role="Guest speaker"
							company="George Fox University — AI-native design and product portfolio"
						/>
						<CareerRow
							period="Ongoing"
							role="Guest speaker"
							company="Local universities — AI-native design workflow"
						/>
					</div>
					<p className="about-speaking-note">Open to speaking engagements on AI-native design process, design systems, and building high-leverage design teams.</p>
				</div>

				{/* Tools */}
				<div className="about-tools">
					{TOOL_GROUPS.map((group) => (
						<div key={group.label} className="about-tools__group">
							<p className="about-tools__label">{group.label}</p>
							<div className="about-tools__tags">
								{group.tools.map((tool) => (
									<Tag key={tool}>{tool}</Tag>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</PortfolioShell>
	);
}
