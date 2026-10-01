import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[2fr_3fr] lg:gap-20">
        {/* Intro stays pinned while the list scrolls past on large screens */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-2xl tracking-tight text-neutral-900">
            Study guides, written by students.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-500">{site.description}</p>
          <div className="mt-6 flex gap-6">
            <TextLink href="/about">Learn more</TextLink>
            <TextLink href="/resources">Explore resources</TextLink>
          </div>
        </div>

        <ol>
          {site.features.map((feature, i) => (
            <li key={feature.title} className="flex gap-6 border-t border-neutral-200 py-7 last:border-b">
              <span className="font-mono text-[11px] text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[13px] text-neutral-900">{feature.title}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
