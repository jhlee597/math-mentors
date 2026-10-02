import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader title="Resources">
        <p>Search or filter by subject and resource type to find what you need.</p>
      </PageHeader>

      <div className="mt-10">
        <ResourcesClient thumbnails={thumbnails} />
      </div>
    </div>
  );
}
