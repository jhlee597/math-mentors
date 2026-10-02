"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { Check } from "@/components/icons";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewTestimonialPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    try {
      const res = await fetch(site.testimonialFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <Check className="h-10 w-10 text-ink" />
        <h1 className="title-set mt-6 text-[clamp(3rem,7vw,6rem)] text-ink">Thank you.</h1>
        <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-neutral-600">
          Your review has been sent our way. We read every submission before it goes live on the
          site.
        </p>
        <Button href="/" size="lg" className="mt-9">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-12 sm:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div>
        <h1 className="title-set text-balance text-[clamp(3rem,7vw,6rem)] text-ink">Write a review.</h1>
        <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-neutral-600">
          Tell other students what our guides have done for you. We read every submission and pick
          a handful for the back cover of the home page.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7 lg:pt-3">
        <div>
          <label htmlFor="quote" className="text-sm font-semibold text-ink">
            Your review
          </label>
          <textarea
            id="quote"
            name="quote"
            required
            rows={6}
            placeholder="What did our guides help you with?"
            className="mt-2 block w-full border-2 border-ink bg-white px-3.5 py-3 text-base text-ink outline-none placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink resize-y"
          />
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-ink">
              Name <span className="font-normal text-neutral-500">(optional, blank stays anonymous)</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Jordan Lee"
              className="mt-2 block w-full border-2 border-ink bg-white px-3.5 py-3 text-base text-ink outline-none placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            />
          </div>

          <div>
            <label htmlFor="role" className="text-sm font-semibold text-ink">
              Who you are
            </label>
            <input
              id="role"
              name="role"
              type="text"
              required
              placeholder="e.g. AMC 10 student"
              className="mt-2 block w-full border-2 border-ink bg-white px-3.5 py-3 text-base text-ink outline-none placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            />
          </div>
        </div>

        {status === "error" && (
          <p role="alert" className="border-2 border-ink px-4 py-3 text-[15px] text-ink">
            <strong className="font-bold">Your review didn&rsquo;t send.</strong> Check your
            connection and try again in a moment.
          </p>
        )}

        <div className="flex flex-wrap items-center gap-6">
          <Button type="submit" size="lg" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Review"}
          </Button>
          <Link href="/" className="inline-flex min-h-11 items-center text-sm font-medium text-neutral-600 underline decoration-neutral-400 hover:text-ink">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
