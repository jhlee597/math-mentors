import Button from "@/components/Button";
import TextLink from "@/components/TextLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
      <h1 className="title-set text-balance text-[clamp(3rem,8vw,7rem)] text-ink">No such page.</h1>
      <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-neutral-600">
        The link may be broken, or the page may have moved. Every guide we&rsquo;ve published is
        still in the library.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-6">
        <Button href="/resources" size="lg">
          Go to the library
        </Button>
        <TextLink href="/">Back to home</TextLink>
      </div>
    </div>
  );
}
