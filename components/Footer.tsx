import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

const links = ["About", "Skills", "Projects", "Experience", "Testimonials", "Contact"];

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiX, href: "https://twitter.com", label: "X" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 sm:py-12">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-display text-base font-bold text-white">
              Sandip<span className="text-cyan-400">.</span>dev
            </span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="icon-btn !w-9 !h-9"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-slate-600">
          © {year} Sandip Budhathoki. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
