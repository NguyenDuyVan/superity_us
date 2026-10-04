import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "./icons";

const points = [
  "No setup fee",
  "No monthly fee",
  "No storage fee",
  "Same-day fulfillment",
  "No minimum order",
  "No tricky terms",
  "No hidden fees",
];

export default function WhatWeDo() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/packing.jpg"
              alt="Inside the Infinity fulfillment warehouse"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden sm:block rounded-2xl bg-brand px-6 py-4 text-white shadow-lg">
            <div className="text-2xl font-extrabold">Same day</div>
            <div className="text-sm text-white/85">fulfillment</div>
          </div>
        </div>

        {/* Text + checklist */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand">What we do</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Fulfill orders fast, friendly and accurate — empowering your e-commerce journey
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            We&apos;re more than just a China fulfillment center — we&apos;re your strategic partner.
            From the factory floor to your customer&apos;s door, we handle the logistics so you can
            focus on growing your brand.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <CheckIcon className="size-4" />
                </span>
                <span className="font-medium text-ink">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            Read more
            <ArrowRightIcon className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
