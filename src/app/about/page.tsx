import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader title={`About ${site.name}`}>
        <p>{site.description}</p>
      </PageHeader>

      <div className="mt-24">
        <SectionHeading title="How a guide gets made." />
        <ol className="figures mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-neutral-200 pt-5">
              {/* The order is the process, so the step number carries meaning here. */}
              <span className="font-mono text-[11px] text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-sm text-neutral-900">{step.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-24 grid gap-6 sm:grid-cols-[2fr_3fr] sm:gap-16">
        <SectionHeading title={`Founded in ${site.founded}.`} />
        <div>
          <p className="max-w-[60ch] text-sm leading-relaxed text-neutral-500">
            Math Mentors began as a small club in the founder&rsquo;s school, aiming to teach peers
            LaTeX, but now it has grown into a huge, online library. Want to contribute?
          </p>
          <div className="mt-6">
            <Button href="/join">Join the Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
