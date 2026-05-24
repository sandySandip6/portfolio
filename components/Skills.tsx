"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  {
    title: "Frontend",
    color: "#6ee7f7",
    skills: [
      { name: "React / Next.js", level: 40 },
      { name: "TypeScript", level: 30 },
      { name: "Tailwind CSS", level: 50 },
      // { name: "Framer Motion", level: 85 },
      // { name: "Vue.js", level: 78 },
    ],
  },
  {
    title: "Backend",
    color: "#a78bfa",
    skills: [
      // { name: "Node.js / Express", level: 90 },
      { name: "PostgreSQL", level: 20 },
      // { name: "GraphQL", level: 82 },
      { name: "Redis", level: 30 },
      { name: "Python / Django", level: 50 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#f472b6",
    skills: [
      { name: "Docker / K8s", level: 20 },
      // { name: "AWS / GCP", level: 78 },
      { name: "Cpanel", level: 50 },
      { name: "CI/CD (GitHub Actions)", level: 30},
      // { name: "Terraform", level: 65 },
      { name: "Linux / Bash", level: 30 },
    ],
  },
];

const techBadges = [
  "Python", "Django", "React", "Next.js", "TypeScript", "PostgreSQL",
  "Docker", "Tailwind", "Redis", "Figma", "Git", "Cpanel",
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center gap-4">
        <span className="text-sm text-slate-300">{name}</span>
        <span className="text-xs text-slate-500 font-mono tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="skills">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container-main relative" ref={ref}>
        <SectionHeader
          number="02"
          label="Skills"
          accent="violet"
          inView={inView}
          title={
            <>
              My <span className="gradient-text">Toolkit</span>
            </>
          }
          description="Technologies and tools I use to bring ideas to life — from design systems to distributed architectures."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + ci * 0.08 }}
              className="glass-card p-6 h-full"
            >
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={0.25 + ci * 0.08 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-500 text-xs sm:text-sm text-center mb-5 tracking-widest uppercase">
            Also proficient in
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.45 + i * 0.03 }}
                className="px-3.5 py-1.5 rounded-full text-sm text-slate-400 bg-white/[0.04] border border-white/10 hover:text-white hover:border-white/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
