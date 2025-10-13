"use client";
import ProjectCard from "@/components/ProjectCard";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Task Manager API",
    description: "Spring Boot REST API with JWT auth, PostgreSQL, and Redis caching.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JWT"],
    repoUrl: "https://github.com/JavadShamekhi/task-manager-api",
  },
  {
    title: "Project Planner",
    description: "Next.js app for planning projects with drag-and-drop and Markdown notes.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/JavadShamekhi/project-planner",
  },
];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tech.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 rounded-full border ${
              activeTag === tag
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}


