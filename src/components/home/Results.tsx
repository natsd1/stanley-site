import Link from "next/link";
import { Container } from "../ui/Container";
import { CountUp } from "../ui/CountUp";
import { Reveal } from "../ui/Reveal";
import { Em, SectionHeading } from "../ui/SectionHeading";
import { ResultTag } from "../ui/ResultTag";

const stats = [
  { to: 21000, suffix: "+", label: "Social audience built across platforms", source: "OdinBot", href: "/work/odinbot" },
  { to: 16900, suffix: "+", label: "Discord community members", source: "OdinBot", href: "/work/odinbot" },
  { to: 10000, suffix: "", label: "Peak active users in that community", source: "OdinBot", href: "/work/odinbot" },
  { to: 500, suffix: "+", label: "African Web3 beginners onboarded & educated", source: "Konoha", href: "/work/konoha" },
];

export function Results() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="results-title">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="Selected results"
          title={
            <span id="results-title">
              Numbers I can <Em>show receipts for.</Em>
            </span>
          }
          intro="Every figure comes from projects I worked on directly, and each one links to the case study behind it."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line lg:grid-cols-12">
          {/* Feature: 23 → 4,600+ */}
          <Reveal className="relative bg-bg p-6 sm:p-10 lg:col-span-6">
            <div className="flex items-center justify-between">
              <p className="label">OdinBot · X followers</p>
              <ResultTag kind="verified" />
            </div>
            <p className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-semibold tracking-[-0.05em]">
              <span className="text-5xl text-dim sm:text-6xl">23</span>
              <span className="text-3xl text-dim sm:text-4xl" aria-hidden="true">→</span>
              <span className="text-[clamp(4rem,10vw,8.5rem)] leading-none text-fg">
                <CountUp to={4600} suffix="+" duration={2} />
              </span>
            </p>
            <p className="mt-4 max-w-md text-muted">
              Grew OdinBot&apos;s X account from 23 followers to 4,600+. That&apos;s roughly 200x, built on content,
              replies, Spaces and community.
            </p>

            {/* Honest two-point comparison: start vs reached. No invented in-between data. */}
            <div className="mt-10 space-y-3" aria-hidden="true">
              <div className="flex items-center gap-4">
                <span className="w-16 font-mono text-xs text-dim">Start</span>
                <div className="h-3 flex-1 bg-surface-2">
                  <div className="h-full bg-line-strong" style={{ width: "0.5%" }} />
                </div>
                <span className="w-14 text-right font-mono text-xs text-dim">23</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 font-mono text-xs text-dim">Reached</span>
                <div className="h-3 flex-1 bg-surface-2">
                  <div className="h-full origin-left bg-accent" style={{ width: "100%" }} />
                </div>
                <span className="w-14 text-right font-mono text-xs text-fg">4,600+</span>
              </div>
            </div>
            <Link href="/work/odinbot" className="label mt-10 inline-block text-fg hover:text-accent">
              Read the OdinBot case study →
            </Link>
          </Reveal>

          <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i} className="flex flex-col justify-between bg-bg p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <Link href={s.href} className="label hover:text-accent">
                  {s.source}
                </Link>
                <span className="size-1.5 rounded-full bg-accent" title="Verified metric" aria-hidden="true" />
              </div>
              <p className="mt-8 text-5xl font-semibold tracking-[-0.05em] lg:text-[3.4rem] xl:text-6xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-muted">{s.label}</p>
            </Reveal>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
