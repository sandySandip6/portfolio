"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const experiences = [
  {
    role: "Web Developer & Designer",
    company: "Yulsa Advisor Pvt. Ltd.",
    location: "Koteshwor, Kathmandu",
    type: "Part-time",
    color: "#6ee7f7",
    description:
      "Build and maintain the company's website and still maintaining the company's website.",
    highlights: [
      "Build and maintain the company's website using HTML, CSS, and JavaScript",
      "Used PHP and MySQL for the backend",
      "Static website with simple admin panel",
      "Currently hosting on Cpanel",
    ],
  },
  {
    role: "Software Engineer",
    company: "Cloco Nepal Inc. Pvt. Ltd.",
    period: "2025 June - 2025 August",
    location: "Lalitpur, Nepal",
    type: "Internship",
    color: "#a78bfa",
    description:
      "Worked as a software engineer in the company's web development team. Built the company's Web Application using  Django, React, Next.js, Typescripts, Tailwind CSS, and PostgreSQL.",
    highlights: [
      "Used Django for the backend and React and Next.js for the frontend",
      "Developed a bill splitting system for the company's Web Application",
      "Used PostgreSQL for the database",
      "Git and GitHub for version control",
    ],
  },
  {
    role: "Coding Instructor",
    company: "Mero Coding Class.",
    period: "October 2025 - April 2026",
    location: "Sankhamul Kathmandu.",
    type: "Full-time",
    color: "#f472b6",
    description:
      "Joined as a full time coding instructor. Utilized my knowledge to educate the students and make them understand about the programming and coding.",
    highlights: [
      "Works as a tutor, Taught multiple student and helps them to give hands on experience ",
      "Built many small projects in python and robotics.",
    ],
  },
  // {
  //   role: "Junior Developer",
  //   company: "TechCraft Studio",
  //   period: "2018 – 2019",
  //   location: "Remote",
  //   type: "Full-time",
  //   color: "#34d399",
  //   description:
  //     "First professional role — built marketing sites and internal tools. Learned fundamentals of software engineering, version control, and team collaboration.",
  //   highlights: [
  //     "Developed 20+ marketing websites using React and Gatsby",
  //     "Built internal admin dashboard used by 50+ employees",
  //     "Learned Agile/Scrum practices in a fast-moving team",
  //   ],
  // },
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
