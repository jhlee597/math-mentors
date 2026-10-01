import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">{site.name}</p>
          <h1 className="mt-5 text-balance font-display text-4xl font-light tracking-[-0.03em] text-neutral-950 sm:text-5xl">
            {site.tagline}.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-500">{site.hook}</p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="/resources" size="lg" className="min-w-52">
              Browse Resources
            </Button>
            <TextLink href="/join">Join the team</TextLink>
          </div>
        </div>

        {/* Stats, listed beside the intro */}
        <dl className="border-t border-neutral-200">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-between border-b border-neutral-200 py-4"
            >
              <dt className="text-[12px] text-neutral-500">{stat.label}</dt>
              <dd className="font-display text-3xl font-light tracking-[-0.03em] text-neutral-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
