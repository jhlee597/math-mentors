import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Cover from "@/components/series/Cover";
import { resources } from "@/data/resources";

// Print-only: the cover as a full PDF page. `npm run covers` (scripts/covers.mjs)
// renders /covers/<pdf file name> and puts it in front of that guide's PDF.

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

function findByFile(file: string) {
  return resources.find((r) => r.pdfUrl.split("/").pop()?.replace(/\.pdf$/i, "") === file);
}

export function generateStaticParams() {
  return resources.map((r) => ({ file: r.pdfUrl.split("/").pop()!.replace(/\.pdf$/i, "") }));
}

export default async function CoverPage({ params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const resource = findByFile(file);
  if (!resource) notFound();

  return (
    <>
      {/* The script sets the page size to match the guide's PDF; no margins. */}
      <style>{`@page { margin: 0 } html, body { height: 100%; margin: 0 }`}</style>
      <div className="h-screen w-screen print:h-full print:w-full">
        <Cover resource={resource} fill />
      </div>
    </>
  );
}
