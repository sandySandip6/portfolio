"use client";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise"
    >
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 animate-pulse-glow pointer-events-none"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/3 -right-24 w-[450px] h-[450px] rounded-full opacity-15 animate-float pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(70px)",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-main relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="flex items-center gap-2 text-sm text-cyan-400 font-mono tracking-wide">
            <Sparkles size={14} />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Sandip Budhathoki</span>
          <span className="text-slate-500"> —</span> 
          <br />
          I build digital products that{" "}
          <span className="text-slate-400">people love.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
        >
          Full-stack developer specializing in React, Next.js, and Node.js. I turn complex ideas into
          fast, beautiful, and scalable web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <Button href="#projects" variant="primary" className="gap-2 glow">
            View My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href="#contact" variant="secondary">
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-2 mt-10"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium text-slate-400 rounded-full border border-white/8 bg-white/3"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
