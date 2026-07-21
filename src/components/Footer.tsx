import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Made by students, for students.
        </p>
        <div className="flex items-center gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
