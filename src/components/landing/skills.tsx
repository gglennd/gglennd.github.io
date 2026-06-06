"use client";

import { RiCodeLine, RiFlashlightFill, RiPaletteLine, RiRocketLine } from "@remixicon/react";

import { AnimatedGroup } from "@/components/motions/animated-group";

const skills = [
  {
    category: "Frontend",
    icon: RiCodeLine,
    items: ["React", "TypeScript", "TailwindCSS", "Vite"],
  },
  {
    category: "UI/UX",
    icon: RiPaletteLine,
    items: ["Figma", "Responsive Design", "Accessibility", "Animations"],
  },
  {
    category: "Performance",
    icon: RiFlashlightFill,
    items: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "SSR/SSG"],
  },
  {
    category: "Tools",
    icon: RiRocketLine,
    items: ["Git", "ESLint", "Prettier", "Testing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-subtle opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 blob-primary opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 blob-secondary opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedGroup preset="slide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills & Expertise</h2>
        </AnimatedGroup>
        <AnimatedGroup preset="fade">
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Technologies and practices I use to build modern web applications
          </p>
        </AnimatedGroup>
        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(skill => (
            <div
              key={skill.category}
              className="group p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
