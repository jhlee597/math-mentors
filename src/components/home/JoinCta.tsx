import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function JoinCta() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-2 lg:items-end">
        <div>
          <h2 className="text-balance font-display text-3xl font-light tracking-[-0.025em] text-neutral-950">
            Want to join the team?
            <span className="block text-neutral-400">No LaTeX experience required.</span>
          </h2>
        </div>

        <div className="border border-neutral-200 bg-surface p-6">
          <p className="text-sm leading-relaxed text-neutral-600">
            We&rsquo;re always looking for students who want to write, typeset, or review study
            materials. We&rsquo;ll teach you everything you need.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Button href="/join">Join Math Mentors</Button>
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
