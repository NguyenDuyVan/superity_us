import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "./icons";
import QuoteForm from "./QuoteForm";

const benefits = ["24/7 customer support", "Quality inspection for every package"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background warehouse photo + readable light overlay */}
      <Image
        src="/images/hero.jpg"
        alt="Infinity Fulfillment warehouse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-light/97 via-white/92 to-white/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-sm ring-1 ring-brand/10">
            China Fulfillment Center
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight text-ink">
            Your All-in-One China Fulfillment Center Solution Provider
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-xl">
            Simplify your e-commerce with our hassle-free China fulfillment solution — built to power
            bigger success for growing brands.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 font-medium text-ink">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand text-white">
                  <CheckIcon className="size-4" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 hover:bg-brand-dark transition-colors"
            >
              Request a Free Quote
              <ArrowRightIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="lg:justify-self-end w-full max-w-md">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
