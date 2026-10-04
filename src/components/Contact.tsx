import { site } from "@/lib/site";
import { MailIcon, PinIcon } from "./icons";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Free quote</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Get a free estimate or schedule an appointment
          </h2>
          <p className="mt-4 text-ink-soft">
            Contact us for a complimentary estimate or consultation — we&apos;re here 24/7 with expert help.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4 rounded-2xl bg-muted p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <MailIcon className="size-5" />
              </span>
              <div>
                <h3 className="font-bold text-ink">Email us</h3>
                <a href={`mailto:${site.email}`} className="mt-1 block text-ink-soft hover:text-brand">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-muted p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <PinIcon className="size-5" />
              </span>
              <div>
                <h3 className="font-bold text-ink">Visit us</h3>
                <address className="mt-1 not-italic text-ink-soft leading-relaxed">
                  {site.address.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>
            </div>
            <p className="text-sm text-ink-soft">{site.company}</p>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
