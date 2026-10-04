import Image from "next/image";
import { StarIcon } from "./icons";

const reviews = [
  {
    name: "Mike Harrison",
    company: "The Pet Paradise",
    image: "/images/testimonial-01.jpg",
    quote:
      "Working with Superity streamlined our operations and gave our sales a real boost. Orders go out fast and our customers notice.",
  },
  {
    name: "Sarah Johnson",
    company: "Fashion Forward Apparel",
    image: "/images/testimonial-02.jpg",
    quote:
      "Their fulfillment has become central to our DTC strategy. Tailored solutions elevated our brand experience and customer satisfaction.",
  },
  {
    name: "Ethan Taylor",
    company: "Smart Home Solutions",
    image: "/images/testimonial-03.jpg",
    quote:
      "The dropshipping service reshaped our business model. Seamless integration let us diversify products and reach customers globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Customer reviews</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            What our customers have to say
          </h2>
          <p className="mt-4 text-ink-soft">Hear directly from our satisfied e-commerce partners.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-5" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-ink-soft leading-relaxed">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={r.image}
                  alt={r.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-ink">{r.name}</div>
                  <div className="text-sm text-ink-soft">{r.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
