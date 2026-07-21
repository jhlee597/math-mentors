import { accentGradient, type Accent } from "@/lib/accent";

/**
 * Placeholder "cover" thumbnail for a resource. Swap this for a real cover
 * image later by rendering an <Image> in its place — everywhere this
 * component is used just needs a coverLabel + accent from the resource data.
 */
export default function ResourceCover({
  label,
  accent,
  className = "",
}: {
  label: string;
  accent: Accent;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br ${accentGradient[accent]} text-white shadow-inner ${className}`}
    >
      <span className="text-sm font-bold tracking-wide opacity-90">{label}</span>
    </div>
  );
}
