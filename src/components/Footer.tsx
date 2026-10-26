import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Overview", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Training", href: "#training" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0F172A] text-slate-200 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand & Monogram */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-heading text-3xl font-extrabold text-white tracking-tight">
                P.B.Y.
              </span>
              <span className="h-4 w-px bg-white/20 mx-1" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-slate-400">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
              {PERSONAL_INFO.title}. Designing and delivering resilient full-stack platforms,
              practical AI products, and developer education.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0F172A] border border-white/15 flex items-center justify-center transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0F172A] border border-white/15 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0F172A] border border-white/15 flex items-center justify-center transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0F172A] border border-white/15 flex items-center justify-center transition-all duration-300"
                aria-label="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">
              Chapters
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.16em] text-slate-400 hover:text-white transition-colors duration-200 inline-block font-sans font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Verified Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">
              Direct Inquiries
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2.5 group"
                >
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-white transition-colors flex items-center gap-2.5 group"
                >
                  <Phone className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>{PERSONAL_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-mono">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-slate-300">
                Available for engineering &amp; AI roles
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}