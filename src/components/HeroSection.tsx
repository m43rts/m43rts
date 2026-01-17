import { ScrollDownButton } from "@/components/ScrollDownButton";
import { SectionBackgroundImage } from "@/components/SectionBackgroundImage";

type HeroSectionProps = {
  id: string;
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  primaryHref: string;
  secondaryHref: string;
  scrollHref: string;
  scrollLabel: string;
  backgroundImage?: {
    src: string;
    opacityClassName?: string;
    fit?: "contain" | "cover";
    className?: string;
    aspectRatio?: string;
  };
  className?: string;
  contentClassName?: string;
};

export function HeroSection({
  id,
  hero,
  primaryHref,
  secondaryHref,
  scrollHref,
  scrollLabel,
  backgroundImage,
  className,
  contentClassName,
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-full w-full flex-shrink-0 flex-col gap-6 overflow-hidden bg-white px-6 pb-16 pt-4 md:px-10 md:pb-20 md:pt-6 ${className ?? ""}`}
    >
      {backgroundImage ? (
        <SectionBackgroundImage
          src={backgroundImage.src}
          opacityClassName={backgroundImage.opacityClassName}
          fit={backgroundImage.fit}
          className={backgroundImage.className}
          aspectRatio={backgroundImage.aspectRatio}
        />
      ) : null}
      <div
        className={`relative z-10 flex min-h-full flex-1 flex-col gap-6 md:pr-60 sm:pr-20 ${contentClassName ?? ""}`}
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
            {hero.title}
          </h1>
          <p className="max-w-3xl text-lg leading-7 text-black/70">
            {hero.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full border border-black/80 bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-black/85"
          >
            {hero.primaryCta}
          </a>
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-black transition-colors hover:border-black/40"
          >
            {hero.secondaryCta}
          </a>
        </div>
        <ScrollDownButton
          href={scrollHref}
          label={scrollLabel}
          className="mt-auto self-center"
        />
      </div>
    </section>
  );
}
