"use client"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

type ProjectCardProps = {
	title: string
	description: string
	tech: string[]
	repoUrl?: string
	demoUrl?: string
}

export default function ProjectCard({
	                                    title,
	                                    description,
	                                    tech,
	                                    repoUrl,
	                                    demoUrl,
                                    }: ProjectCardProps) {
	return (
			<motion.div
					className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
			>
				{/* Glow effect */}
				<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl" />

				<div className="relative z-10">
					<h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
						{title}
					</h3>

					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						{description}
					</p>

					{/* Tech stack */}
					<div className="flex flex-wrap gap-2 mt-4">
						{tech.map((t) => (
								<span
										key={t}
										className="text-xs px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
								>
							{t}
						</span>
						))}
					</div>
				</div>

				{/* Footer actions */}
				<div className="relative z-10 flex gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
					{repoUrl && (
							<a
									href={repoUrl}
									target="_blank"
									className="flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white transition"
							>
								<FaGithub /> Code
							</a>
					)}

					{demoUrl && (
							<a
									href={demoUrl}
									target="_blank"
									className="flex items-center gap-2 text-sm text-blue-500 hover:underline"
							>
								<FaExternalLinkAlt size={12} /> Live
							</a>
					)}
				</div>
			</motion.div>
	)
}