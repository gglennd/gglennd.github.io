import { ThemeToggle } from "@/components/theme-toggle";
import { useGitHubProjects } from "@/hooks/use-github-projects";

import { ProjectList } from "./project-list";

export function ProjectSection() {
  const { projects, loading, error } = useGitHubProjects();

  if (loading) {
    return (
      <section id="projects" className="relative">
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm pt-8 pb-8 lg:pt-16 lg:pb-12 flex items-start justify-between">
          <h2 className="text-5xl font-bold tracking-tighter lowercase sm:text-6xl lg:text-7xl">
            projects
          </h2>
        </div>
        <div className="pb-16">
          <div className="space-y-16">
            {[1, 2, 3].map(i => (
              <div key={i} className="group flex flex-col gap-6 animate-pulse">
                <div className="aspect-video w-full bg-muted/30 border border-border/50 rounded" />
                <div className="space-y-2 px-1">
                  <div className="h-7 w-48 bg-muted/30 rounded" />
                  <div className="flex gap-2">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="h-4 w-16 bg-muted/30 rounded" />
                    ))}
                  </div>
                  <div className="h-4 w-full bg-muted/30 rounded" />
                  <div className="h-4 w-3/4 bg-muted/30 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="relative">
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm pt-8 pb-8 lg:pt-16 lg:pb-12 flex items-start justify-between">
          <h2 className="text-5xl font-bold tracking-tighter lowercase sm:text-6xl lg:text-7xl">
            projects
          </h2>
        </div>
        <div className="pb-16">
          <p className="text-muted-foreground">
            Failed to load projects:
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative">
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm pt-8 pb-8 lg:pt-16 lg:pb-12 flex items-start justify-between">
        <h2 className="text-5xl font-bold tracking-tighter lowercase sm:text-6xl lg:text-7xl">
          projects
        </h2>
        <ThemeToggle />
      </div>
      <div className="pb-16">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
