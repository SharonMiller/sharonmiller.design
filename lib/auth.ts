export const AUTH_COOKIE_NAME = "site_auth";

export function getSitePassword(): string | undefined {
	const password = process.env.SITE_PASSWORD;
	return password && password.length > 0 ? password : undefined;
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
