import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ResourceCover from "@/components/ResourceCover";
import ShareButton from "@/components/resources/ShareButton";
import ResourceCard from "@/components/ResourceCard";
import { resources, getResourceBySlug } from "@/data/resources";
import { getThumbnailSrc } from "@/lib/thumbnails";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: `${resource.title} | Math Mentors`,
    description: resource.summary,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const pdfExists = fs.existsSync(path.join(process.cwd(), "public", resource.pdfUrl));
  const related = resources
    .filter((r) => r.slug !== resource.slug && r.subject === resource.subject)
    .slice(0, 2);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/resources" className="text-[12px] text-stone-500 transition-colors hover:text-stone-950">
        &larr; Back to Resources
      </Link>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start">
        <ResourceCover
          label={resource.coverLabel}
          thumbnailSrc={getThumbnailSrc(resource.pdfUrl)}
          className="h-52 w-44 shrink-0"
        />

        <div className="min-w-0">
          <p className="eyebrow">
            {resource.subject} &middot; {resource.type}
          </p>
          <h1 className="mt-5 font-display text-4xl tracking-tight text-stone-950 sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-3 text-sm text-stone-500">
            by {resource.authors.join(", ")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={resource.pdfUrl}
              download
              className="group inline-flex items-center gap-3 rounded-md bg-stone-900 px-5 py-3 text-sm text-stone-50 transition-colors duration-200 hover:bg-accent"
            >
              Download PDF
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5">
                &darr;
              </span>
            </a>
            <ShareButton title={resource.title} />
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden rounded-lg border border-stone-200 bg-surface">
        {pdfExists ? (
          <iframe
            src={resource.pdfUrl}
            title={resource.title}
            className="h-[70vh] w-full"
          />
        ) : (
          <div className="flex h-72 flex-col items-center justify-center gap-2 px-6 text-center text-stone-400">
            <p className="text-sm text-stone-600">PDF preview not available yet.</p>
            <p className="text-[12px]">
              Add the file at <code className="font-mono text-stone-600">public{resource.pdfUrl}</code> to enable
              the embedded preview and download.
            </p>
          </div>
        )}
      </div>

      <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-3">
        <div className="border-t border-stone-200 pt-5">
          <h2 className="eyebrow">Description</h2>
          <p className="mt-4 text-[13px] leading-relaxed text-stone-600">{resource.description}</p>
        </div>
        <div className="border-t border-stone-200 pt-5">
          <h2 className="eyebrow">Intended For</h2>
          <p className="mt-4 text-[13px] leading-relaxed text-stone-600">{resource.intendedFor}</p>
        </div>
        <div className="border-t border-stone-200 pt-5">
          <h2 className="eyebrow">
            {resource.authors.length > 1 ? "Authors" : "Author"}
          </h2>
          <ul className="mt-4 space-y-1 text-[13px] leading-relaxed text-stone-600">
            {resource.authors.map((author) => (
              <li key={author}>{author}</li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <p className="eyebrow">More in {resource.subject}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <ResourceCard key={r.slug} resource={r} thumbnailSrc={getThumbnailSrc(r.pdfUrl)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
