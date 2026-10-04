"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

const inputClass =
  "w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl ring-1 ring-black/5">
      <h2 className="text-xl font-bold text-ink">Get a Free Quote</h2>
      <p className="mt-1 text-sm text-ink-soft">Tell us about your store — we&apos;ll get back within 24 hours.</p>

      {sent ? (
        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl bg-brand-light px-6 py-10 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-brand text-white">
            <CheckIcon className="size-6" />
          </span>
          <p className="font-semibold text-ink">Thank you! Your request has been sent.</p>
          <p className="text-sm text-ink-soft">Our team will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <input name="name" type="text" required placeholder="Your name" className={inputClass} />
          <input name="email" type="email" required placeholder="Email address" className={inputClass} />
          <textarea name="message" rows={3} placeholder="How can we help?" className={`${inputClass} resize-none`} />
          <button
            type="submit"
            className="w-full rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Get a Free Quote
          </button>
        </form>
      )}
    </div>
  );
}
