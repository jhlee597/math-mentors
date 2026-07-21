"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { accentBorder } from "@/lib/accent";

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollByCard(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[0] as HTMLElement | undefined;
    const step = (card?.offsetWidth ?? 320) + 24; // card width + gap
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  function handleScroll() {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[0] as HTMLElement | undefined;
    const step = (card?.offsetWidth ?? 320) + 24;
    setActive(Math.round(rail.scrollLeft / step));
  }

  function scrollToIndex(i: number) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[0] as HTMLElement | undefined;
    const step = (card?.offsetWidth ?? 320) + 24;
    rail.scrollTo({ left: i * step, behavior: "smooth" });
  }

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What Students Say"
          subtitle="Hear from students who have used our resources"
        />

        {testimonials.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-surface p-12 text-center">
            <p className="text-slate-600">Be the first to share how our resources helped you.</p>
            <Button href="/testimonials/new" className="mt-6">
              Share Your Experience
            </Button>
          </div>
        ) : (
          <>
            <div
              ref={railRef}
              onScroll={handleScroll}
              className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
            >
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className={`w-[85%] shrink-0 snap-start rounded-2xl border border-l-4 border-slate-200 bg-surface p-6 sm:w-[380px] ${accentBorder[t.accent]}`}
                >
                  <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4">
                    <p className="font-semibold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => scrollByCard(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-transform duration-200 hover:scale-110 hover:text-slate-900"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => scrollToIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      i === active ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => scrollByCard(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-transform duration-200 hover:scale-110 hover:text-slate-900"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-8 text-center">
              <Button href="/testimonials/new" variant="secondary">
                Share Your Experience
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
