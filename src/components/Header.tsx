"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Close, Menu } from "@/components/icons";
import { site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="-ml-1 flex min-h-11 items-center gap-2 px-1 font-display text-sm font-semibold tracking-tight text-neutral-950"
        >
          <Image src="/logo.png" alt="" width={24} height={24} className="h-6 w-6" preload />
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {site.nav.map((item, i) => {
            const active = isActive(item.href);
            // The last nav item (Join) is the call to action, shown in a light box.
            const isCta = i === site.nav.length - 1;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-2 text-[12px] transition-colors duration-200 ${
                  isCta
                    ? `ml-2 text-neutral-800 hover:bg-neutral-300/70 hover:text-neutral-950 ${
                        active ? "bg-neutral-300/70" : "bg-neutral-200/70"
                      }`
                    : active
                      ? "text-neutral-950"
                      : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2.5 flex h-11 w-11 items-center justify-center text-neutral-800 md:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-neutral-200 px-6 pt-2 pb-4 md:hidden">
          {site.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-11 items-center text-sm ${
                  active ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
