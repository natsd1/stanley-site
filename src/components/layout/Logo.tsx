import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Stanley, home">
      <span
        className="grid size-8 place-items-center rounded-[6px] bg-accent font-mono text-sm font-bold text-ink transition-transform duration-500 group-hover:rotate-90"
        aria-hidden="true"
      >
        S
      </span>
      <span className="text-[1.05rem] font-semibold tracking-tight">
        Stanley<span className="text-accent">.</span>
      </span>
    </Link>
  );
}
