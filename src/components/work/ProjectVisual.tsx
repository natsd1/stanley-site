import clsx from "clsx";
import type { Pattern, Project } from "@/lib/projects";

const L = "#2c2c29"; // line
const A = "#c9f23a"; // accent

function Art({ pattern }: { pattern: Pattern }) {
  switch (pattern) {
    case "bars": {
      // Growth bars: a sliver at the start, a wall at the end.
      const h = [4, 6, 9, 12, 18, 25, 34, 46, 60, 78, 100, 128, 160, 196, 236];
      return (
        <g>
          {h.map((v, i) => (
            <rect
              key={i}
              x={24 + i * 24.5}
              y={268 - v}
              width={14}
              height={v}
              fill={i === h.length - 1 ? A : i > h.length - 4 ? "#4a4a44" : L}
            />
          ))}
          <line x1="16" y1="268.5" x2="384" y2="268.5" stroke="#3a3a36" />
        </g>
      );
    }
    case "grid": {
      // Trading terminal: candles on a grid.
      const c = [
        [150, 120, 165, 110], [130, 112, 150, 100], [140, 100, 158, 92], [112, 96, 128, 84],
        [118, 80, 130, 72], [96, 84, 110, 70], [102, 70, 116, 60], [76, 64, 88, 50],
        [82, 56, 94, 44], [60, 52, 74, 40], [66, 40, 80, 30], [48, 34, 58, 22],
      ];
      return (
        <g>
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" x2="400" y1={i * 36} y2={i * 36} stroke="#1f1f1d" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} y1="0" y2="300" x1={i * 36} x2={i * 36} stroke="#1f1f1d" />
          ))}
          {c.map(([o, cl, lo, hi], i) => {
            const x = 40 + i * 28;
            const up = cl < o;
            return (
              <g key={i} transform="translate(0,60)">
                <line x1={x + 6} x2={x + 6} y1={hi} y2={lo + 20} stroke={up ? A : "#55554f"} />
                <rect x={x} y={Math.min(o, cl)} width="12" height={Math.abs(o - cl) || 2} fill={up ? A : "#55554f"} />
              </g>
            );
          })}
        </g>
      );
    }
    case "rings":
      return (
        <g fill="none">
          {[30, 60, 90, 120, 150, 180].map((r, i) => (
            <circle key={r} cx="290" cy="150" r={r} stroke={i === 1 ? A : L} strokeWidth={i === 1 ? 1.5 : 1} />
          ))}
          <circle cx="290" cy="150" r="5" fill={A} />
          <circle cx="230" cy="105" r="3" fill="#6b6b64" />
          <circle cx="360" cy="215" r="3" fill="#6b6b64" />
          <circle cx="200" cy="200" r="3" fill="#6b6b64" />
        </g>
      );
    case "waves":
      return (
        <g fill="none">
          {Array.from({ length: 9 }).map((_, i) => {
            const y = 70 + i * 22;
            const amp = 10 + i * 3;
            return (
              <path
                key={i}
                d={`M0 ${y} C 60 ${y - amp}, 110 ${y + amp}, 170 ${y} S 280 ${y - amp}, 340 ${y} S 420 ${y + amp}, 460 ${y}`}
                stroke={i === 4 ? A : L}
                strokeWidth={i === 4 ? 1.6 : 1}
              />
            );
          })}
        </g>
      );
    case "dots": {
      // People: a dot matrix with a growing cluster lit up.
      
      return (
        <g>
          {Array.from({ length: 16 * 10 }).map((_, i) => {
            const x = 22 + (i % 16) * 24;
            const y = 32 + Math.floor(i / 16) * 24;
            const col = i % 16;
            const row = Math.floor(i / 16);
            const on = col >= 7 && row >= 9 - (col - 7);
            return <circle key={i} cx={x} cy={y} r={on ? 4 : 2} fill={on ? A : "#34342f"} />;
          })}
        </g>
      );
    }
    case "diagonal":
      return (
        <g>
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => {
              const x = 120 + col * 46 - row * 23;
              const y = 70 + row * 40 + col * 0;
              const hl = row === 1 && col === 3;
              return (
                <g key={`${row}-${col}`} transform={`translate(${x} ${y})`}>
                  <path d="M0 13 L23 0 L46 13 L23 26 Z" fill={hl ? A : "#1d1d1b"} stroke={hl ? A : L} />
                  <path d="M0 13 L0 33 L23 46 L23 26 Z" fill={hl ? "#9cbc2b" : "#151514"} stroke={L} />
                  <path d="M46 13 L46 33 L23 46 L23 26 Z" fill={hl ? "#7d9922" : "#121211"} stroke={L} />
                </g>
              );
            }),
          )}
        </g>
      );
  }
}

export function ProjectVisual({
  project,
  className,
  size = "md",
  showName = true,
}: {
  project: Pick<Project, "name" | "index" | "sector" | "pattern">;
  className?: string;
  size?: "md" | "lg";
  showName?: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[4px] border border-line bg-surface",
        size === "lg" ? "aspect-[16/9]" : "aspect-[4/3]",
        className,
      )}
      role="img"
      aria-label={`${project.name} cover graphic`}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        aria-hidden="true"
      >
        <Art pattern={project.pattern} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
        <span className="rounded-sm bg-bg/80 px-1.5 py-0.5 backdrop-blur-sm">Case {project.index}</span>
        <span className="rounded-sm bg-bg/80 px-1.5 py-0.5 backdrop-blur-sm">{project.sector}</span>
      </div>
      {showName && (
      <p
        className={clsx(
          "absolute bottom-0 left-0 p-4 font-semibold tracking-[-0.04em] text-fg sm:p-5",
          size === "lg" ? "text-5xl sm:text-7xl lg:text-8xl" : "text-3xl sm:text-4xl",
        )}
        aria-hidden="true"
      >
        {project.name}
      </p>
      )}
    </div>
  );
}
