"use client";
import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
	title: React.ReactNode; // Changed from string to ReactNode
	subtitle?: string;
	children: React.ReactNode;
	className?: string;
	id?: string; // Added ID prop for scroll targets
};

export default function Section({ title, subtitle, children, className, id }: SectionProps) {
	return (
			<motion.section
					id={id}
					className={`mb-16 scroll-mt-24 ${className ?? ""}`}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
					<h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 flex items-center gap-3 font-space">
						{title}
					</h3>
					{subtitle ? (
							<p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">{subtitle}</p>
					) : null}
				</div>
				{children}
			</motion.section>
	);
}