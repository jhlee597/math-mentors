import TextLink from "@/components/TextLink";
import { site } from "@/data/site";

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 sm:grid-cols-[2fr_3fr] sm:gap-16">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 text-2xl tracking-tight text-neutral-900">
              Study guides, written by students.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-neutral-500">{site.description}</p>
            <div className="mt-6 flex gap-6">
              <TextLink href="/about">Learn more</TextLink>
              <TextLink href="/resources">Explore resources</TextLink>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {site.features.map((feature) => (
            <div key={feature.title} className="border-t border-neutral-200 pt-5">
              <h3 className="text-[13px] text-neutral-900">{feature.title}</h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
