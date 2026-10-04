const partners = ["Shopify", "Amazon", "WooCommerce", "eBay", "TikTok Shop", "Etsy", "Walmart", "Wix"];

export default function Marketplaces() {
  return (
    <section className="bg-muted py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Successful fulfillment</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Join now &amp; sell your products globally
          </h2>
          <p className="mt-4 text-ink-soft">
            We take pride in our partnerships with premier e-commerce marketplaces.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center rounded-xl bg-white px-4 py-6 text-lg font-bold text-ink/70 shadow-sm ring-1 ring-black/5 transition hover:text-brand"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
