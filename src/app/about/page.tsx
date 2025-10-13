import AnimatedContainer from "@/components/AnimatedContainer"
export const metadata = {
    title: "About - My Next.js App",
}

export default function AboutPage() {
    return (
        <AnimatedContainer className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="mb-4 text-gray-700">
                Hi! My name is Javad. I’m learning programming and building projects in
                <span className="font-semibold"> Java (Spring Boot), Next.js, and databases like PostgreSQL/MySQL.</span>
            </p>
            <p className="mb-4 text-gray-700">
                I love backend development and I’m working on fullstack apps that combine
                frontend, backend, and databases.
            </p>
            <p className="text-gray-700">
                This site is where I share my <span className="font-semibold">resume, projects, and blog posts</span>.
            </p>
        </AnimatedContainer>
    )
}