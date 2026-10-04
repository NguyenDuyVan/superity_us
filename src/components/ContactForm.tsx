"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

const inputClass =
  "w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="lg:col-span-3 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-black/5">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand text-white">
          <CheckIcon className="size-7" />
        </span>
        <h3 className="text-xl font-bold text-ink">Message sent successfully!</h3>
        <p className="text-ink-soft">Thanks for reaching out — our team will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:col-span-3 rounded-2xl bg-white p-7 sm:p-8 shadow-xl ring-1 ring-black/5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" type="text" required placeholder="Name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email" className={inputClass} />
        <input name="subject" type="text" placeholder="Subject" className={inputClass} />
        <select name="volume" defaultValue="" className={inputClass} aria-label="Orders shipped per month">
          <option value="" disabled>
            Orders shipped per month?
          </option>
          <option>0 – 1,000</option>
          <option>1,000 – 5,000</option>
          <option>5,000 – 10,000</option>
          <option>10,000 – 50,000</option>
          <option>50,000+</option>
        </select>
      </div>
      <textarea name="message" rows={4} placeholder="Message" className={`${inputClass} mt-4 resize-none`} />
      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-brand px-5 py-3.5 font-semibold text-white hover:bg-brand-dark transition-colors sm:w-auto sm:px-10"
      >
        Send Message
      </button>
    </form>
  );
}
