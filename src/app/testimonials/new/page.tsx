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
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Thank you!</h1>
        <p className="mt-4 text-slate-600">
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
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Share Your Experience
      </h1>
      <p className="mt-3 text-slate-600">
        Tell other students what our resources have done for you. We read every submission and
        pick a handful to feature on the home page.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div>
          <label htmlFor="quote" className="block text-sm font-semibold text-slate-900">
            Your review
          </label>
          <textarea
            id="quote"
            name="quote"
            required
            rows={5}
            placeholder="What did our resources help you with?"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
            Name (optional)
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Jordan Lee, or leave blank to stay anonymous"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-slate-900">
            Type
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            placeholder="e.g. AMC 10 Student, Discord Community Member, Peer Tutor"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 outline-none focus:border-blue-500"
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
          <Link href="/" className="text-sm text-slate-500 underline hover:text-slate-900">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
