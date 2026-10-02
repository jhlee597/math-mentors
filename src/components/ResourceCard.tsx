import Link from "next/link";
import ResourceCover from "@/components/ResourceCover";
import { ArrowRight } from "@/components/icons";
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
      className="group flex items-start gap-5 border-t border-neutral-200 pt-5"
    >
      <ResourceCover
        label={resource.coverLabel}
        thumbnailSrc={thumbnailSrc}
        className="h-20 w-16 shrink-0"
      />

      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] leading-snug text-neutral-900 decoration-neutral-400 group-hover:underline">
          {resource.title}
        </h3>
        <p className="mt-1 truncate text-[11px] text-neutral-400">
          {resource.subject} &middot; {resource.type}
        </p>
        <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-neutral-500">
          {resource.summary}
        </p>
      </div>

      <ArrowRight className="mt-1 h-4 w-4 text-neutral-300 transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:text-neutral-900" />
    </Link>
  );
}
