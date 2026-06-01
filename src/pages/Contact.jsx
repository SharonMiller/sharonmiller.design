import PortfolioShell, { BackLink } from "../components/portfolio/PortfolioShell";

export default function Contact() {
	return (
		<PortfolioShell activePath="/contact" contactFooter={false} mainClassName="py-20">
			<BackLink />

			<div className="mx-auto max-w-lg py-12 text-center">
				<h1 className="mb-8 text-2xl font-bold text-gray-900">Let&apos;s connect:</h1>

				<a
					href="mailto:sharonmillercreative@gmail.com"
					className="lumen-btn-primary inline-flex px-5 py-2.5 text-base font-medium text-white"
				>
					sharonmillercreative@gmail.com
				</a>

				<div className="mt-6 flex justify-center gap-6 text-sm">
					<a
						href="https://linkedin.com/in/millersharonk"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/SharonMiller"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
					>
						GitHub
					</a>
				</div>
			</div>
		</PortfolioShell>
	);
}
