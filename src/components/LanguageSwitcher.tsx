"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/siteContent";
import { locales } from "@/content/siteContent";

function buildHref(pathname: string | null, targetLocale: Locale) {
  if (!pathname) return `/${targetLocale}`;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${targetLocale}`;
  segments[0] = targetLocale;
  return `/${segments.join("/")}`;
}

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-black/70">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={buildHref(pathname, locale)}
            className={`transition-colors ${isActive ? "text-black" : "text-black/50 hover:text-black"}`}
            aria-current={isActive ? "page" : undefined}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
