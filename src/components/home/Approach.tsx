import { approach } from "@/lib/services";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Em, Eyebrow } from "../ui/SectionHeading";

export function Approach() {
  return (
    <section className="border-t border-line bg-surface/40 py-24 lg:py-32" aria-labelledby="approach-title">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index="04">My approach</Eyebrow>
            <h2 id="approach-title" className="mt-5 text-h2 font-semibold">
              A loop, <Em>not a launch.</Em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted">
              Growth comes from running the same six steps again and again, getting sharper each time. Here&apos;s
              the loop.
            </p>
            {/* Loop diagram */}
            <svg viewBox="0 0 220 220" className="mt-10 hidden w-56 lg:block" aria-hidden="true">
              <circle cx="110" cy="110" r="90" fill="none" stroke="#2c2c29" />
              <circle cx="110" cy="110" r="90" fill="none" stroke="#c9f23a" strokeDasharray="94 471" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 110 110" to="360 110 110" dur="14s" repeatCount="indefinite" />
              </circle>
              {Array.from({ length: 6 }).map((_, i) => {
                const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
                return (
                  <g key={i}>
                    <circle cx={110 + 90 * Math.cos(a)} cy={110 + 90 * Math.sin(a)} r="14" fill="#0b0b0a" stroke="#383834" />
                    <text
                      x={110 + 90 * Math.cos(a)}
                      y={110 + 90 * Math.sin(a) + 4}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#a3a39b"
                      fontFamily="var(--font-jetbrains)"
                    >
                      0{i + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {approach.map((a, i) => (
            <li key={a.step} className="group border-t border-line last:border-b">
              <Reveal delay={0.03 * i} className="grid grid-cols-[3rem_1fr] gap-4 py-8 sm:grid-cols-[4rem_1fr_1.4fr] sm:gap-8 sm:py-10">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                  {a.step}
                </h3>
                <p className="col-start-2 text-muted sm:col-start-3">{a.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
