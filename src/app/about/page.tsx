import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Em, Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Portrait } from "@/components/home/Portrait";
import { experience, industries, strengths, tools } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stanley is a Web3 social media manager and community builder. The story, the philosophy, the strengths and the projects behind them.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Culture before campaigns.",
    body: "Crypto audiences follow people and ideas, not ad copy. If a brand doesn't sound like it belongs on the timeline, nothing else matters.",
  },
  {
    title: "Communities over audiences.",
    body: "An audience watches. A community talks back, helps new people and sticks around in a bear market. I build for the second one.",
  },
  {
    title: "Users are the scoreboard.",
    body: "Followers and impressions are signals, not the goal. The question is always: did this bring people closer to using the product?",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="//"
        eyebrow="About"
        title={
          <>
            Crypto lives on the timeline. <Em>I help projects win there.</Em>
          </>
        }
      />

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Portrait className="max-w-xs" />
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7 lg:col-start-6 lg:text-xl">
            <p className="text-2xl leading-snug text-fg lg:text-3xl">
              I&apos;m Stanley. I&apos;m a social media manager for Web3, crypto and emerging tech, and I go by{" "}
              <span className="text-accent">DeFi_Senseii</span> online.
            </p>
            <p>
              My work sits where social media, community and growth overlap. I&apos;ve run X accounts, built and
              moderated Discord communities, hosted Spaces, written threads and memes, and helped push product
              launches out into a market that has seen everything.
            </p>
            <p>
              The biggest chapter so far was OdinBot, where I was Growth &amp; Operations Lead. We took the X
              account from 23 followers to 4,600+, built a Discord to 16,900+ members and reached 21,000+ followers
              across platforms before the project was acquired by Cielo Finance.
            </p>
            <p>
              I&apos;ve also worked on social for Axxel and SocialFun, managed the community for FluxPoint, a Web3
              game on Cardano, and through Konoha I helped onboard
              and educate 500+ African Web3 beginners. Teaching people from zero is still the best growth lesson I
              know: if you can&apos;t explain it simply, nobody shares it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="border-t border-line py-20 lg:py-28" aria-labelledby="philosophy">
        <Container>
          <Eyebrow index="01">Philosophy</Eyebrow>
          <h2 id="philosophy" className="sr-only">
            Philosophy
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i} className="bg-bg p-8 lg:p-10">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-10 font-serif text-4xl italic leading-[1.05] tracking-[-0.02em] lg:text-[2.6rem]">{p.title}</h3>
                <p className="mt-5 text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Strengths + industries */}
      <section className="border-t border-line py-20 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow index="02">Strengths</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
              What I&apos;m <Em>good at.</Em>
            </h2>
            <ul className="mt-10 flex flex-wrap gap-2">
              {strengths.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line-strong px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-fg"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow index="03">Industries</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
              Markets I <Em>speak.</Em>
            </h2>
            <ul className="mt-10 border-t border-line">
              {industries.map((ind, i) => (
                <li key={ind.name} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5">
                  <span className="font-mono text-xs text-dim pt-1.5">0{i + 1}</span>
                  <div>
                    <p className="text-xl font-medium">{ind.name}</p>
                    <p className="mt-1 text-muted">{ind.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Experience timeline */}
      <section className="border-t border-line bg-surface/40 py-20 lg:py-28" aria-labelledby="experience-title">
        <Container>
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title={
              <span id="experience-title">
                Where I&apos;ve <Em>put in the reps.</Em>
              </span>
            }
            intro="The projects behind the numbers. Each one links to a full case study."
          />
          <ol className="relative mt-14 border-l border-line-strong pl-8 sm:pl-12">
            {experience.map((e, i) => (
              <li key={e.project} className="relative pb-14 last:pb-0">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-2 size-[9px] rounded-full border border-accent bg-bg sm:-left-[calc(3rem+5px)]"
                  aria-hidden="true"
                />
                <Reveal delay={0.03 * i} className="grid gap-4 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    {e.period && <p className="label mb-2">{e.period}</p>}
                    <h3 className="text-3xl font-semibold tracking-tight">{e.project}</h3>
                    <p className="mt-1 text-accent">{e.role}</p>
                  </div>
                  <ul className="space-y-2 text-muted lg:col-span-5">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-3 h-px w-3 shrink-0 bg-line-strong" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {e.slug && (
                    <div className="lg:col-span-3 lg:text-right">
                      <Link href={`/work/${e.slug}`} className="label text-fg hover:text-accent">
                        Case study →
                      </Link>
                    </div>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Tools */}
      <section className="border-t border-line py-20 lg:py-28" aria-labelledby="tools-title">
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Toolkit"
            title={
              <span id="tools-title">
                Tools <Em>of the trade.</Em>
              </span>
            }
            intro="Tools change. Taste and timing don't. Still, here's what's usually open on my screen."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((g) => (
              <div key={g.group} className="bg-bg p-6 sm:p-8">
                <p className="label">{g.group}</p>
                <ul className="mt-6 space-y-2.5">
                  {g.items.map((t) => (
                    <li key={t} className="text-lg">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 lg:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-h2 font-semibold">
            Sound like a fit? <Em>Let&apos;s talk.</Em>
          </h2>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              See services
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
