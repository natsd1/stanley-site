import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found" };

const links = [
  { href: "/work", label: "Case studies" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 lg:pt-48">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
      <Container className="relative">
        <p className="label">
          <span className="text-accent">Error 404</span> · route not found
        </p>
        <h1 className="mt-6 text-display font-semibold">
          Rugged<span className="text-accent">.</span>
        </h1>
        <p className="mt-8 max-w-xl text-xl text-muted">
          Not really. This page just doesn&apos;t exist. The link might be old, or the URL has a typo. Here&apos;s where
          to go instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact me
          </ButtonLink>
        </div>
        <ul className="mt-16 grid max-w-3xl grid-cols-2 border-t border-line sm:grid-cols-4">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line">
              <Link href={l.href} className="block py-4 text-muted transition-colors hover:text-accent">
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
