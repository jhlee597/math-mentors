import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import VolumeNumber from "@/components/series/VolumeNumber";
import { getNextVolumeNumber } from "@/data/resources";

/**
 * The series' unwritten next volume: a dashed, empty cover that is the door
 * to joining. It sits wherever the series ends.
 */
export default function BlankVolume({
  className = "",
  href = "/join",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`group @container block aspect-[5/7] border-2 border-dashed border-neutral-300 text-neutral-500 transition-colors duration-300 hover:border-ink hover:text-ink relative ${className}`}
    >
      <div className="absolute inset-0 flex flex-col p-[7cqw]">
        <div className="flex items-baseline justify-between text-[max(11px,4.6cqw)] font-semibold leading-none">
          <span>Math Mentors</span>
          <VolumeNumber n={getNextVolumeNumber()} />
        </div>
        <div className="mt-[3cqw] h-[0.8cqw] min-h-px bg-current opacity-40" />
        <div className="mt-auto">
          <p className="title-set text-[12.5cqw]">Your volume here.</p>
          <p className="mt-[3.5cqw] inline-flex items-center gap-[2cqw] text-[max(11px,4.6cqw)] font-medium leading-tight">
            Write it with us
            <ArrowRight className="h-[max(11px,4.6cqw)] w-[max(11px,4.6cqw)] transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
          </p>
        </div>
      </div>
    </Link>
  );
}
