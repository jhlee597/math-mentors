"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
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
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Check className="mb-6 h-6 w-6 text-neutral-900" />
        <PageHeader title="Thank you!">
          <p>
          Your testimonial has been sent our way. We review every submission before it goes
          live on the site.
          </p>
        </PageHeader>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <PageHeader title="Share Your Experience">
        <p>
        Tell other students what our resources have done for you. We read every submission and
        pick a handful to feature on the home page.
        </p>
      </PageHeader>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl space-y-6">
        <div>
          <label htmlFor="quote" className="block text-[12px] text-neutral-700">
            Your review
          </label>
          <textarea
            id="quote"
            name="quote"
            required
            rows={5}
            placeholder="What did our resources help you with?"
            className="mt-2 w-full border border-neutral-200 bg-surface p-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-[12px] text-neutral-700">
            Name (optional)
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Jordan Lee, or leave blank to stay anonymous"
            className="mt-2 w-full border border-neutral-200 bg-surface p-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-[12px] text-neutral-700">
            Type
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            placeholder="e.g. AMC 10 Student, Discord Community Member, Peer Tutor"
            className="mt-2 w-full border border-neutral-200 bg-surface p-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>

        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">
            Something went wrong sending your review. Please try again in a moment.
          </p>
        )}

        <div className="flex items-center gap-4">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Submit Review"}
          </Button>
          <Link href="/" className="inline-flex min-h-11 items-center text-[12px] text-neutral-500 transition-colors hover:text-neutral-950">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
