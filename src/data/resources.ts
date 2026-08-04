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
    title: "A Guide to Complex Numbers",
    subject: "Precalculus",
    type: "Full Guide",
    summary: "A complete walkthrough of complex numbers, from the basics to polar form and Euler's formula.",
    description:
      "This guide builds up complex numbers from scratch: real and imaginary parts, the four basic operations, and the complex plane, before moving into the modulus, argument, polar form, De Moivre's Theorem, and Euler's formula. Every section includes worked examples, full derivations of the key formulas, and a problem set with solutions.",
    authors: ["Juho Lee"],
    intendedFor: "Students who know algebra, basic trigonometry, and the unit circle, and want a single reference that ties complex numbers together from first principles through polar/exponential form.",
    pdfUrl: "/pdfs/sample-resource.pdf",
    coverLabel: "ℂ",
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
