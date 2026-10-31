import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Em } from "@/components/ui/SectionHeading";
import { ResultLegend, ResultTag } from "@/components/ui/ResultTag";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { CaseSection } from "@/components/work/CaseSection";
import { caseStudies, getProject } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} Case Study`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title: `${p.name} — Case study`, description: p.summary },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p || !p.hasCaseStudy) notFound();

  const i = caseStudies.findIndex((c) => c.slug === p.slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden pt-32 lg:pt-40">
        <Container>
          <Reveal>
            <Link href="/work" className="label inline-flex items-center gap-2 hover:text-fg">
              <ArrowLeft className="size-3.5" aria-hidden="true" /> All work
            </Link>
            <p className="label mt-10">
              <span className="text-accent">Case {p.index}</span> · {p.sector}
            </p>
            <h1 className="mt-4 text-display font-semibold tracking-[-0.06em]">{p.name}</h1>
            <p className="mt-4 max-w-3xl font-serif text-3xl italic leading-tight text-muted sm:text-4xl">{p.tagline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line lg:grid-cols-4">
              <div className="bg-bg p-5">
                <dt className="label">Role</dt>
                <dd className="mt-2 font-medium">{p.role}</dd>
              </div>
              <div className="bg-bg p-5">
                <dt className="label">Sector</dt>
                <dd className="mt-2 font-medium">{p.sector}</dd>
              </div>
              <div className="col-span-2 bg-bg p-5">
                <dt className="label">Focus</dt>
                <dd className="mt-2 font-medium">{p.focus.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>

        <Container className="mt-10">
          <Reveal delay={0.15}>
            <ProjectVisual project={p} size="lg" showName={false} className="aspect-[21/9]!" />
          </Reveal>
        </Container>
      </header>

      {/* Headline metrics */}
      {p.headline && p.headline.length > 0 && (
        <section className="py-16 lg:py-20" aria-label="Headline results">
          <Container>
            <div
              className={`grid gap-px overflow-hidden rounded-[4px] border border-line bg-line ${
                p.headline.length > 1 ? "sm:grid-cols-2 lg:grid-cols-4" : ""
              }`}
            >
              {p.headline.map((m) => (
                <div key={m.label} className="bg-bg p-6 sm:p-8">
                  <ResultTag kind={m.kind} />
                  <p className={`mt-8 whitespace-nowrap font-semibold tracking-[-0.04em] ${(m.value ?? "").length > 8 ? "text-4xl" : "text-4xl sm:text-5xl"}`}>{m.value}</p>
                  <p className="mt-2 text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Container className="pb-8">
        {p.overview && (
          <CaseSection index="01" title="Overview">
            <div className="space-y-6 text-xl leading-relaxed text-muted lg:text-2xl lg:leading-snug">
              {p.overview.map((para, k) => (
                <p key={k} className={k === 0 ? "text-fg" : undefined}>
                  {para}
                </p>
              ))}
            </div>
          </CaseSection>
        )}

        <CaseSection index="02" title="My role">
          <p className="text-3xl font-semibold tracking-tight">{p.role}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.focus.map((f) => (
              <li key={f} className="rounded-full border border-line-strong px-4 py-2 text-sm text-muted">
                {f}
              </li>
            ))}
          </ul>
        </CaseSection>

        {p.objectives && (
          <CaseSection index="03" title="Objectives">
            <ol className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
              {p.objectives.map((o, k) => (
                <li key={o} className="bg-bg p-6">
                  <span className="font-mono text-xs text-accent">0{k + 1}</span>
                  <p className="mt-4 text-lg">{o}</p>
                </li>
              ))}
            </ol>
          </CaseSection>
        )}

        {p.strategy && (
          <CaseSection index="04" title="Strategy">
            <div className="space-y-10">
              {p.strategy.map((s) => (
                <div key={s.title} className="border-l-2 border-accent pl-6">
                  <h3 className="font-serif text-3xl italic leading-tight">{s.title}</h3>
                  <p className="mt-3 max-w-2xl text-lg text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </CaseSection>
        )}

        {p.execution && (
          <CaseSection index="05" title="Execution">
            <ul className="border-t border-line">
              {p.execution.map((e) => (
                <li key={e.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <h3 className="font-medium">{e.title}</h3>
                  <p className="text-muted">{e.body}</p>
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        {p.results && (
          <CaseSection index="06" title="Results" aside={<ResultLegend className="mt-6" />}>
            <ul className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
              {p.results.map((r) => (
                <li key={r.label} className="flex flex-col bg-bg p-6 sm:p-8">
                  <ResultTag kind={r.kind} />
                  {r.value && <p className="mt-6 text-4xl font-semibold tracking-[-0.04em]">{r.value}</p>}
                  <p
                    className={
                      r.value
                        ? "mt-2 text-muted"
                        : `mt-6 text-2xl font-semibold tracking-tight ${r.kind === "placeholder" ? "text-dim" : ""}`
                    }
                  >
                    {r.label}
                  </p>
                  {r.note && <p className="mt-2 text-sm text-dim">{r.note}</p>}
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        {p.evidence && (
          <CaseSection index="07" title="Visual evidence">
            <p className="mb-6 text-muted">
              Screenshots and proof are being added. Ask me directly and I&apos;ll share them.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {p.evidence.map((e) => (
                <li
                  key={e.label}
                  className="flex aspect-[16/10] flex-col justify-between rounded-[4px] border border-dashed border-line-strong bg-surface/50 p-5"
                >
                  <div className="flex items-center justify-between">
                    <ResultTag kind="placeholder" />
                    <ImageIcon className="size-5 text-dim" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">{e.label}</p>
                    <p className="mt-1 text-sm text-dim">{e.hint}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        {p.takeaways && (
          <CaseSection index="08" title="Key takeaways">
            <ul className="space-y-8">
              {p.takeaways.map((t) => (
                <li key={t} className="font-serif text-3xl italic leading-tight sm:text-4xl">
                  <span className="mr-3 not-italic text-accent" aria-hidden="true">
                    →
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </CaseSection>
        )}
      </Container>

      {/* CTA */}
      <section className="border-t border-line py-20">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-h2 font-semibold">
            Need this for <Em>your project?</Em>
          </h2>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Services
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Prev / next */}
      <nav aria-label="More case studies" className="border-t border-line">
        <div className="grid sm:grid-cols-2">
          {[
            { p: prev, dir: "Previous", Icon: ArrowLeft },
            { p: next, dir: "Next", Icon: ArrowRight },
          ].map(({ p: c, dir, Icon }, k) => (
            <Link
              key={dir}
              href={`/work/${c.slug}`}
              className={`group flex flex-col gap-3 p-8 transition-colors hover:bg-surface lg:p-12 ${
                k === 1 ? "border-t border-line sm:border-l sm:border-t-0 sm:items-end sm:text-right" : ""
              }`}
            >
              <span className="label inline-flex items-center gap-2">
                {k === 0 && <Icon className="size-3.5" aria-hidden="true" />}
                {dir} case
                {k === 1 && <Icon className="size-3.5" aria-hidden="true" />}
              </span>
              <span className="text-4xl font-semibold tracking-tight transition-colors group-hover:text-accent">{c.name}</span>
              <span className="text-muted">{c.role}</span>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
