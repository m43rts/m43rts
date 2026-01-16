import type { Metadata } from "next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { defaultLocale, getSiteContent, type Locale } from "@/content/siteContent";

type LayoutParams = { locale: Locale };

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const locale = (await params).locale ?? defaultLocale;
  const { title, description } = getSiteContent(locale).metadata;

  return {
    title,
    description,
    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const locale = (await params).locale ?? defaultLocale;

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col bg-white text-black">
      <header className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <span className="font-heading sm:text-8xl text-6xl font-semibold tracking-tight -ml-[0.06em] sm:-ml-[0.07em]">
          m43rts
        </span>
        <div className="self-start">
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-6 pb-10 pt-6 text-xs text-black/50 md:px-10">
        © {new Date().getFullYear()} m43rts — Maxime Aerts.
      </footer>
    </div>
  );
}
