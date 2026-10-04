import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "./icons";

const highlights = [
  "20,000 sq ft of dedicated warehouse space",
  "Integration with all popular e-commerce platforms",
  "Experience handling tens of thousands of orders daily",
];

export default function DtcBrand() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image with floating stat */}
        <div className="order-2 lg:order-1 relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/warehouse.jpg"
              alt="Organized warehouse shelving"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-5 -left-5 hidden sm:block rounded-2xl bg-white px-6 py-4 shadow-lg ring-1 ring-black/5">
            <div className="text-2xl font-extrabold text-ink">
              20,000<span className="ml-1 text-base text-brand">sq ft</span>
            </div>
            <div className="text-sm text-ink-soft">warehouse space</div>
          </div>
          <div className="absolute -bottom-5 right-6 hidden sm:block rounded-2xl bg-brand px-6 py-4 text-white shadow-lg">
            <div className="text-2xl font-extrabold">10K+</div>
            <div className="text-sm text-white/85">orders / day</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">We guide you</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Reliable dropshipping center &amp; warehouse for your DTC brand
          </h2>
          <p className="mt-5 text-ink-soft">
            Empower your DTC brand with dependable dropshipping and warehousing solutions built to scale
            with you.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <CheckIcon className="size-4" />
                </span>
                <span className="text-ink">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Get an instant quote
              <ArrowRightIcon className="size-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink ring-1 ring-black/10 hover:bg-muted transition-colors"
            >
              Learn more about services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
