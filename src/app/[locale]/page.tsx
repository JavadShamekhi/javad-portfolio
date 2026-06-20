import Link from "next/link"
import AnimatedContainer from "@/components/ui/AnimatedContainer"
import Section from "@/components/ui/Section"
import ProjectCard from "@/components/ui/ProjectCard"
import ContactForm from "@/components/ui/ContactForm"
import {FaBriefcase} from "react-icons/fa";
import TimelineItem from "@/components/ui/TimelineItem";
import Image from "next/image";
import {Locale} from "@/lib/i18n/config";
import {getDictionary} from "@/lib/i18n/getDictionary";

export default async function HomePage({
	                                       params,
                                       }: { params: Promise<{ locale: Locale }>; }) {
	const {locale} = await params;
	const typedLocale = locale as Locale;
	const dict = await getDictionary(typedLocale);

	return (
			<>
				{/* 1. Modern Hero Section */}
				<section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white dark:bg-gray-950">
					{/* Background Gradients */}
					<div
							className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none"/>

					<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
						<AnimatedContainer className="flex flex-col items-center">
							<div
									className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span
		                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
								{dict.home.available}
							</div>

							<h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-space">
								Hi, I’m <span
									className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Javad</span>
							</h1>

							<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
								Frontend developer specializing in <strong
									className="text-gray-900 dark:text-white">React</strong>,{" "}
								<strong className="text-gray-900 dark:text-white">Next.js</strong>, and{" "}
								<strong className="text-gray-900 dark:text-white">TypeScript</strong>. I build modern, responsive, and
								user-friendly web applications with clean and scalable UI architecture.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/projects"
								      className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
									View Work
								</Link>
								<Link href="/contact"
								      className="px-8 py-3.5 rounded-full font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 transition-all">
									Contact Me
								</Link>
							</div>
						</AnimatedContainer>
					</div>
				</section>

				{/* Main Content Container */}
				<div className="max-w-5xl mx-auto px-6 py-12 space-y-24">

					<Section id="about" title={<span
							className="inline-flex items-center gap-2">
						<Image
								src="/images/my-photo.png"
								alt="My iconinc picture"
								width="40"
								height="40"
						/> About</span> as unknown as string}
					         subtitle="Who I am and what I do">
						<div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400">
							<p>
								Hi! I’m <span className="font-semibold text-gray-900 dark:text-white">Javad</span>, a frontend developer
								focused on building modern, responsive, and user-friendly web applications.
							</p>

							<p>
								I have hands-on experience with{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
				React, Next.js, TypeScript, Tailwind CSS, Material UI, and Ant Design
			</span>{" "}
								and I enjoy turning ideas into clean, scalable, and interactive interfaces.
							</p>

							<p>
								I graduated in{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
				Computer Engineering
			</span>{" "}
								and I’m continuously improving my skills in frontend development, UI engineering, and modern web
								technologies.
							</p>

							<p>
								Beyond coding, I’m an active and social person who enjoys{" "}
								<span className="font-semibold text-gray-900 dark:text-white">
				basketball, spending time with friends, and working in team environments
			</span>
								. I like learning new things, improving myself, and growing both technically and personally.
							</p>
						</div>
						<div className="mt-8 text-center">
							<Link href="/about" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
								More about me and my skills →
							</Link>
						</div>
					</Section>

					<Section id="projects" title="Featured Projects" subtitle="Selected work">
						<div className="grid md:grid-cols-2 gap-6">
							{[
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
							].map((p) => (
									<ProjectCard key={p.title} {...p} />
							))}
						</div>
						<div className="mt-8 text-center">
							<Link href="/projects" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
								View all projects →
							</Link>
						</div>
					</Section>
					<Section title={<span
							className="inline-flex items-center gap-2"><FaBriefcase/> Experience</span> as unknown as string}
					         subtitle="You can see my job experiences here"
					         id="experience"
					>
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

						<div className="mt-8 text-center">
							<Link href="/resume" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
								View full resume →
							</Link>
						</div>
					</Section>


					<Section id="contact" title="Get in Touch" subtitle="Let's work together">
						<div className="bg-blue-100/50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl">
							<ContactForm/>
						</div>
					</Section>
				</div>
			</>
	)
}