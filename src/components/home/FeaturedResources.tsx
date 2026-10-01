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
          <SectionHeading eyebrow="Featured" title="From the library" />
          <TextLink href="/resources" underline>
            Browse all resources
          </TextLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group flex gap-6 border-t border-neutral-200 pt-6"
            >
              <ResourceCover
                label={resource.coverLabel}
                thumbnailSrc={getThumbnailSrc(resource.pdfUrl)}
                className="h-40 w-32 shrink-0"
              />

              <div className="flex min-w-0 flex-col">
                <p className="text-[11px] text-neutral-400">
                  {resource.subject} &middot; {resource.type}
                </p>
                <h3 className="mt-1.5 text-[15px] leading-snug text-neutral-900 group-hover:underline group-hover:underline-offset-4">
                  {resource.title}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-[12px] leading-relaxed text-neutral-500">
                  {resource.summary}
                </p>
                <span className="mt-auto pt-4 text-[12px] text-neutral-500 transition-colors group-hover:text-neutral-950">
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
