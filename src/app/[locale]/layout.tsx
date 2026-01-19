import type { Metadata } from "next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getSiteContent, resolveLocale } from "@/content/siteContent";

type LayoutParams = { locale: string };

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { title, description } = getSiteContent(resolvedLocale).metadata;

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
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const content = getSiteContent(resolvedLocale);

  return (
    <div className="mx-auto flex h-[100svh] max-w-5xl flex-col bg-white text-black">
      <header className="flex shrink-0 items-center justify-between px-6 py-4 md:px-10 md:py-6">
        <div className="flex flex-col gap-1">
          <span className="font-heading text-6xl font-semibold leading-none tracking-tight sm:text-8xl -ml-[0.06em] sm:-ml-[0.07em]">
            m43rts
          </span>
          <span className="text-xs uppercase leading-none tracking-[0.2em] text-black/60">
            {content.header.subtitle}
          </span>
        </div>
        <div className="self-start">
          <LanguageSwitcher currentLocale={resolvedLocale} />
        </div>
      </header>
      <main className="relative flex flex-1 min-h-0 flex-col overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
