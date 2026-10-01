import Button from "@/components/Button";
import { site } from "@/data/site";

export default function JoinCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 rounded-xl bg-stone-900 px-8 py-14 text-stone-100 sm:px-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow !text-stone-400">
              <span className="text-orange-300">04 / </span>Get involved
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Want to join the team?
              <span className="block italic text-stone-400">No LaTeX experience required.</span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-stone-300">
              We&rsquo;re always looking for students who want to write, typeset, or review study
              materials. We&rsquo;ll teach you everything you need.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="/join" variant="inverse">
                Join Math Mentors
              </Button>
              <a href={site.joinFormUrl} className="text-[12px] text-stone-300 transition-colors hover:text-white">
                Interest form &#8599;
              </a>
              <a href={site.discordUrl} className="text-[12px] text-stone-300 transition-colors hover:text-white">
                Discord &#8599;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
