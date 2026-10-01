import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow">{site.name}</p>
        <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-light tracking-[-0.03em] text-neutral-950 sm:text-5xl">
          {site.tagline}.
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-500">{site.hook}</p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button href="/resources" size="lg" className="min-w-52">
            Browse Resources
          </Button>
          <TextLink href="/join">
            Join the team{" "}
            <span className="text-[10px] text-neutral-400">No experience needed</span>
          </TextLink>
        </div>

        <p className="mt-8 text-[12px] text-neutral-500">
          Have a question?{" "}
          <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-neutral-950">
            Contact us &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
