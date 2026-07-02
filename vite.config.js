import crypto from "node:crypto";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

/** Mirrors api/auth.ts for local `npm run dev` (Vercel serves it in production). */
function devAuthPlugin(sitePassword) {
	return {
		name: "dev-auth",
		configureServer(server) {
			server.middlewares.use("/api/auth", (req, res) => {
				if (req.method !== "POST") {
					res.statusCode = 405;
					res.end("Method not allowed");
					return;
				}

				if (!sitePassword) {
					res.setHeader("Content-Type", "application/json");
					res.statusCode = 503;
					res.end(JSON.stringify({ error: "Password protection is not configured" }));
					return;
				}

				let body = "";
				req.on("data", (chunk) => {
					body += chunk;
				});
				req.on("end", () => {
					try {
						const { password } = JSON.parse(body);
						if (password !== sitePassword) {
							res.setHeader("Content-Type", "application/json");
							res.statusCode = 401;
							res.end(JSON.stringify({ error: "Incorrect password" }));
							return;
						}

						const token = crypto
							.createHash("sha256")
							.update(`site-auth:${sitePassword}`)
							.digest("hex");

						res.setHeader("Content-Type", "application/json");
						res.setHeader("Set-Cookie", [
							`site_auth=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`,
							`site_auth_client=1; Path=/; SameSite=Lax; Max-Age=31536000`,
						]);
						res.statusCode = 200;
						res.end(JSON.stringify({ ok: true }));
					} catch {
						res.setHeader("Content-Type", "application/json");
						res.statusCode = 400;
						res.end(JSON.stringify({ error: "Invalid request body" }));
					}
				});
			});
		},
	};
}

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [react(), devAuthPlugin(env.SITE_PASSWORD)],
	};
});
