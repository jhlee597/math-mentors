import type { Metadata } from "next";
import Button from "@/components/Button";
import Volume from "@/components/series/Volume";
import { getSeries } from "@/data/resources";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About | Math Mentors",
  description: site.description,
};

const steps = [
  {
    title: "We pick a topic",
    description:
      "Members propose guides based on what their classes or competitions need, from a single cheat sheet to a full unit guide.",
  },
  {
    title: "We write it in LaTeX",
    description:
      "Drafts go through our shared LaTeX templates so every resource looks consistent, no matter who wrote it.",
  },
  {
    title: "Another mentor reviews it",
    description:
      "Every guide gets a second pass for accuracy and clarity before it's published.",
  },
  {
    title: "It goes live, for free",
    description:
      "The finished PDF is added to the resource library. No account or payment required, ever.",
  },
];

export default function AboutPage() {
  const first = getSeries()[0];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <h1 className="title-set text-balance text-[clamp(3rem,7vw,6rem)] text-ink">How the series gets made.</h1>
          <p className="mt-7 max-w-[56ch] text-lg leading-relaxed text-neutral-600">{site.description}</p>
        </div>
        {first && (
          <div className="hidden w-64 justify-self-end lg:block">
            <Volume resource={first} />
            <p className="mt-3 text-sm text-neutral-500">Volume one</p>
          </div>
        )}
      </div>

      {/* The order is the process, so each step keeps its number. */}
      <ol className="mt-20 border-t-2 border-ink">
        {steps.map((step, i) => (
          <li key={step.title} className="grid gap-4 border-b border-border py-8 sm:grid-cols-[6rem_1fr_1.2fr] sm:items-baseline sm:gap-8">
            <span className="title-set text-5xl text-neutral-300">{i + 1}</span>
            <h2 className="title-set text-[clamp(1.75rem,3vw,2.5rem)] text-ink">{step.title}</h2>
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-neutral-600">{step.description}</p>
          </li>
        ))}
      </ol>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <h2 className="title-set text-[clamp(2.5rem,5vw,4rem)] text-ink">
          Founded in <span >{site.founded}</span>.
        </h2>
        <div>
          <p className="max-w-[56ch] text-lg leading-relaxed text-neutral-600">
            Math Mentors began as a small club in the founder&rsquo;s school, aiming to teach peers
            LaTeX, but now it has grown into a huge, online library. Want to contribute?
          </p>
          <div className="mt-7">
            <Button href="/join" size="lg">
              Join the Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
