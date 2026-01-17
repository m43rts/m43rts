type ScrollDownButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function ScrollDownButton({ href, label, className }: ScrollDownButtonProps) {
  return (
    <a
      href={href}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition hover:border-black/40 hover:text-black ${className ?? ""}`}
      aria-label={label}
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
  );
}
