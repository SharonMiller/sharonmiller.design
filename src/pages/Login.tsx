import { FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/lumen/Button.jsx";

export default function Login() {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
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
				navigate(returnTo, { replace: true });
				return;
			}

			const data = (await response.json().catch(() => ({}))) as {
				error?: string;
			};
			setError(data.error || "Incorrect password");
		} catch {
			setError("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
			<div className="w-full max-w-sm rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
				<h1 className="mb-2 text-2xl font-semibold tracking-tight text-stone-900">
					Protected preview
				</h1>
				<p className="mb-6 text-sm text-stone-600">
					Enter the site password to continue.
				</p>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="password"
							className="mb-1.5 block text-sm font-medium text-stone-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							autoComplete="current-password"
							required
							className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
						/>
					</div>

					{error ? (
						<p className="text-sm text-red-600" role="alert">
							{error}
						</p>
					) : null}

					<Button type="submit" disabled={loading} className="w-full justify-center">
						{loading ? "Checking…" : "Continue"}
					</Button>
				</form>
			</div>
		</div>
	);
}
