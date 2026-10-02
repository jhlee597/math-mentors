import Link from "next/link";
import VolumeNumber from "@/components/series/VolumeNumber";
import { getSeries, getTopics, getVolumeNumber } from "@/data/resources";

/** A back-of-book index: every topic the guides cover, pointing at its volume. */
export default function TopicIndex() {
  const entries = getSeries()
    .flatMap((r) => getTopics(r).map((topic) => ({ topic, slug: r.slug, volume: getVolumeNumber(r) })))
    .sort((a, b) => a.topic.localeCompare(b.topic));

  if (entries.length === 0) return null;

  const groups = new Map<string, typeof entries>();
  for (const e of entries) {
    const letter = e.topic[0].toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), e]);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_2.4fr] lg:gap-16">
        <div>
          <h2 className="title-set text-[clamp(2.5rem,5vw,4rem)] text-ink">Index</h2>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-neutral-600">
            Know the topic but not the guide? Every topic we cover, and the volume it lives in.
          </p>
        </div>

        <div className="columns-1 gap-10 sm:columns-2">
          {[...groups].map(([letter, items]) => (
            <div key={letter} className="mb-6 break-inside-avoid">
              <p className="text-2xl font-black tracking-[-0.04em] text-ink">{letter}</p>
              <ul className="mt-1">
                {items.map((e) => (
                  <li key={`${e.topic}-${e.slug}`}>
                    <Link
                      href={`/resources/${e.slug}`}
                      className="group flex min-h-9 items-end gap-2 py-1.5 text-[15px] text-neutral-700 hover:text-ink"
                    >
                      <span className="group-hover:underline">{e.topic}</span>
                      <span aria-hidden className="mb-[0.3em] min-w-6 flex-1 border-b border-dotted border-neutral-400" />
                      <span className="shrink-0 text-sm text-neutral-500 group-hover:text-ink"><VolumeNumber n={e.volume} /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
