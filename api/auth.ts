import {
	buildAuthCookie,
	buildClientAuthCookie,
	createAuthToken,
	getSitePasswords,
} from "../lib/auth";

export const config = {
	runtime: "edge",
};

export default async function handler(request: Request): Promise<Response> {
	if (request.method !== "POST") {
		return new Response("Method not allowed", { status: 405 });
	}

	const sitePasswords = getSitePasswords();
	if (sitePasswords.length === 0) {
		return Response.json(
			{ error: "Password protection is not configured" },
			{ status: 503 },
		);
	}

	let password = "";
	try {
		const body = (await request.json()) as { password?: string };
		password = body.password ?? "";
	} catch {
		return Response.json({ error: "Invalid request body" }, { status: 400 });
	}

	const matchedPassword = sitePasswords.find((p) => p === password);
	if (!matchedPassword) {
		return Response.json({ error: "Incorrect password" }, { status: 401 });
	}

	// Always token against the first password so middleware only needs one expected token
	const token = await createAuthToken(sitePasswords[0]);
	const headers = new Headers({ "Content-Type": "application/json" });
	// HttpOnly cookie — validated by edge middleware on server
	headers.append("Set-Cookie", buildAuthCookie(token));
	// JS-readable companion cookie — lets client-side routing gate gated case studies
	headers.append("Set-Cookie", buildClientAuthCookie());

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers,
	});
}
