/**
 * Case study image — card (280×220 grid column) or compact page thumb.
 */
export default function CaseStudyThumbnail({ image, title, variant = "card" }) {
	if (variant === "card") {
		if (image?.placeholder || !image?.src) {
			return (
				<div className="case-study-card__media case-study-card__media--placeholder">
					<span>{title}</span>
				</div>
			);
		}

		return (
			<div className="case-study-card__media">
				<img src={image.src} alt={image.alt ?? ""} loading="lazy" />
			</div>
		);
	}

	if (!image?.src || image?.placeholder) {
		return null;
	}

	return (
		<div className="case-study-thumb case-study-thumb--page shrink-0">
			<img src={image.src} alt={image.alt ?? ""} loading="lazy" />
		</div>
	);
}
