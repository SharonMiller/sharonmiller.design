import { Link } from "react-router-dom";
import PortfolioShell from "../components/portfolio/PortfolioShell";
import "./Home.css";

// ─── Career arc ──────────────────────────────────────────────────────────────

const CAREER_ARC = [
	{ period: "2025–Now", role: "Head of Product Design", company: "VSCO" },
	{ period: "2021–2024", role: "Lead Product Designer · Design Manager", company: "SurveyMonkey" },
	{ period: "2017–2021", role: "Director of UX & Brand", company: "Effectual (AWS Premier Partner)" },
	{ period: "2007–present", role: "Principal Designer · consulting", company: "Sharon Miller Creative" },
	{ period: "2000–2004", role: "Head of Customer Experience", company: "Zango (startup, employee #5)" },
];

// ─── Leadership principles ────────────────────────────────────────────────────

const PRINCIPLES = [
	{
		title: "Make complexity feel simple.",
		body: "Powerful products only matter if people can actually use them. I enjoy working on mature products where complexity has accumulated over time. My goal is to simplify the experience while preserving capability, maintaining a high bar for craft, and using the right tools to solve the problem.",
		relatedWork: [
			{ label: "VSCO Workspace", href: "/case-study/vsco-workspace" },
			{ label: "Survey Builder Transformation", href: "/case-study/survey-builder-transformation" },
		],
	},
	{
		title: "Know when to lean in and when to lean out.",
		body: "Good leadership starts with understanding what your team needs from you. Sometimes that’s hands-on design. Sometimes it’s coaching, creating clarity, or pushing back so the team can keep moving. Knowing when to step in and when to step back is part of the job.",
		relatedWork: [
			{ label: "Operationalizing AI-Native Design", href: "/case-study/operationalizing-ai-native-design" },
			{ label: "VSCO Workspace", href: "/case-study/vsco-workspace" },
		],
	},
	{
		title: "Build systems that make great work easier.",
		body: "Great systems are built on a solid foundation. I enjoy building the work behind the work: the workflows, patterns, and ways of working that reduce friction, create consistency, and help teams deliver better products. Strong systems don’t replace good design. They make it easier to achieve.",
		relatedWork: [
			{ label: "AI Design Ops", href: "/case-study/design-system-governance" },
			{ label: "Order From Chaos", href: "/case-study/organizing-growth" },
		],
	},
	{
		title: "Leave people stronger.",
		body: "One of the most rewarding parts of leadership is helping someone grow into something they didn’t think they could do. Whether it’s through mentoring, coaching, or simply creating the space to stretch, I want people to leave with more confidence, stronger judgment, and the ability to tackle bigger challenges.",
		relatedWork: [
			{ label: "Operationalizing AI-Native Design", href: "/case-study/operationalizing-ai-native-design" },
		],
	},
];

