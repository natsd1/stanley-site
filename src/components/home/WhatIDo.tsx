import Link from "next/link";
import { homeServices } from "@/lib/services";
import { Container } from "../ui/Container";
import { ServiceIcon } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { Em, SectionHeading } from "../ui/SectionHeading";

export function WhatIDo() {
  return (
    <section className="border-t border-line py-24 lg:py-32" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          title={
            <span id="services-title">
              More than <Em>scheduling posts.</Em>
            </span>
          }
          intro="Anyone can queue tweets. The job is knowing what the timeline will care about, saying it in a way crypto people respect, and giving them somewhere to go next."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s, i) => (
            <li key={s.name} className="bg-bg">
              <Reveal delay={0.04 * i} className="h-full">
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col p-6 sm:min-h-[280px] transition-colors duration-300 hover:bg-surface sm:p-8"
                >
                  <div className="flex items-start justify-end">
                    <ServiceIcon
                      name={s.icon}
                      className="size-7 text-muted transition-colors duration-300 group-hover:text-accent"
                    />
                  </div>
                  <h3 className="mt-auto pt-8 text-2xl sm:pt-12 font-semibold tracking-tight">{s.name}</h3>
                  <p className="mt-3 text-muted">{s.body}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
