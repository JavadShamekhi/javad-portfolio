import {FaBriefcase, FaGraduationCap, FaTools} from "react-icons/fa";
import Section from "@/components/ui/Section";
import TimelineItem from "@/components/ui/TimelineItem";
import SkillBadge from "@/components/ui/SkillBadge";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import {getDictionary} from "@/lib/i18n/getDictionary";
import {experience} from "@/lib/data/experience";
import {education} from "@/lib/data/education";
import {projects} from "@/lib/data/projects";
import type {Locale} from "@/lib/i18n/config";
import type {Metadata} from "next";
import BackButton from "@/components/ui/BackButton";

const skills = [
	"Next.js", "TypeScript", "Tailwind CSS", "React", "ReactQuery", "MUI", "Ant Design",
	"Responsive Design", "REST API", "Neon Database", "Auth", "JWT", "GoLang", "Java",
	"Spring Boot", "SQL", "PostgreSQL", "MySQL", "Redis"
];

export async function generateMetadata({params}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const {locale} = await params;
	const dict = await getDictionary(locale as Locale);
	return {
		title: dict.resumePage.metaTitle,
	};
}

export default async function ResumePage({params}: {
	params: Promise<{ locale: string }>;
}) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);
	const r = dict.resumePage;

	return (
			<AnimatedContainer className="max-w-5xl mx-auto">
				<BackButton locale={typedLocale} label={dict.common.back}/>
				<div className="text-center mb-10">
					<h2 className="text-4xl font-bold">{r.title}</h2>
					<p className="text-gray-600 dark:text-gray-300 mt-2">{r.subtitle}</p>
					<div className="mt-4">
						<a
								href="/pdf/my-cv-javadshamekhi.pdf"
								download
								className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
						>
							{r.downloadPdf}
						</a>
					</div>
				</div>

				<Section title={
					<span className="inline-flex items-center gap-2">
          <FaBriefcase/> {r.experienceTitle}
        </span> as unknown as string
				}>
					<ul className="space-y-6 border-s-2 border-blue-600/60 dark:border-blue-500/60 ps-4">
						{experience.map((exp) => (
								<TimelineItem
										key={exp.id}
										title={exp.title[typedLocale]}
										org={exp.org[typedLocale]}
										period={exp.period[typedLocale]}
										description={exp.description[typedLocale]}
										bullets={exp.bullets[typedLocale]}
								/>
						))}
					</ul>
				</Section>

				<Section title={
					<span className="inline-flex items-center gap-2">
          <FaTools/> {r.skillsTitle}
        </span> as unknown as string
				}>
					<div className="flex flex-wrap gap-2">
						{skills.map((s) => (
								<SkillBadge key={s} label={s}/>
						))}
					</div>
				</Section>

				<Section title={
					<span className="inline-flex items-center gap-2">
          <FaGraduationCap/> {r.educationTitle}
        </span> as unknown as string
				}>
					<ul className="space-y-6 border-s-2 border-blue-600/60 dark:border-blue-500/60 ps-4">
						{education.map((edu) => (
								<TimelineItem
										key={edu.id}
										title={edu.title[typedLocale]}
										org={edu.org[typedLocale]}
										period={edu.period[typedLocale]}
										description={edu.description[typedLocale]}
								/>
						))}
					</ul>
				</Section>

				<Section title={r.projectsTitle}>
					<div className="grid md:grid-cols-2 gap-6">
						{projects.map((p) => (
								<ProjectCard
										key={p.id}
										title={p.title[typedLocale]}
										description={p.description[typedLocale]}
										tech={p.tech}
										repoUrl={p.repoUrl}
										demoUrl={p.demoUrl}
								/>
						))}
					</div>
				</Section>
			</AnimatedContainer>
	)
}