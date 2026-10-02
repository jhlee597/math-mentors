import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader title={`Join ${site.name}`}>
        <p>
          We&rsquo;re a volunteer organization. No experience required, just an interest in math
          and in helping other students learn it.
        </p>
      </PageHeader>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button href={site.joinFormUrl}>Fill Out the Interest Form</Button>
        <Button href={site.discordUrl} variant="secondary">
          Join our Discord
        </Button>
      </div>

      <div className="mt-24">
        <SectionHeading title="Ways to get involved." />
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <li key={role.title} className="border-t border-neutral-200 pt-5">
              <h3 className="text-sm text-neutral-900">{role.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">{role.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-24 text-[13px] text-neutral-500">
        Questions first?{" "}
        <a href={`mailto:${site.contactEmail}`} className="inline-block py-1 text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900">
          Contact us
        </a>
        .
      </p>
    </div>
  );
}
