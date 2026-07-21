import { site } from "@/data/site";
import { accentBorderTop, accentText, accentForIndex } from "@/lib/accent";

export default function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {site.stats.map((stat, i) => {
          const accent = accentForIndex(i);
          return (
            <div
              key={stat.label}
              className={`rounded-2xl border border-t-4 border-slate-200 bg-surface px-6 py-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 ${accentBorderTop[accent]}`}
            >
              <p className={`text-4xl font-extrabold ${accentText[accent]}`}>{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
