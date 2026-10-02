import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { getSeries } from "@/data/resources";
import { site } from "@/data/site";

const linkClass = "inline-flex min-h-8 items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-ink";

/** The colophon: the series' imprint page, closing every route. */
export default function Footer() {
  const volumes = getSeries().length;

  return (
    <footer className="border-t-2 border-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-12 pb-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-3xl font-black tracking-[-0.04em] text-ink">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500">
            A series of free math guides. {volumes} {volumes === 1 ? "volume" : "volumes"} in print
            since {site.founded}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-ink">Site</p>
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
          <p className="text-sm font-semibold text-ink">Get involved</p>
          <ul className="mt-2">
            <li>
              <a href={site.joinFormUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Interest form <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href={site.discordUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Discord <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
            <li>
              <Link href="/testimonials/new" className={linkClass}>
                Write a review
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <ul className="mt-2">
            <li>
              <a href={`mailto:${site.contactEmail}`} className={linkClass}>
                Email us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-border px-6 py-5 text-xs text-neutral-500 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Made by students, for students.
        </p>
        <p>Typeset in LaTeX. Free to read, download, and share.</p>
      </div>
    </footer>
  );
}
