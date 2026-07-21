import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { accentBorderTop, accentForIndex } from "@/lib/accent";

export const metadata: Metadata = {
  title: "Join | Math Mentors",
  description: "Join Math Mentors and help write free study guides for your school.",
};

const roles = [
  {
    title: "Content Writer",
    description: "Draft problems, explanations, and worked examples for a subject you know well.",
  },
  {
    title: "LaTeX Typesetter",
    description: "Turn drafts into clean, consistent PDFs using our templates. No experience needed — we'll teach you.",
  },
  {
    title: "Reviewer",
    description: "Check drafts for accuracy and clarity before they're published to the library.",
  },
  {
    title: "Outreach",
    description: "Help spread the word about our resources to more students and clubs.",
  },
];

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Join {site.name}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        We&rsquo;re a volunteer club — no experience required, just an interest in math and in
        helping other students learn it.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href={site.joinFormUrl}>Fill Out the Interest Form</Button>
        <Button href={site.discordUrl} variant="secondary">
          Join our Discord
        </Button>
      </div>

      <div className="mt-16 text-left">
        <SectionHeading title="Ways to Get Involved" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {roles.map((role, i) => {
            const accent = accentForIndex(i);
            return (
              <div
                key={role.title}
                className={`rounded-2xl border border-t-4 border-slate-200 bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 ${accentBorderTop[accent]}`}
              >
                <h3 className="font-semibold text-slate-900">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{role.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-16 text-sm text-slate-400">
        Questions first?{" "}
        <a href={site.contactFormUrl} className="text-slate-600 underline hover:text-slate-900">
          Contact us
        </a>
        .
      </p>
    </div>
  );
}
