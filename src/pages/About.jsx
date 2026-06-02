import { Link } from "react-router-dom";
import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";
import "./Home.css";

const DAY_TO_DAY = ["Claude", "Cursor", "Figma", "React", "GitHub", "Vercel"];
const BACKGROUND = [
	"Design systems",
	"Growth / PLG",
	"Platform UX",
	"B2B SaaS",
	"Research",
	"AWS",
];

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

function ToolTag({ children }) {
	return (
		<span className="inline-flex rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm text-gray-700">
			{children}
		</span>
	);
}

export default function About() {
	return (
		<PortfolioShell activePath="/about" contactFooter={false} mainClassName="py-20">
			<div className="mx-auto max-w-2xl">
				<BackLink />

				<div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
					<div className="min-w-0 flex-1">
						<p className="lumen-section-label">About</p>
						<h1 className="mt-2 text-3xl font-bold tracking-tight text-lumen-ink md:text-5xl">
							Sharon Miller
						</h1>
						<p className="mt-3 text-base font-medium text-gray-900">Product Design Leader</p>

						<div className="mt-8 space-y-4 text-base leading-relaxed text-gray-700">
							<p>
								I operate at the strategy level, care about craft, and build the AI workflows
								that help design teams amplify their impact without compromising quality.
								I&apos;ve navigated every major platform shift in this industry. This one is
								the most important, and I know exactly how to help teams make it.
							</p>
							<p>
								My process is built around AI. I prototype in Cursor, use Claude for design
								system governance, and built Lumen to keep up with how fast things move now.
							</p>
							<p>
								Head of Product Design at VSCO. Open to senior IC and design lead roles where
								the work is real and the team cares about shipping.
							</p>
						</div>
					</div>

					<div className="mx-auto shrink-0 md:mx-0">
						<img
							src="/images/about-portrait.png"
							alt="Sharon Miller smiling outdoors in golden light"
							className="profile-photo-intro shadow-sm"
						/>
					</div>
				</div>

				<p className="mt-8">
					<Link
						to="/work-history"
						className="text-sm font-medium text-lumen-terracotta transition-opacity duration-200 hover:opacity-80"
					>
						View full work history →
					</Link>
				</p>

				<div className="my-8 border-t border-gray-100" />

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
					<div className="lumen-reveal">
						<p className="mb-3 text-sm font-semibold text-gray-900">Day to day</p>
						<div className="flex flex-wrap gap-2">
							{DAY_TO_DAY.map((tool) => (
								<ToolTag key={tool}>{tool}</ToolTag>
							))}
						</div>
					</div>

					<div className="lumen-reveal">
						<p className="mb-3 text-sm font-semibold text-gray-900">Background</p>
						<div className="flex flex-wrap gap-2">
							{BACKGROUND.map((skill) => (
								<ToolTag key={skill}>{skill}</ToolTag>
							))}
						</div>
					</div>
				</div>

				<div className="lumen-reveal mt-12">
					<p className="mb-4 text-sm font-semibold text-gray-900">Recognition & community</p>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{ABOUT_PHOTOS.map((photo) => (
							<figure key={photo.src}>
								<img
									src={photo.src}
									alt={photo.alt}
									className="w-full rounded-xl object-cover"
								/>
								<figcaption className="mt-2 text-xs text-gray-500">{photo.caption}</figcaption>
							</figure>
						))}
					</div>
				</div>

				<div className="lumen-reveal mt-8 rounded-2xl border border-gray-200 p-5">
					<p className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
						<span className="shrink-0 font-medium text-lumen-terracotta">
							<span aria-hidden="true">● </span>
							Available
						</span>
						<span>
							Open to senior IC and staff roles. Also up for a focused consult on design
							process if you have a specific problem.
						</span>
					</p>
				</div>
			</div>
		</PortfolioShell>
	);
}
