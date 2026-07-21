import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ResourceCover from "@/components/ResourceCover";
import Button from "@/components/Button";
import { getFeaturedResources } from "@/data/resources";
import { accentBorderTop } from "@/lib/accent";

export default function FeaturedResources() {
  const featured = getFeaturedResources();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Resources"
          subtitle="A few of our most popular study guides — browse the full library for more."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className={`group relative flex flex-col rounded-2xl border border-t-4 border-slate-200 bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 ${accentBorderTop[resource.accent]}`}
            >
              {/* Arrow box: signals the card links out to the resource page */}
              <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 group-hover:scale-110 group-hover:border-slate-300 group-hover:text-slate-900">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <ResourceCover label={resource.coverLabel} accent={resource.accent} className="h-20 w-16" />

              <h3 className="mt-5 pr-8 text-lg font-bold text-slate-900">{resource.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{resource.subject}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/resources" variant="secondary">
            Browse All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
