import type { ReactNode } from "react";

/** Title block shared by the inner pages (About, Join, Resources, ...). */
export default function PageHeader({
  title,
  children,
}: {
  title: string;
  /** Intro paragraph(s) under the title. */
  children?: ReactNode;
}) {
  return (
    <header>
      <h1 className="text-balance font-display text-4xl font-light tracking-[-0.03em] text-neutral-950 sm:text-5xl">
        {title}
      </h1>
      {children && (
        <div className="mt-6 max-w-[62ch] text-sm leading-relaxed text-neutral-500">{children}</div>
      )}
    </header>
  );
}
