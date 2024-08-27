import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const blogToken = request.cookies.get("blogToken")?.value;
  const url = request.nextUrl;

  const isAuthPage = url.pathname.startsWith("/auth");

  const excludedPaths = [
    "/images/",
    "/_next/static/",
    "/_next/image/",
    "/favicon.ico",
  ];

  if (excludedPaths.some((path) => url.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!blogToken) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth).*)"],
};
