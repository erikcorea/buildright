import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

export function Stat({
  icon: Icon,
  value,
  label,
  tone = "light",
}: {
  icon: IconComponent;
  value: string;
  label: string;
  tone?: "light" | "gold";
}) {
  if (tone === "gold") {
    return (
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-500 text-brand-950">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className="text-2xl font-bold text-brand-950">{value}</p>
          <p className="text-sm font-medium text-brand-900/85">{label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 shadow-sm">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="text-2xl font-bold text-brand-950">{value}</p>
        <p className="text-sm text-brand-900/80">{label}</p>
      </div>
    </div>
  );
}
