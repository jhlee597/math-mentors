import type { Metadata } from "next";
import ResourcesClient from "@/components/resources/ResourcesClient";

export const metadata: Metadata = {
  title: "Resources | Math Mentors",
  description: "Browse free, student-written study guides, problem packets, and cheat sheets.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Resources</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Search or filter by subject and resource type to find what you need.
      </p>

      <div className="mt-10">
        <ResourcesClient />
      </div>
    </div>
  );
}
