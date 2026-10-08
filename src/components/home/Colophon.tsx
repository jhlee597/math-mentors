import { site } from "@/data/site";

const lines = [
  {
    claim: "Written by students who just took the course.",
    detail: "We believe that students who have taken the course can reflect their experiences of learning the materials on their work, since they know exactly what they struggled on. We bring these ideas to reality using LaTeX, an important software that will be used in their future academic career as well.",
  },
  {
    claim: "Complete, and free.",
    detail: "We publish our work here on the internet for free without any paywalls or any need to create an account.",
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
          // Same column split as the hero; both texts trimmed to cap height so their tops line up.
          <li key={line.claim} className="grid gap-6 border-b border-border py-10 md:grid-cols-[1.35fr_1fr] md:gap-16">
            <p className="title-set text-balance text-[clamp(1.9rem,3.6vw,3rem)] text-ink [text-box:trim-both_cap_alphabetic]">{line.claim}</p>
            <p className="max-w-[44ch] text-[15px] leading-relaxed text-neutral-600 [text-box:trim-both_cap_alphabetic]">{line.detail}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-neutral-500">
        {site.stats.map(formatStat).join(" · ")}
      </p>
    </section>
  );
}
