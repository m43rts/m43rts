import { SectionBackgroundImage } from "@/components/SectionBackgroundImage";

type HeroSectionProps = {
  id: string;
  children: React.ReactNode;
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
  children,
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
        {children}
      </div>
    </section>
  );
}
