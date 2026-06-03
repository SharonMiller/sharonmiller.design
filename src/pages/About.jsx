import { Link } from "react-router-dom";
import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import "./Home.css";

// ─── Personal ───────────────────────────────────────────────────────────────

const ABOUT_PHOTOS = [
	{
		src: "/images/sharon-award.png",
		alt: "Sharon Miller holding a SurveyMonkey Innovate Outstanding Achievement Award",
		caption: "SurveyMonkey Innovate award, 2023",
	},
	{
		src: "/images/community-art.png",
		alt: "Youth group collaborating on a large colorful community art project",
		caption: "Community art workshop with local youth",
	},
];

// ─── Work capabilities ───────────────────────────────────────────────────────

const CAPABILITIES = [
	{
		title: "Design",
		description:
			"Platform and systems design across growth, AI, and 0→1 products. Human-in-the-loop patterns, agentic UI, design systems governance, and the full arc from strategy to shipped product.",
		proof: [
			"600% lift in Team Plan purchases — single experiment",
			"Two MVPs shipped from concept to working code branch",
			"Design competency framework across L3–L5",
		],
	},
	{
		title: "Engineering",
		description:
			"Full-stack background from a year building in React at a software consultancy. Prototype in Cursor, build component systems, wire Figma Code Connect, and deploy to production environments.",
		proof: [
			"React & React Native component systems",
			"Cursor prototyping directly in VUI codebase",
			"Figma Code Connect — component naming to code convention alignment",
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
			"AWS Certified Solutions Architect — Associate",
			"Enterprise cloud platform UX at Effectual (AWS Premier Partner)",
			"Three-environment system: eng-ready / wip / concept-testing",
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

function CareerRow({ period, role, company }) {
	return (
		<div className="career-row">
			<span className="career-row__period">{period}</span>
			<span className="career-row__role">{role}</span>
			<span className="career-row__company">{company}</span>
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

				<div className="intro-layout">
					<div className="intro-header">
						<h1 className="home-hero-name mt-2" id="about-personal-heading">
							Sharon Miller
						</h1>
						<p className="home-hero-title">Head of Product Design</p>
					</div>

					<div className="intro-body-row">
						<div className="intro-body">
							<div className="home-body-copy">
								<p>
									I operate at the strategy level, care about craft, and build the AI
									workflows that help design teams amplify their impact without compromising
									quality. I&apos;ve navigated every major platform shift in this industry.
									This one is the most important, and I know exactly how to help teams make it.
								</p>
								<p>
									I'm based in Bend, Oregon, working fully remote and spending as much time
									as possible outdoors — hiking, climbing, making things with my hands. I
									mentor early-career designers and have run community art workshops with
									local youth for years.
								</p>
								<p>
									I care about the people on the teams I work with as much as I care about
									the work. Good culture and hard problems aren't a trade-off.
								</p>
							</div>
						</div>

						<div className="profile-photo-frame">
							<img
								src="/images/profile-photo-full.png"
								alt="Sharon Miller smiling outdoors in golden light"
								className="profile-photo-intro"
							/>
						</div>
					</div>
				</div>

				{/* Personal photos */}
				<div className="about-photos">
					{ABOUT_PHOTOS.map((photo) => (
						<figure key={photo.src} className="about-photo-figure">
							<img
								src={photo.src}
								alt={photo.alt}
								className="about-photo-img"
							/>
							<figcaption className="about-photo-caption">{photo.caption}</figcaption>
						</figure>
					))}
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
				<div className="about-work-intro">
					<h2 className="about-work-heading" id="about-work-heading">
						Design, engineering, product, and operations — not as separate tracks, as one practice.
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
						<div className="career-row">
							<span className="career-row__period">June 2026</span>
							<span className="career-row__role">Speaker</span>
							<span className="career-row__company">AI Conference — topic: AI-native design process</span>
						</div>
						<div className="career-row">
							<span className="career-row__period">2024–2025</span>
							<span className="career-row__role">Attendee & participant</span>
							<span className="career-row__company">Artificially Intelligent Conference</span>
						</div>
						<div className="career-row">
							<span className="career-row__period">Ongoing</span>
							<span className="career-row__role">Guest speaker</span>
							<span className="career-row__company">Local universities — AI-native design workflow</span>
						</div>
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
