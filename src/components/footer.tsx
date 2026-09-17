import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { business } from "@/data/business";
import { navLinks } from "@/data/nav";
import { serviceCategories } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-900/10 bg-brand-950 text-brand-100">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm text-brand-100/80">
            {business.shortDescription}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-100/80 hover:text-accent-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {serviceCategories.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-brand-100/80 hover:text-accent-400"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2.5 hover:text-accent-400">
                <PhoneIcon className="h-4 w-4 shrink-0" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="flex items-center gap-2.5 hover:text-accent-400">
                <MailIcon className="h-4 w-4 shrink-0" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Serving Chicago &amp; the surrounding suburbs</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-100/75 sm:flex-row">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p>Designed &amp; built for {business.ownerName}.</p>
        </Container>
      </div>
    </footer>
  );
}
