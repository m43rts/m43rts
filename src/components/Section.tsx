import type { ComponentProps } from "react";
import { ScrollDownButton } from "@/components/ScrollDownButton";
import { SectionBackgroundImage } from "@/components/SectionBackgroundImage";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  className?: string;
  nextId?: string;
  backgroundImage?: ComponentProps<typeof SectionBackgroundImage>;
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
  nextId,
  backgroundImage,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-full w-full flex-shrink-0 overflow-hidden border-t border-black/5 bg-white px-6 py-12 md:px-10 md:py-16 ${className ?? ""}`}
    >
      {backgroundImage ? <SectionBackgroundImage {...backgroundImage} /> : null}
      <div className="relative z-10 flex h-full flex-col gap-4">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-black md:text-3xl">
          {title}
        </h2>
        <div className="flex-1 text-base leading-7 text-black/80">{children}</div>
        {nextId ? (
          <ScrollDownButton
            href={`#${nextId}`}
            label={`Go to ${nextId}`}
            className="mx-auto mt-6"
          />
        ) : null}
      </div>
    </section>
  );
}
