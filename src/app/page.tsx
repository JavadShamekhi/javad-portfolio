import Link from "next/link"
import AnimatedContainer from "@/components/AnimatedContainer"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import ContactForm from "@/components/ContactForm"

export default function HomePage() {
	return (
			<>
				{/* 1. Modern Hero Section */}
				<section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white dark:bg-gray-950">
					{/* Background Gradients */}
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

					<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
						<AnimatedContainer className="flex flex-col items-center">
							<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
								Available for hire
							</div>

							<h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-space">
								Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Javad</span>
							</h1>

							<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
								Fullstack developer specializing in <strong className="text-gray-900 dark:text-white">Next.js</strong> and <strong className="text-gray-900 dark:text-white">Spring Boot</strong>. I build scalable backends and beautiful frontends.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/projects" className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
									View Work
								</Link>
								<Link href="/contact" className="px-8 py-3.5 rounded-full font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
									Contact Me
								</Link>
							</div>
						</AnimatedContainer>
					</div>
				</section>

				{/* Main Content Container */}
				<div className="max-w-5xl mx-auto px-6 py-12 space-y-24">

					<Section id="about" title="About" subtitle="Who I am and what I do">
						<div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400">
							<p>
								Hi! My name is Javad. I’m learning programming and building projects in
								<span className="font-semibold text-gray-900 dark:text-white"> Java (Spring Boot), Next.js, and databases like PostgreSQL/MySQL.</span>
							</p>
							<p>
								I love backend development and I’m working on fullstack apps that combine frontend, backend, and databases.
							</p>
						</div>
					</Section>

					<Section id="projects" title="Featured Projects" subtitle="Selected work">
						<div className="grid md:grid-cols-2 gap-6">
							{[
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

					<Section id="blog" title="Latest Writing" subtitle="Thoughts on code and tech">
						<div className="grid md:grid-cols-2 gap-6">
							{[
								{ slug: 'hello-world', title: "Hello World", excerpt: "My very first blog post!", date: "2025-09-21", tags: ["Intro"] },
								{ slug: 'nextjs-is-awesome', title: "Next.js is Awesome", excerpt: "Why Next.js is great for fullstack apps.", date: "2025-09-22", tags: ["Next.js"] },
							].map(post => (
									<Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
										<div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl hover:bg-white dark:hover:bg-gray-900 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-300">
											<div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
												<span>{post.date}</span>
												<span>•</span>
												<span className="text-blue-600 dark:text-blue-400">{post.tags[0]}</span>
											</div>
											<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">{post.title}</h3>
											<p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
										</div>
									</Link>
							))}
						</div>
					</Section>

					<Section id="contact" title="Get in Touch" subtitle="Let's work together">
						<div className="bg-blue-100/50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl">
							<ContactForm />
						</div>
					</Section>
				</div>
			</>
	)
}