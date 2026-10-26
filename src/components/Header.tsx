import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeaderProps {
  onOpenResume?: () => void;
}

export function Header({ onOpenResume }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Training", href: "#training" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-3.5"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Professional Engineering Logo */}
          <a
            href="#top"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0F172A] text-white flex items-center justify-center font-heading font-bold text-xs tracking-wider shadow-sm">
              {PERSONAL_INFO.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-[#0F172A] leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-[0.14em] text-[#475569] font-heading font-semibold">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#0F172A] transition-colors duration-200 relative py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-[0.14em] text-[#0F172A] bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#475569]" />
                <span>Resume / CV</span>
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-[0.14em] bg-[#0F172A] text-white hover:bg-slate-800 transition-all shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 animate-fade-in">
          <nav className="flex flex-col gap-4 overflow-y-auto">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#64748B] font-mono">
              // CHAPTERS
            </span>
            {navLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-heading font-bold text-[#0F172A] hover:text-[#475569] transition-colors flex items-center justify-between py-1"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#94A3B8] font-mono font-normal">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white border border-slate-200 text-[#0F172A] font-heading text-xs font-semibold uppercase tracking-[0.14em]"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0F172A] text-white font-heading text-xs font-semibold uppercase tracking-[0.14em]"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}