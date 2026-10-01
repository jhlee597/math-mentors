import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ResourceCover from "@/components/ResourceCover";
import TextLink from "@/components/TextLink";
import { getFeaturedResources } from "@/data/resources";
import { getThumbnailSrc } from "@/lib/thumbnails";

export default function FeaturedResources() {
  const featured = getFeaturedResources();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="01" eyebrow="Featured" title="From the library" />
          <TextLink href="/resources" underline>
            Browse all resources
          </TextLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group flex gap-6 rounded-lg border border-stone-200 bg-surface p-5 transition-colors duration-200 hover:border-stone-400"
            >
              <ResourceCover
                label={resource.coverLabel}
                thumbnailSrc={getThumbnailSrc(resource.pdfUrl)}
                className="h-40 w-32 shrink-0"
              />

              <div className="flex min-w-0 flex-col">
                <p className="font-mono text-[11px] text-stone-400">
                  {resource.subject} &middot; {resource.type}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-stone-900">
                  {resource.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-stone-500">
                  {resource.summary}
                </p>
                <span className="mt-auto pt-4 text-[12px] text-stone-500 transition-colors group-hover:text-accent">
                  Open guide &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
