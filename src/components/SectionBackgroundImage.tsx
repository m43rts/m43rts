import Image from "next/image";
import type { CSSProperties } from "react";

type SectionBackgroundImageProps = {
  src: string;
  fit?: "contain" | "cover";
  opacityClassName?: string;
  className?: string;
  /**
   * Optional aspect ratio override for the image container (e.g. "1024 / 1673").
   * Defaults to the native aspect ratio of face.png (portrait).
   */
  aspectRatio?: string;
};

/**
 * Decorative background image anchored to the right side of a section with a
 * left-to-right fade into the base background color.
 */
export function SectionBackgroundImage({
  src,
  fit = "contain",
  opacityClassName,
  className,
  aspectRatio,
}: SectionBackgroundImageProps) {
  const containerClassName = `pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className ?? ""}`;
  const imageClassName = `${opacityClassName ?? "opacity-100"} ${fit === "cover" ? "object-cover" : "object-contain"}`;

  const maskStyle: CSSProperties = {
    maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
    objectPosition: "right center",
  };

  const wrapperStyle: CSSProperties = {
    aspectRatio: aspectRatio ?? "1024 / 1673",
  };

  return (
    <div className={containerClassName} aria-hidden>
      <div className="absolute inset-0 flex items-stretch justify-end">
        <div className="relative h-full" style={wrapperStyle}>
          <Image
            src={src}
            alt=""
            fill
            priority
            sizes="50vw"
            className={imageClassName}
            style={maskStyle}
          />
        </div>
      </div>
    </div>
  );
}
