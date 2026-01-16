import Link from "next/link";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { defaultLocale, getSiteContent, type Locale } from "@/content/siteContent";

type PageParams = { locale: Locale };

type PageProps = {
  params: Promise<PageParams>;
};

export default async function LocaleHome({ params }: PageProps) {
  const locale = (await params).locale ?? defaultLocale;
  const content = getSiteContent(locale);

  return (
    <div className="flex min-h-full flex-col">
      <section
        id="hero"
        className="relative flex min-h-full w-full flex-shrink-0 flex-col gap-6 px-6 pb-16 pt-4 md:px-10 md:pb-20 md:pt-6"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-black/60">
          {content.hero.eyebrow}
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
            {content.hero.title}
          </h1>
          <p className="max-w-3xl text-lg leading-7 text-black/70">
            {content.hero.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-black/80 bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black/85"
          >
            {content.hero.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-black transition-colors hover:border-black/40"
          >
            {content.hero.secondaryCta}
          </a>
        </div>
        <a
          href="#cv"
          className="mt-auto flex h-10 w-10 items-center justify-center self-center rounded-full border border-black/15 text-black/60 transition hover:border-black/40 hover:text-black"
          aria-label="Go to cv"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      <Section id="cv" title={content.cv.title} nextId="projects">
        <div className="flex flex-col gap-4">
          <p className="text-base leading-7 text-black/80">{content.cv.summary}</p>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-6 text-black/75">
            {content.cv.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="projects" title={content.projects.title} nextId="contact">
        <div className="grid gap-4 md:grid-cols-2">
          {content.projects.items.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </Section>

      <Section id="contact" title={content.contact.title}>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`mailto:${content.contact.email}`}
            className="inline-flex items-center justify-center rounded-full border border-black/80 bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/85"
          >
            {content.contact.emailLabel}
          </Link>
          <CopyEmailButton
            email={content.contact.email}
            label={content.contact.copyLabel}
            copiedLabel={content.contact.copiedLabel}
          />
          <span className="text-sm text-black/60">{content.contact.email}</span>
        </div>
      </Section>
    </div>
  );
}
