// The resource library. Add a new object to `resources` to publish a new guide —
// no other code needs to change. `slug` must be unique; it becomes the URL
// (/resources/<slug>) and the filename readers land on.

export const SUBJECTS = [
  "Algebra",
  "Geometry",
  "Precalculus",
  "Calculus",
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

/** Diagrams the cover can draw; see src/components/series/Figure.tsx. */
export type CoverFigure =
  | "complex-plane"
  | "parabola"
  | "incircle"
  | "tangent"
  | "area"
  | "bell-curve"
  | "lattice"
  | "polynomial";

export const SUBJECT_FIGURES: Record<Subject, CoverFigure> = {
  Algebra: "parabola",
  Geometry: "incircle",
  Precalculus: "complex-plane",
  Calculus: "tangent",
  Statistics: "bell-curve",
  "Competition Math": "lattice",
};
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
  /** Short mark for the guide (e.g. "ℂ"); shown on the cover's spine. */
  coverLabel: string;
  /** Legacy field from the old colored theme; no longer displayed. */
  accent: "blue" | "indigo" | "sky" | "cyan";
  /**
   * The diagram drawn on the cover. Optional: defaults to a figure for the
   * guide's subject (see SUBJECT_FIGURES).
   */
  figure?: CoverFigure;
  /** Feature this resource on the home page. */
  featured?: boolean;
  dateAdded: string; // ISO date, used for "Newest" sorting
}

export const resources: Resource[] = [
  {
    slug: "complex",
    title: "A Guide to Complex Numbers",
    subject: "Precalculus",
    type: "Full Guide",
    summary: "A complete walkthrough of complex numbers until precalculus-level, including practice problems.",
    description:
      "This guide covers:\n• Basic introduction to complex numbers\n• Four operations with complex numbers\n• The Complex Plane\n• The modulus and the argument of a complex number\n• Problem solving techniques with complex numbers\n• Polar coordinates\n• Operations in polar form\n• De Moivre's Theorem\n• Euler's Formula\n• Finding complex roots using De Moivre's Theorem for Roots\n• Comprehensive examples and practice problems for all topics",
    authors: ["Juho Lee"],
    intendedFor: "Students who know basic algebra/trigonometry/geometry who want an organized packet solely on complex numbers.",
    pdfUrl: "/pdfs/complex.pdf",
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

/** Guides in publication order, oldest first: the order of the series. */
export function getSeries(): Resource[] {
  return [...resources].sort((a, b) => (a.dateAdded < b.dateAdded ? -1 : a.dateAdded > b.dateAdded ? 1 : 0));
}

/** A guide's volume number in the series (1 = first published). */
export function getVolumeNumber(resource: Resource): number {
  return getSeries().findIndex((r) => r.slug === resource.slug) + 1;
}

/** The number the next published guide will get. */
export function getNextVolumeNumber(): number {
  return resources.length + 1;
}

/** "No. 001" */
export function formatVolume(n: number): string {
  return `No. ${String(n).padStart(3, "0")}`;
}

export function getFigure(resource: Resource): CoverFigure {
  return resource.figure ?? SUBJECT_FIGURES[resource.subject];
}

/** Topics a guide covers, taken from the "• " lines of its description. */
export function getTopics(resource: Resource): string[] {
  return resource.description
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("•"))
    .map((line) => line.replace(/^•\s*/, ""));
}
