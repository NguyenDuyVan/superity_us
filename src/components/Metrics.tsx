const metrics = [
  { value: "99.9%", label: "On-time shipping rate" },
  { value: "99.8%", label: "Order accuracy rate" },
  { value: "30%", label: "Average cost savings" },
];

export default function Metrics() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">{m.value}</div>
            <div className="mt-2 text-white/85">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
