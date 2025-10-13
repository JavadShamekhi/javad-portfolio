import { FaBriefcase, FaGraduationCap, FaTools } from "react-icons/fa";
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function ResumePage() {
    const skills = [
        "Java", "Spring Boot", "SQL", "PostgreSQL", "MySQL", "Redis", "Next.js", "TypeScript", "Tailwind CSS"
    ];

    const projects = [
        {
            title: "Task Manager API",
            description: "Spring Boot REST API with JWT auth, PostgreSQL, and Redis caching.",
            tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JWT"],
            repoUrl: "https://github.com/JavadShamekhi/task-manager-api"
        },
        {
            title: "Project Planner",
            description: "Next.js app for planning projects with drag-and-drop and Markdown notes.",
            tech: ["Next.js", "TypeScript", "Tailwind"],
            repoUrl: "https://github.com/JavadShamekhi/project-planner"
        }
    ];

    return (
        <AnimatedContainer className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">My Resume</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Fullstack Developer • Next.js & Spring Boot</p>
                <div className="mt-4">
                    <a
                        href="/api/resume/pdf"
                        download
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Download PDF
                    </a>
                </div>
            </div>

            <Section title={<span className="inline-flex items-center gap-2"><FaBriefcase /> Experience</span> as unknown as string}>
                <ul className="space-y-6 border-l-2 border-blue-600/60 dark:border-blue-500/60 pl-4">
                    <TimelineItem
                        title="Intern - ERP Company"
                        org="Backoffice Systems"
                        period="2024"
                        description="Worked on SQL reporting, forms, and performance tuning for internal tools."
                        bullets={[
                            "Built complex SQL queries and views for operational dashboards",
                            "Optimized slow queries reducing median latency by ~40%",
                            "Collaborated with seniors to improve data integrity"
                        ]}
                    />
                    <TimelineItem
                        title="Personal Projects"
                        org="Spring Boot & Next.js"
                        period="2024–2025"
                        description="Designed and shipped fullstack apps for task and project management."
                        bullets={[
                            "Implemented REST APIs with authentication and role-based access",
                            "Built responsive UIs with Next.js, TypeScript, Tailwind",
                            "Used PostgreSQL and Redis for persistence and caching"
                        ]}
                    />
                </ul>
            </Section>

            <Section title={<span className="inline-flex items-center gap-2"><FaTools /> Skills</span> as unknown as string}>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                        <SkillBadge key={s} label={s} />
                    ))}
                </div>
            </Section>

            <Section title={<span className="inline-flex items-center gap-2"><FaGraduationCap /> Education</span> as unknown as string}>
                <ul className="space-y-6 border-l-2 border-blue-600/60 dark:border-blue-500/60 pl-4">
                    <TimelineItem
                        title="B.Sc. Computer Science"
                        org="Your University"
                        period="2019–2023"
                        description="Core CS curriculum with focus on software engineering and databases."
                    />
                </ul>
            </Section>

            <Section title="Projects">
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </Section>
        </AnimatedContainer>
    )
}