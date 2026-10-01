import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 lg:grid-cols-[3fr_2fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">
            {site.name} <span className="text-accent">/ est. {site.founded}</span>
          </p>
          <h1 className="mt-6 text-balance font-display text-5xl leading-[1.05] tracking-tight text-stone-950 sm:text-6xl">
            {site.tagline}.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-stone-600">{site.hook}</p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="/resources" size="lg">
              Browse Resources
            </Button>
            <TextLink href="/join">Join the team</TextLink>
          </div>
        </div>

        {/* Stats, set as a small ledger beside the intro */}
        <dl className="rounded-lg border border-stone-200 bg-surface">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-between border-b border-stone-200 px-5 py-4 last:border-b-0"
            >
              <dt className="text-[13px] text-stone-500">{stat.label}</dt>
              <dd className="font-mono text-xl text-stone-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
