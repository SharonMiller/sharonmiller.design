import { FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SAGE = "#7a9e87";
const SAGE_LIGHT = "#e8f0eb";

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
				@keyframes card-in {
					from { opacity: 0; transform: translateY(20px) scale(0.97); }
					to   { opacity: 1; transform: translateY(0)   scale(1); }
				}
				@keyframes fade-up {
					from { opacity: 0; transform: translateY(10px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				@keyframes dot-drift {
					0%, 100% { transform: translateY(0)    scale(1);   opacity: var(--dot-opacity); }
					50%       { transform: translateY(-12px) scale(1.1); opacity: calc(var(--dot-opacity) * 1.6); }
				}
				@keyframes success-pop {
					0%   { transform: scale(0.7); opacity: 0; }
					65%  { transform: scale(1.12); }
					100% { transform: scale(1);   opacity: 1; }
				}
				@keyframes check-draw {
					from { stroke-dashoffset: 24; }
					to   { stroke-dashoffset: 0; }
				}
				.login-card     { animation: card-in  0.55s cubic-bezier(0.16,1,0.3,1) both; }
				.login-heading  { animation: fade-up  0.5s  0.10s cubic-bezier(0.16,1,0.3,1) both; }
				.login-form     { animation: fade-up  0.5s  0.22s cubic-bezier(0.16,1,0.3,1) both; }
				.login-footer   { animation: fade-up  0.5s  0.34s cubic-bezier(0.16,1,0.3,1) both; }
				.success-icon   { animation: success-pop 0.45s cubic-bezier(0.16,1,0.3,1) both; }
				.success-check  {
					stroke-dasharray: 24;
					stroke-dashoffset: 24;
					animation: check-draw 0.4s 0.35s ease-out forwards;
				}
				.login-input:focus { border-color: ${SAGE} !important; box-shadow: 0 0 0 3px ${SAGE_LIGHT}; }
				.back-btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 5px; font-size: 0.8125rem; color: #a8a29e; padding: 0; transition: color 150ms ease; font-family: inherit; }
				.back-btn:hover { color: #57534e; }
				.email-link { font-size: 0.9375rem; font-weight: 600; color: #57534e; text-decoration: underline; text-underline-offset: 3px; transition: color 150ms ease; }
				.email-link:hover { color: ${SAGE}; }
				.submit-btn { width: 100%; padding: 0.6875rem 1rem; border-radius: 10px; border: none; background: ${SAGE}; color: #fff; font-size: 0.9375rem; font-weight: 500; cursor: pointer; transition: opacity 150ms ease, transform 100ms ease; font-family: inherit; }
				.submit-btn:hover:not(:disabled) { opacity: 0.92; transform: translateY(-1px); }
				.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
			`}</style>

			<div style={{
				minHeight: "100vh",
				background: "#fafaf9",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "1.5rem",
				position: "relative",
				overflow: "hidden",
			}}>
				{/* Floating background dots */}
				{[
					{ top: "16%",  left: "10%",  size: 10, opacity: 0.16, delay: "0s",    dur: "3.2s" },
					{ top: "26%",  right: "13%", size: 7,  opacity: 0.20, delay: "0.7s",  dur: "2.9s" },
					{ bottom:"28%",left: "18%",  size: 8,  opacity: 0.14, delay: "1.3s",  dur: "3.6s" },
					{ bottom:"18%",right:"16%",  size: 12, opacity: 0.10, delay: "1.9s",  dur: "4.0s" },
					{ top: "58%",  left: "7%",   size: 5,  opacity: 0.18, delay: "0.4s",  dur: "3.4s" },
					{ top: "72%",  right:"9%",   size: 6,  opacity: 0.12, delay: "2.2s",  dur: "3.8s" },
				].map((dot, i) => (
					<div
						key={i}
						style={{
							position: "absolute",
							...{ top: dot.top, left: (dot as any).left, right: (dot as any).right, bottom: (dot as any).bottom },
							width: dot.size,
							height: dot.size,
							borderRadius: "50%",
							background: SAGE,
							["--dot-opacity" as string]: dot.opacity,
							opacity: dot.opacity,
							pointerEvents: "none",
							animation: `dot-drift ${dot.dur} ${dot.delay} ease-in-out infinite`,
						}}
					/>
				))}

				{/* Back */}
				<div style={{ width: "100%", maxWidth: 420, marginBottom: "1rem" }}>
					<button className="back-btn" type="button" onClick={() => navigate(-1)}>
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
							<path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						Back
					</button>
				</div>

				{/* Card */}
				<div className="login-card" style={{
					width: "100%",
					maxWidth: 420,
					background: "#ffffff",
					borderRadius: 20,
					border: "1px solid #e7e5e4",
					boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
					padding: "2.25rem 2rem",
				}}>
					{success ? (
						<div style={{ textAlign: "center", padding: "1.25rem 0" }}>
							<div className="success-icon" style={{
								width: 52,
								height: 52,
								borderRadius: "50%",
								background: SAGE_LIGHT,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								margin: "0 auto 1.25rem",
							}}>
								<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
									<path
										className="success-check"
										d="M5 11.5L9 15.5L17 7"
										stroke={SAGE}
										strokeWidth="2.2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1c1917", margin: "0 0 0.4rem" }}>
								You're in.
							</p>
							<p style={{ fontSize: "0.875rem", color: "#a8a29e", margin: 0 }}>
								Taking you there now…
							</p>
						</div>
					) : (
						<>
							<div className="login-heading" style={{ marginBottom: "1.5rem" }}>
								<p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: SAGE, margin: "0 0 0.625rem" }}>
									VSCO case studies
								</p>
								<h1 style={{ fontSize: "1.4375rem", fontWeight: 700, color: "#1c1917", lineHeight: 1.25, margin: "0 0 0.75rem" }}>
									Glad you're here.
								</h1>
								<p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "#78716c", margin: 0 }}>
									These go deeper than most portfolios — real constraints, real tradeoffs, building with AI from scratch. Worth a closer read.
								</p>
							</div>

							<form onSubmit={handleSubmit} className="login-form" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
								<div>
									<label htmlFor="password" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 500, color: "#57534e", marginBottom: "0.5rem" }}>
										Password
									</label>
									<input
										id="password"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										autoFocus
										autoComplete="current-password"
										required
										className="login-input"
										style={{
											width: "100%",
											boxSizing: "border-box",
											borderRadius: 10,
											border: "1.5px solid #e7e5e4",
											padding: "0.625rem 0.875rem",
											fontSize: "0.9375rem",
											color: "#1c1917",
											background: "#fff",
											outline: "none",
											transition: "border-color 150ms ease, box-shadow 150ms ease",
										}}
									/>
								</div>

								{error && (
									<p style={{ fontSize: "0.8125rem", color: "#dc2626", margin: 0 }} role="alert">
										{error}
									</p>
								)}

								<button type="submit" disabled={loading} className="submit-btn">
									{loading ? "One moment…" : "Continue →"}
								</button>
							</form>
						</>
					)}
				</div>

				{/* Email CTA */}
				{!success && (
					<div className="login-footer" style={{ marginTop: "1.75rem", textAlign: "left", width: "100%", maxWidth: 420 }}>
						<p style={{ fontSize: "0.8125rem", color: "#a8a29e", margin: "0 0 0.3rem" }}>
							Don't have the password?
						</p>
						<a
							href="mailto:sharonmillercreative@gmail.com"
							className="email-link"
						>
							Email Sharon to request access →
						</a>
					</div>
				)}
			</div>
		</>
	);
}
