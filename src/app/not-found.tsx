import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-600">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-950">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-brand-900/85">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 hover:bg-accent-600"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
