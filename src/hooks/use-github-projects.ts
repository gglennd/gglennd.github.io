import { useEffect, useState } from "react";

import type { Project } from "@/lib/types";

import { EXCLUDE, GITHUB_USERNAME } from "@/lib/constants";

const CACHE_KEY = `gh-projects-${GITHUB_USERNAME}`;
const CACHE_DURATION = 1000 * 60 * 60 * 2; // 2 hours

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

interface GitHubReadme {
  content: string;
  encoding: string;
}

interface CacheEntry {
  projects: Project[];
  timestamp: number;
}

function extractFirstParagraph(markdown: string): string {
  const lines = markdown.split("\n");
  const paragraphLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("#") || trimmed.startsWith("---") || trimmed.startsWith("```")) {
      if (paragraphLines.length > 0)
        break;
      continue;
    }

    if (trimmed === "") {
      if (paragraphLines.length > 0)
        break;
      continue;
    }

    if (trimmed.startsWith("![") || trimmed.startsWith("<img"))
      continue;

    paragraphLines.push(trimmed);
  }

  const text = paragraphLines.join(" ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_~`]/g, "");
  return text.length > 200 ? `${text.slice(0, 197)}...` : text;
}

function getCache(): CacheEntry | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw)
      return null;

    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return entry;
  }
  catch {
    return null;
  }
}

function setCache(projects: Project[]): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ projects, timestamp: Date.now() }));
  }
  catch {
    // Storage full or unavailable
  }
}

export function useGitHubProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const cached = getCache();
      if (cached) {
        setProjects(cached.projects);
        setLoading(false);
      }

      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json();
        const filteredRepos = repos.filter(repo => !repo.fork && !repo.archived && !EXCLUDE.includes(repo.name));

        const projectsWithReadmes = await Promise.all(
          filteredRepos.map(async (repo) => {
            let description = repo.description;

            if (!description) {
              try {
                const readmeResponse = await fetch(
                  `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
                  {
                    headers: {
                      Accept: "application/vnd.github.v3+json",
                    },
                  },
                );

                if (readmeResponse.ok) {
                  const readmeData: GitHubReadme = await readmeResponse.json();
                  const decoded = atob(readmeData.content);
                  description = extractFirstParagraph(decoded);
                }
              }
              catch {
                // Skip README fetch error, use fallback
              }
            }

            return {
              id: repo.id.toString(),
              title: repo.name,
              description: description || "No description available",
              imageUrl: undefined,
              link: repo.html_url,
              tags: [
                repo.language ?? "Unknown",
                ...repo.topics.slice(0, 3),
              ].filter(Boolean),
            };
          }),
        );

        setProjects(projectsWithReadmes);
        setCache(projectsWithReadmes);
      }
      catch (err) {
        if (!cached) {
          setError(err instanceof Error ? err.message : "Failed to fetch projects");
        }
      }
      finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
