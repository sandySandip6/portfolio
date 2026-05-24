"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight,  } from "lucide-react";
// import {SiGithub as Github} from "react-icons/si";
// import Github from "react-icons/si/index.esm.js"; 
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const projects = [
  // {
  //   title: "Nexus Dashboard",
  //   description:
  //     "A real-time analytics dashboard for SaaS companies. Features live data streaming, customizable widgets, and role-based access control.",
  //   tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
  //   color: "#6ee7f7",
  //   gradient: "from-cyan-500/20 to-blue-500/10",
  //   featured: true,
  //   github: "https://github.com",
  //   live: "https://example.com",
  // },
  {
    title: "Yulsa Advisor Pvt. Ltd.",
    description:
      "Full-featured static and dynamic website for a financial advisory company.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "#a78bfa",
    gradient: "from-violet-500/20 to-purple-500/10",
    featured: true,
    github: "https://github.com",
    live: "https://teamyulsa.com",
  },
  {
    title: "Bill Splitting System",
    description:
      "A bill splitting system for a company to split the bill among the members.",
    tags: ["React", "Django", "Next_js", "PostgreSQL", "Github"],
    color: "#f472b6",
    gradient: "from-pink-500/20 to-rose-500/10",
    featured: true,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "The Karnali Updates - News Portal ",
    description:
      "News portal web application with fully dynamic system.",
    tags: ["React", "Next_js", "Django", "Sqlite"],
    color: "#34d399",
    gradient: "from-emerald-500/20 to-teal-500/10",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Pulse — Health App",
    description:
      "Fitness tracking app with workout planning, nutrition logging, and health metrics visualization.",
    tags: ["React Native", "Expo", "GraphQL", "MongoDB"],
    color: "#fb923c",
    gradient: "from-orange-500/20 to-amber-500/10",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DevCollab",
    description:
      "Real-time pair programming platform with code sharing, voice chat, and integrated debugging tools.",
    tags: ["Next.js", "WebRTC", "Socket.io", "Monaco Editor"],
    color: "#60a5fa",
    gradient: "from-blue-500/20 to-indigo-500/10",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <Section id="projects" alt>
      <div
        className="absolute left-0 top-1/3 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6ee7f7 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container-main relative" ref={ref}>
        <SectionHeader
          number="03"
          label="Projects"
          accent="cyan"
          inView={inView}
          title={
            <>
              Featured <span className="gradient-text">Work</span>
            </>
          }
          description="A selection of projects I'm proud of — each one solving a real problem with thoughtful engineering."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {displayed.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.06 }}
              className="group relative glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="h-1 w-full shrink-0"
                style={{ background: `linear-gradient(90deg, ${project.color}60, ${project.color}20)` }}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
                  >
                    <ArrowUpRight size={18} style={{ color: project.color }} />
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <a
                      href={project.github}
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn !w-9 !h-9"
                    >
                      <Github size={15} />
                    </a> */}
                    <a
                      href={project.live}
                      aria-label="Live demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn !w-9 !h-9"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-500 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="secondary" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : `View All ${projects.length} Projects`}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
