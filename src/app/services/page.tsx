import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Em, SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, X growth, content strategy, community management, campaign management and Web3 copywriting for crypto projects.",
  alternates: { canonical: "/services" },
};

const steps = [
  { t: "Intro call", d: "A short call about the project, the goals and what's been tried so far. No pitch deck needed." },
  { t: "Audit", d: "I look at your channels, community and competitors and come back with what I'd change first." },
  { t: "Proposal", d: "Scope, deliverables, timeline and price, matched to what you actually need." },
  { t: "Kickoff", d: "Access, voice guide and the first content calendar. Then we go live." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Six ways I help projects <Em>get noticed and stay noticed.</Em>
          </>
        }
        intro="Hire me for one, or run the whole social side of your project. Every engagement is scoped to your stage, your market and your goals."
      >
        <ButtonLink href="/contact?intent=proposal">Request a Proposal</ButtonLink>
      </PageHero>

      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        {/* Index */}
        <nav aria-label="Services" className="hidden lg:col-span-3 lg:block">
          <ol className="sticky top-32 space-y-1 border-l border-line">
            {services.map((s, i) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="-ml-px flex gap-3 border-l border-transparent py-2 pl-5 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-24 lg:col-span-9 lg:space-y-32">
          {services.map((s) => (
            <section key={s.slug} id={s.slug} className="scroll-mt-28" aria-labelledby={`${s.slug}-title`}>
              <Reveal>
                <h2 id={`${s.slug}-title`} className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                  {s.name}
                </h2>
                <p className="mt-5 max-w-2xl font-serif text-2xl italic leading-snug text-muted sm:text-3xl">{s.short}</p>
              </Reveal>

              <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-2">
                <div className="bg-bg p-6 sm:p-8">
                  <h3 className="label">What it includes</h3>
                  <ul className="mt-5 space-y-3">
                    {s.includes.map((x) => (
                      <li key={x} className="flex gap-3">
                        <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg p-6 sm:p-8">
                  <h3 className="label">Problems it solves</h3>
                  <ul className="mt-5 space-y-3">
                    {s.solves.map((x) => (
                      <li key={x} className="flex gap-3 text-muted">
                        <Minus className="mt-1 size-4 shrink-0 text-dim" aria-hidden="true" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg p-6 sm:p-8">
                  <h3 className="label">How I approach it</h3>
                  <p className="mt-5 text-muted">{s.approach}</p>
                </div>
                <div className="bg-surface p-6 sm:p-8">
                  <h3 className="label">Deliverables</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.deliverables.map((x) => (
                      <li key={x} className="rounded-full border border-line-strong px-3 py-1.5 text-sm">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Container>

      {/* Process */}
      <section className="border-t border-line bg-surface/40 py-20 lg:py-28" aria-labelledby="process-title">
        <Container>
          <SectionHeading
            title={
              <span id="process-title">
                No fixed packages. <Em>Just a clear proposal.</Em>
              </span>
            }
            intro="Every project is at a different stage, so pricing is scoped per engagement. Here's how we get from first message to first post."
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="bg-bg p-6 sm:p-8">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <p className="mt-6 text-2xl font-semibold tracking-tight">{s.t}</p>
                <p className="mt-3 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-col items-start gap-6 rounded-[4px] border border-line p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
            <div>
              <p className="text-2xl font-semibold tracking-tight">Have a project in mind?</p>
              <p className="mt-1 text-muted">Tell me what you&apos;re building. I&apos;ll come back with a proposal.</p>
            </div>
            <ButtonLink href="/contact?intent=proposal">Request a Proposal</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
