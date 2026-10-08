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
  // Join is the call to action; it gets the ink slab instead of a plain link.
  const links = site.nav.filter((item) => item.href !== "/join");

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex min-h-14 items-center gap-2.5 text-lg font-black tracking-[-0.04em] text-ink">
          <Image src="/mark.png" alt="" width={26} height={26} className="h-[26px] w-[26px]" preload />
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden h-14 items-stretch md:flex">
          {links.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex items-center px-3.5 text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-neutral-500 hover:text-ink"
                }`}
              >
                {item.label}
                {active && <span className="absolute inset-x-3.5 -bottom-[2px] h-1 bg-ink" />}
              </Link>
            );
          })}
          <Link
            href="/join"
            aria-current={isActive("/join") ? "page" : undefined}
            className="ml-3 flex items-center self-center bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-neutral-700"
          >
            Join
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2.5 flex h-11 w-11 items-center justify-center text-ink md:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t-2 border-ink px-6 py-2 md:hidden">
          {site.nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center border-b border-border text-xl font-black tracking-[-0.03em] last:border-b-0 ${
                  active ? "text-ink" : "text-neutral-500 hover:text-ink"
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
