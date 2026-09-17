import Image from "next/image";
import { ClockIcon, serviceIconMap } from "@/components/icons";
import type { SampleProject } from "@/data/projects";

export function ProjectCard({ project }: { project: SampleProject }) {
  const Icon = serviceIconMap[project.icon];
  const heroImage = project.images[0];

  return (
    <div className="overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm">
      <div className="relative flex h-64 items-center justify-center bg-gradient-to-br from-brand-900 to-brand-700">
        {heroImage ? (
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <Icon className="h-14 w-14 text-white/25" />
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-accent-500 px-2.5 py-1 text-[11px] font-semibold text-white">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-brand-950">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{project.scope}</p>
        <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-brand-900/60">
          <ClockIcon className="h-3.5 w-3.5" />
          {project.duration}
        </p>
      </div>
    </div>
  );
}
