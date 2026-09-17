import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { sampleProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from real BuildRight Construction LLC jobs across Chicago and the surrounding suburbs: kitchens, bathrooms, basements, decks, fences, and whole-home renovations.",
};

const galleryPhotos = sampleProjects.flatMap((project) =>
  project.images.map((image) => ({
    src: image.src,
    alt: image.alt,
    category: project.category,
  }))
);

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-950 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
            Gallery
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Real photos from real jobs
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            {galleryPhotos.length} photos from completed BuildRight projects. Tap any photo to see
            it full size.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <GalleryLightbox photos={galleryPhotos} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
