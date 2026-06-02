import { next } from "@vercel/functions";
import { AUTH_COOKIE_NAME, createAuthToken, getSitePassword } from "./lib/auth";

const STATIC_PATH =
	/^\/(assets|images)\/|\.(ico|png|jpg|jpeg|gif|svg|webp|css|js|woff2?|txt|xml|json|map)$/;

function getCookie(request: Request, name: string): string | undefined {
	const cookieHeader = request.headers.get("cookie");
	if (!cookieHeader) {
		return undefined;
	}

	const match = cookieHeader.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return match ? decodeURIComponent(match[1]) : undefined;
}

export default async function middleware(request: Request) {
	const sitePassword = getSitePassword();
	if (!sitePassword) {
		return next();
	}

	const { pathname } = new URL(request.url);

	if (pathname === "/login" || pathname.startsWith("/api/auth")) {
		return next();
	}

	if (STATIC_PATH.test(pathname)) {
		return next();
	}

	const cookie = getCookie(request, AUTH_COOKIE_NAME);
	const expectedToken = await createAuthToken(sitePassword);

	if (cookie === expectedToken) {
		return next();
	}

	const loginUrl = new URL("/login", request.url);
	if (pathname !== "/") {
		loginUrl.searchParams.set("returnTo", pathname);
	}

	return Response.redirect(loginUrl, 307);
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
