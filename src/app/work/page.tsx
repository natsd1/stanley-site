import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Em } from "@/components/ui/SectionHeading";
import { ResultLegend, ResultTag } from "@/components/ui/ResultTag";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { getProject, projectHref, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Case studies from OdinBot, Axxel, Konoha, SocialFun and Blocktopia: X growth, Discord communities, content and Web3 education.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        index="//"
        eyebrow="Work"
        title={
          <>
            Case studies, <Em>with the receipts labelled.</Em>
          </>
        }
        intro="Each project shows what I did, how I approached it and what came out of it. Hard numbers are marked as verified. Everything else is labelled for what it is."
      >
        <div className="rounded-[4px] border border-line bg-surface p-5">
          <p className="label mb-4">How to read results</p>
          <ResultLegend />
          <p className="mt-4 text-sm text-muted">
            Verified = a number I can back with analytics. Qualitative = a contribution without a number.
            Placeholder = data still being added.
          </p>
        </div>
      </PageHero>

      {/* Index table */}
      <section className="py-16 lg:py-20" aria-labelledby="index-title">
        <Container>
          <h2 id="index-title" className="label">
            Index — {projects.length} projects
          </h2>
          <ul className="mt-6 border-t border-line">
            {projects.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link
                  href={projectHref(p)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5 transition-colors hover:bg-surface/60 sm:grid-cols-[3rem_1.2fr_1fr_1fr_auto] sm:px-3"
                >
                  <span className="font-mono text-xs text-dim">{p.index}</span>
                  <span className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                    {p.name}
                  </span>
                  <span className="hidden text-muted sm:block">{p.role}</span>
                  <span className="hidden text-sm text-dim sm:block">{p.sector}</span>
                  <ArrowUpRight
                    className="size-5 text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Feature rows */}
      <section className="pb-24 lg:pb-32" aria-label="Projects">
        <Container className="space-y-24 lg:space-y-32">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            const verified = (p.headline ?? []).filter((m) => m.kind === "verified");
            return (
              <Reveal key={p.slug}>
                <article className="group relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                  <div className={flip ? "lg:order-2 lg:col-span-7 lg:col-start-6" : "lg:col-span-7"}>
                    <ProjectVisual project={p} size="lg" />
                  </div>
                  <div className={flip ? "lg:order-1 lg:col-span-5 lg:row-start-1" : "lg:col-span-5"}>
                    <p className="label">
                      Case {p.index} · {p.sector}
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                      <Link href={projectHref(p)} className="after:absolute after:inset-0">
                        {p.name}
                      </Link>
                    </h2>
                    <p className="mt-2 font-serif text-2xl italic text-muted">{p.tagline}</p>
                    <p className="mt-5 text-muted">{p.summary}</p>
                    <p className="mt-5 text-sm">
                      <span className="text-dim">Role — </span>
                      {p.role}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.focus.map((f) => (
                        <li key={f} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                          {f}
                        </li>
                      ))}
                    </ul>
                    {verified.length > 0 && (
                      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
                        {verified.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <p className="text-2xl font-semibold tracking-tight">{m.value}</p>
                            <p className="text-xs text-dim">{m.label}</p>
                          </div>
                        ))}
                        <ResultTag kind="verified" />
                      </div>
                    )}
                    <p className="label mt-8 text-fg transition-colors group-hover:text-accent">
                      {p.hasCaseStudy ? "Read case study →" : `See the ${getProject(p.relatedSlug ?? "")?.name ?? "related"} case study →`}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <section className="border-t border-line py-20">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-h2 font-semibold">
            Want your project <Em>on this page?</Em>
          </h2>
          <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
        </Container>
      </section>
    </>
  );
}
