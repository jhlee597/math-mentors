import { formatVolume } from "@/data/resources";

/**
 * "No. 001" with the digits in tabular figures so numbers line up across
 * covers and lists. Only the digits get the feature: in this face it also
 * widens the period, which would read as "No . 001".
 */
export default function VolumeNumber({ n }: { n: number }) {
  const [label, digits] = formatVolume(n).split(" ");
  return (
    <span className="whitespace-nowrap">
      {label} <span className="tabular-nums">{digits}</span>
    </span>
  );
}
