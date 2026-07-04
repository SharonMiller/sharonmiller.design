import { FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const returnTo = searchParams.get("returnTo") || "/";

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");
		setLoading(true);
		try {
			const response = await fetch("/api/auth", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ password }),
			});
			if (response.ok) {
				setSuccess(true);
				setTimeout(() => navigate(returnTo, { replace: true }), 1400);
				return;
			}
			const data = (await response.json().catch(() => ({}))) as { error?: string };
			setError(data.error || "Incorrect password");
		} catch {
			setError("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<style>{`
				@keyframes fade-in {
					from { opacity: 0; }
					to   { opacity: 1; }
				}
				@keyframes slide-up {
					from { opacity: 0; transform: translateY(18px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				@keyframes check-draw {
					from { stroke-dashoffset: 28; }
					to   { stroke-dashoffset: 0; }
				}

				.login-root {
					animation: fade-in 0.5s ease both;
					min-height: 100vh;
					background: var(--color-surface-secondary);
					display: flex;
					flex-direction: column;
				}

				/* Shared top bar */
				.login-topbar {
					display: flex;
					align-items: center;
					padding: 1.75rem 2.5rem;
					flex-shrink: 0;
				}

				/* Two-column body */
				.login-body {
					flex: 1;
					display: grid;
					grid-template-columns: 1fr 1fr;
					min-height: 0;
				}

				/* Left panel */
				.login-left {
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 3rem 3rem 3rem 2.5rem;
					border-right: 1px solid var(--color-border-primary);
				}
				.login-eyebrow {
					animation: slide-up 0.6s 0.05s cubic-bezier(0.16,1,0.3,1) both;
					font-size: 0.6875rem;
					font-weight: 600;
					letter-spacing: 0.12em;
					text-transform: uppercase;
					color: var(--color-accent);
					margin: 0 0 1.5rem;
				}
				.login-name {
					animation: slide-up 0.7s 0.12s cubic-bezier(0.16,1,0.3,1) both;
					font-size: clamp(2.75rem, 4.5vw, 4.25rem);
					font-weight: 700;
					color: var(--color-text-primary);
					line-height: 1.0;
					letter-spacing: -0.025em;
					margin: 0 0 1.25rem;
				}
				.login-tagline {
					animation: slide-up 0.7s 0.2s cubic-bezier(0.16,1,0.3,1) both;
					font-size: 0.9375rem;
					color: var(--color-text-secondary);
					line-height: 1.65;
					margin: 0;
					max-width: 260px;
				}
				.login-domain {
					animation: slide-up 0.6s 0.3s cubic-bezier(0.16,1,0.3,1) both;
					font-size: 0.75rem;
					color: var(--color-text-faint);
					margin: 2.5rem 0 0;
					letter-spacing: 0.02em;
				}

				/* Right panel */
				.login-right {
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 3rem 3rem 3rem 4rem;
				}
				.login-right-inner {
					max-width: 360px;
					width: 100%;
				}
				.login-heading {
					animation: slide-up 0.6s 0.15s cubic-bezier(0.16,1,0.3,1) both;
					font-size: 1.1875rem;
					font-weight: 600;
					color: var(--color-text-primary);
					margin: 0 0 0.5rem;
				}
				.login-subtext {
					animation: slide-up 0.6s 0.22s cubic-bezier(0.16,1,0.3,1) both;
					font-size: 0.9375rem;
					color: var(--color-text-secondary);
					line-height: 1.65;
					margin: 0 0 2.75rem;
				}
				.login-form {
					animation: slide-up 0.6s 0.3s cubic-bezier(0.16,1,0.3,1) both;
					display: flex;
					flex-direction: column;
					gap: 2rem;
				}

				/* Underline input */
				.pw-input {
					width: 100%;
					box-sizing: border-box;
					background: none;
					border: none;
					border-bottom: 1.5px solid var(--color-border-secondary);
					outline: none;
					font-size: 1rem;
					color: var(--color-text-primary);
					padding: 0.5rem 0;
					font-family: inherit;
					letter-spacing: 0.04em;
					transition: border-color 200ms ease;
				}
				.pw-input::placeholder { color: var(--color-text-faint); letter-spacing: 0.02em; }
				.pw-input:focus { border-bottom-color: var(--color-accent); }

				/* Continue button */
				.continue-btn {
					background: none;
					border: none;
					padding: 0;
					cursor: pointer;
					font-family: inherit;
					font-size: 0.875rem;
					font-weight: 500;
					letter-spacing: 0.06em;
					text-transform: uppercase;
					color: var(--color-accent);
					display: inline-flex;
					align-items: center;
					gap: 8px;
					transition: gap 200ms ease, opacity 150ms ease;
				}
				.continue-btn:hover:not(:disabled) { gap: 14px; }
				.continue-btn:disabled { opacity: 0.35; cursor: not-allowed; }

				/* Footer */
				.login-footer {
					animation: slide-up 0.6s 0.38s cubic-bezier(0.16,1,0.3,1) both;
					margin-top: 3.5rem;
					padding-top: 1.75rem;
					border-top: 1px solid var(--color-border-primary);
				}
				.login-footer p {
					font-size: 0.8125rem;
					color: var(--color-text-muted);
					margin: 0 0 0.375rem;
				}
				.email-link {
					font-size: 0.875rem;
					color: var(--color-text-secondary);
					text-decoration: none;
					border-bottom: 1px solid var(--color-border-secondary);
					padding-bottom: 1px;
					transition: color 150ms ease, border-color 150ms ease;
				}
				.email-link:hover { color: var(--color-accent); border-color: var(--color-accent); }

				/* Back */
				.back-btn {
					background: none;
					border: none;
					cursor: pointer;
					font-family: inherit;
					font-size: 0.75rem;
					color: var(--color-text-muted);
					padding: 0;
					display: inline-flex;
					align-items: center;
					gap: 5px;
					transition: color 150ms ease;
					letter-spacing: 0.02em;
				}
				.back-btn:hover { color: var(--color-text-secondary); }

				/* Success check */
				.success-check {
					stroke-dasharray: 28;
					stroke-dashoffset: 28;
					animation: check-draw 0.5s 0.2s ease-out forwards;
				}

				/* Mobile */
				@media (max-width: 680px) {
					.login-root { grid-template-columns: 1fr; }
					.login-left {
						border-right: none;
						border-bottom: 1px solid var(--color-border-primary);
						padding: 2.5rem 2rem 2rem;
						gap: 1.5rem;
					}
					.login-domain { display: none; }
					.login-name { font-size: 2.5rem; }
					.login-right { padding: 2.5rem 2rem; }
				}
			`}</style>

			<div className="login-root">
				{/* ── Top bar ── */}
				<div className="login-topbar">
					<button className="back-btn" type="button" onClick={() => navigate(-1)}>
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
							<path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						Back
					</button>
				</div>

				{/* ── Two-column body ── */}
				<div className="login-body">
				{/* ── Left: Identity ── */}
				<div className="login-left">
					<div>
						<p className="login-eyebrow">Portfolio · By invitation</p>
						<h1 className="login-name">Sharon<br />Miller</h1>
						<p className="login-tagline">
							Head of Product Design. Building AI-native teams and designing AI into complex products.
						</p>
						<p className="login-domain">sharonmiller.design</p>
					</div>
				</div>

				{/* ── Right: Form ── */}
				<div className="login-right">
					<div className="login-right-inner">
						{success ? (
							<div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
								<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
									<circle cx="18" cy="18" r="17" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.35"/>
									<path
										className="success-check"
										d="M11 18.5L16 23.5L25 13"
										stroke="var(--color-accent)"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<div>
									<p style={{ fontSize: "1.1875rem", fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 0.375rem" }}>
										You're in.
									</p>
									<p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
										Taking you there now…
									</p>
								</div>
							</div>
						) : (
							<>
								<p className="login-heading">Glad you're here.</p>
								<p className="login-subtext">
									These case studies go deeper than most — real constraints, real tradeoffs, building with AI from scratch.
								</p>

								<form onSubmit={handleSubmit} className="login-form">
									<div>
										<input
											id="password"
											type="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											autoFocus
											autoComplete="current-password"
											required
											placeholder="Enter password"
											className="pw-input"
										/>
										{error && (
											<p style={{ fontSize: "0.8125rem", color: "#dc2626", margin: "0.625rem 0 0" }} role="alert">
												{error}
											</p>
										)}
									</div>

									<button type="submit" disabled={loading} className="continue-btn">
										{loading ? "One moment…" : <>Continue <span aria-hidden>→</span></>}
									</button>
								</form>

								<div className="login-footer">
									<p>Don't have the password?</p>
									<a href="mailto:sharonmillercreative@gmail.com" className="email-link">
										Email Sharon to request access →
									</a>
								</div>
							</>
						)}
					</div>
				</div>
				</div>{/* end login-body */}
			</div>
		</>
	);
}
