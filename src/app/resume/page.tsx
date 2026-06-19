import {FaBriefcase, FaGraduationCap, FaTools} from "react-icons/fa";
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import AnimatedContainer from "@/components/AnimatedContainer";

export const metadata = {
	title: "Resume - My Resume and Experiences",
}


export default function ResumePage() {
	const skills = [
		"Next.js", "TypeScript", "Tailwind CSS", "React", "ReactQuery", "MUI", "Ant Design", "Responsive Design", "REST API", "Neon Database", "Auth", "JWT", "GoLang", "Java", "Spring Boot", "SQL", "PostgreSQL", "MySQL", "Redis"];

	const projects = [
		{
			title: "Gold Store",
			description:
					"E-commerce platform for gold and jewelry with product listing, cart system, and admin features.",
			tech: ["Next.js", "TypeScript", "Tailwind", "REST API", "PostgreSQL", "Neon Database", "Auth", "JWT", "DarkMode", "Language Switcher"],
			repoUrl: "https://github.com/JavadShamekhi/gold-store",
			demoUrl: "https://zarringoldstore.ir",
		},
		{
			title: "Portfolio Website",
			description:
					"Personal portfolio showcasing projects, skills, and contact system with email integration.",
			tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Resend", "DarkMode"],
			repoUrl: "https://github.com/JavadShamekhi/javad-portfolio",
			demoUrl: "https://javadshamekhi.ir",
		},
	];

	return (
			<AnimatedContainer className="max-w-5xl mx-auto">
				<div className="text-center mb-10">
					<h2 className="text-4xl font-bold">My Resume</h2>
					<p className="text-gray-600 dark:text-gray-300 mt-2">Frontend Developer | React.js • Next.js • TypeScript</p>
					<div className="mt-4">
						<a
								href="/pdf/JavadShamekhi-cv.pdf"
								download
								className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
						>
							Download PDF
						</a>
					</div>
				</div>

				<Section title={<span
						className="inline-flex items-center gap-2"><FaBriefcase/> Experience</span> as unknown as string}>
					<ul className="space-y-6 border-l-2 border-blue-600/60 dark:border-blue-500/60 pl-4">
						<TimelineItem
								title="ERP Software Support & Database Specialist"
								org="ERP Solutions Company, at Ava Samaneh Mandegar, Karaj"
								period="2022 – 2023"
								description="Worked on enterprise ERP systems with a focus on SQL Server database management, reporting, and system maintenance."
								bullets={["Developed and optimized T-SQL queries, stored procedures, and reports", "Performed SQL Server backup and recovery operations", "Improved database performance and troubleshooting processes", "Provided technical support for ERP users and business operations"]}
						/>
						<TimelineItem
								title="Frontend Developer - React"
								org="Administrative Automation System at Military of Iran, Tehran"
								period="2024–2026"
								description="Developed and maintained web-based administrative automation software using React."
								bullets={["Built responsive and user-friendly interfaces with React", "Implemented reusable components and modern frontend architecture", "Integrated frontend applications with backend APIs", "Collaborated with stakeholders to improve usability and workflow efficiency"]}
						/>
					</ul>
				</Section>

				<Section title={<span className="inline-flex items-center gap-2"><FaTools/> Skills</span> as unknown as string}>
					<div className="flex flex-wrap gap-2">
						{skills.map((s) => (
								<SkillBadge key={s} label={s}/>
						))}
					</div>
				</Section>

				<Section title={<span
						className="inline-flex items-center gap-2"><FaGraduationCap/> Education</span> as unknown as string}>
					<ul className="space-y-6 border-l-2 border-blue-600/60 dark:border-blue-500/60 pl-4">
						<TimelineItem
								title="B.Sc. in Computer Engineering"
								org="BNUT - Babol Noshirvani University of Technology"
								period="2019–2024"
								description="Focused on software engineering, databases, algorithms, and web development."
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