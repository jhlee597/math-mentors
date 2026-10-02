import Link from "next/link";
import Volume from "@/components/series/Volume";
import BlankVolume from "@/components/series/BlankVolume";
import { Search } from "@/components/icons";
import { SUBJECTS, getSeries, resources } from "@/data/resources";
import { site } from "@/data/site";

export default function Hero() {
  const newest = getSeries().at(-1);
  const counts = Object.fromEntries(SUBJECTS.map((s) => [s, resources.filter((r) => r.subject === s).length]));

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
      <div>
        <h1 className="title-set text-balance text-[clamp(3rem,7.4vw,6.25rem)] text-ink">
          Free math guides, written by students.
        </h1>
        <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-neutral-600">{site.hook}</p>

        <form action="/resources" role="search" className="mt-9 flex max-w-xl border-2 border-ink bg-white">
          <label htmlFor="hero-search" className="sr-only">
            Search the guides
          </label>
          <Search className="ml-4 h-5 w-5 self-center text-neutral-500" />
          <input
            id="hero-search"
            name="q"
            type="search"
            placeholder="Find a topic"
            className="min-h-13 min-w-0 flex-1 bg-transparent px-3 text-base text-ink placeholder:text-neutral-500 focus:outline-none"
          />
          <button type="submit" className="bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:bg-neutral-700">
            Search
          </button>
        </form>

        <nav aria-label="Browse by subject" className="mt-8 max-w-xl">
          <p className="text-sm font-semibold text-ink">Or browse by subject</p>
          <ul className="mt-2 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {SUBJECTS.map((subject) => (
              <li key={subject}>
                <Link
                  href={`/resources?subject=${encodeURIComponent(subject)}`}
                  className={`group flex min-h-10 items-end gap-2 pb-2 text-[15px] transition-colors ${
                    counts[subject] ? "text-ink" : "text-neutral-500 hover:text-ink"
                  }`}
                >
                  <span className="group-hover:underline">{subject}</span>
                  <span aria-hidden className="mb-[0.3em] flex-1 border-b border-dotted border-neutral-400" />
                  <span className="text-sm">{counts[subject]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* The newest volume face out, and the unwritten next one standing beside it */}
      <div className="self-start lg:mt-2">
        <div className="flex items-end gap-4 sm:gap-6">
          {newest && (
            <Link
              href={`/resources/${newest.slug}`}
              className="group block w-[64%] transition-transform duration-500 ease-out-expo hover:-translate-y-1.5"
              aria-label={`Open ${newest.title}`}
            >
              <Volume resource={newest} className="shadow-[0_24px_40px_-24px_rgb(23_23_23/0.55)]" />
            </Link>
          )}
          <BlankVolume className="w-[34%]" />
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Newest volume{newest ? ` · added ${formatDate(newest.dateAdded)}` : ""}
        </p>
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
