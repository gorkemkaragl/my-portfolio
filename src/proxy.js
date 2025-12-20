import { NextResponse } from "next/server";
import { i18n } from "../i18n";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Admin paneli hariç
  if (pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Next.js internal, API ve static dosyalar
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = i18n.locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // Locale yoksa default locale'e yönlendir
  if (!hasLocale) {
    const locale = i18n.defaultLocale;

    return NextResponse.redirect(
      new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
