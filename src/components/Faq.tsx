"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const faqs = [
  {
    q: "What is the turnaround time for order fulfillment?",
    a: "We typically process and ship orders within 24–48 hours of receipt, so your customers get their products quickly.",
  },
  {
    q: "Can I integrate my existing e-commerce platform?",
    a: "Yes. We integrate seamlessly with Shopify, WooCommerce and other popular platforms so orders flow in automatically.",
  },
  {
    q: "What are your storage fees?",
    a: "Storage is priced competitively based on the volume your inventory occupies — you only pay for the space you actually use.",
  },
  {
    q: "Can I track my orders in real time?",
    a: "Absolutely. Our user-friendly tracking system lets you monitor inventory and orders in real time, anytime.",
  },
  {
    q: "What are the costs associated with your services?",
    a: "We only charge for the services you request — no hidden fees, no setup fees and no tricky terms.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Popular questions</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            We&apos;d be happy to answer your questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <ChevronDownIcon
                    className={`size-5 shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-ink-soft leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
