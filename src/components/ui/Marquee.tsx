import clsx from "clsx";

/** Ticker-style marquee. Content is duplicated for a seamless loop and hidden from screen readers. */
export function Marquee({ items, className }: { items: React.ReactNode[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          {item}
          <span className="mx-8 text-line-strong" aria-hidden="true">
            /
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={clsx("group relative flex overflow-hidden", className)}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
