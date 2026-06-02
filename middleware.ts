import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, createAuthToken, getSitePassword } from "./lib/auth";

const STATIC_PATH =
	/^\/(assets|images)\/|\.(ico|png|jpg|jpeg|gif|svg|webp|css|js|woff2?|txt|xml|json|map)$/;

export async function middleware(request: NextRequest) {
	const sitePassword = getSitePassword();
	if (!sitePassword) {
		return NextResponse.next();
	}

	const { pathname } = request.nextUrl;

	if (pathname === "/login" || pathname.startsWith("/api/auth")) {
		return NextResponse.next();
	}

	if (STATIC_PATH.test(pathname)) {
		return NextResponse.next();
	}

	const cookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
	const expectedToken = await createAuthToken(sitePassword);

	if (cookie === expectedToken) {
		return NextResponse.next();
	}

	const loginUrl = new URL("/login", request.url);
	if (pathname !== "/") {
		loginUrl.searchParams.set("returnTo", pathname);
	}

	return NextResponse.redirect(loginUrl);
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
