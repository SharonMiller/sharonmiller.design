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

const PILLARS = [
	{
		title: "Products",
		body: "Powerful technology only matters if people can actually use it. The most interesting products are ones where the technology is genuinely capable but the experience makes it hard to use. I'm drawn to closing that gap.",
	},
	{
		title: "Teams",
		body: "The most rewarding moments in my career have been watching someone become capable of something they didn't think they could do. Those moments make the job worth doing.",
	},
	{
		title: "Systems",
		body: "A design system is only as valuable as the number of people building from it. I think a lot about what it means to build design infrastructure that serves designers, engineers, and AI agents equally. When it works, quality compounds.",
	},
	{
		title: "Organizations",
		body: "The most lasting thing you can build is organizational capability. I've spent my career helping organizations navigate difficult transitions: new growth models, new technology, new ways of working. The goal is always to build something that outlasts my involvement.",
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
							<p>Complex products don't have to feel complicated.</p>
							<p>
								I've spent my career helping teams turn powerful technology into
								products people actually enjoy using. Sometimes that means redesigning
								the product. Sometimes it means redesigning how the team works.
							</p>
							<p>
								Today, much of that work involves AI. I help design organizations
								adopt AI in ways that improve speed without compromising craft,
								collaboration, or trust. I also design AI into complex products,
								creating experiences where AI feels like a natural part of the
								workflow instead of another feature to learn.
							</p>
							<p>
								At VSCO, I lead Product Design and have chosen to dive into the work
								to explore AI-first design. Using code as a design medium gave me
								firsthand experience with AI-native product development before asking
								my team to work differently. That experience shaped the operating
								model, workflows, and design practices we introduced across the
								organization.
							</p>
							<p>
								Over the past twenty years I've worked at the intersection of design,
								engineering, and product strategy. The tools will keep changing.
								Building products people trust, and organizations that can adapt, is
								the work I'm most interested in.
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
				<span className="about-divider__label">Leadership Principles</span>
				<div className="about-divider__line" />
			</div>

			{/* ── FOUR PILLARS ─────────────────────────────────────────── */}
			<section className="about-section about-section--pillars">
				<div className="about-pillars">
					{PILLARS.map((pillar) => (
						<div key={pillar.title} className="about-pillar">
							<h3 className="about-pillar__title">{pillar.title}</h3>
							<p className="about-pillar__body">{pillar.body}</p>
						</div>
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
							and Luma AI. I participate in the Artificiality Institute to stay
							connected to how the broader design community is thinking through
							the same questions.
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
