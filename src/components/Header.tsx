"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-neutral-950"
        >
          <Image src="/logo.png" alt={`${site.name} logo`} width={24} height={24} className="h-6 w-6" preload />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item, i) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            // The last nav item (Join) is the call to action, shown in a light box.
            const isCta = i === site.nav.length - 1;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-[12px] transition-colors duration-200 ${
                  isCta
                    ? "ml-2 bg-neutral-200/70 text-neutral-700 hover:bg-neutral-300/70 hover:text-neutral-950"
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
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-neutral-700 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 17h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-neutral-200 px-6 py-3 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-neutral-600 hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
