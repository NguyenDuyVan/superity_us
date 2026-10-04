"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="mt-4 rounded-lg bg-brand/15 px-4 py-3 text-sm font-medium text-white">
        You&apos;re subscribed — thanks for joining!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="min-w-0 flex-1 rounded-lg bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
      />
      <button
        type="submit"
        className="rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
      >
        Get Updates
      </button>
    </form>
  );
}
