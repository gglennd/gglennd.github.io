"use client";

import { RiArrowDownLine, RiGithubFill, RiLinkedinFill, RiMailLine } from "@remixicon/react";

import { TextEffect } from "@/components/motions/text-effect";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-primary absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 animate-blob-float" />
        <div className="blob-secondary absolute top-1/2 right-0 w-[400px] h-[400px] translate-x-1/3 animate-blob-float-delayed" />
        <div className="blob-accent absolute bottom-0 left-1/3 w-[300px] h-[300px] animate-blob-float-slow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-dots-subtle opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <TextEffect
          as="p"
          preset="fade"
          per="word"
          className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
        >
          Hello, I'm
        </TextEffect>

        <TextEffect
          as="h1"
          preset="slide"
          per="word"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Glenn dela Cruz
        </TextEffect>

        <TextEffect
          as="p"
          preset="fade"
          per="word"
          delay={0.2}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          Frontend Developer & UI/UX Enthusiast
        </TextEffect>

        <TextEffect
          as="p"
          preset="fade"
          per="word"
          delay={0.3}
          className="text-lg text-muted-foreground max-w-xl mx-auto"
        >
          I build beautiful, performant web applications with React and
          TailwindCSS. Focused on creating exceptional user experiences.
        </TextEffect>

        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex gap-3 justify-center pt-6">
          <Button variant="ghost" size="icon-lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <RiGithubFill size={20} />
            </a>
          </Button>
          <Button variant="ghost" size="icon-lg" asChild>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <RiLinkedinFill size={20} />
            </a>
          </Button>
          <Button variant="ghost" size="icon-lg" asChild>
            <a href="mailto:hello@example.com" aria-label="Email">
              <RiMailLine size={20} />
            </a>
          </Button>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <RiArrowDownLine size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
