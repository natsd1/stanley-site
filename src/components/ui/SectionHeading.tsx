import clsx from "clsx";

export function Eyebrow({ index, children, className }: { index?: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("label flex items-center gap-3", className)}>
      {index && <span className="text-accent">{index}</span>}
      <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  className,
  align = "split",
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  align?: "split" | "stack";
}) {
  return (
    <div
      className={clsx(
        "grid gap-6",
        align === "split" && "lg:grid-cols-12 lg:items-end",
        className,
      )}
    >
      <div className={clsx(align === "split" && "lg:col-span-7")}>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-h2 font-semibold">{title}</h2>
      </div>
      {intro && (
        <div className={clsx("text-lg text-muted", align === "split" ? "lg:col-span-4 lg:col-start-9" : "max-w-2xl")}>
          {intro}
        </div>
      )}
    </div>
  );
}

/** Serif italic accent inside headings */
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-serif font-normal italic tracking-[-0.01em]">{children}</em>;
}
