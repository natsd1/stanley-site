import clsx from "clsx";
import type { ResultKind } from "@/lib/projects";

const copy: Record<ResultKind, string> = {
  verified: "Verified metric",
  qualitative: "Qualitative",
  placeholder: "Placeholder",
};

export function ResultTag({ kind, className }: { kind: ResultKind; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex w-fit shrink-0 self-start items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.08em]",
        kind === "verified" && "bg-accent/12 text-accent",
        kind === "qualitative" && "border border-line-strong text-muted",
        kind === "placeholder" && "border border-dashed border-line-strong text-dim",
        className,
      )}
    >
      <span
        className={clsx(
          "size-1.5 rounded-full",
          kind === "verified" && "bg-accent",
          kind === "qualitative" && "bg-muted",
          kind === "placeholder" && "border border-dim",
        )}
        aria-hidden="true"
      />
      {copy[kind]}
    </span>
  );
}

export function ResultLegend({ className }: { className?: string }) {
  return (
    <div className={clsx("flex flex-wrap items-center gap-2", className)}>
      <ResultTag kind="verified" />
      <ResultTag kind="qualitative" />
      <ResultTag kind="placeholder" />
    </div>
  );
}
