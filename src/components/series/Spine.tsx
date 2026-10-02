import VolumeNumber from "@/components/series/VolumeNumber";

/**
 * A volume's spine: mark at the head, title running up, number at the foot.
 * `scale` sizes it in container units for a face-out volume (Volume.tsx);
 * without it, it is the fixed-size spine that stands on the shelf.
 */
export default function Spine({
  number,
  mark,
  title,
  className = "",
  fluid = false,
}: {
  number: number;
  mark: string;
  title: string;
  className?: string;
  fluid?: boolean;
}) {
  return (
    <span
      className={`flex shrink-0 flex-col items-center justify-between ${
        fluid ? "w-[12cqw] py-[4cqw]" : "h-80 w-14 py-4"
      } ${className}`}
    >
      <span className={`font-black leading-none ${fluid ? "text-[5cqw]" : "text-lg"}`}>{mark}</span>
      <span
        className={`title-set min-h-0 flex-1 overflow-hidden rotate-180 py-2 text-center leading-[1.05] [writing-mode:vertical-rl] ${
          fluid ? "text-[4.6cqw]" : "text-[15px]"
        }`}
      >
        {title}
      </span>
      <span className={`rotate-180 font-semibold [writing-mode:vertical-rl] ${fluid ? "text-[max(9px,2.6cqw)]" : "text-[11px]"}`}>
        <VolumeNumber n={number} />
      </span>
    </span>
  );
}
