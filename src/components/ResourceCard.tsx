import Link from "next/link";
import ResourceCover from "@/components/ResourceCover";
import type { Resource } from "@/data/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300"
    >
      <ResourceCover
        label={resource.coverLabel}
        accent={resource.accent}
        className="h-20 w-16 shrink-0"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-slate-900">{resource.title}</h3>
        <p className="mt-1 truncate text-sm text-slate-500">
          {resource.subject} · {resource.type}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-slate-400">{resource.summary}</p>
      </div>

      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 group-hover:scale-110 group-hover:border-slate-300 group-hover:text-slate-900">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
