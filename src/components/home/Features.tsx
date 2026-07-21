import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export default function Features() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What We Do"
          subtitle={site.description}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300"
            >
              <h3 className="font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
