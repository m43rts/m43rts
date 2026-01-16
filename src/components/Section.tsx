type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-black/5 bg-white px-6 py-12 md:px-10 md:py-16 ${className ?? ""}`}
    >
      <div className="flex flex-col gap-4">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-black md:text-3xl">
          {title}
        </h2>
        <div className="text-base leading-7 text-black/80">{children}</div>
      </div>
    </section>
  );
}
