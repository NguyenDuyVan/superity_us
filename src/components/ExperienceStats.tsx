const stats = [
  { value: "120+", label: "Team members" },
  { value: "20K", label: "Sq ft of warehouse" },
  { value: "30+", label: "Countries supported" },
  { value: "800+", label: "Customers served" },
];

export default function ExperienceStats() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Our experience</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Over 3,500K orders fulfilled annually
          </h2>
          <p className="mt-4 text-ink-soft">Empowering growth with impressive, measurable achievements.</p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-black/5 bg-muted px-6 py-8 text-center"
            >
              <div className="text-4xl font-extrabold text-brand">{s.value}</div>
              <div className="mt-2 font-medium text-ink">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
