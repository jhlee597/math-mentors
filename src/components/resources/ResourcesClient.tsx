"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Cover from "@/components/series/Cover";
import BlankVolume from "@/components/series/BlankVolume";
import VolumeNumber from "@/components/series/VolumeNumber";
import { Search } from "@/components/icons";
import {
  RESOURCE_TYPES,
  SUBJECTS,
  getTopics,
  getVolumeNumber,
  resources,
} from "@/data/resources";

const ALL = "All";

export default function ResourcesClient() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState(params.get("q") ?? "");
  const subjectParam = params.get("subject");
  const typeParam = params.get("type");
  const subject = SUBJECTS.includes(subjectParam as never) ? subjectParam! : ALL;
  const type = RESOURCE_TYPES.includes(typeParam as never) ? typeParam! : ALL;

  // Filters live in the URL so a filtered view can be shared and the back button works.
  function setParam(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value === ALL || value === "") next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  function clearAll() {
    setQuery("");
    router.replace(pathname, { scroll: false });
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources
      .filter((r) => subject === ALL || r.subject === subject)
      .filter((r) => type === ALL || r.type === type)
      .filter(
        (r) =>
          q === "" ||
          [r.title, r.summary, r.subject, r.type, ...getTopics(r)].some((field) => field.toLowerCase().includes(q))
      )
      .sort((a, b) => getVolumeNumber(a) - getVolumeNumber(b));
  }, [query, subject, type]);

  const filtering = query.trim() !== "" || subject !== ALL || type !== ALL;

  return (
    <div className="mt-10">
      <div className="flex max-w-2xl border-2 border-ink bg-white">
        <Search className="ml-4 h-5 w-5 self-center text-neutral-500" />
        <input
          type="search"
          aria-label="Search the guides"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setParam("q", e.target.value.trim());
          }}
          placeholder="Search titles, subjects, and topics"
          className="min-h-13 min-w-0 flex-1 bg-transparent px-3 text-base text-ink placeholder:text-neutral-500 focus:outline-none"
        />
      </div>

      <div className="mt-8 grid gap-5 border-y-2 border-ink py-5">
        <FilterRow label="Subject" options={[ALL, ...SUBJECTS]} value={subject} onChange={(v) => setParam("subject", v)} />
        <FilterRow label="Type" options={[ALL, ...RESOURCE_TYPES]} value={type} onChange={(v) => setParam("type", v)} />
      </div>

      <div className="mt-5 flex min-h-8 items-center justify-between text-sm text-neutral-600" aria-live="polite">
        <span>
          {filtered.length} {filtered.length === 1 ? "volume" : "volumes"}
          {filtering && " match"}
        </span>
        {filtering && (
          <button type="button" onClick={clearAll} className="min-h-8 font-medium text-ink underline decoration-neutral-400 hover:decoration-current">
            Clear filters
          </button>
        )}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((resource) => (
          <li key={resource.slug}>
            <Link href={`/resources/${resource.slug}`} className="group block">
              <Cover
                resource={resource}
                className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5"
              />
              <h2 className="mt-4 text-lg font-bold leading-snug tracking-[-0.02em] text-ink group-hover:underline">
                {resource.title}
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                <VolumeNumber n={getVolumeNumber(resource)} /> &middot; {resource.subject} &middot; {resource.type}
              </p>
            </Link>
          </li>
        ))}
        {filtered.length > 0 && !filtering && (
          <li>
            <BlankVolume />
          </li>
        )}
      </ul>

      {filtered.length === 0 && (
        <div className="grid gap-8 py-6 sm:grid-cols-[1fr_14rem] sm:items-start">
          <div>
            <p className="title-set text-[clamp(2rem,4vw,3rem)] text-ink">
              {subject !== ALL && query.trim() === "" && type === ALL
                ? `No ${subject} volume yet.`
                : "Nothing matches that."}
            </p>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-neutral-600">
              {subject !== ALL && query.trim() === "" && type === ALL
                ? "The series is still growing. If you know this subject well, you could write the first one."
                : "Try a broader word, or clear the filters to see every guide."}
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-5 min-h-8 text-sm font-medium text-ink underline decoration-neutral-400 hover:decoration-current"
            >
              Show every guide
            </button>
          </div>
          <BlankVolume className="max-w-56" />
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div role="group" aria-label={`Filter by ${label.toLowerCase()}`} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
      <span className="w-16 shrink-0 text-sm font-semibold text-ink">{label}</span>
      <div className="flex flex-wrap gap-x-1 gap-y-1">
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option)}
              className={`min-h-9 px-2.5 text-sm transition-colors ${
                active ? "bg-ink font-semibold text-paper" : "text-neutral-600 hover:bg-neutral-200 hover:text-ink"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
