import Link from "next/link";
import { HammerIcon } from "@/components/icons";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 font-bold tracking-tight"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-500 text-white">
        <HammerIcon className="h-5 w-5" />
      </span>
      <span className={`text-lg leading-tight ${dark ? "text-white" : "text-brand-950"}`}>
        BuildRight
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-500">
          Construction LLC
        </span>
      </span>
    </Link>
  );
}
