import Image from "next/image";

/**
 * A resource's cover thumbnail. Renders the matching image from
 * /public/thumbnails (resolved server-side via getThumbnailSrc) when one
 * exists, falling back to a neutral placeholder with the coverLabel otherwise.
 */
export default function ResourceCover({
  label,
  thumbnailSrc,
  className = "",
  preload = false,
}: {
  label: string;
  thumbnailSrc?: string | null;
  className?: string;
  /** Set for above-the-fold covers (e.g. the resource page hero). */
  preload?: boolean;
}) {
  // Hairline edge so white cover pages don't dissolve into the background.
  const frame = "outline outline-1 -outline-offset-1 outline-neutral-950/10";

  if (thumbnailSrc) {
    return (
      <div className={`relative overflow-hidden bg-neutral-100 ${className}`}>
        <Image
          src={thumbnailSrc}
          alt=""
          fill
          sizes="(min-width: 640px) 176px, 50vw"
          className="object-cover object-top"
          preload={preload}
        />
        <span className={`pointer-events-none absolute inset-0 ${frame}`} />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-neutral-100 text-neutral-400 ${frame} ${className}`}
      aria-hidden
    >
      <span className="font-display text-2xl font-light">{label}</span>
    </div>
  );
}
