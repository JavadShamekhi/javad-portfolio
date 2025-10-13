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
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg shadow hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <h4 className="text-xl font-semibold mb-1">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {repoUrl ? (
          <a href={repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline">
            <FaGithub /> Code
          </a>
        ) : null}
        {demoUrl ? (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline">
            <FaExternalLinkAlt /> Demo
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}


