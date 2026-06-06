import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";

import type { Project } from "@/lib/types";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <a
      href={project.link ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group flex flex-col gap-6 cursor-pointer", className)}
    >
      <div
        className="aspect-video w-full bg-muted/30 transition-all duration-500 group-hover:bg-muted/50 border border-border/50 flex items-center justify-center"
      >
        <RiGithubFill size={48} className="text-muted-foreground/30" />
      </div>
      <div className="space-y-2 px-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight lowercase text-foreground sm:text-2xl group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <RiExternalLinkLine size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold lowercase tracking-widest text-muted-foreground/50">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-base text-muted-foreground lowercase leading-relaxed max-w-xl">
          {project.description}
        </p>
      </div>
    </a>
  );
}
