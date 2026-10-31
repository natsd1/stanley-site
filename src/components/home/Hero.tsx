import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Marquee } from "../ui/Marquee";
import { Reveal } from "../ui/Reveal";
import { SocialLinks } from "../ui/SocialLinks";
import { Portrait } from "./Portrait";
import { site } from "@/lib/site";

const ticker = [
  { k: "ODINBOT · X", v: "23 → 4,600+", up: true },
  { k: "DISCORD", v: "16,000 members", up: true },
  { k: "PEAK ACTIVE", v: "10,000", up: true },
  { k: "COMBINED SOCIAL", v: "21,000+", up: true },
  { k: "KONOHA", v: "500+ onboarded", up: true },
  { k: "SECTORS", v: "DeFi · Trading · Infra · Gaming · Consumer" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32">
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black_20%,transparent_90%)]"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <p className="label">
            <span className="text-fg">{site.name}</span> — {site.title}
          </p>
          <p className="label hidden sm:block">Web3 · Crypto · Emerging tech</p>
        </Reveal>

        <div className="grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-14">
          <div className="lg:col-span-8 lg:pr-6">
            <Reveal>
              <h1 className="text-[clamp(3.2rem,8.2vw,8.4rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
                From timeline
                <br />
                to <em className="font-serif font-normal italic tracking-[-0.02em] text-accent">userbase.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-muted lg:text-xl">
                I&apos;m Stanley. I run social and community for Web3 projects. I get them noticed, build
                communities that actually talk, and turn followers into people who use the product.
                Crypto-native, meme-literate, measured on users.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                Explore My Work
              </ButtonLink>
              <SocialLinks className="ml-1" />
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <Portrait className="mx-auto max-w-sm lg:max-w-none" />
          </Reveal>
        </div>
      </Container>

      <div className="relative border-y border-line bg-surface/50 py-4">
        <Marquee
          items={ticker.map((t) => (
            <span key={t.k} className="flex items-center gap-3 font-mono text-sm">
              <span className="text-dim">{t.k}</span>
              {t.up && <span className="text-accent" aria-hidden="true">▲</span>}
              <span className="text-fg">{t.v}</span>
            </span>
          ))}
        />
      </div>
    </section>
  );
}
