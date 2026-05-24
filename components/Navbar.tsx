"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";

const links = ["About", "Skills", "Projects", "Experience", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3 shadow-lg shadow-black/20" : "py-4 md:py-5 bg-transparent"
          }`}
      >
        <div className="container-main flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <Code2 size={17} className="text-white" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              Sandip<span className="text-cyan-400">.</span>dev
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="relative block px-3.5 py-2 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  {link}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300 group-hover:w-3/4" />
                </a>
              </li>
            ))}
          </ul>

          <Button href="#contact" variant="primary" className="hidden md:inline-flex !py-2.5 !px-5 text-sm">
            Hire Me
          </Button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden icon-btn !w-10 !h-10 rounded-xl"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[4.5rem] z-40 glass rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
