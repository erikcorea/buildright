"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { MenuIcon, PhoneIcon, XIcon } from "@/components/icons";
import { navLinks } from "@/data/nav";
import { business } from "@/data/business";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <Container className="flex h-24 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-600 ${
                  active ? "text-accent-600" : "text-brand-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-brand-900 hover:text-accent-600"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-accent-500 px-4 py-2.5 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-hover"
          >
            Get a Free Estimate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-base font-medium text-brand-900 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-md px-2 py-2.5 text-base font-semibold text-brand-900"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-accent-500 px-4 py-3 text-center text-sm font-semibold text-brand-950"
            >
              Get a Free Estimate
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
