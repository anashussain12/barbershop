import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ✅ Allow the restricted page itself
  if (pathname === "/restricted") return NextResponse.next();

  // ✅ Allow Next internals + static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/public")
  ) {
    return NextResponse.next();
  }

  // 🔁 Redirect everything else
  return NextResponse.redirect(new URL("/restricted", request.url));
}

export const config = {
  matcher: "/:path*",
};
