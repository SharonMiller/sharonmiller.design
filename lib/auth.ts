export const AUTH_COOKIE_NAME = "site_auth";

export function getSitePassword(): string | undefined {
	const password = process.env.SITE_PASSWORD;
	return password && password.length > 0 ? password : undefined;
}

/** Returns all valid passwords (supports comma-separated list in SITE_PASSWORD). */
export function getSitePasswords(): string[] {
	const raw = process.env.SITE_PASSWORD;
	if (!raw || raw.length === 0) return [];
	return raw.split(",").map((p: string) => p.trim()).filter(Boolean);
}

export async function createAuthToken(password: string): Promise<string> {
	const data = new TextEncoder().encode(`site-auth:${password}`);
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	return Array.from(new Uint8Array(hashBuffer))
		.map((byte) => byte.toString(16).padStart(2, "0"))
		.join("");
}

export function buildAuthCookie(token: string): string {
	const secure = process.env.VERCEL === "1" ? "; Secure" : "";
	return `${AUTH_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000${secure}`;
}

/** JS-readable companion cookie — lets client-side code know the user authenticated.
 *  Not HttpOnly intentionally; actual auth validation stays server-side. */
export function buildClientAuthCookie(): string {
	const secure = process.env.VERCEL === "1" ? "; Secure" : "";
	return `site_auth_client=1; Path=/; SameSite=Lax; Max-Age=31536000${secure}`;
}
