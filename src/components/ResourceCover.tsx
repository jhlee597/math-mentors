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
}: {
  label: string;
  thumbnailSrc?: string | null;
  className?: string;
}) {
  if (thumbnailSrc) {
    return (
      <div className={`relative overflow-hidden rounded-sm bg-stone-200 ${className}`}>
        <Image
          src={thumbnailSrc}
          alt={label}
          fill
          sizes="200px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-sm bg-stone-200 text-stone-500 ${className}`}
    >
      <span className="font-display text-2xl">{label}</span>
    </div>
  );
}
