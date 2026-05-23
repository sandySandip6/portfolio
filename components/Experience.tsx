"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Veritas Labs",
    period: "2022 – Present",
    location: "San Francisco, CA",
    type: "Full-time",
    color: "#6ee7f7",
    description:
      "Leading frontend architecture for a B2B SaaS platform serving 200k+ users. Built a design system from scratch, reducing UI development time by 40%. Mentoring a team of 4 engineers.",
    highlights: [
      "Architected a micro-frontend system reducing bundle size by 52%",
      "Led migration from REST to GraphQL, cutting API calls by 60%",
      "Introduced E2E testing coverage from 0% to 85%",
      "Scaled real-time features to 10,000 concurrent users",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Bloom Agency",
    period: "2020 – 2022",
    location: "Remote",
    type: "Full-time",
    color: "#a78bfa",
    description:
      "Delivered 15+ client projects across e-commerce, fintech, and healthtech verticals. Worked closely with design and product teams to ship pixel-perfect interfaces.",
    highlights: [
      "Built a headless commerce platform generating $2M+ GMV",
      "Developed custom CMS integrations for 8 enterprise clients",
      "Improved Core Web Vitals scores to top 10% for all projects",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Stackr Inc.",
    period: "2019 – 2020",
    location: "Austin, TX",
    type: "Contract",
    color: "#f472b6",
    description:
      "Joined as a founding engineer to build the consumer-facing product. Wore many hats — frontend, product, and some backend work in a fast-paced startup environment.",
    highlights: [
      "Built MVP in 6 weeks that secured Series A funding",
      "Created data visualization system for complex financial data",
      "Implemented OAuth and multi-tenant authentication",
      "Shipped iOS PWA with native-feeling performance",
    ],
  },
  {
    role: "Junior Developer",
    company: "TechCraft Studio",
    period: "2018 – 2019",
    location: "Remote",
    type: "Full-time",
    color: "#34d399",
    description:
      "First professional role — built marketing sites and internal tools. Learned fundamentals of software engineering, version control, and team collaboration.",
    highlights: [
      "Developed 20+ marketing websites using React and Gatsby",
      "Built internal admin dashboard used by 50+ employees",
      "Learned Agile/Scrum practices in a fast-moving team",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <Section id="experience">
      <div
        className="absolute right-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container-main relative" ref={ref}>
        <SectionHeader
          number="04"
          label="Experience"
          accent="pink"
          inView={inView}
          title={
            <>
              Career <span className="gradient-text">Journey</span>
            </>
          }
        />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-56 xl:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0"
          >
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                type="button"
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-3.5 rounded-xl transition-all duration-200 min-w-[140px] lg:min-w-0 lg:w-full ${
                  active === i
                    ? "glass-card text-white border-white/12"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5 border border-transparent"
                }`}
              >
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: active === i ? exp.color : undefined }}
                >
                  {exp.company}
                </div>
                <div className="text-sm line-clamp-2 hidden lg:block text-slate-400">{exp.role}</div>
              </button>
            ))}
          </motion.div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex-1 glass-card p-6 sm:p-8 min-w-0"
          >
            <div
              className="h-1 w-14 rounded-full mb-6"
              style={{ background: experiences[active].color }}
            />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
              {experiences[active].role}
            </h3>
            <p className="text-base sm:text-lg mb-4" style={{ color: experiences[active].color }}>
              @ {experiences[active].company}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="shrink-0" />
                {experiences[active].period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="shrink-0" />
                {experiences[active].location}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">
                {experiences[active].type}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">{experiences[active].description}</p>

            <ul className="space-y-3">
              {experiences[active].highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: experiences[active].color }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
