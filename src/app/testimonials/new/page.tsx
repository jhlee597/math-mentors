"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Button from "@/components/Button";
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
        <p className="eyebrow">Received</p>
        <h1 className="mt-5 font-display text-4xl font-light tracking-[-0.03em] text-neutral-950">Thank you!</h1>
        <p className="mt-6 text-sm leading-relaxed text-neutral-500">
          Your testimonial has been sent our way. We review every submission before it goes
          live on the site.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="eyebrow">Testimonials</p>
      <h1 className="mt-5 font-display text-4xl font-light tracking-[-0.03em] text-neutral-950">
        Share Your Experience
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-500">
        Tell other students what our resources have done for you. We read every submission and
        pick a handful to feature on the home page.
      </p>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl space-y-6">
        <div>
          <label htmlFor="quote" className="block text-[11px] text-neutral-500">
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
          <label htmlFor="name" className="block text-[11px] text-neutral-500">
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
          <label htmlFor="role" className="block text-[11px] text-neutral-500">
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
          <p className="text-sm text-red-600">
            Something went wrong sending your review. Please try again in a moment.
          </p>
        )}

        <div className="flex items-center gap-4">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Submit Review"}
          </Button>
          <Link href="/" className="text-[12px] text-neutral-500 transition-colors hover:text-neutral-950">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
