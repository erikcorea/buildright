"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import type { SampleProject } from "@/data/projects";

export function ProjectCarousel({ projects }: { projects: SampleProject[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 480);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-[38%]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Previous projects"
        className="absolute left-0 top-[38%] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white p-2.5 text-brand-900 shadow-md transition-colors hover:bg-brand-50 sm:flex"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Next projects"
        className="absolute right-0 top-[38%] hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white p-2.5 text-brand-900 shadow-md transition-colors hover:bg-brand-50 sm:flex"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
