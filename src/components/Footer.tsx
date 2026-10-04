import { site } from "@/lib/site";
import { MailIcon, PinIcon } from "./icons";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    title: "Services",
    links: ["Marketplace Service", "Warehousing Service", "Prep Service", "Labeling Service", "Custom Kitting & Packaging"],
  },
  {
    title: "Company",
    links: ["FAQ", "Solutions", "About Us", "Testimonials", "Contact Us"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 lg:grid-cols-4">
        {/* Brand + intro */}
        <div className="lg:col-span-1">
          <div className="text-2xl font-extrabold text-white">
            SUPERITY<span className="text-brand"> FULFILLMENT</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Simplify your e-commerce with Superity&apos;s hassle-free China fulfillment solution for bigger success.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand">
              <MailIcon className="size-4 shrink-0" />
              {site.email}
            </a>
            <p className="flex items-start gap-2">
              <PinIcon className="size-4 shrink-0 mt-0.5" />
              <span>{site.address.full}</span>
            </p>
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-bold text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#contact" className="hover:text-brand transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-white">Newsletter</h3>
          <p className="mt-4 text-sm">Get fulfillment tips and updates in your inbox.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-white/60">
          © 2024–2026 {site.company}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
