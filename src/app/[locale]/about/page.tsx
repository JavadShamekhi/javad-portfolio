import AnimatedContainer from "@/components/ui/AnimatedContainer"

export const metadata = {
	title: "About - My Portfolio",
}

export default function AboutPage() {
	return (
			<AnimatedContainer className="max-w-3xl mx-auto mb-5">
				<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
					About Me
				</h2>

				<p className="mb-4 text-gray-600 dark:text-gray-400">
					Hi! I’m <span className="font-semibold text-gray-900 dark:text-white">Javad</span>, a frontend developer
					passionate about building modern, responsive, and user-friendly web applications.
				</p>

				<p className="mb-4 text-gray-600 dark:text-gray-400">
					I have hands-on experience working with{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
					React, Next.js, TypeScript, Tailwind CSS, Material UI, and Ant Design
				</span>
					, and I enjoy turning ideas into clean and scalable interfaces.
				</p>

				<p className="mb-4 text-gray-600 dark:text-gray-400">
					I graduated in{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
					Computer Engineering
				</span>{" "}
					and I continue improving my skills in frontend development, UI engineering, and modern web technologies.
				</p>

				<p className="mb-6 text-gray-600 dark:text-gray-400">
					I’ve built and deployed real-world projects such as an e-commerce platform and a personal portfolio website,
					working with REST APIs, databases, and full frontend architecture.
				</p>

				{/* SKILLS SECTION */}
				<div className="mt-8">
					<h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
						Skills
					</h3>

					<div className="space-y-4 text-gray-600 dark:text-gray-400">

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">Core Frontend</p>
							<p>React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">Styling & UI</p>
							<p>Tailwind CSS, Material UI, Ant Design, Responsive Design</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">API & Data</p>
							<p>REST API integration, React Hooks, Context API</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">Tools</p>
							<p>Git, GitHub, VS Code, Postman, Vercel, Figma</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">Backend Knowledge</p>
							<p>Basic Node.js, Express, MySQL, PostgreSQL</p>
						</div>

						<div>
							<p className="font-semibold text-gray-900 dark:text-white">Soft Skills</p>
							<p>Problem solving, teamwork, communication, adaptability</p>
						</div>

					</div>
				</div>

				{/* PERSONAL NOTE */}
				<p className="mt-8 text-gray-600 dark:text-gray-400">
					Beyond coding, I’m an active and curious person who enjoys{" "}
					<span className="font-semibold text-gray-900 dark:text-white">
					basketball, teamwork, and spending time with friends
				</span>
					. I’m motivated to learn, improve myself, and contribute to strong and creative teams.
				</p>
			</AnimatedContainer>
	)
}