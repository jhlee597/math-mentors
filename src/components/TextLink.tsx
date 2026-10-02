import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

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
  const external = /^https?:\/\//.test(href);
  const Arrow = external ? ArrowUpRight : ArrowRight;

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex min-h-6 items-center gap-2 text-[12px] transition-colors duration-200 ${
        underline
          ? "border-b border-neutral-300 text-neutral-900 hover:border-neutral-900"
          : "text-neutral-500 hover:text-neutral-950"
      } ${className}`}
    >
      {children}
      <Arrow
        className={`h-3 w-3 transition-transform duration-200 ease-out ${
          external ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5" : "group-hover:translate-x-0.5"
        }`}
      />
    </Link>
  );
}
