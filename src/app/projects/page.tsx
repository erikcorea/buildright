import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { CTASection } from "@/components/cta-section";
import { sampleProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The types of remodeling and construction projects BuildRight Construction LLC takes on in Chicago and the surrounding suburbs.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-brand-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
            Projects
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The kind of work we take on
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-100/80">
            Real photos from completed BuildRight jobs, organized by project type. Full case
            studies with locations and exact timelines are on the way — for now, each card shows
            the typical scope and duration for that kind of project.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Project types"
            title="What a project with BuildRight looks like"
            description="Photos are from real completed jobs; the scope and timeline shown describe a typical project of that type, not a specific past job. Ask us for references any time."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
