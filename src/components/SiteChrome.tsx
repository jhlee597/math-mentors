"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Wraps every page in the header and footer, except the print-only cover
 * pages under /covers, which must render as a bare page for the PDF script.
 */
export default function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  if (pathname.startsWith("/covers/")) return <>{children}</>;

  return (
    <>
      {header}
      <main className="flex-1 pb-28">{children}</main>
      {footer}
    </>
  );
}
