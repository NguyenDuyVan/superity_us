import {
  InboxIcon,
  WarehouseIcon,
  ClipboardIcon,
  BoxIcon,
  TruckIcon,
  ReturnIcon,
} from "./icons";

const services = [
  { icon: InboxIcon, title: "Receiving Goods", desc: "We receive and check your inbound inventory the moment it arrives at our facility." },
  { icon: WarehouseIcon, title: "Storage of Goods", desc: "Secure, organized warehousing that keeps your products safe and ready to ship." },
  { icon: ClipboardIcon, title: "Order Processing", desc: "Orders sync automatically and move into fulfillment without manual work." },
  { icon: BoxIcon, title: "Pick & Pack", desc: "Accurate picking and protective packing for every single order." },
  { icon: TruckIcon, title: "Order Fulfillment", desc: "Fast dispatch and reliable global shipping to your customers' doors." },
  { icon: ReturnIcon, title: "Returns Management", desc: "Hassle-free returns handling that keeps your customers happy." },
];

export default function Services() {
  return (
    <section id="services" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Our fulfillment services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Our service exceeds your expectations
          </h2>
          <p className="mt-4 text-ink-soft">
            Streamlining your e-commerce with reliable, efficient fulfillment services at every step.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg hover:-translate-y-1"
            >
              <span className="flex size-14 items-center justify-center rounded-xl bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">
                <s.icon className="size-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
