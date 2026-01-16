import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/content/siteContent";

function matchLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (acceptLanguage.includes("fr")) return "fr";
  if (acceptLanguage.includes("en")) return "en";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next internals and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.[^/]+$/)
  ) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/").filter(Boolean)[0];
  if (locales.includes(pathLocale as (typeof locales)[number])) {
    return NextResponse.next();
  }

  const locale = matchLocale(request);
  const redirectURL = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(redirectURL);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
