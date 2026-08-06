import Button from "@/components/Button";

export default function JoinCta() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-surface px-8 py-16 text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Want to join the team?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          We&rsquo;re always looking for students who want to write, typeset, or review study
          materials. No LaTeX experience required. We&rsquo;ll teach you.
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
