import Image from "next/image";
import clsx from "clsx";
import { site } from "@/lib/site";

/** Portrait frame. Shows the image from site.portrait, or a designed monogram until one is added. */
export function Portrait({ className }: { className?: string }) {
  return (
    <figure className={clsx("relative", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] border border-line bg-surface">
        {site.portrait ? (
          <Image
            src={site.portrait}
            alt="Portrait of Stanley"
            fill
            priority
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover grayscale"
          />
        ) : (
          <>
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
              <span className="font-serif text-[clamp(9rem,22vw,17rem)] italic leading-none text-fg/90">S</span>
            </div>
            <div className="absolute left-1/2 top-[18%] h-[64%] w-px bg-accent/40" aria-hidden="true" />
            <span className="sr-only">Portrait placeholder</span>
          </>
        )}
        {/* Corner ticks */}
        {["left-3 top-3 border-l border-t", "right-3 top-3 border-r border-t", "left-3 bottom-3 border-l border-b", "right-3 bottom-3 border-r border-b"].map(
          (c) => (
            <span key={c} className={clsx("absolute size-4 border-accent", c)} aria-hidden="true" />
          ),
        )}
      </div>
      <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.1em] text-dim">
        <span>Stanley</span>
        <span>@{site.handle}</span>
      </figcaption>
    </figure>
  );
}
