import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initGoogleAnalytics, trackPageView } from "../lib/analytics.js";
import { getPageTitle } from "../utils/pageTitle.js";

/** Initialize GA4 once and track page views on every client-side route change. */
export function useGoogleAnalytics() {
	const { pathname, search } = useLocation();
	const initialized = useRef(false);

	useEffect(() => {
		if (initialized.current) {
			return;
		}

		initGoogleAnalytics();
		initialized.current = true;
	}, []);

	useEffect(() => {
		const path = `${pathname}${search}`;
		const title = getPageTitle(pathname);
		document.title = title;
		trackPageView(path, title);
	}, [pathname, search]);
}
