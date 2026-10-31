import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-ink hover:bg-fg border border-accent hover:border-fg",
  secondary:
    "border border-line-strong text-fg hover:border-fg hover:bg-fg hover:text-ink",
  ghost: "text-fg hover:text-accent px-0",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
  external?: boolean;
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium tracking-tight transition-colors duration-300",
    styles[variant],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
