"use client";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectCardProps = {
	title: string;
	description: string;
	tech: string[];
	repoUrl?: string;
	demoUrl?: string;
};

export default function ProjectCard({ title, description, tech, repoUrl, demoUrl }: ProjectCardProps) {
	return (
			<motion.div
					className="group flex flex-col justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors duration-300 hover:shadow-xl hover:shadow-blue-500/10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
			>
				<div>
					<h4 className="text-xl font-bold mb-2 font-space text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
						{title}
					</h4>
					<p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
						{description}
					</p>
					<div className="flex flex-wrap gap-2 mb-6">
						{tech.map((t) => (
								<span key={t} className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700">
                {t}
            </span>
						))}
					</div>
				</div>

				<div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
					{repoUrl ? (
							<a href={repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
								<FaGithub /> Source
							</a>
					) : null}
					{demoUrl ? (
							<a href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
								<FaExternalLinkAlt size={12} /> Live Demo
							</a>
					) : null}
				</div>
			</motion.div>
	);
}