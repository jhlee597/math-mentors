import Figure from "@/components/series/Figure";
import VolumeNumber from "@/components/series/VolumeNumber";
import { getFigure, getVolumeNumber, type Resource } from "@/data/resources";

/** Odd volumes print on black board, even on white, so the shelf alternates. */
export function coverTone(volume: number): "ink" | "paper" {
  return volume % 2 === 1 ? "ink" : "paper";
}

/**
 * A volume's front cover, drawn in the series' one design: imprint and number
 * across the top, the topic's diagram set off-center, the title heavy at the
 * foot. Everything is sized in container units, so one component serves the
 * 120px thumbnail and the 440px hero cover.
 */
export default function Cover({
  resource,
  className = "",
}: {
  resource: Resource;
  className?: string;
}) {
  const volume = getVolumeNumber(resource);
  const ink = coverTone(volume) === "ink";

  return (
    <div
      className={`@container relative aspect-[5/7] overflow-hidden ${
        ink ? "bg-ink text-paper" : "bg-white text-ink outline outline-1 -outline-offset-1 outline-ink/15"
      } ${className}`}
    >
      <div className="absolute inset-0 flex flex-col p-[7cqw]">
        <div className="flex items-baseline justify-between text-[max(10px,4.6cqw)] font-semibold leading-none">
          <span>Math Mentors</span>
          <VolumeNumber n={volume} />
        </div>
        <div className={`mt-[3cqw] h-[0.8cqw] min-h-px ${ink ? "bg-paper" : "bg-ink"}`} />

        <Figure kind={getFigure(resource)} className="mt-[7cqw] ml-[16cqw] w-[74cqw]" />

        <div className="mt-auto">
          <p className="title-set text-balance text-[12.5cqw]">{resource.title}</p>
          <p className={`mt-[3.5cqw] text-[max(10px,4.2cqw)] leading-tight ${ink ? "text-neutral-400" : "text-neutral-500"}`}>
            {resource.subject} &middot; {resource.type}
          </p>
        </div>
      </div>
    </div>
  );
}
