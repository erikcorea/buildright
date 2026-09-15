// Small hand-rolled icon set (no external icon dependency) so the
// site has zero extra network/install surface for iconography.

type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 8 9 5 9-5" />
    </svg>
  );
}

export function DoorIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <circle cx="14.5" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FenceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 4 2.5 6.5v13" />
      <path d="M12 4l-2.5 2.5v13" />
      <path d="M19 4l-2.5 2.5v13" />
      <path d="M2 11h20" />
      <path d="M2 16h20" />
    </svg>
  );
}

export function ZapIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3s6 7 6 11.2A6 6 0 0 1 6 14.2C6 10 12 3 12 3Z" />
    </svg>
  );
}

export function HammerIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m15 12 5.5 5.5a1.5 1.5 0 0 1-2.12 2.12L12.88 14" />
      <path d="M4 15l5-5 3 3-5 5H4v-3Z" />
      <path d="m14 6 3-3 3 3-3 3-3-3Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6.5 3h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2L20.5 14v3a2 2 0 0 1-2 2C10.5 19 4 12.5 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.25" />
    </svg>
  );
}

export function StarIcon({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      {...base}
      fill={filled ? "currentColor" : "none"}
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3L12 17.3 6.5 20.3l1-6.3L3 9.6l6.3-.9L12 3Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3 5 5.5V11c0 5 3 8.5 7 10 4-1.5 7-5 7-10V5.5L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" className={className} aria-hidden="true">
      <path d="M9.5 6C6.5 7.2 5 9.6 5 12.8c0 2.4 1.3 3.7 3 3.7 1.6 0 2.8-1.2 2.8-2.8 0-1.5-1-2.6-2.4-2.7.2-1.6 1.4-3 3.1-3.7L9.5 6Zm8.5 0c-3 1.2-4.5 3.6-4.5 6.8 0 2.4 1.3 3.7 3 3.7 1.6 0 2.8-1.2 2.8-2.8 0-1.5-1-2.6-2.4-2.7.2-1.6 1.4-3 3.1-3.7L18 6Z" />
    </svg>
  );
}

export const serviceIconMap = {
  home: HomeIcon,
  wrench: WrenchIcon,
  layers: LayersIcon,
  door: DoorIcon,
  fence: FenceIcon,
  zap: ZapIcon,
  droplet: DropletIcon,
  hammer: HammerIcon,
};
