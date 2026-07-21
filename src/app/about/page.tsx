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
      "Members propose guides based on what their classes or competitions need — from a single cheat sheet to a full unit guide.",
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
      "The finished PDF is added to the resource library — no account or payment required, ever.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">About {site.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">{site.description}</p>

      <div className="mt-16">
        <SectionHeading title="How a Guide Gets Made" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-slate-200 bg-surface p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Founded in {site.founded}</h2>
        <p className="mx-auto mt-2 max-w-xl text-slate-600">
          What started as a handful of students sharing notes has grown into a library
          used by hundreds of students. Want to help write the next guide?
        </p>
        <div className="mt-6">
          <Button href="/join">Join the Team</Button>
        </div>
      </div>
    </div>
  );
}
