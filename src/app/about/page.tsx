import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
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
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow">About</p>
      <h1 className="mt-5 font-display text-4xl font-light tracking-[-0.03em] text-neutral-950">About {site.name}</h1>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-500">{site.description}</p>

      <div className="mt-24">
        <SectionHeading eyebrow="Process" title="How a guide gets made." />
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="border-t border-neutral-200 pt-5"
            >
              <span className="font-mono text-[11px] text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[13px] text-neutral-900">{step.title}</h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-6 sm:grid-cols-[2fr_3fr] sm:gap-16">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 text-2xl tracking-tight text-neutral-900">Founded in {site.founded}.</h2>
        </div>
        <div>
        <p className="text-sm leading-relaxed text-neutral-500">
          What started as a handful of students sharing notes has grown into a library
          used by hundreds of students. Want to help write the next guide?
        </p>
        <div className="mt-6">
          <Button href="/join">Join the Team</Button>
        </div>
        </div>
      </div>
    </div>
  );
}
