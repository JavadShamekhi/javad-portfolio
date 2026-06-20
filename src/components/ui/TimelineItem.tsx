"use client";
import React from "react";
import {motion} from "framer-motion";

type TimelineItemProps = {
	title: string;
	org?: string;
	period?: string;
	description?: string;
	bullets?: string[];
};

export default function TimelineItem({title, org, period, description, bullets}: TimelineItemProps) {
	return (
			<motion.li
					className="relative ps-6"
					initial={{opacity: 0, y: 12}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: "-100px"}}
					transition={{duration: 0.4, ease: "easeOut"}}
			>
				<span className="absolute start-1 top-2 bg-blue-600 dark:bg-blue-500 w-3 h-3 rounded-full"></span>
				<div className="flex flex-wrap items-baseline gap-x-2">
					<h4 className="font-semibold text-lg">{title}</h4>
					{org ? <span className="text-gray-600 dark:text-gray-300">• {org}</span> : null}
					{period ? <span className="ms-auto text-sm text-gray-500 dark:text-gray-400">{period}</span> : null}
				</div>
				{description ? <p className="text-gray-700 dark:text-gray-300 mt-1">{description}</p> : null}
				{bullets && bullets.length > 0 ? (
						<ul className="list-disc ms-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
							{bullets.map((b, i) => (
									<li key={i}>{b}</li>
							))}
						</ul>
				) : null}
			</motion.li>
	);
}


