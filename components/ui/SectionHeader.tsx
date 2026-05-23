"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const accentColors = {
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  pink: "text-pink-400",
} as const;

const accentGradients = {
  cyan: "from-cyan-400/30",
  violet: "from-violet-400/30",
  pink: "from-pink-400/30",
} as const;

type SectionHeaderProps = {
  number: string;
  label: string;
  title: ReactNode;
  description?: string;
  accent?: keyof typeof accentColors;
  align?: "left" | "center";
  inView?: boolean;
  className?: string;
};

export default function SectionHeader({
  number,
  label,
  title,
  description,
  accent = "cyan",
  align = "left",
  inView = true,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`section-header ${isCenter ? "text-center" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-4 ${isCenter ? "justify-center" : ""}`}
      >
        <span className={`text-sm font-mono tracking-widest uppercase ${accentColors[accent]}`}>
          {number}. {label}
        </span>
        {!isCenter && (
          <div className={`flex-1 h-px bg-gradient-to-r ${accentGradients[accent]} to-transparent`} />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08 }}
        className={isCenter ? "mt-6" : "mt-8"}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
