import type { ComponentType } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

export interface TechItem {
  name: string;
}

export interface TechStack {
  category: string;
  items: TechItem[];
}
