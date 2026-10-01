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
        <SectionHeading eyebrow="Featured" title="From the library" />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group flex flex-col">
              <ResourceCover
                label={resource.coverLabel}
                thumbnailSrc={getThumbnailSrc(resource.pdfUrl)}
                className="h-40 w-32"
              />

              <p className="mt-4 text-[11px] text-neutral-400">
                {resource.subject} &middot; {resource.type}
              </p>
              <h3 className="mt-1.5 text-[15px] leading-snug text-neutral-900 group-hover:underline group-hover:underline-offset-4">
                {resource.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-[12px] leading-relaxed text-neutral-500">
                {resource.summary}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <TextLink href="/resources" underline>
            Browse all resources
          </TextLink>
        </div>
      </div>
    </section>
  );
}
