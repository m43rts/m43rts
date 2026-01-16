type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  className?: string;
  nextId?: string;
};

export function Section({ id, title, eyebrow, children, className, nextId }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-full w-full flex-shrink-0 border-t border-black/5 bg-white px-6 py-12 md:px-10 md:py-16 ${className ?? ""}`}
    >
      <div className="flex h-full flex-col gap-4">
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
          <a
            href={`#${nextId}`}
            className="mx-auto mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition hover:border-black/40 hover:text-black"
            aria-label={`Go to ${nextId}`}
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
        ) : null}
      </div>
    </section>
  );
}
