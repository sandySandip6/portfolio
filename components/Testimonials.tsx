"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Veritas Labs",
    avatar: "SC",
    color: "#6ee7f7",
    quote:
      "Alex is the kind of engineer who makes the entire team better. Their attention to performance, code quality, and user experience is unmatched. They rebuilt our frontend architecture in a way that made our codebase 10x more maintainable.",
  },
  {
    name: "Marcus Thompson",
    role: "Founder, Orbit Commerce",
    avatar: "MT",
    color: "#a78bfa",
    quote:
      "I've worked with many developers over the years, and Alex stands out for their ability to take ownership of complex problems end-to-end. They shipped our entire e-commerce platform ahead of schedule.",
  },
  {
    name: "Priya Nair",
    role: "Product Lead at Bloom Agency",
    avatar: "PN",
    color: "#f472b6",
    quote:
      "What sets Alex apart is the combination of strong technical skills and a genuine design sensibility. Our clients consistently praised the polish of what we delivered.",
  },
  {
    name: "James Whitfield",
    role: "Engineering Manager at Stackr",
    avatar: "JW",
    color: "#34d399",
    quote:
      "Alex joined us as a founding engineer and helped us ship our MVP in record time. They balance speed with quality — moving fast without creating technical debt.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <Section id="testimonials" alt className="overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container-main relative max-w-3xl" ref={ref}>
        <SectionHeader
          number="05"
          label="Testimonials"
          accent="violet"
          align="center"
          inView={inView}
          title={
            <>
              What people <span className="gradient-text">say</span>
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-card rounded-2xl p-6 sm:p-10 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-8 right-8 sm:left-12 sm:right-12 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }}
            />

            <Quote size={40} className="mb-5 opacity-20" style={{ color: t.color }} />

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 font-light italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${t.color}60, ${t.color}20)`,
                  border: `1px solid ${t.color}40`,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div className="font-display font-semibold text-white">{t.name}</div>
                <div className="text-sm" style={{ color: t.color }}>
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button type="button" onClick={prev} aria-label="Previous testimonial" className="icon-btn">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="p-1"
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "w-6 h-2" : "w-2 h-2"
                    }`}
                    style={{
                      background: i === current ? t.color : "rgba(255,255,255,0.2)",
                    }}
                  />
                </button>
              ))}
            </div>

            <button type="button" onClick={next} aria-label="Next testimonial" className="icon-btn">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
