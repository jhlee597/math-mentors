"use client";

import { useMemo, useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import { Search } from "@/components/icons";
import { resources, SUBJECTS, RESOURCE_TYPES } from "@/data/resources";

const ALL_SUBJECTS = "All Subjects";
const ALL_TYPES = "All Types";

export default function ResourcesClient({
  thumbnails,
}: {
  thumbnails: Record<string, string | null>;
}) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState<string>(ALL_SUBJECTS);
  const [type, setType] = useState<string>(ALL_TYPES);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return resources
      .filter((r) => (subject === ALL_SUBJECTS ? true : r.subject === subject))
      .filter((r) => (type === ALL_TYPES ? true : r.type === type))
      .filter((r) =>
        q === ""
          ? true
          : r.title.toLowerCase().includes(q) ||
            r.summary.toLowerCase().includes(q) ||
            r.subject.toLowerCase().includes(q)
      )
      .sort((a, b) => (a.dateAdded < b.dateAdded ? 1 : -1));
  }, [query, subject, type]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="search"
            aria-label="Search resources"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, subject, or topic"
            className="w-full border border-neutral-200 bg-surface py-3 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
          />
        </div>

        <select
          value={subject}
          aria-label="Filter by subject"
          onChange={(e) => setSubject(e.target.value)}
          className="border border-neutral-200 bg-surface px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
        >
          <option>{ALL_SUBJECTS}</option>
          {SUBJECTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          value={type}
          aria-label="Filter by type"
          onChange={(e) => setType(e.target.value)}
          className="border border-neutral-200 bg-surface px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
        >
          <option>{ALL_TYPES}</option>
          {RESOURCE_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <p className="figures mt-6 text-[12px] text-neutral-500" aria-live="polite">
        {filtered.length} resource{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {filtered.map((resource) => (
          <ResourceCard
            key={resource.slug}
            resource={resource}
            thumbnailSrc={thumbnails[resource.slug]}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-900">No resources match your search.</p>
          <p className="mt-1.5 text-[13px] text-neutral-500">
            Try a different keyword, or{" "}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSubject(ALL_SUBJECTS);
                setType(ALL_TYPES);
              }}
              className="text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900"
            >
              clear all filters
            </button>
            .
          </p>
        </div>
      )}
    </div>
  );
}
