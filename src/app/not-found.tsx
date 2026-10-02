import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import TextLink from "@/components/TextLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <PageHeader title="This page doesn’t exist.">
        <p>
          The link may be broken, or the page may have moved. Every guide we&rsquo;ve published is
          still in the library.
        </p>
      </PageHeader>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Button href="/resources" size="lg" className="min-w-52">
          Browse Resources
        </Button>
        <TextLink href="/">Back to home</TextLink>
      </div>
    </div>
  );
}
