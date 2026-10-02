import Link from "next/link";
import Cover, { coverTone } from "@/components/series/Cover";
import Spine from "@/components/series/Spine";
import { formatVolume, getNextVolumeNumber, getSeries, getVolumeNumber } from "@/data/resources";

/**
 * The series standing on a shelf, spine out. Hovering or focusing a spine
 * pulls the book up and turns its cover out beside it; the shelf ends with the
 * blank next volume, which pulls out the same way and leads to Join.
 */
export default function Shelf() {
  const series = getSeries();

  return (
    <div className="no-scrollbar -mx-6 overflow-x-auto px-6 pt-10">
      <ul className="flex min-w-max items-end gap-1.5 border-b-2 border-ink">
        {series.map((resource) => {
          const volume = getVolumeNumber(resource);
          const ink = coverTone(volume) === "ink";
          return (
            <li key={resource.slug}>
              <Link
                href={`/resources/${resource.slug}`}
                aria-label={`${formatVolume(volume)}: ${resource.title}`}
                className="group flex items-end focus-visible:outline-offset-4"
              >
                <Spine
                  number={volume}
                  mark={resource.coverLabel}
                  title={resource.title}
                  className={`transition-transform duration-500 ease-out-expo group-hover:-translate-y-4 group-focus-visible:-translate-y-4 ${
                    ink ? "bg-ink text-paper" : "bg-white text-ink outline outline-1 -outline-offset-1 outline-ink/15"
                  }`}
                />
                <span className="block w-0 overflow-hidden transition-[width,transform] duration-500 ease-out-expo group-hover:w-48 group-hover:-translate-y-4 group-focus-visible:w-48 group-focus-visible:-translate-y-4">
                  <Cover resource={resource} className="w-48" />
                </span>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/join" aria-label={`${formatVolume(getNextVolumeNumber())}: not written yet. Join to write it.`} className="group flex items-end">
            <Spine
              number={getNextVolumeNumber()}
              mark="?"
              title="Your volume here"
              className="border-2 border-dashed border-neutral-300 text-neutral-500 transition-[color,border-color,transform] duration-500 ease-out-expo group-hover:-translate-y-4 group-focus-visible:-translate-y-4 group-hover:border-ink group-hover:text-ink group-focus-visible:border-ink group-focus-visible:text-ink"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
