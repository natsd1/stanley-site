import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Em } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TelegramIcon, XIcon } from "@/components/ui/Icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Work With Me",
  description: "Hiring a Web3 social media manager? Send your project details, or reach Stanley directly on Telegram or X.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Telegram", handle: site.links.telegramHandle, href: site.links.telegram, Icon: TelegramIcon, note: "Fastest reply" },
  { label: "X (Twitter)", handle: `@${site.handle}`, href: site.links.x, Icon: XIcon, note: "DMs open" },
];

const next = [
  "I read your message and look at your project and channels.",
  "If it's a fit, we set up a short call.",
  "You get a proposal with scope, deliverables and pricing.",
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <Container className="relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <h1 className="text-h1 font-semibold">
              Let&apos;s make <Em>some noise.</Em>
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted">
              Tell me what you&apos;re building and where you want to be. Pre-launch, post-launch or stuck at a plateau,
              I&apos;ll give you a straight answer on whether I can help.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12 border-t border-line">
              {channels.map(({ label, handle, href, Icon }) => (
                <li key={label} className="border-b border-line">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 py-5"
                  >
                    <span className="grid size-12 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex-1 text-xl font-medium transition-colors group-hover:text-accent">
                      <span className="sr-only">{label}: </span>
                      {handle}
                    </span>
                    <ArrowUpRight className="size-5 text-dim group-hover:text-accent" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <p className="label">What happens next</p>
            <ol className="mt-5 space-y-4">
              {next.map((n, i) => (
                <li key={n} className="flex gap-4 text-muted">
                  <span className="font-mono text-xs text-accent pt-1">0{i + 1}</span>
                  {n}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="/work"
              className="group mt-12 flex items-center justify-between rounded-[4px] border border-line p-5 transition-colors hover:border-line-strong hover:bg-surface"
            >
              <span className="font-medium">See the case studies first</span>
              <ArrowUpRight className="size-5 text-dim transition-colors group-hover:text-accent" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[4px] border border-line bg-bg p-6 sm:p-10">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">Project details</h2>
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
