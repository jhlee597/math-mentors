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
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-xl tracking-tight text-stone-950"
        >
          <Image src="/logo.png" alt={`${site.name} logo`} width={28} height={28} className="h-7 w-7" preload />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item, i) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            // The last nav item (Join) is the call to action, shown as an outlined button.
            const isCta = i === site.nav.length - 1;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] transition-colors duration-200 ${
                  isCta
                    ? "ml-3 rounded-md border border-stone-300 px-3.5 py-1.5 text-stone-900 hover:border-stone-900"
                    : active
                      ? "px-3 py-1.5 text-stone-950 underline decoration-accent decoration-2 underline-offset-[10px]"
                      : "px-3 py-1.5 text-stone-500 hover:text-stone-950"
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
          className="flex h-9 w-9 items-center justify-center text-stone-700 md:hidden"
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
        <nav className="border-t border-stone-200 px-6 py-3 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-stone-600 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
