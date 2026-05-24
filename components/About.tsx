"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Globe, Zap, Award } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const stats = [
  { icon: Zap, value: "5+", label: "Years Experience" },
  { icon: Globe, value: "40+", label: "Projects Shipped" },
  { icon: Coffee, value: "∞", label: "Coffees Consumed" },
  { icon: Award, value: "12", label: "Happy Clients" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="about" alt>
      <div className="container-main" ref={ref}>
        <SectionHeader
          number="01"
          label="About"
          accent="cyan"
          inView={inView}
          title={
            <>
              Crafting digital <span className="gradient-text">experiences</span> that matter
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative max-w-md mx-auto w-full"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-3xl border border-cyan-400/10" />
              <div className="absolute inset-4 rounded-3xl border border-violet-400/10" />

              <div className="absolute inset-8 rounded-2xl glass-card overflow-hidden flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div
                    className="absolute inset-0 animate-gradient"
                    style={{
                      background: "linear-gradient(135deg, #0d1117, #1a0533, #0a2040, #0d1117)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white font-display"
                        style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
                        aria-label="Sandip Budhathoki initials"
                      >
                        AR
                      </div>
                      <p className="text-slate-300 text-sm font-medium">Sandip Budhathoki</p>
                      <p className="text-cyan-400 text-xs mt-1">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-2 sm:-right-4 glass px-4 py-2.5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-slate-300">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;m a full-stack developer with 5+ years of experience building everything from
                scrappy MVPs to enterprise-scale platforms. Based in San Francisco, I specialize
                in the modern JavaScript ecosystem.
              </p>
              <p>
                My approach combines strong engineering fundamentals with a genuine love for design —
                I believe great software is both technically solid and a pleasure to use.
              </p>
              <p>
                When I&apos;m not shipping code, I&apos;m contributing to open source, writing technical
                articles, or exploring the intersection of AI and UX.
              </p>
            </div>

            <Button href="/resume.pdf" variant="secondary" className="gap-2">
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-20"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="glass-card p-5 sm:p-6 text-center group hover:border-cyan-400/20 transition-colors"
            >
              <Icon size={22} className="text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text mb-1">{value}</div>
              <div className="text-xs text-slate-500 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
