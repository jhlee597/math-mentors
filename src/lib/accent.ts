// Central place mapping the small "accent" palette used across cards/covers
// to literal Tailwind classes. Keep classes fully spelled out (not built with
// template strings) so Tailwind's scanner can find them at build time.

export type Accent = "blue" | "indigo" | "sky" | "cyan";

export const ACCENTS: Accent[] = ["blue", "indigo", "sky", "cyan"];

export const accentBorderTop: Record<Accent, string> = {
  blue: "border-t-blue-600",
  indigo: "border-t-indigo-600",
  sky: "border-t-sky-500",
  cyan: "border-t-cyan-600",
};

export const accentBorder: Record<Accent, string> = {
  blue: "border-blue-600",
  indigo: "border-indigo-600",
  sky: "border-sky-500",
  cyan: "border-cyan-600",
};

export const accentText: Record<Accent, string> = {
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  sky: "text-sky-600",
  cyan: "text-cyan-600",
};

export const accentBgSoft: Record<Accent, string> = {
  blue: "bg-blue-600/10",
  indigo: "bg-indigo-600/10",
  sky: "bg-sky-500/10",
  cyan: "bg-cyan-600/10",
};

export const accentGradient: Record<Accent, string> = {
  blue: "from-blue-600 to-indigo-600",
  indigo: "from-indigo-600 to-blue-700",
  sky: "from-sky-500 to-blue-600",
  cyan: "from-cyan-600 to-blue-600",
};

/** Cycle through the accent palette by index — handy for mapping over lists. */
export function accentForIndex(i: number): Accent {
  return ACCENTS[i % ACCENTS.length];
}
