import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ResourceCover from "@/components/ResourceCover";
import ShareButton from "@/components/resources/ShareButton";
import ResourceCard from "@/components/ResourceCard";
import { resources, getResourceBySlug } from "@/data/resources";
import { accentBorderTop, accentBgSoft, accentText } from "@/lib/accent";

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
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/resources" className="text-sm text-slate-500 transition-colors hover:text-slate-900">
        &larr; Back to Resources
      </Link>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <ResourceCover
          label={resource.coverLabel}
          accent={resource.accent}
          className="h-28 w-24 shrink-0"
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${accentBgSoft[resource.accent]} ${accentText[resource.accent]}`}>
              {resource.subject}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {resource.type}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {resource.title}
          </h1>
          <p className="mt-2 text-slate-600">
            by {resource.authors.join(", ")}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={resource.pdfUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:scale-105 hover:shadow-blue-600/30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download PDF
            </a>
            <ShareButton title={resource.title} />
          </div>
        </div>
      </div>

      <div className={`mt-10 overflow-hidden rounded-2xl border-t-4 border border-slate-200 bg-surface ${accentBorderTop[resource.accent]}`}>
        {pdfExists ? (
          <iframe
            src={resource.pdfUrl}
            title={resource.title}
            className="h-[70vh] w-full"
          />
        ) : (
          <div className="flex h-72 flex-col items-center justify-center gap-2 px-6 text-center text-slate-400">
            <p className="font-medium text-slate-600">PDF preview not available yet.</p>
            <p className="text-sm">
              Add the file at <code className="text-slate-600">public{resource.pdfUrl}</code> to enable
              the embedded preview and download.
            </p>
          </div>
        )}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold text-slate-900">Description</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{resource.description}</p>
        </div>
        <div>
          <h2 className="font-semibold text-slate-900">Intended For</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{resource.intendedFor}</p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl font-bold text-slate-900">More in {resource.subject}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <ResourceCard key={r.slug} resource={r} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
