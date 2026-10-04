import Image from "next/image";
import { PlugIcon, ShieldIcon, GlobeIcon, ArrowRightIcon } from "./icons";

const steps = [
  {
    icon: PlugIcon,
    title: "Seamlessly integrate your store",
    desc: "Connect your platforms, upload your products and send us your stock — setup is quick and guided.",
  },
  {
    icon: ShieldIcon,
    title: "Secure storage solutions",
    desc: "Your inventory is stored safely in our advanced, organized facility, ready to ship at any time.",
  },
  {
    icon: GlobeIcon,
    title: "Global fulfillment delivered",
    desc: "We process and dispatch orders swiftly, getting your products to customers worldwide.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-ink text-white py-20 lg:py-28">
      {/* Background shipping-port photo with dark overlay */}
      <Image
        src="/images/storage.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Fast &amp; friendly</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            E-commerce fulfillment with Infinity is easy
          </h2>
          <p className="mt-4 text-white/70">Three simple steps to seamless e-commerce success.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <span className="absolute -top-4 left-8 flex size-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="flex size-14 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <s.icon className="size-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Start your fulfill journey now
            <ArrowRightIcon className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