// ─── Components ──────────────────────────────────────────────────────────────

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

			{/* ── IDENTITY ─────────────────────────────────────────────── */}
			<section className="about-section" aria-labelledby="about-personal-heading">
				<div className="about-identity">
					<img
						src="/images/about and career/profile-photo-full.png"
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

				<div className="about-personal-row">
					<div className="intro-body">
						<div className="home-body-copy">
							<p>
								I’m drawn to problems that are messy, ambiguous, and inherently
								complex. Products, workflows, organizations, and now AI. I enjoy
								bringing clarity to those systems so people can do their best work.
							</p>
							<p>
								I help organizations use AI to improve speed without compromising
								craft, and I design products where AI reduces complexity instead of
								adding to it.
							</p>
							<p>
								I enjoy building products people trust and helping organizations
								adapt to what’s next.
							</p>
						</div>
						<div className="about-social-links">
							<a
								href="https://linkedin.com/in/millersharonk"
								target="_blank"
								rel="noopener noreferrer"
								className="home-linkedin"
							>
								LinkedIn
							</a>
							<a
								href="https://www.linkedin.com/pulse/leaning-ai-native-design-sharon-miller-yxsjc/"
								target="_blank"
								rel="noopener noreferrer"
								className="home-linkedin"
							>
								Blog
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ── DIVIDER: LEADERSHIP PRINCIPLES ───────────────────────── */}
			<div className="about-divider" aria-hidden="true">
				<div className="about-divider__line" />
				<span className="about-divider__label">What Guides My Work</span>
				<div className="about-divider__line" />
			</div>

			{/* ── LEADERSHIP PRINCIPLES ─────────────────────────────────── */}
			<section className="about-section about-section--pillars" aria-label="What guides my work">
				<div className="about-pillars">
					{PRINCIPLES.map((principle) => (
						<article key={principle.title} className="about-pillar">
							<h3 className="about-pillar__title">{principle.title}</h3>
							<p className="about-pillar__body">{principle.body}</p>
							<div className="about-pillar__proof">
								<div className="about-pillar__pills">
									{principle.relatedWork.map((item) => (
										<Link
											key={item.href}
											to={item.href}
											className="about-pillar__pill"
										>
											{item.label}
										</Link>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* ── THE WORK ─────────────────────────────────────────────── */}
			<section className="about-section">

				<div className="about-work-photos">
					<figure className="about-photo-figure">
						<img
							src="/images/about and career/work_about_1.jpeg"
							alt="Sharon presenting the Visual Roadmap to cross-functional stakeholders at SurveyMonkey"
							className="about-work-photo-img"
							loading="lazy"
						/>
						<figcaption className="about-photo-caption">
							Presenting the SurveyMonkey modernization roadmap
						</figcaption>
					</figure>
					<figure className="about-photo-figure">
						<img
							src="/images/about and career/team1.jpeg"
							alt="Sharon and the SurveyMonkey design team"
							className="about-work-photo-img"
							loading="lazy"
						/>
						<figcaption className="about-photo-caption">
							SurveyMonkey design team
						</figcaption>
					</figure>
				</div>

				{/* Career arc */}
				<div className="about-divider" aria-hidden="true">
					<div className="about-divider__line" />
					<span className="about-divider__label">Career arc</span>
					<div className="about-divider__line" />
				</div>
				<div className="career-arc__list">
					{CAREER_ARC.map((item) => (
						<CareerRow key={item.period} {...item} />
					))}
				</div>
			</section>

			{/* ── DIVIDER: OUTSIDE WORK ─────────────────────────────────── */}
			<div className="about-divider" aria-hidden="true">
				<div className="about-divider__line" />
				<span className="about-divider__label">Outside Work</span>
				<div className="about-divider__line" />
			</div>

			{/* ── OUTSIDE WORK ─────────────────────────────────────────── */}
			<section className="about-section">

				{/* Community photos */}
				<div className="about-community-media">
					<figure className="about-photo-figure">
						<img
							src="/images/about and career/ai-snack-club-3 1.png"
							alt="Sharon speaking on the Generating CRE(AI)tivity panel at the AWS Builder Loft in San Francisco"
							className="about-community-photo"
							loading="lazy"
						/>
					</figure>
					<figure className="about-photo-figure">
						<img
							src="/images/about and career/ai-snack-club-flyer 1.png"
							alt="AI Snack Club — Generating CRE(AI)tivity event poster"
							className="about-community-photo about-community-photo--flyer"
							loading="lazy"
						/>
					</figure>
				</div>

				<div className="about-community-subsection">
					<h4 className="about-community-label">Speaking</h4>
					<div className="home-body-copy">
						<p>
							I spoke at AI Snack Club's Generating CRE(AI)tivity panel at the
							AWS Builder Loft in San Francisco alongside designers from OpenArt
							and Luma AI. We talked about AI-native design practices and the
							balance between understanding design principles and letting AI
							design for you, including how easily AI slop creeps in and why
							guardrails matter so much.
						</p>
					</div>
				</div>

				<div className="about-community-subsection">
					<h4 className="about-community-label">In the community</h4>
					<div className="home-body-copy">
						<p>
							I attended the{" "}
							<a
								href="https://www.artificialityinstitute.org/summit"
								target="_blank"
								rel="noopener noreferrer"
								className="home-linkedin"
							>
								Artificiality Summit
							</a>
							, a gathering focused on human and AI co-evolution. I stay connected to
							the community as those conversations continue.
						</p>
					</div>
				</div>

				<div className="about-community-subsection">
					<h4 className="about-community-label">Advisory</h4>
					<div className="home-body-copy">
						<p>
							I serve on the Art and Design Advisory Board at Central Oregon
							Community College and advise the High Desert Education Service
							District. Most of that work centers on helping educators understand
							what modern product organizations need from designers, including
							honest conversations about where AI belongs in a curriculum and
							why strong fundamentals still come first.
						</p>
					</div>
				</div>

				<div className="about-community-subsection about-community-closing">
					<h4 className="about-community-label">Giving back</h4>
					<ul className="about-bullets">
						<li>Volunteered as Principal Product Designer for Guardian Group, helping architect tools supporting the fight against human trafficking</li>
						<li>Volunteer at student events introducing early-career designers to careers in product design</li>
						<li>Mentor early-career designers one-on-one</li>
					</ul>
				</div>

				{/* Personal */}
				<div className="about-community-subsection">
					<h4 className="about-community-label">Family</h4>
					<div className="about-personal-row">
						<div className="intro-body about-outside-body">
							<div className="home-body-copy">
								<p>
									My husband and I have three kids: two sons in college and a
									daughter in high school. We spend as much time outside as we can,
									whether that's skiing, camping, hiking, or taking the motorhome
									to explore new places.
								</p>
								<p>
									Our two French Bulldogs love to join most of our adventures.
									They're happiest exploring a campground or riding on a paddle board.
									They're less enthusiastic about long hikes, which occasionally end
									with one of us carrying them back to camp.
								</p>
							</div>
						</div>
						<figure className="about-collage-frame">
							<img
								src="/images/about and career/family-collage.png"
								alt="Sharon with family on the beach, skiing, and lakeside"
								className="about-collage-img"
							/>
							<figcaption className="about-photo-caption">
								Family in Bend: beach trips, ski days, and two very opinionated Frenchies
							</figcaption>
						</figure>
					</div>
				</div>

			</section>

		</PortfolioShell>
	);
}
