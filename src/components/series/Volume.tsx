import Cover, { coverTone } from "@/components/series/Cover";
import Spine from "@/components/series/Spine";
import { getVolumeNumber, type Resource } from "@/data/resources";

/** A volume face out: its spine at the left edge, then the front cover. */
export default function Volume({ resource, className = "" }: { resource: Resource; className?: string }) {
  const n = getVolumeNumber(resource);
  const ink = coverTone(n) === "ink";

  return (
    <div className={`@container flex items-stretch ${className}`}>
      <Spine
        fluid
        number={n}
        mark={resource.coverLabel}
        title={resource.title}
        className={ink ? "bg-neutral-800 text-paper" : "bg-neutral-100 text-ink outline outline-1 -outline-offset-1 outline-ink/15"}
      />
      <Cover resource={resource} className="min-w-0 flex-1" />
    </div>
  );
}
