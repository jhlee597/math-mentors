import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Cover from "@/components/series/Cover";
import Volume from "@/components/series/Volume";
import VolumeNumber from "@/components/series/VolumeNumber";
import ShareButton from "@/components/resources/ShareButton";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "@/components/icons";
import {
  getResourceBySlug,
  getSeries,
  getTopics,
  getVolumeNumber,
  resources,
} from "@/data/resources";
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

  const volume = getVolumeNumber(resource);
  const topics = getTopics(resource);
  const pdfExists = fs.existsSync(path.join(process.cwd(), "public", resource.pdfUrl));
  const firstPage = getThumbnailSrc(resource.pdfUrl);
  const related = getSeries().filter((r) => r.slug !== resource.slug && r.subject === resource.subject);

  return (
    <article className="mx-auto max-w-6xl px-6 pt-8">
      <Link
        href="/resources"
        className="group -ml-0.5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-neutral-600 hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-x-0.5" />
        The library
      </Link>

      <header className="mt-6 grid gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-14">
        <Volume resource={resource} className="w-full max-w-80 self-start shadow-[0_24px_40px_-24px_rgb(23_23_23/0.55)] md:max-w-none" />

        <div className="flex flex-col">
          <h1 className="title-set text-balance text-[clamp(2.75rem,6.4vw,5.5rem)] text-ink">{resource.title}</h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-neutral-600">{resource.summary}</p>

          {pdfExists ? (
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button
                href={resource.pdfUrl}
                download
                size="lg"
                icon={<ArrowDown className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5" />}
              >
                Download PDF
              </Button>
              <ShareButton title={resource.title} />
            </div>
          ) : (
            <p className="mt-8 max-w-[48ch] text-[15px] text-neutral-600">
              The PDF for this volume isn&rsquo;t up yet. Check back soon.
            </p>
          )}

          <dl className="mt-auto grid gap-x-10 gap-y-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-t-2 border-ink pt-3">
              <dt className="text-sm font-semibold text-ink">Volume</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">
                <VolumeNumber n={volume} /> · {resource.subject} · {resource.type}
              </dd>
            </div>
            <div className="border-t-2 border-ink pt-3">
              <dt className="text-sm font-semibold text-ink">Written for</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">{resource.intendedFor}</dd>
            </div>
            <div className="border-t-2 border-ink pt-3">
              <dt className="text-sm font-semibold text-ink">Written by</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">{resource.authors.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      {topics.length > 0 && (
        <section className="mt-20 grid gap-8 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-14">
          <div>
            <h2 className="title-set text-[clamp(2.25rem,4vw,3.25rem)] text-ink">Contents</h2>
          </div>
          <ol className="border-t-2 border-ink">
            {topics.map((topic, i) => (
              <li key={topic} className="flex items-baseline gap-5 border-b border-border py-3.5">
                <span className="w-6 shrink-0 text-sm tabular-nums text-neutral-500">{i + 1}</span>
                <span className="text-lg leading-snug text-ink">{topic}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {topics.length === 0 && (
        <section className="mt-20 max-w-[62ch]">
          <h2 className="title-set text-[clamp(2.25rem,4vw,3.25rem)] text-ink">About this guide</h2>
          <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-neutral-600">{resource.description}</p>
        </section>
      )}

      {pdfExists && (
        <section className="mt-20">
          <h2 className="title-set text-[clamp(2.25rem,4vw,3.25rem)] text-ink">Read it here</h2>

          {/* Phones can't scroll an embedded PDF well; they get the first page as a link instead. */}
          <a
            href={resource.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 grid grid-cols-[6rem_1fr] items-center gap-5 border-2 border-ink p-3 sm:hidden"
          >
            {firstPage ? (
              <span className="relative block aspect-[8.5/11] overflow-hidden bg-white outline outline-1 -outline-offset-1 outline-ink/15">
                <Image src={firstPage} alt="" fill sizes="96px" loading="eager" className="object-cover object-top grayscale" />
              </span>
            ) : (
              <span className="block aspect-[8.5/11] bg-neutral-200" />
            )}
            <span>
              <span className="block text-lg font-bold leading-tight text-ink">Open the full guide</span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-neutral-600">
                PDF, opens in a new tab <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </span>
          </a>

          <div className="mt-6 hidden border-2 border-ink bg-white sm:block">
            <iframe src={resource.pdfUrl} title={`${resource.title} (PDF)`} className="block h-[80vh] w-full" />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="title-set text-[clamp(2.25rem,4vw,3.25rem)] text-ink">More in {resource.subject}</h2>
          <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/resources/${r.slug}`} className="group block">
                  <Cover resource={r} className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5" />
                  <p className="mt-3 font-bold leading-snug text-ink group-hover:underline">{r.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
