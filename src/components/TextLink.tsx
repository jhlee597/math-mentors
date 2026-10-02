import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

/** Inline text link with a trailing arrow, underlined in the series' 1px rule. */
export default function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);
  const Arrow = external ? ArrowUpRight : ArrowRight;

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex min-h-8 items-center gap-1.5 text-sm font-medium underline decoration-neutral-400 hover:decoration-current ${className}`}
    >
      {children}
      <Arrow className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5" />
    </Link>
  );
}
