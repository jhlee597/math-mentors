import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ResourceCover from "@/components/ResourceCover";
import ShareButton from "@/components/resources/ShareButton";
import ResourceCard from "@/components/ResourceCard";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "@/components/icons";
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
      <Link
        href="/resources"
        className="group -ml-0.5 inline-flex min-h-11 items-center gap-2 text-[12px] text-neutral-500 transition-colors hover:text-neutral-950"
      >
        <ArrowLeft className="h-3 w-3 transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
        Back to Resources
      </Link>

      <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
        <ResourceCover
          label={resource.coverLabel}
          thumbnailSrc={getThumbnailSrc(resource.pdfUrl)}
          className="h-52 w-44 shrink-0"
          preload
        />

        <div className="min-w-0">
          <h1 className="text-balance font-display text-4xl font-light tracking-[-0.03em] text-neutral-950 sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            {resource.subject} &middot; {resource.type} &middot; by {resource.authors.join(", ")}
          </p>

          {pdfExists && (
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={resource.pdfUrl}
                download
                className="group inline-flex min-h-12 min-w-48 items-center justify-between gap-10 bg-neutral-950 px-6 text-sm text-white transition-colors duration-200 hover:bg-neutral-800 active:bg-neutral-700"
              >
                Download PDF
                <ArrowDown className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-y-0.5" />
              </a>
              <ShareButton title={resource.title} />
            </div>
          )}
        </div>
      </div>

      {pdfExists ? (
        <>
          {/* Phones can't scroll an embedded PDF well, so they get a link instead. */}
          <a
            href={resource.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 flex min-h-14 items-center justify-between border-t border-neutral-200 text-sm text-neutral-900 sm:hidden"
          >
            Read the full guide
            <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-950" />
          </a>
          <div className="mt-14 hidden overflow-hidden border border-neutral-200 bg-surface sm:block">
            <iframe src={resource.pdfUrl} title={`${resource.title} (PDF)`} className="h-[75vh] w-full" />
          </div>
        </>
      ) : (
        <div className="mt-14 border-y border-neutral-200 py-10">
          <p className="text-sm text-neutral-900">This guide&rsquo;s PDF isn&rsquo;t available yet.</p>
          <p className="mt-1.5 text-[13px] text-neutral-500">
            Check back soon, or{" "}
            <Link href="/resources" className="text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900">
              browse the other guides
            </Link>
            .
          </p>
        </div>
      )}

      <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-3">
        <div className="border-t border-neutral-200 pt-5">
          <h2 className="field-label">Description</h2>
          <p className="mt-4 max-w-[60ch] whitespace-pre-line text-[13px] leading-relaxed text-neutral-600">{resource.description}</p>
        </div>
        <div className="border-t border-neutral-200 pt-5">
          <h2 className="field-label">Intended For</h2>
          <p className="mt-4 max-w-[60ch] whitespace-pre-line text-[13px] leading-relaxed text-neutral-600">{resource.intendedFor}</p>
        </div>
        <div className="border-t border-neutral-200 pt-5">
          <h2 className="field-label">
            {resource.authors.length > 1 ? "Authors" : "Author"}
          </h2>
          <ul className="mt-4 space-y-1 text-[13px] leading-relaxed text-neutral-600">
            {resource.authors.map((author) => (
              <li key={author}>{author}</li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl font-light tracking-[-0.025em] text-neutral-950">
            More in {resource.subject}
          </h2>
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
