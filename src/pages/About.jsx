import PortfolioShell from "../components/portfolio/PortfolioShell";
import "./Home.css";

// ─── Work photos ─────────────────────────────────────────────────────────────

const WORK_PHOTOS = [
	{
		src: "/images/about and career/work_about_1.jpeg",
		alt: "Sharon presenting the Visual Roadmap",
	},
	{
		src: "/images/about and career/team1.jpeg",
		alt: "Design team selfie in Chicago",
	},
	{
		src: "/images/about and career/team3.jpeg",
		alt: "Full design org group photo",
	},
];

// ─── Work capabilities ───────────────────────────────────────────────────────


// ─── Career arc ──────────────────────────────────────────────────────────────

const CAREER_ARC = [
	{ period: "2025–Now", role: "Head of Product Design", company: "VSCO" },
	{ period: "2021–2025", role: "Design Manager, Growth & Personalization", company: "SurveyMonkey" },
	{ period: "2017–2021", role: "Director of UX & Brand", company: "Effectual (AWS Premier Partner)" },
	{ period: "2007–present", role: "Principal Designer · consulting", company: "Sharon Miller Creative" },
	{ period: "2000–2004", role: "Head of Customer Experience", company: "Zango (startup, employee #5)" },
];

// ─── Components ──────────────────────────────────────────────────────────────

function PhotoGrid({ photos, columns = 2 }) {
	return (
		<div className={`about-photo-grid${columns === 3 ? " about-photo-grid--three" : ""}`}>
			{photos.map((photo) => (
				<img
					key={photo.src}
					src={photo.src}
					alt={photo.alt}
					className="about-photo-grid__img"
					loading="lazy"
				/>
			))}
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
			{/* ── PERSONAL SECTION ─────────────────────────────── */}
			<section className="about-section" aria-labelledby="about-personal-heading">
				{/* Name + circle photo */}
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

				{/* Bio + family collage */}
				<div className="about-personal-row">
					<div className="intro-body">
						<div className="home-body-copy">
							<p>
								I redesign products and the teams that build them. At VSCO, that meant
								both: shipping a CRM rebuilt for creative professionals, and building the
								design org practices that made it possible to ship two products without
								adding headcount. The product problems and the practice problems are the
								same problem.
							</p>
							<p>
								Based in Bend, Oregon, working fully remote. Outside work: family,
								hiking, skiing, and two French Bulldogs with very strong opinions.
							</p>
							<p>
								I mentor early-career designers and serve on the design advisory board at
								Central Oregon Community College. I also advise the High Desert Education
								Service District, working with high school teachers across Oregon to prepare
								students for careers in tech.
							</p>
							<p>
								I care about the people on the teams I work with as much as I care about
								the work. Good culture and hard problems are not a trade-off.
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

					<figure className="about-collage-frame">
						<img
							src="/images/about and career/family-collage.png"
							alt="Sharon with family on the beach, skiing with kids, lakeside with French Bulldogs, and son's track meet at George Fox University"
							className="about-collage-img"
						/>
						<figcaption className="about-photo-caption">
							Family in Bend: beach trips, ski days, and two very opinionated Frenchies
						</figcaption>
					</figure>
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
						I lead design teams and still do the work.
					</h2>
				</div>

				<div className="about-prose home-body-copy">
					<p>
						At VSCO I lead design strategy across multiple product squads — budget, hiring,
						org structure, and an IC role I kept deliberately to stay close to the work.
						The Workspace redesign and Scout shipped as my design. I defined AI fluency as
						a required competency at every IC level and presented the methodology org-wide.
					</p>
					<p>
						Earlier: four years as design manager at SurveyMonkey, embedded across growth
						squads and partnering with engineering and product leaders, reporting to the CTO.
						Before that, four years as UX lead and Product Owner at an AWS Premier Partner,
						presenting a three-year product vision at exec and board level. AWS Solutions
						Architect certified. I prototype in code — React, React Native, Figma Code Connect.
					</p>
				</div>


				{/* Career arc */}
				<div className="career-arc">
					<h3 className="career-arc__heading">Career arc</h3>
					<div className="career-arc__list">
						{CAREER_ARC.map((item) => (
							<CareerRow key={item.period} {...item} />
						))}
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
							company="George Fox University: AI-native design and product portfolio"
						/>
						<CareerRow
							period="Ongoing"
							role="Guest speaker"
							company="Local universities: AI-native design workflow"
						/>
					</div>
					<p className="about-speaking-note">Open to speaking engagements on AI-native design process, design systems, and building effective design teams.</p>
				</div>

			</section>
		</PortfolioShell>
	);
}
