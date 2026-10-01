import { site } from "@/data/site";

export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow">By the numbers</p>
        <div className="mt-6 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-light tracking-[-0.03em] text-neutral-900">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
