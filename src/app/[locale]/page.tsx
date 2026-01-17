import Link from "next/link";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { HeroSection } from "@/components/HeroSection";
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
      <HeroSection
        id="hero"
        hero={content.hero}
        primaryHref="#projects"
        secondaryHref="#contact"
        scrollHref="#cv"
        scrollLabel="Go to cv"
        backgroundImage={{ src: "/face.png", opacityClassName: "opacity-20" }}
      />

      <Section
        id="cv"
        title={content.cv.title}
        nextId="projects"
        backgroundImage={{ src: "/mobile_user.png", opacityClassName: "opacity-20" }}
      >
        <div className="flex flex-col gap-4">
          <p className="text-base leading-7 text-black/80">{content.cv.summary}</p>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-6 text-black/75">
            {content.cv.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="projects" title={content.projects.title} nextId="contact"
        backgroundImage={{ src: "/random_diagram.png", opacityClassName: "opacity-20" }}
      >
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
        <div className="flex h-full flex-col gap-4">
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
          <footer className="mt-auto pt-8 text-xs text-black/50">
            © {new Date().getFullYear()} m43rts — Maxime Aerts.
          </footer>
        </div>
      </Section>
    </div>
  );
}
