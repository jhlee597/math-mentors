import Button from "@/components/Button";

export default function JoinCta() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-surface px-8 py-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[100px]"
        />
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Want to join the team?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          We&rsquo;re always looking for students who want to write, typeset, or review study
          materials. No LaTeX experience required — we&rsquo;ll teach you.
        </p>
        <div className="mt-8">
          <Button href="/join" size="lg">
            Join Math Mentors
          </Button>
        </div>
      </div>
    </section>
  );
}
