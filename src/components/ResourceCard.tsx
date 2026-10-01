import Link from "next/link";
import ResourceCover from "@/components/ResourceCover";
import type { Resource } from "@/data/resources";

export default function ResourceCard({
  resource,
  thumbnailSrc,
}: {
  resource: Resource;
  thumbnailSrc?: string | null;
}) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex items-start gap-5 border-t border-stone-200 pt-5"
    >
      <ResourceCover
        label={resource.coverLabel}
        thumbnailSrc={thumbnailSrc}
        className="h-20 w-16 shrink-0"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] text-stone-400">
          {resource.subject} &middot; {resource.type}
        </p>
        <h3 className="mt-1 truncate text-[15px] text-stone-900 group-hover:underline group-hover:underline-offset-4">
          {resource.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-stone-500">
          {resource.summary}
        </p>
      </div>

      <span
        aria-hidden
        className="shrink-0 pt-5 text-sm text-stone-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-stone-900"
      >
        &rarr;
      </span>
    </Link>
  );
}
