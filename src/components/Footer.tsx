import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200">
      <div className="mx-auto max-w-5xl px-6 pt-14 pb-8">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 font-display text-xl tracking-tight text-stone-950">
              <Image src="/logo.png" alt={`${site.name} logo`} width={28} height={28} className="h-7 w-7" />
              {site.name}
            </Link>
            <p className="mt-4 text-[13px] leading-relaxed text-stone-500">{site.tagline}.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow">Site</p>
              <ul className="mt-4 space-y-2.5">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-stone-600 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Get involved</p>
              <ul className="mt-4 space-y-2.5 text-[13px] text-stone-600">
                <li>
                  <a href={site.joinFormUrl} className="transition-colors hover:text-accent">
                    Interest Form &#8599;
                  </a>
                </li>
                <li>
                  <a href={site.discordUrl} className="transition-colors hover:text-accent">
                    Discord &#8599;
                  </a>
                </li>
                <li>
                  <Link href="/testimonials/new" className="transition-colors hover:text-accent">
                    Share Your Experience
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Contact</p>
              <ul className="mt-4 space-y-2.5 text-[13px] text-stone-600">
                <li>
                  <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-accent">
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-stone-200 pt-6 font-mono text-[11px] text-stone-400 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Made by students, for students.
          </p>
          <p>Founded {site.founded}</p>
        </div>
      </div>
    </footer>
  );
}
