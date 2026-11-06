import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/Container";
import { TelegramIcon, XIcon } from "../ui/Icons";

export function FinalCta() {
  return (
    <section className="bg-accent text-ink" aria-labelledby="cta-title">
      <Container className="py-20 lg:py-28">
        <h2 id="cta-title" className="max-w-5xl text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          Built something worth <em className="font-serif font-normal italic">paying attention to?</em>
        </h2>
        <div className="mt-12 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-12">
          <p className="max-w-lg text-lg text-ink/80 lg:col-span-6">
            Launching soon, rebuilding after a quiet stretch or stuck at a plateau. Send me the project and
            what you&apos;re trying to hit. I&apos;ll tell you honestly if I can help.
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:col-span-6 lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-medium text-fg transition-colors hover:bg-surface-2"
            >
              Let&apos;s work together
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={site.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-4 font-medium transition-colors hover:border-ink"
            >
              <TelegramIcon className="size-4" /> Telegram
            </a>
            <a
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-4 font-medium transition-colors hover:border-ink"
            >
              <XIcon className="size-4" /> DM on X
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
