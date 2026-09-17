"use client";

import { useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import type { SampleProject } from "@/data/projects";

// Three back-to-back copies of the project list create an illusion of an
// endless carousel: we start scrolled into the middle copy, and silently
// (no animation) re-center back into it whenever the user scrolls far
// enough into the leading or trailing copy to notice the seam.
const COPIES = 3;

export function ProjectCarousel({ projects }: { projects: SampleProject[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackWidthRef = useRef(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const measure = () => {
      trackWidthRef.current = el.scrollWidth / COPIES;
    };
    measure();
    // Jump to the middle copy. The container has no CSS scroll-behavior
    // set (default "auto"), so this is an instant, invisible repositioning
    // — not an animated one.
    el.scrollLeft = trackWidthRef.current;

    // Only re-measure on resize — don't reposition. Repositioning here
    // (e.g. on a mobile browser's address-bar-driven resize while the
    // user is mid-scroll) is what caused the carousel to visibly jump.
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const trackWidth = trackWidthRef.current;
      if (!trackWidth) return;
      if (el.scrollLeft < trackWidth * 0.5) {
        el.scrollLeft += trackWidth;
      } else if (el.scrollLeft > trackWidth * 1.5) {
        el.scrollLeft -= trackWidth;
      }
    };
    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      el.removeEventListener("scroll", handleScroll);
    };
  }, [projects]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 480);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const track = Array.from({ length: COPIES }, (_, copyIndex) =>
    projects.map((project) => (
      <div
        key={`${copyIndex}-${project.slug}`}
        className="w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-[38%]"
      >
        <ProjectCard
          project={project}
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 55vw, 85vw"
        />
      </div>
    ))
  );

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {track}
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
