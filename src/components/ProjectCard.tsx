type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-black/5 bg-white p-5 shadow-[0_8px_40px_-28px_rgba(0,0,0,0.35)]">
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-black">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-black/70">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-black/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
