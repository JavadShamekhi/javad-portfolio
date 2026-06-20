"use client";
import ProjectCard from "@/components/ui/ProjectCard";
import {useMemo, useState} from "react";
import {projects} from "@/lib/data/projects";
import type {Locale} from "@/lib/i18n/config";
import type {Dictionary} from "@/lib/i18n/types";
import BackButton from "@/components/ui/BackButton";

export default function ProjectsPageClient({locale, dict}: { locale: Locale; dict: Dictionary }) {
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
				<BackButton locale={locale} label={dict.common.back} />
				<h2 className="text-4xl font-bold mb-6 text-center">{dict.projectsPage.title}</h2>
				<div className="flex flex-wrap gap-2 justify-center mb-6">
					{allTags.map((tag) => (
							<button
									key={tag}
									onClick={() => setActiveTag(tag)}
									className={`px-3 py-1 rounded-full border cursor-pointer ${
											activeTag === tag
													? "bg-blue-600 text-white border-blue-600"
													: "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
									}`}
							>
								{tag === "All" ? dict.projectsPage.filterAll : tag}
							</button>
					))}
				</div>
				<div className="grid md:grid-cols-2 gap-6 mb-8">
					{filtered.map((p) => (
							<ProjectCard
									key={p.id}
									title={p.title[locale]}
									description={p.description[locale]}
									tech={p.tech}
									repoUrl={p.repoUrl}
									demoUrl={p.demoUrl}
							/>
					))}
				</div>
			</div>
	);
}