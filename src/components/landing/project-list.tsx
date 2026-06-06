import type { Project } from "@/lib/types";

import { AnimatedGroup } from "@/components/motions/animated-group";

import { ProjectCard } from "./project-card";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-12 flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground lowercase">
          no projects to show yet. i'm currently busy building.
        </p>
      </div>
    );
  }

  return (
    <AnimatedGroup
      className="flex flex-col gap-8"
      preset="blur-slide"
    >
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </AnimatedGroup>
  );
}
