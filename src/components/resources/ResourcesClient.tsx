"use client";

import { useMemo, useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import { resources, SUBJECTS, RESOURCE_TYPES } from "@/data/resources";

const ALL_SUBJECTS = "All Subjects";
const ALL_TYPES = "All Types";

export default function ResourcesClient() {
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
          <svg
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full rounded-xl border border-slate-200 bg-surface py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600/50 focus:outline-none"
          />
        </div>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="rounded-xl border border-slate-200 bg-surface px-4 py-3 text-slate-900 focus:border-blue-600/50 focus:outline-none"
        >
          <option>{ALL_SUBJECTS}</option>
          {SUBJECTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-xl border border-slate-200 bg-surface px-4 py-3 text-slate-900 focus:border-blue-600/50 focus:outline-none"
        >
          <option>{ALL_TYPES}</option>
          {RESOURCE_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        {filtered.length} resource{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-slate-400">
          No resources match your search. Try a different keyword or filter.
        </div>
      )}
    </div>
  );
}
