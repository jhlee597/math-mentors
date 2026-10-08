import type { Metadata } from "next";
import Button from "@/components/Button";
import BlankVolume from "@/components/series/BlankVolume";
import VolumeNumber from "@/components/series/VolumeNumber";
import { getNextVolumeNumber } from "@/data/resources";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Join | Math Mentors",
  description: "Join Math Mentors and help write free study guides for your school.",
};

export default function JoinPage() {
  const next = <VolumeNumber n={getNextVolumeNumber()} />;

  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h1 className="title-set text-balance text-[clamp(3rem,7vw,6rem)] text-ink">
            Write {next}.
          </h1>
          <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-neutral-600">
            We&rsquo;re a volunteer organization. {site.noLatexNeeded} All you need is an interest in
            math and in helping other students learn it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={site.joinFormUrl} size="lg">
              Fill Out the Interest Form
            </Button>
            <Button href={site.discordUrl} variant="secondary" size="lg">
              Join our Discord
            </Button>
          </div>
        </div>
        <BlankVolume className="w-full max-w-64 justify-self-start lg:max-w-72 lg:justify-self-end" href={site.joinFormUrl} />
      </div>

      <section className="mt-20">
        <h2 className="title-set text-[clamp(2.5rem,5vw,4rem)] text-ink">
          Credits for {next}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-neutral-600">
          Every volume needs all three. Your name could go on any of these lines.
        </p>
        <dl className="mt-8 border-t-2 border-ink">
          {/* Each role is a line on the next volume's credits page. */}
          {site.roles.map((role) => (
            <div key={role.title} className="grid gap-2 border-b border-border py-6 sm:grid-cols-[12rem_1fr_1.3fr] sm:items-baseline sm:gap-8">
              <dt className="text-sm text-neutral-500">{role.credit}</dt>
              <dd className="title-set text-[clamp(1.6rem,2.6vw,2.25rem)] text-ink">{role.title}</dd>
              <dd className="max-w-[46ch] text-[15px] leading-relaxed text-neutral-600">{role.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-12 text-[15px] text-neutral-600">
        Questions first?{" "}
        <a
          href={`mailto:${site.contactEmail}`}
          className="inline-block py-1 font-medium text-ink underline decoration-neutral-400 hover:decoration-current"
        >
          Email us
        </a>
        .
      </p>
    </div>
  );
}
