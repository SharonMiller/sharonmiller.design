const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

export function isGoogleAnalyticsEnabled() {
	return Boolean(MEASUREMENT_ID);
}

/** Load gtag once. No-op when VITE_GA_MEASUREMENT_ID is unset (local dev). */
export function initGoogleAnalytics() {
	if (!MEASUREMENT_ID || initialized || typeof window === "undefined") {
		return;
	}

	initialized = true;

	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag() {
		window.dataLayer.push(arguments);
	};

	window.gtag("js", new Date());
	window.gtag("config", MEASUREMENT_ID, { send_page_view: false });

	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
	document.head.appendChild(script);
}

/** Fire a page_view for React Router navigations. */
export function trackPageView(path, title) {
	if (!MEASUREMENT_ID || typeof window.gtag !== "function") {
		return;
	}

	window.gtag("event", "page_view", {
		page_path: path,
		page_title: title,
		page_location: `${window.location.origin}${path}`,
	});
}
