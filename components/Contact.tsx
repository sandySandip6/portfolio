"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiX, href: "https://twitter.com", label: "X" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="contact" alt>
      <div className="container-main" ref={ref}>
        <SectionHeader
          number="06"
          label="Contact"
          accent="pink"
          inView={inView}
          title={
            <>
              Let&apos;s build something <span className="gradient-text">great</span>
            </>
          }
          description="Have a project in mind or just want to say hello? Drop me a message — I typically respond within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-white mb-2">Let&apos;s talk</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                I&apos;m open to freelance projects, full-time roles, and interesting collaborations.
              </p>
              <a
                href="mailto:alex@example.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                alex@example.com
              </a>
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="icon-btn"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-6 sm:p-8 space-y-5"
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={22} className="text-cyan-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">Message sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className="input-field" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full sm:w-auto gap-2">
                  Send Message
                  <Send size={16} />
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
