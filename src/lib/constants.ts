import { RiFacebookFill, RiGithubFill, RiLinkedinFill, RiMusic2Fill, RiYoutubeFill } from "@remixicon/react";

import type { Project, SocialLink, TechStack } from "@/lib/types";

export const PROFILE = {
  name: "gglennd",
  role: "independent developer",
  description: "i'm glenn. i help startups and businesses build clean, fast web applications. focused on building simple interfaces that solve complex problems. currently taking on freelance projects.",
};

export const TECH_STACK: TechStack[] = [
  {
    category: "frontend",
    items: [
      { name: "react" },
      { name: "tailwindcss" },
      { name: "vite" },
    ],
  },
  {
    category: "backend",
    items: [
      { name: "node.js" },
      { name: "hono" },
      { name: "typescript" },
    ],
  },
  {
    category: "database",
    items: [
      { name: "postgresql" },
      { name: "sqlite" },
      { name: "drizzle-orm" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "github",
    url: "https://github.com/gglennd",
    icon: RiGithubFill,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/gglennd",
    icon: RiLinkedinFill,
  },
  {
    name: "facebook",
    url: "https://facebook.com/gglennd",
    icon: RiFacebookFill,
  },
  {
    name: "tiktok",
    url: "https://tiktok.com/@gglennd",
    icon: RiMusic2Fill,
  },
  {
    name: "youtube",
    url: "https://youtube.com/@gglennd",
    icon: RiYoutubeFill,
  },
];

export const GITHUB_USERNAME = "gglennd";

export const PROJECTS: Project[] = [];

export const EXCLUDE = [
  "gglennd.github.io",
  "gglennd",
];
