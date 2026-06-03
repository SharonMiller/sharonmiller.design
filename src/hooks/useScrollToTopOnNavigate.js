import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollPageToTop, scrollToHash } from "../utils/smoothScroll.js";

/** Scroll to top on route change, or to hash target when present. */
export function useScrollToTopOnNavigate() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (hash) {
			let innerFrame = 0;
			const outerFrame = requestAnimationFrame(() => {
				innerFrame = requestAnimationFrame(() => {
					scrollToHash(hash);
				});
			});
			return () => {
				cancelAnimationFrame(outerFrame);
				cancelAnimationFrame(innerFrame);
			};
		}

		scrollPageToTop();
	}, [pathname, hash]);
}
