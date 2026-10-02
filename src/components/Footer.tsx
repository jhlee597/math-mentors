import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/data/site";

const linkClass =
  "group inline-flex min-h-7 items-center gap-1.5 text-[12px] text-neutral-600 transition-colors hover:text-neutral-950";

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
      <ArrowUpRight className="h-3 w-3 text-neutral-400 transition-colors group-hover:text-neutral-950" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-5xl px-6 pt-14 pb-8">
        <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-neutral-950"
            >
              <Image src="/logo.png" alt="" width={24} height={24} className="h-6 w-6" />
              {site.name}
            </Link>
            <p className="mt-4 text-[12px] leading-relaxed text-neutral-500">{site.tagline}.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            <nav aria-label="Footer">
              <p className="text-[11px] text-neutral-400">Site</p>
              <ul className="mt-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-[11px] text-neutral-400">Get involved</p>
              <ul className="mt-2">
                <li>
                  <ExternalLink href={site.joinFormUrl}>Interest form</ExternalLink>
                </li>
                <li>
                  <ExternalLink href={site.discordUrl}>Discord</ExternalLink>
                </li>
                <li>
                  <Link href="/testimonials/new" className={linkClass}>
                    Share your experience
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-neutral-400">Contact</p>
              <ul className="mt-2">
                <li>
                  <a href={`mailto:${site.contactEmail}`} className={linkClass}>
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-[11px] text-neutral-400 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Made by students, for students.
          </p>
          <p>Founded {site.founded}</p>
        </div>
      </div>
    </footer>
  );
}
