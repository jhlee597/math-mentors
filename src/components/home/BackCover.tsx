import Button from "@/components/Button";
import VolumeNumber from "@/components/series/VolumeNumber";
import { getNextVolumeNumber } from "@/data/resources";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

/**
 * The series' back cover, printed in ink across the full width: a reader's
 * blurb on top, the invitation to write the next volume below it.
 */
export default function BackCover() {
  const blurb = testimonials[0];

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {blurb ? (
          <figure className="max-w-4xl">
            <blockquote className="text-balance text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.02em]">
              &ldquo;{blurb.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm text-neutral-400">
              {blurb.name}, {blurb.role}
              {testimonials.length > 1 && <span> · and {testimonials.length - 1} more readers</span>}
            </figcaption>
          </figure>
        ) : (
          <p className="text-2xl font-medium text-neutral-300">No reviews yet. Be the first.</p>
        )}
        <div className="mt-8">
          <Button href="/testimonials/new" variant="inverseOutline">
            Write a review
          </Button>
        </div>

        <div className="mt-20 grid gap-8 border-t-2 border-paper/80 pt-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 className="title-set text-[clamp(3rem,8vw,7rem)]">
            Write <VolumeNumber n={getNextVolumeNumber()} />.
          </h2>
          <div>
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-neutral-300">
              We need writers, LaTeX typesetters, reviewers, and people to spread the word. No LaTeX
              experience required. We&rsquo;ll teach you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/join" variant="inverse">
                Join Math Mentors
              </Button>
              <Button href={site.joinFormUrl} variant="inverseOutline">
                Interest form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
