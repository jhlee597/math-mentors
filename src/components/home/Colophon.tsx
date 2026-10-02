import { site } from "@/data/site";

const lines = [
  {
    claim: "Written by students who just took the course.",
    detail: "So every guide explains things the way a classmate would.",
  },
  {
    claim: "Typeset in LaTeX, like a real textbook.",
    detail: "Every volume uses the same templates, so every guide reads cleanly, whoever wrote it.",
  },
  {
    claim: "Complete, and free.",
    detail: "Full derivations, worked examples, and practice problems. No accounts, no paywalls.",
  },
];

/** "1 Study Guides" -> "1 study guide"; "Founded 2025" reads label-first. */
function formatStat({ value, label }: { value: string; label: string }) {
  const text = label.toLowerCase();
  if (text === "founded") return `founded ${value}`;
  return `${value} ${value === "1" ? text.replace(/s$/, "") : text}`;
}

/** What makes the series the series: three lines, set big. */
export default function Colophon() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="sr-only">Why Math Mentors</h2>
      <ol className="border-t-2 border-ink">
        {lines.map((line) => (
          <li key={line.claim} className="grid gap-3 border-b border-border py-8 md:grid-cols-[1.6fr_1fr] md:items-baseline md:gap-12">
            <p className="title-set text-balance text-[clamp(1.9rem,3.6vw,3rem)] text-ink">{line.claim}</p>
            <p className="max-w-[44ch] text-[15px] leading-relaxed text-neutral-600">{line.detail}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-neutral-500">
        {site.stats.map(formatStat).join(" · ")}
      </p>
    </section>
  );
}
