"use client";
import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <motion.section
      className={`mb-10 ${className ?? ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-4">
        <h3 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}


