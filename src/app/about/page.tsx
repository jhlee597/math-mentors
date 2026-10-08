import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import { ArrowRight } from "@/components/icons";
import Volume from "@/components/series/Volume";
import VolumeNumber from "@/components/series/VolumeNumber";
import { getSeries, getVolumeNumber, getVolumesBy } from "@/data/resources";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About | Math Mentors",
  description: site.description,
};

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

      <section className="mt-20">
        <h2 className="title-set text-[clamp(2.5rem,5vw,4rem)] text-ink">Roles</h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {site.roles.map((role) => (
            <li key={role.title} className="border-t-2 border-ink pt-6">
              <h3 className="title-set text-[clamp(2rem,3.2vw,2.75rem)] text-ink">{role.title}</h3>
              <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-neutral-600">{role.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Same three columns as the roles; the list ends on an open place, like the series does. */}
      <section className="mt-24">
        <h2 className="title-set text-[clamp(2.5rem,5vw,4rem)] text-ink">Authors</h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {site.team.map((person) => {
            const volumes = getVolumesBy(person.name);
            return (
              <li key={person.name} className="border-t border-border pt-6">
                <p className="title-set text-[clamp(1.75rem,2.6vw,2.25rem)] text-ink">{person.name}</p>
                <p className="mt-3 text-sm font-semibold text-ink">{person.roles.join(" · ")}</p>
                {person.bio && (
                  <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-neutral-600">{person.bio}</p>
                )}
                {volumes.length > 0 && (
                  <ul className="mt-4">
                    {volumes.map((volume) => (
                      <li key={volume.slug}>
                        <Link
                          href={`/resources/${volume.slug}`}
                          className="inline-flex min-h-8 items-baseline gap-2 text-[15px] text-neutral-600 hover:text-ink"
                        >
                          <span className="text-sm font-semibold text-ink">
                            <VolumeNumber n={getVolumeNumber(volume)} />
                          </span>
                          <span className="underline decoration-neutral-400 underline-offset-2 hover:decoration-current">
                            {volume.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          <li className="border-t-2 border-dashed border-neutral-300 pt-6">
            <Link href="/join" className="group block text-neutral-500 transition-colors duration-300 hover:text-ink">
              <span className="title-set block text-[clamp(1.75rem,2.6vw,2.25rem)]">Your name here.</span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                Writer, reviewer, or outreach
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <h2 className="title-set text-[clamp(2.5rem,5vw,4rem)] text-ink">
          Founded in <span >{site.founded}</span>.
        </h2>
        <div>
          <p className="max-w-[56ch] text-lg leading-relaxed text-neutral-600">
            Math Mentors began as a small club in the founder&rsquo;s school, aiming to teach peers
            LaTeX, but now it has grown into a huge, online library. Want to contribute? {site.noLatexNeeded}
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
