import { BoltIcon, SmileIcon, CoinIcon } from "./icons";

const pillars = [
  { icon: BoltIcon, title: "Fulfill Efficiency", desc: "Boost operational efficiency with streamlined, reliable, accurate processes." },
  { icon: SmileIcon, title: "Customer Satisfaction", desc: "Elevate customer satisfaction through quick, precise fulfillment services." },
  { icon: CoinIcon, title: "Saving Cost", desc: "Cut down on expenses with tailored, cost-saving fulfillment strategies." },
];

export default function OneStop() {
  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">One-stop fulfillment solution</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Hassle-free from factory floor to customer door
          </h2>
          <p className="mt-5 text-ink-soft">
            From sourcing to final delivery, we cover the whole journey. You name it, we make it —
            so your brand keeps moving without the logistics headache.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-light text-brand">
                <p.icon className="size-8" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
