"use client";

import { RiArrowRightUpLine } from "@remixicon/react";

import { AnimatedGroup } from "@/components/motions/animated-group";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A beautiful web application built with React and TailwindCSS. Features include real-time data visualization and user authentication.",
    tags: ["React", "TypeScript", "TailwindCSS", "API"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    description:
      "E-commerce platform with a focus on performance and user experience. Includes shopping cart, checkout flow, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Project Three",
    description:
      "Real-time collaboration tool for remote teams. Features include live document editing, video calls, and team chat.",
    tags: ["React", "WebSockets", "Firebase", "WebRTC"],
    demo: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 bg-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern-sm opacity-[0.02] dark:opacity-[0.01] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedGroup preset="slide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        </AnimatedGroup>
        <AnimatedGroup preset="fade">
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one taught me
            something new about building great web experiences.
          </p>
        </AnimatedGroup>
        <AnimatedGroup preset="zoom" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex-1 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <RiArrowRightUpLine size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 relative z-10">
                {project.demo && (
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
