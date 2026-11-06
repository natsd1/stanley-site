import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectHref, type Project } from "@/lib/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  const href = projectHref(project);
  return (
    <article className="group relative flex flex-col">
      <ProjectVisual project={project} />
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            <Link href={href} className="after:absolute after:inset-0">
              {project.name}
            </Link>
          </h3>
          <p className="label mt-1.5 normal-case tracking-normal">{project.role}</p>
        </div>
        <span
          className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink"
          aria-hidden="true"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <p className="mt-3 max-w-md text-muted">{project.summary}</p>
    </article>
  );
}
