"use client";

import { useState } from "react";
import { Check, Share } from "@/components/icons";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled the share sheet — nothing to do
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-live="polite"
      className="inline-flex min-h-8 items-center gap-2 border-b border-neutral-300 text-[12px] text-neutral-900 transition-colors duration-200 hover:border-neutral-900"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Share className="h-3.5 w-3.5" />}
      {copied ? "Link copied!" : "Share"}
    </button>
  );
}
