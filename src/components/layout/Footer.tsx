import Link from "next/link";
import { nav, site } from "@/lib/site";
import { caseStudies } from "@/lib/projects";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { TelegramIcon, XIcon } from "../ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-auto border-t border-line bg-bg">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-muted">
              Social media, X growth and community for Web3, crypto and emerging tech. Timelines in, users out.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href={site.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 text-fg hover:text-accent"
              >
                <XIcon className="size-4" /> <span className="link-underline">@{site.handle}</span>
              </a>
              <a
                href={site.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 text-fg hover:text-accent"
              >
                <TelegramIcon className="size-4" /> <span className="link-underline">{site.links.telegramHandle}</span>
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="label">Pages</p>
              <ul className="mt-5 space-y-3">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-underline text-muted hover:text-fg">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Case studies</p>
              <ul className="mt-5 space-y-3">
                {caseStudies.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/work/${p.slug}`} className="link-underline text-muted hover:text-fg">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="label">Start a project</p>
              <p className="mt-5 text-muted">Launching, rebuilding or stuck at a plateau? Tell me about it.</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full border border-line-strong px-4 py-2 text-sm hover:border-accent hover:text-accent"
              >
                Request a proposal
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Stanley. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
