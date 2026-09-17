"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import type { SampleProject } from "@/data/projects";

// Index-based slider with one clone of the last item prepended and one
// clone of the first item appended. Real slides live at indices 1..n;
// sliding past either end lands on a clone, and once the slide
// transition finishes we jump (with the transition briefly disabled,
// so it's invisible) back to the matching real index. Because
// navigation is just index +/- 1 with wraparound, "next" and "prev"
// are symmetric by construction — no native-scroll timing to get wrong.
export function ProjectCarousel({ projects }: { projects: SampleProject[] }) {
  const n = projects.length;
  const slides = [projects[n - 1], ...projects, projects[0]];

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [step, setStep] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const first = track?.children[0] as HTMLElement | undefined;
      if (!track || !first) return;
      const gap = parseFloat(getComputedStyle(track).columnGap || "0");
      setStep(first.getBoundingClientRect().width + gap);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = (next: number) => {
    setAnimate(true);
    setIndex(next);
  };

  const handleTransitionEnd = () => {
    if (index === 0) {
      setAnimate(false);
      setIndex(n);
    } else if (index === n + 1) {
      setAnimate(false);
      setIndex(1);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex gap-6 ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * step}px)` }}
        >
          {slides.map((project, i) => (
            <div key={i} className="w-[85%] shrink-0 sm:w-[55%] lg:w-[38%]">
              <ProjectCard
                project={project}
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 55vw, 85vw"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous projects"
        className="absolute left-0 top-[38%] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white p-2.5 text-brand-900 shadow-md transition-colors hover:bg-brand-50 sm:flex"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next projects"
        className="absolute right-0 top-[38%] hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white p-2.5 text-brand-900 shadow-md transition-colors hover:bg-brand-50 sm:flex"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
