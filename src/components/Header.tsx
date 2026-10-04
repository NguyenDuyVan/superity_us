"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { MenuIcon, CloseIcon, MailIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      {/* Top contact bar */}
      <div className="hidden md:block bg-ink text-white/90 text-sm">
        <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-brand transition-colors">
            <MailIcon className="size-4" />
            {site.email}
          </a>
          <span className="text-white/70">24/7 customer support · Quality inspection on every package</span>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
        <Link href="#home" className="flex items-center" aria-label={site.brand}>
          <Image src="/images/logo.png" alt={site.brand} width={180} height={64} priority className="h-9 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-ink">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-brand transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-muted"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <ul className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-medium text-ink hover:bg-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand px-5 py-3 text-center font-semibold text-white"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
