import type { Metadata } from "next";
import ResourcesClient from "@/components/resources/ResourcesClient";
import { resources } from "@/data/resources";
import { getThumbnailSrc } from "@/lib/thumbnails";

export const metadata: Metadata = {
  title: "Resources | Math Mentors",
  description: "Browse free, student-written study guides, problem packets, and cheat sheets.",
};

export default function ResourcesPage() {
  const thumbnails = Object.fromEntries(
    resources.map((r) => [r.slug, getThumbnailSrc(r.pdfUrl)])
  );

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow">Library</p>
      <h1 className="mt-5 font-display text-5xl tracking-tight text-stone-950">Resources</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-500">
        Search or filter by subject and resource type to find what you need.
      </p>

      <div className="mt-10">
        <ResourcesClient thumbnails={thumbnails} />
      </div>
    </div>
  );
}
