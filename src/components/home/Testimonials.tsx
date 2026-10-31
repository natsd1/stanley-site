import { Container } from "../ui/Container";
import { Em, SectionHeading } from "../ui/SectionHeading";

/**
 * Placeholder testimonial slots. Replace `slots` with real quotes once you have
 * written permission from the person quoted. Never publish invented testimonials.
 */
type Testimonial = { quote: string; name: string; role: string } | null;
const slots: Testimonial[] = [null, null, null];

export function Testimonials() {
  return (
    <section className="border-t border-line py-24 lg:py-32" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Testimonials"
          title={
            <span id="testimonials-title">
              Words from <Em>the people I&apos;ve worked with.</Em>
            </span>
          }
          intro={
            <>
              Being collected now. These slots stay empty until real people say real things, because fake
              testimonials are the most crypto thing a site can do, in the worst way.
            </>
          }
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {slots.map((t, i) =>
            t ? (
              <li key={i} className="flex flex-col rounded-[4px] border border-line bg-surface p-8">
                <span className="font-serif text-6xl leading-none text-accent" aria-hidden="true">“</span>
                <blockquote className="mt-4 flex-1 text-lg">{t.quote}</blockquote>
                <p className="mt-8 text-sm">
                  <span className="font-medium">{t.name}</span> <span className="text-dim">· {t.role}</span>
                </p>
              </li>
            ) : (
              <li
                key={i}
                className="flex min-h-[260px] flex-col rounded-[4px] border border-dashed border-line-strong p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-6xl leading-none text-line-strong" aria-hidden="true">“</span>
                  <span className="label">Slot 0{i + 1}</span>
                </div>
                <p className="mt-4 flex-1 text-dim">
                  Reserved for a founder, team lead or community member from a project I&apos;ve worked on.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="size-9 rounded-full border border-dashed border-line-strong" aria-hidden="true" />
                  <div className="space-y-1.5" aria-hidden="true">
                    <span className="block h-2 w-24 rounded bg-surface-2" />
                    <span className="block h-2 w-16 rounded bg-surface-2" />
                  </div>
                  <span className="sr-only">Placeholder testimonial</span>
                </div>
              </li>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
}
