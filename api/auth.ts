import {
	buildAuthCookie,
	createAuthToken,
	getSitePassword,
} from "../lib/auth";

export const config = {
	runtime: "edge",
};

export default async function handler(request: Request): Promise<Response> {
	if (request.method !== "POST") {
		return new Response("Method not allowed", { status: 405 });
	}

	const sitePassword = getSitePassword();
	if (!sitePassword) {
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

	if (password !== sitePassword) {
		return Response.json({ error: "Incorrect password" }, { status: 401 });
	}

	const token = await createAuthToken(sitePassword);
	const headers = new Headers({ "Content-Type": "application/json" });
	headers.set("Set-Cookie", buildAuthCookie(token));

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers,
	});
}
