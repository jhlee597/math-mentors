import Shelf from "@/components/series/Shelf";
import TextLink from "@/components/TextLink";
import { getSeries } from "@/data/resources";

export default function SeriesShelf() {
  const count = getSeries().length;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <h2 className="title-set text-[clamp(2.5rem,5vw,4rem)] text-ink">The series so far</h2>
        <p className="max-w-sm text-[15px] leading-relaxed text-neutral-600">
          {count} {count === 1 ? "volume" : "volumes"} in print, and room on the shelf for the next one.
        </p>
      </div>
      <Shelf />
      <div className="mt-6">
        <TextLink href="/resources">See every guide in the library</TextLink>
      </div>
    </section>
  );
}
