import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

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
    description: "Turn drafts into clean, consistent PDFs using our templates. No experience needed. We'll teach you.",
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
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow">Join</p>
      <h1 className="mt-5 font-display text-5xl tracking-tight text-stone-950">Join {site.name}</h1>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-500">
        We&rsquo;re a volunteer organization. No experience required, just an interest in math and in
        helping other students learn it.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button href={site.joinFormUrl}>Fill Out the Interest Form</Button>
        <Button href={site.discordUrl} variant="secondary">
          Join our Discord
        </Button>
      </div>

      <div className="mt-24">
        <SectionHeading eyebrow="Roles" title="Ways to get involved." />
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div key={role.title} className="border-t border-stone-200 pt-5">
              <h3 className="text-[13px] text-stone-900">{role.title}</h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-stone-500">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-24 text-[12px] text-stone-400">
        Questions first?{" "}
        <a href={`mailto:${site.contactEmail}`} className="text-stone-700 underline underline-offset-4 hover:text-stone-950">
          Contact us
        </a>
        .
      </p>
    </div>
  );
}
