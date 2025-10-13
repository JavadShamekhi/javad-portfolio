import Image from "next/image"
import Link from "next/link"
import AnimatedContainer from "@/components/AnimatedContainer"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import ContactForm from "@/components/ContactForm"

export default function HomePage() {
  return (
    <>
      {/* Hero with background image */}
      <section
        id="home"
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen overflow-hidden flex items-end justify-center pb-20 -mt-6"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/profile.jpg')` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" aria-hidden />

        <div className="relative z-10 text-center text-white px-6">
          <AnimatedContainer className="flex flex-col items-center">
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight flex items-center gap-3">
              Hi, I’m Javad
            </h1>
            <p className="text-lg max-w-2xl">
              Developer passionate about fullstack apps with Next.js and Spring Boot.
            </p>
          </AnimatedContainer>
        </div>
      </section>



      {/* CTAs after hero */}
      <div className="max-w-5xl mx-auto px-6 mt-6 mb-8">
        <div className="flex gap-4">
          <Link href="/resume" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">View Resume</Link>
          <Link href="/blog" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition">Read Blog</Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <section id="about" className="scroll-mt-24">
          <Section title="About" subtitle="Who I am and what I do">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Hi! My name is Javad. I’m learning programming and building projects in
                <span className="font-semibold"> Java (Spring Boot), Next.js, and databases like PostgreSQL/MySQL.</span>
              </p>
              <p>
                I love backend development and I’m working on fullstack apps that combine frontend, backend, and databases.
              </p>
              <p>
                This site is where I share my <span className="font-semibold">resume, projects, and blog posts</span>.
              </p>
            </div>
          </Section>
        </section>

        <section id="projects" className="scroll-mt-24">
          <Section title="Projects" subtitle="Selected work">
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
            <div className="mt-4">
              <Link href="/projects" className="text-blue-600 hover:underline">See all projects →</Link>
            </div>
          </Section>
        </section>

        <section id="blog" className="scroll-mt-24">
          <Section title="Blog" subtitle="Latest posts">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { slug: 'hello-world', title: "Hello World", excerpt: "My very first blog post!", date: "2025-09-21", tags: ["Intro"] },
                { slug: 'nextjs-is-awesome', title: "Next.js is Awesome", excerpt: "Why Next.js is great for fullstack apps.", date: "2025-09-22", tags: ["Next.js", "Fullstack"] },
              ].map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-600">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                      <div>{post.date}</div>
                      <div>{post.tags.join(", ")}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/blog" className="text-blue-600 hover:underline">See all posts →</Link>
            </div>
          </Section>
        </section>

        <section id="contact" className="scroll-mt-24">
          <Section title="Contact" subtitle="Say hello">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <ContactForm />
            </div>
          </Section>
        </section>
      </div>
    </>
  )
}