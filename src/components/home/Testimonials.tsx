"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { ChevronLeft, ChevronRight } from "@/components/icons";
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
        <SectionHeading title="Heard from the community." />

        {testimonials.length === 0 ? (
          <div className="mt-10 border border-dashed border-neutral-300 p-12">
            <p className="text-sm text-neutral-500">Be the first to share how our resources helped you.</p>
            <Button href="/testimonials/new" className="mt-6">
              Share Your Experience
            </Button>
          </div>
        ) : (
          <>
            <div
              ref={railRef}
              onScroll={handleScroll}
              role="region"
              aria-label="Student reviews"
              className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
            >
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="w-[85%] shrink-0 snap-start border-t border-neutral-200 pt-6 sm:w-[420px]"
                >
                  <p className="text-balance font-display text-2xl leading-snug font-light tracking-[-0.02em] text-neutral-950">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-5">
                    <p className="text-[13px] text-neutral-900">{t.name}</p>
                    <p className="text-[12px] text-neutral-400">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            {testimonials.length > 1 && (
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => scrollByCard(-1)}
                className="flex h-11 w-11 items-center justify-center border border-neutral-300 text-neutral-500 transition-colors duration-200 hover:border-neutral-900 hover:text-neutral-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
                    onClick={() => scrollToIndex(i)}
                    className="group flex h-11 items-center px-1"
                  >
                    <span
                      className={`block h-px transition-all duration-200 ${
                        i === active ? "w-6 bg-neutral-900" : "w-3 bg-neutral-300 group-hover:bg-neutral-500"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                aria-label="Next review"
                onClick={() => scrollByCard(1)}
                className="flex h-11 w-11 items-center justify-center border border-neutral-300 text-neutral-500 transition-colors duration-200 hover:border-neutral-900 hover:text-neutral-900"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            )}

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
