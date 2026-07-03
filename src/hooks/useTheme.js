import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme-preference";

function getSystemTheme() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function getResolvedTheme() {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === "dark" || stored === "light") return stored;
	return getSystemTheme();
}

function applyTheme(theme) {
	const root = document.documentElement;
	if (theme === "dark") {
		root.setAttribute("data-theme", "dark");
	} else {
		root.removeAttribute("data-theme");
	}
}

let listeners = new Set();

function subscribe(cb) {
	listeners.add(cb);
	return () => listeners.delete(cb);
}

function notify() {
	listeners.forEach((cb) => cb());
}

// Apply on first load (before React hydrates)
applyTheme(getResolvedTheme());

// Listen for system preference changes
if (typeof window !== "undefined") {
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", () => {
			if (!localStorage.getItem(STORAGE_KEY)) {
				applyTheme(getResolvedTheme());
				notify();
			}
		});
}

export function useTheme() {
	const theme = useSyncExternalStore(subscribe, getResolvedTheme);

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	function toggle() {
		const next = getResolvedTheme() === "dark" ? "light" : "dark";
		localStorage.setItem(STORAGE_KEY, next);
		applyTheme(next);
		notify();
	}

	function reset() {
		localStorage.removeItem(STORAGE_KEY);
		applyTheme(getResolvedTheme());
		notify();
	}

	return { theme, toggle, reset };
}
