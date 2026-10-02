import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ResourceCover from "@/components/ResourceCover";
import TextLink from "@/components/TextLink";
import { ArrowRight } from "@/components/icons";
import { getFeaturedResources } from "@/data/resources";
import { getThumbnailSrc } from "@/lib/thumbnails";

export default function FeaturedResources() {
  const featured = getFeaturedResources();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="From the library" />
          <TextLink href="/resources" underline>
            Browse all resources
          </TextLink>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
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
                <h3 className="text-[15px] leading-snug text-neutral-900 decoration-neutral-400 group-hover:underline">
                  {resource.title}
                </h3>
                <p className="mt-1 text-[11px] text-neutral-400">
                  {resource.subject} &middot; {resource.type}
                </p>
                <p className="mt-3 line-clamp-3 text-[12px] leading-relaxed text-neutral-500">
                  {resource.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[12px] text-neutral-500 transition-colors group-hover:text-neutral-950">
                  Open guide
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
