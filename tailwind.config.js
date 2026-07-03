/** Lumen Design System — @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				sage: "var(--color-accent)",
				terracotta: "var(--color-accent)",
				lumen: {
					sage: "var(--color-accent)",
					"sage-light": "var(--color-accent-light)",
					"sage-dark": "var(--color-accent-dark)",
					terracotta: "var(--color-accent)",
					"terracotta-light": "var(--color-accent-light)",
					"terracotta-dark": "var(--color-accent-dark)",
					ink: "var(--color-text-primary)",
					secondary: "var(--color-text-tertiary)",
					surface: "var(--color-surface-secondary)",
					border: "var(--color-border-secondary)",
				},
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
			},
			keyframes: {
				bounceSoft: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(6px)" },
				},
			},
			animation: {
				"bounce-soft": "bounceSoft 2s ease-in-out infinite",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".glass": {
					background: "rgba(250, 250, 249, 0.65)",
					"backdrop-filter": "blur(12px)",
					"-webkit-backdrop-filter": "blur(12px)",
					border: "1px solid rgba(255, 255, 255, 0.35)",
					"box-shadow": "0 4px 24px rgba(28, 25, 23, 0.06)",
				},
				".glass-strong": {
					background: "rgba(250, 250, 249, 0.82)",
					"backdrop-filter": "blur(20px)",
					"-webkit-backdrop-filter": "blur(20px)",
					border: "1px solid rgba(255, 255, 255, 0.5)",
					"box-shadow": "0 8px 32px rgba(28, 25, 23, 0.08)",
				},
				".glass-panel": {
					background: "rgba(255, 255, 255, 0.45)",
					"backdrop-filter": "blur(16px) saturate(1.2)",
					"-webkit-backdrop-filter": "blur(16px) saturate(1.2)",
					border: "1px solid rgba(255, 255, 255, 0.25)",
				},
			});
		},
	],
};
