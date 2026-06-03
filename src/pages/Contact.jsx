import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";

export default function Contact() {
	return (
		<PortfolioShell activePath="/contact" contactFooter={false} mainClassName="py-20">
			<BackLink />

			<div className="contact-page">
				<h1 className="contact-page__heading">Let's talk.</h1>
				<p className="contact-page__sub">
					Open to senior IC and staff roles, and consulting with design teams on AI-powered workflow and process.
				</p>

				<div className="contact-page__actions">
					<a
						href="mailto:sharonmillercreative@gmail.com"
						className="contact-page__email"
					>
						sharonmillercreative@gmail.com
					</a>

					<div className="contact-page__links">
						<a
							href="https://linkedin.com/in/millersharonk"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-page__link"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/SharonMiller"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-page__link"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</PortfolioShell>
	);
}
