import Link from "next/link";
import { ChevronRightIcon, serviceIconMap } from "@/components/icons";
import type { ServiceCategory } from "@/data/services";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  const Icon = serviceIconMap[service.icon];

  return (
    <div
      id={service.slug}
      className="group flex scroll-mt-24 flex-col rounded-xl border border-brand-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent-500 text-white shadow-sm">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-brand-950">{service.title}</h3>
      <p className="mt-2.5 text-base leading-relaxed text-brand-900/85">{service.summary}</p>
      <ul className="mt-4 space-y-2 text-base text-brand-900/85">
        {service.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-1 text-base font-semibold text-accent-600 hover:text-accent-700"
      >
        Get a quote for this
        <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
