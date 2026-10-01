import Link from "next/link";
import type { ReactNode } from "react";

/** Quiet text link with a trailing arrow, e.g. "Learn more →". */
export default function TextLink({
  href,
  children,
  underline = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  /** Adds a hairline underline, for standalone links that close a section. */
  underline?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[12px] transition-colors duration-200 ${
        underline
          ? "border-b border-neutral-300 pb-1 text-neutral-900 hover:border-neutral-900"
          : "text-neutral-500 hover:text-neutral-950"
      } ${className}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
        &rarr;
      </span>
    </Link>
  );
}
