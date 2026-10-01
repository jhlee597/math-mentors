import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <Image src="/logo.png" alt={`${site.name} logo`} width={24} height={24} className="h-6 w-6" />

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="text-[11px] text-neutral-400">Site</p>
              <ul className="mt-3 space-y-2.5">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[12px] text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-neutral-400">Get Involved</p>
              <ul className="mt-3 space-y-2.5 text-[12px] text-neutral-600">
                <li>
                  <a href={site.joinFormUrl} className="transition-colors hover:text-neutral-950">
                    Interest Form &#8599;
                  </a>
                </li>
                <li>
                  <a href={site.discordUrl} className="transition-colors hover:text-neutral-950">
                    Discord &#8599;
                  </a>
                </li>
                <li>
                  <Link href="/testimonials/new" className="transition-colors hover:text-neutral-950">
                    Share Your Experience
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-neutral-400">Contact</p>
              <ul className="mt-3 space-y-2.5 text-[12px] text-neutral-600">
                <li>
                  <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-neutral-950">
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Oversized wordmark, set in the display face */}
        <p
          aria-hidden
          className="mt-16 select-none text-right font-display text-[17vw] leading-[0.85] font-normal tracking-[-0.06em] text-neutral-900 lg:text-[170px]"
        >
          mathmentors
        </p>

        <div className="mt-8 flex flex-col gap-2 text-[11px] text-neutral-400 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Made by students, for students.
          </p>
          <p>Founded {site.founded}</p>
        </div>
      </div>
    </footer>
  );
}
