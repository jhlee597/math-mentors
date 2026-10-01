"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

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
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="03" eyebrow="What students say" title="Heard from the community." />

        {testimonials.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-stone-300 p-12">
            <p className="text-sm text-stone-500">Be the first to share how our resources helped you.</p>
            <Button href="/testimonials/new" className="mt-6">
              Share Your Experience
            </Button>
          </div>
        ) : (
          <>
            <div
              ref={railRef}
              onScroll={handleScroll}
              className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
            >
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="w-[85%] shrink-0 snap-start border-l-2 border-accent pl-6 sm:w-[460px]"
                >
                  <p className="font-display text-3xl leading-snug text-stone-900 italic">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-5">
                    <p className="font-mono text-[12px] text-stone-900">{t.name}</p>
                    <p className="text-[12px] text-stone-400">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => scrollByCard(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-stone-300 text-stone-500 transition-colors duration-200 hover:border-stone-900 hover:text-stone-900"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                    className={`h-px transition-all duration-200 ${
                      i === active ? "w-6 bg-stone-900" : "w-3 bg-stone-300 hover:bg-stone-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => scrollByCard(1)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-stone-300 text-stone-500 transition-colors duration-200 hover:border-stone-900 hover:text-stone-900"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-10">
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
