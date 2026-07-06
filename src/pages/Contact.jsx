import PortfolioShell from "../components/portfolio/PortfolioShell";

export default function Contact() {
	return (
		<PortfolioShell activePath="/contact" contactFooter={false} mainClassName="py-20">
			<div className="contact-page">
				<h1 className="contact-page__heading">Let's talk.</h1>
				<p className="contact-page__sub">
					I’m always interested in meaningful work with great people. I’m also available for consulting and advisory work.
				</p>

				<div className="contact-page__links">
					<a
						href="mailto:sharonmillercreative@gmail.com"
						className="contact-page__link"
					>
						Email
					</a>
					<a
						href="https://linkedin.com/in/millersharonk"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-page__link"
					>
						LinkedIn
					</a>
					<a
						href="https://www.linkedin.com/pulse/leaning-ai-native-design-sharon-miller-yxsjc/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-page__link"
					>
						Blog
					</a>
				</div>
			</div>
		</PortfolioShell>
	);
}
