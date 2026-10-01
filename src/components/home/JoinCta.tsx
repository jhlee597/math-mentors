import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function JoinCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow">Get involved</p>
        <h2 className="mt-4 text-2xl tracking-tight text-neutral-900">
          Want to join the team?
          <span className="block text-neutral-400">No LaTeX experience required.</span>
        </h2>

        <div className="mt-8 border border-neutral-200 bg-surface px-6 py-6 text-sm leading-relaxed text-neutral-600">
          We&rsquo;re always looking for students who want to write, typeset, or review study
          materials. We&rsquo;ll teach you everything you need.
        </div>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Button href="/join" className="self-start">
            Join Math Mentors
          </Button>
          <div className="flex gap-6">
            <TextLink href={site.joinFormUrl} underline>
              Interest form
            </TextLink>
            <TextLink href={site.discordUrl} underline>
              Discord
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
