import Button from "@/components/Button";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 text-balance text-xl text-slate-600">{site.tagline}</p>
        <p className="mx-auto mt-4 max-w-xl text-balance text-slate-500">{site.hook}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/resources" size="lg">
            Browse Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
