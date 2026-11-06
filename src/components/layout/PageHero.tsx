import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/** Shared header block for inner pages. */
export function PageHero({
  eyebrow,
  index,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  index?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-36 lg:pb-24 lg:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] opacity-50" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <h1 className="max-w-5xl text-h1 font-semibold">{title}</h1>
        </Reveal>
        {(intro || children) && (
          <Reveal delay={0.1} className="mt-8 grid gap-8 lg:grid-cols-12">
            {intro && <div className="text-lg text-muted lg:col-span-6 lg:text-xl">{intro}</div>}
            {children && <div className="lg:col-span-5 lg:col-start-8">{children}</div>}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
