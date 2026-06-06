"use client";

import { RiCodeLine, RiPaletteLine, RiRocketLine } from "@remixicon/react";

import { AnimatedGroup } from "@/components/motions/animated-group";

const skillCategories = [
  {
    category: "Core",
    icon: RiCodeLine,
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks",
    icon: RiRocketLine,
    skills: ["React", "Next.js", "Vue.js"],
  },
  {
    category: "Styling",
    icon: RiPaletteLine,
    skills: ["TailwindCSS", "SCSS", "CSS Modules"],
  },
  {
    category: "Tools",
    icon: RiCodeLine,
    skills: ["Git", "Figma", "Vercel", "VS Code"],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Turning ideas into interactive reality
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <AnimatedGroup preset="slide">
              <h3 className="text-xl font-semibold">
                I build accessible, performant web experiences that delight users
              </h3>
            </AnimatedGroup>

            <AnimatedGroup preset="fade" className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm Glenn—a frontend developer with a passion for creating
                intuitive, delightful user experiences. I bridge the gap between
                design and engineering, building products that look great and
                work even better.
              </p>
              <p>
                My journey started when I realized I wanted to bring ideas to
                life in the browser—seeing code transform into something people
                interact with daily.
              </p>
              <p>
                I believe great user experiences don't happen by accident. They
                require careful attention to detail, deep understanding of user
                needs, and the technical skill to implement complex interactions
                smoothly. That's where I thrive.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm always eager to collaborate on
                projects that push the boundaries of what's possible on the web.
              </p>
            </AnimatedGroup>
          </div>

          {/* Right Column - Skills */}
          <div>
            <AnimatedGroup preset="slide">
              <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
            </AnimatedGroup>
            <AnimatedGroup preset="blur-slide" className="grid sm:grid-cols-2 gap-4">
              {skillCategories.map(cat => (
                <div
                  key={cat.category}
                  className="p-5 rounded-xl border bg-card text-card-foreground hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <cat.icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
