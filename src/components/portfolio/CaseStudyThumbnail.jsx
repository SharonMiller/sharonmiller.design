/**
 * Small case study thumbnail — UXfolio-scale, text stays primary.
 */
export default function CaseStudyThumbnail({ image, variant = "card" }) {
	if (!image?.src) return null;

	return (
		<div
			className={
				variant === "page"
					? "case-study-thumb case-study-thumb--page shrink-0"
					: "case-study-thumb shrink-0"
			}
		>
			<img src={image.src} alt={image.alt ?? ""} loading="lazy" />
		</div>
	);
}
