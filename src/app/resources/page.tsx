import { Suspense } from "react";
import type { Metadata } from "next";
import ResourcesClient from "@/components/resources/ResourcesClient";

export const metadata: Metadata = {
  title: "Resources | Math Mentors",
  description: "Browse free, student-written study guides, problem packets, and cheat sheets.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 sm:pt-16">
      <h1 className="title-set text-[clamp(3rem,7vw,6rem)] text-ink">The library</h1>
      <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-neutral-600">
        Every guide in the series, free to read in your browser or download as a PDF.
      </p>
      {/* useSearchParams needs a Suspense boundary on a static page */}
      <Suspense>
        <ResourcesClient />
      </Suspense>
    </div>
  );
}
