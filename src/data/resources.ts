// The resource library. Add a new object to `resources` to publish a new guide —
// no other code needs to change. `slug` must be unique; it becomes the URL
// (/resources/<slug>) and the filename readers land on.

export const SUBJECTS = [
  "Algebra 1",
  "Algebra 2",
  "Geometry",
  "Precalculus",
  "Calculus AB",
  "Calculus BC",
  "Statistics",
  "Competition Math",
] as const;

export const RESOURCE_TYPES = [
  "Problem Packet",
  "Cheat Sheet",
  "Equation Sheet",
  "Full Guide",
  "Textbook",
] as const;

export type Subject = (typeof SUBJECTS)[number];
export type ResourceType = (typeof RESOURCE_TYPES)[number];

export interface Resource {
  /** Unique URL-safe id, e.g. "ace-amc-10-12" -> /resources/ace-amc-10-12 */
  slug: string;
  title: string;
  subject: Subject;
  type: ResourceType;
  /** One-line summary shown on cards. */
  summary: string;
  /** Longer description shown on the resource's own page. */
  description: string;
  authors: string[];
  /** Who this resource is written for, shown on the detail page. */
  intendedFor: string;
  /** Path to the PDF in /public, e.g. "/pdfs/ace-amc-10-12.pdf". */
  pdfUrl: string;
  /** Two-ish characters shown on the placeholder cover box (swap for a real cover image later). */
  coverLabel: string;
  /** Pick from "blue" | "indigo" | "sky" | "cyan" to color the cover + card accent. */
  accent: "blue" | "indigo" | "sky" | "cyan";
  /** Feature this resource on the home page. */
  featured?: boolean;
  dateAdded: string; // ISO date, used for "Newest" sorting
}

export const resources: Resource[] = [
  {
    slug: "sample-resource",
    title: "Sample Resource",
    subject: "Competition Math",
    type: "Full Guide",
    summary: "A complete walkthrough of AMC 10/12 topics, strategies, and practice sets.",
    description:
      "This guide covers every major AMC 10/12 topic area — number theory, combinatorics, algebra, and geometry — with worked examples and full solutions. Built from the problems our own mentors missed on their first pass, with notes on the traps to watch for.",
    authors: ["Juho Lee"],
    intendedFor: "Students preparing for the AMC 10 or AMC 12 who want a single reference that ties topics together.",
    pdfUrl: "/pdfs/sample-resource.pdf",
    coverLabel: "AMC",
    accent: "blue",
    featured: true,
    dateAdded: "2026-07-21",
  },
  
];

export function getFeaturedResources(): Resource[] {
  return resources.filter((r) => r.featured);
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
