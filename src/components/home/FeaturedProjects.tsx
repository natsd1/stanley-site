import Link from "next/link";
import { projects } from "@/lib/projects";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Em, SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../work/ProjectCard";
import { ProjectVisual } from "../work/ProjectVisual";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const [lead, ...rest] = featured;
  const pair = rest.slice(0, 2);
  const trio = rest.slice(2);

  return (
    <section className="border-t border-line py-24 lg:py-32" aria-labelledby="work-title">
      <Container>
        <SectionHeading
          title={
            <span id="work-title">
              Selected <Em>work.</Em>
            </span>
          }
        />

        {/* Lead project */}
        <Reveal className="mt-14">
          <article className="group relative grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <ProjectVisual project={lead} size="lg" />
            </div>
            <div className="lg:col-span-4">
              <p className="label">{lead.role}</p>
              <h3 className="mt-3 text-4xl font-semibold tracking-tight">
                <Link href={`/work/${lead.slug}`} className="after:absolute after:inset-0">
                  {lead.tagline}
                </Link>
              </h3>
              <p className="mt-4 text-muted">{lead.summary}</p>
              <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line">
                {lead.headline?.slice(0, 4).map((m) => (
                  <div key={m.label} className="bg-bg p-4">
                    <dt className="text-xs text-dim">{m.label}</dt>
                    <dd className="mt-1 text-xl font-semibold tracking-tight">{m.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="label mt-6 text-fg group-hover:text-accent">Case study →</p>
            </div>
          </article>
        </Reveal>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {pair.map((p, i) => (
            <Reveal key={p.slug} delay={0.06 * i}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {trio.map((p, i) => (
            <Reveal key={p.slug} delay={0.06 * i}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/work" variant="secondary">
            See all work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
