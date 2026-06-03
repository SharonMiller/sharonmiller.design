import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll window to top on in-app route changes (case studies, footer nav, etc.). */
export function useScrollToTopOnNavigate() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
	}, [pathname]);
}
