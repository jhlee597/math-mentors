import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[2fr_3fr] lg:gap-20">
        {/* Intro stays pinned while the list scrolls past on large screens */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-balance font-display text-3xl font-light tracking-[-0.025em] text-neutral-950">
            Study guides, written by students.
          </h2>
          <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-neutral-500">{site.description}</p>
          <div className="mt-6 flex gap-6">
            <TextLink href="/about">Learn more</TextLink>
            <TextLink href="/resources">Explore resources</TextLink>
          </div>
        </div>

        <ul>
          {site.features.map((feature) => (
            <li
              key={feature.title}
              className="grid gap-1.5 border-t border-neutral-200 py-7 last:border-b sm:grid-cols-[1fr_1.4fr] sm:gap-8"
            >
              <h3 className="text-sm text-neutral-900">{feature.title}</h3>
              <p className="text-[13px] leading-relaxed text-neutral-500">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
