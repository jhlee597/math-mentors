import Image from "next/image";
import { accentGradient, type Accent } from "@/lib/accent";

/**
 * A resource's cover thumbnail. Renders the matching image from
 * /public/thumbnails (resolved server-side via getThumbnailSrc) when one
 * exists, falling back to a gradient placeholder with the coverLabel otherwise.
 */
export default function ResourceCover({
  label,
  accent,
  thumbnailSrc,
  className = "",
}: {
  label: string;
  accent: Accent;
  thumbnailSrc?: string | null;
  className?: string;
}) {
  if (thumbnailSrc) {
    return (
      <div
        className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${accentGradient[accent]} shadow-inner ${className}`}
      >
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
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br ${accentGradient[accent]} text-white shadow-inner ${className}`}
    >
      <span className="text-sm font-bold tracking-wide opacity-90">{label}</span>
    </div>
  );
}
